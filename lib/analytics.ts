// Analytics utility functions for tracking user interactions

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

// Track quiz step completion
export function trackQuizStep(step: number, answer: string) {
  if (typeof window !== 'undefined') {
    // Google Analytics
    window.gtag?.('event', 'quiz_step_completed', {
      event_category: 'Hard Money Quiz',
      event_label: `Step ${step}: ${answer}`,
      step_number: step,
      answer: answer,
    });

    // Facebook Pixel - track progress through quiz
    if (step === 1) {
      window.fbq?.('track', 'InitiateCheckout', {
        content_name: 'Hard Money Rescue Quiz Started',
      });
    }
  }
}

// Track form submission
export function trackFormSubmission(leadData: Record<string, unknown>) {
  if (typeof window !== 'undefined') {
    const isRescue = leadData.situation === 'balloon-due' ||
                     leadData.situation === 'foreclosure-threat' ||
                     leadData.urgency === 'days';

    // Google Analytics
    window.gtag?.('event', 'generate_lead', {
      event_category: 'Hard Money Lead',
      event_label: isRescue ? 'Rescue Deal' : 'Standard Lead',
      value: isRescue ? 500 : 100,
      currency: 'USD',
    });

    // Facebook Pixel
    window.fbq?.('track', 'Lead', {
      content_name: 'Hard Money Rescue Lead',
      content_category: isRescue ? 'Rescue Deal' : 'Standard',
      value: isRescue ? 500 : 100,
      currency: 'USD',
    });
  }
}

// Track phone clicks
export function trackPhoneClick(phoneNumber: string, owner: string) {
  if (typeof window !== 'undefined') {
    window.gtag?.('event', 'phone_call_click', {
      event_category: 'Contact',
      event_label: `${owner}: ${phoneNumber}`,
      phone_number: phoneNumber,
      contact_name: owner,
    });

    window.fbq?.('track', 'Contact', {
      content_name: `Phone Call - ${owner}`,
    });
  }
}

// Track calendar booking
export function trackCalendarBooking(owner: string) {
  if (typeof window !== 'undefined') {
    window.gtag?.('event', 'calendar_booking', {
      event_category: 'Contact',
      event_label: `Calendar Booking - ${owner}`,
    });

    window.fbq?.('track', 'Schedule', {
      content_name: `Calendar Booking - ${owner}`,
    });
  }
}

// Track scroll depth
export function trackScrollDepth(percentage: number) {
  if (typeof window !== 'undefined') {
    window.gtag?.('event', 'scroll_depth', {
      event_category: 'Engagement',
      event_label: `${percentage}%`,
      value: percentage,
    });
  }
}
