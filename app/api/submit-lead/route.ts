import { NextRequest, NextResponse } from 'next/server';

// Lead data interface matching the quiz
interface LeadData {
  name: string;
  email: string;
  phone: string;
  situation?: string;
  urgency?: string;
  propertyType?: string;
  loanAmount?: string;
  equityPosition?: string;
  propertyCondition?: string;
  experience?: string;
  source: string;
  timestamp: string;
}

// Email notification recipients
const NOTIFICATION_EMAILS = ['Tanner@cfmtg.com', 'Zac@cfmtg.com'];

// Big Purple Dot API configuration
const BPD_API_URL = 'https://bigpurpledot.com/api/v1/contacts/vendor_create.json';
const BPD_API_USER = process.env.BIG_PURPLE_DOT_API_USER;
const BPD_API_SECRET = process.env.BIG_PURPLE_DOT_API_SECRET;

// Helper to format quiz answers for notes
function formatQuizAnswers(lead: LeadData): string {
  const answers = [];

  if (lead.situation) answers.push(`Situation: ${lead.situation}`);
  if (lead.urgency) answers.push(`Urgency: ${lead.urgency}`);
  if (lead.propertyType) answers.push(`Property Type: ${lead.propertyType}`);
  if (lead.loanAmount) answers.push(`Loan Amount: ${lead.loanAmount}`);
  if (lead.equityPosition) answers.push(`Equity Position: ${lead.equityPosition}`);
  if (lead.propertyCondition) answers.push(`Property Condition: ${lead.propertyCondition}`);
  if (lead.experience) answers.push(`Experience: ${lead.experience}`);

  return answers.join('\n');
}

// Determine lead priority based on urgency signals
function getLeadTags(lead: LeadData): string[] {
  const tags = ['HARD MONEY', 'Website Lead'];

  // High priority rescue deals
  if (lead.situation === 'balloon-due' || lead.situation === 'foreclosure-threat') {
    tags.push('RESCUE DEAL', 'HOT LEAD', 'URGENT');
  }

  if (lead.situation === 'need-extension') {
    tags.push('EXTENSION NEEDED');
  }

  if (lead.situation === 'need-capital') {
    tags.push('RENOVATION CAPITAL');
  }

  // Urgent timeline
  if (lead.urgency === 'days') {
    tags.push('EMERGENCY', 'URGENT TIMELINE');
  }

  if (lead.urgency === 'weeks') {
    tags.push('URGENT TIMELINE');
  }

  // Property condition
  if (lead.propertyCondition === 'rent-ready') {
    tags.push('DSCR EXIT CANDIDATE');
  }

  // Large deals
  if (lead.loanAmount === 'over-1m') {
    tags.push('LARGE DEAL');
  }

  // First-time investor
  if (lead.experience === 'first') {
    tags.push('NEW INVESTOR');
  }

  // Experienced investor
  if (lead.experience === '10-plus') {
    tags.push('PRO INVESTOR');
  }

  // Tight equity
  if (lead.equityPosition === 'under-10') {
    tags.push('TIGHT EQUITY');
  }

  return tags;
}

async function sendEmailNotification(lead: LeadData): Promise<void> {
  const isRescue = lead.situation === 'balloon-due' ||
                   lead.situation === 'foreclosure-threat' ||
                   lead.urgency === 'days';
  const urgencyLabel = isRescue ? '[URGENT RESCUE] ' : '';

  const emailContent = `
${urgencyLabel}New Hard Money Rescue Lead from savemyhardmoneyloan.com

Contact Information:
- Name: ${lead.name}
- Email: ${lead.email}
- Phone: ${lead.phone}

Quiz Responses:
- Situation: ${lead.situation || 'Not specified'}
- Urgency: ${lead.urgency || 'Not specified'}
- Property Type: ${lead.propertyType || 'Not specified'}
- Loan Amount: ${lead.loanAmount || 'Not specified'}
- Equity Position: ${lead.equityPosition || 'Not specified'}
- Property Condition: ${lead.propertyCondition || 'Not specified'}
- Experience: ${lead.experience || 'Not specified'}

Source: ${lead.source}
Submitted: ${lead.timestamp}
${isRescue ? '\n*** THIS IS A RESCUE DEAL - CONTACT IMMEDIATELY ***' : ''}
`;

  console.log('Email notification content:', emailContent);
  console.log('Would send to:', NOTIFICATION_EMAILS.join(', '));
}

async function sendToBigPurpleDot(lead: LeadData): Promise<void> {
  if (!BPD_API_USER || !BPD_API_SECRET) {
    console.log('Big Purple Dot API not configured, skipping CRM integration');
    return;
  }

  const nameParts = lead.name.trim().split(' ');
  const firstName = nameParts[0] || '';
  const lastName = nameParts.slice(1).join(' ') || '';

  const tags = getLeadTags(lead);
  const notes = formatQuizAnswers(lead);

  // Determine source based on lead type
  let source = 'Save My Hard Money Loan Website';
  if (lead.situation === 'balloon-due' || lead.situation === 'foreclosure-threat') {
    source = 'Save My Hard Money Loan - Rescue Deal';
  }

  const payload = {
    api_user: BPD_API_USER,
    api_secret: BPD_API_SECRET,
    first_name: firstName,
    last_name: lastName,
    email: lead.email,
    phone: lead.phone,
    source: source,
    tags: tags,
    notes: `Hard Money Rescue Inquiry from savemyhardmoneyloan.com\n\nQuiz Responses:\n${notes}\n\nSubmitted: ${lead.timestamp}`,
  };

  try {
    const response = await fetch(BPD_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Big Purple Dot API failed:', response.status, errorText);
      throw new Error(`Big Purple Dot API error: ${response.status}`);
    }

    const result = await response.json();

    if (result.status === 'Duplicate') {
      console.log('Big Purple Dot: Contact already exists with ID:', result.id, '- Email:', lead.email);
    } else if (result.status === 'Success!' || result.status === 'Success') {
      console.log('Big Purple Dot lead created successfully:', result);
    } else {
      console.warn('Big Purple Dot unexpected status:', result);
    }
  } catch (error) {
    console.error('Big Purple Dot API error:', error);
    // Don't throw - we don't want to fail the form submission if CRM fails
  }
}

export async function POST(request: NextRequest) {
  try {
    const lead: LeadData = await request.json();

    // Basic validation
    if (!lead.name || !lead.email || !lead.phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(lead.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Process lead in parallel - send to both email and Big Purple Dot
    await Promise.all([
      sendEmailNotification(lead),
      sendToBigPurpleDot(lead),
    ]);

    // Track conversion event with enhanced data
    const isRescueDeal = lead.situation === 'balloon-due' ||
                         lead.situation === 'foreclosure-threat' ||
                         lead.urgency === 'days';
    console.log('Hard Money Lead conversion tracked:', {
      email: lead.email,
      situation: lead.situation,
      urgency: lead.urgency,
      propertyType: lead.propertyType,
      loanAmount: lead.loanAmount,
      isRescueDeal,
    });

    return NextResponse.json(
      { success: true, message: 'Lead submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Lead submission error:', error);
    return NextResponse.json(
      { error: 'Failed to process lead' },
      { status: 500 }
    );
  }
}
