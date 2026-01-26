'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle, Phone } from 'lucide-react';

const faqs = [
  {
    question: 'What happens if I can\'t pay my hard money balloon payment?',
    answer: 'If you can\'t pay your balloon payment when it\'s due, you\'re in what\'s called a "maturity default." This can lead to foreclosure — often faster than with traditional loans since hard money lenders aren\'t as regulated. The good news: we can often refinance you into a new loan before this happens, even with just days to spare.',
  },
  {
    question: 'How fast can you actually close a rescue deal?',
    answer: 'We\'ve closed rescue deals in as few as 5 days when urgency is critical. Our average rescue closing time is 5-10 days. This is possible because we work with private money lenders who can move much faster than traditional banks.',
  },
  {
    question: 'What if my current lender is charging high extension fees?',
    answer: 'Many hard money lenders charge 1-2+ points just to extend your loan, which can add up to thousands per month. Instead of paying those predatory extension fees, we can often refinance you into a new loan with better terms. You may actually save money vs. extending.',
  },
  {
    question: 'Can you help if I\'m already in default or facing foreclosure?',
    answer: 'Yes, but time is critical. If you\'ve received a Notice of Default, the clock is ticking. We\'ve helped investors even after foreclosure proceedings have started, but the sooner you reach out, the more options you have.',
  },
  {
    question: 'What\'s a DSCR exit and why would I want one?',
    answer: 'DSCR (Debt Service Coverage Ratio) loans are long-term investment property loans where you qualify based on the property\'s rental income, not your personal income. If your property is rent-ready, you can exit your hard money into a 30-year DSCR loan with no balloon payment, no income verification, and no seasoning requirements with certain lenders.',
  },
  {
    question: 'What credit score do I need for a hard money rescue loan?',
    answer: 'Credit requirements vary by lender. Some of our lenders can work with scores as low as 550, though you\'ll get better rates at 650+. The property and your equity position matter more than credit for hard money loans.',
  },
  {
    question: 'How much equity do I need in the property?',
    answer: 'Most rescue refinances require at least 20-30% equity (70-80% LTV). If you\'re underwater or have minimal equity, options are more limited but not impossible. We\'ve structured creative solutions for tight equity situations.',
  },
  {
    question: 'What if my renovation project isn\'t finished?',
    answer: 'We have options for properties mid-renovation. Some lenders will fund based on "as-is" value, while others can provide additional capital to complete your project. The key is having a realistic completion plan and enough equity.',
  },
  {
    question: 'Do you charge upfront fees?',
    answer: 'No. We don\'t charge application fees, upfront costs, or junk fees. You only pay when we successfully close your loan. Our compensation comes from the lender, not from charging you extra.',
  },
  {
    question: 'What states do you lend in?',
    answer: 'We work with lenders who can close nationwide in all 50 states. Some lenders have state restrictions, but with 20+ lending partners, we can usually find an option regardless of where your property is located.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden bg-surface-warm py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-slate-deep/5 px-4 py-2 text-sm font-medium text-slate-dark">
            <HelpCircle className="h-4 w-4 text-amber-primary" />
            Got Questions?
          </div>
          <h2 className="heading-lg font-bold text-slate-deep">
            Hard Money <span className="text-gradient-amber">Rescue FAQ</span>
          </h2>
          <p className="mt-4 text-lg text-slate-medium">
            Common questions from investors in distressed hard money situations.
          </p>
        </div>

        {/* FAQ List */}
        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                openIndex === index
                  ? 'border-amber-primary/30 bg-white shadow-lg shadow-amber-primary/5'
                  : 'border-slate-dark/10 bg-white hover:border-amber-primary/20'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between p-6 text-left"
                aria-expanded={openIndex === index}
              >
                <span className={`pr-4 font-semibold transition-colors ${
                  openIndex === index ? 'text-amber-primary' : 'text-slate-deep'
                }`}>
                  {faq.question}
                </span>
                <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all ${
                  openIndex === index
                    ? 'bg-amber-primary text-slate-deep'
                    : 'bg-surface-warm text-slate-dark/50'
                }`}>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </div>
              </button>
              <div
                className={`grid transition-all duration-300 ease-out ${
                  openIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-slate-dark/10 px-6 pb-6 pt-4 text-slate-medium leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-slate-deep to-slate-dark p-8 text-center">
          <p className="mb-4 text-lg text-white">
            Time-sensitive situation? Don&apos;t wait — call us now.
          </p>
          <a
            href="tel:480-420-4918"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-primary to-amber-light px-6 py-3 font-semibold text-slate-deep transition-all hover:shadow-lg hover:shadow-amber-primary/30"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            Call 480-420-4918
          </a>
        </div>
      </div>
    </section>
  );
}
