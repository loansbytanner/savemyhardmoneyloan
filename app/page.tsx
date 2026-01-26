import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import HardMoneyRescue from '@/components/HardMoneyRescue';
import WhatIsHardMoney from '@/components/WhatIsHardMoney';
import RescueOptions from '@/components/RescueOptions';
import QualifierQuiz from '@/components/QualifierQuiz';
import WhyChooseUs from '@/components/WhyChooseUs';
import MeetTheTeam from '@/components/MeetTheTeam';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

// FAQ Schema for SEO
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What happens if I can\'t pay my hard money balloon payment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you can\'t pay your balloon payment when it\'s due, you\'re in what\'s called a "maturity default." This can lead to foreclosure — often faster than with traditional loans. We can often refinance you into a new loan before this happens, even with just days to spare.',
      },
    },
    {
      '@type': 'Question',
      name: 'How fast can you close a hard money rescue deal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We\'ve closed rescue deals in as few as 5 days when urgency is critical. Our average rescue closing time is 5-10 days. This is possible because we work with private money lenders who can move much faster than traditional banks.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if my hard money lender is charging high extension fees?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Many hard money lenders charge 1-2+ points just to extend your loan. Instead of paying those predatory extension fees, we can often refinance you into a new loan with better terms. You may actually save money vs. extending.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you help if I\'m already in default or facing foreclosure?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, but time is critical. If you\'ve received a Notice of Default, the clock is ticking. We\'ve helped investors even after foreclosure proceedings have started, but the sooner you reach out, the more options you have.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a DSCR exit from hard money?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'DSCR loans are long-term investment property loans where you qualify based on the property\'s rental income, not your personal income. If your property is rent-ready, you can exit your hard money into a 30-year DSCR loan with no balloon payment and no seasoning requirements with certain lenders.',
      },
    },
    {
      '@type': 'Question',
      name: 'What credit score do I need for a hard money rescue loan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Credit requirements vary by lender. Some of our lenders can work with scores as low as 550, though you\'ll get better rates at 650+. The property and your equity position matter more than credit for hard money loans.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you charge upfront fees for hard money rescue?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. We don\'t charge application fees, upfront costs, or junk fees. You only pay when we successfully close your loan. Our compensation comes from the lender, not from charging you extra.',
      },
    },
    {
      '@type': 'Question',
      name: 'What states do you lend in for hard money rescue?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We work with lenders who can close nationwide in all 50 states. Some lenders have state restrictions, but with 20+ lending partners, we can usually find an option regardless of where your property is located.',
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main>
        <Hero />
        <TrustBar />
        <HardMoneyRescue />
        <WhatIsHardMoney />
        <RescueOptions />
        <QualifierQuiz />
        <WhyChooseUs />
        <MeetTheTeam />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
