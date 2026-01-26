'use client';

import { AlertTriangle, Clock, Wallet, ArrowRightLeft, ArrowRight, Phone } from 'lucide-react';
import Button from './ui/Button';

export default function HardMoneyRescue() {
  const scrollToQuiz = () => {
    const quizSection = document.getElementById('qualifier-quiz');
    if (quizSection) {
      quizSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-deep via-slate-dark to-slate-deep py-24 md:py-32">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-red-500/10 blur-3xl" />
        <div className="absolute -right-40 bottom-1/4 h-[500px] w-[500px] rounded-full bg-amber-primary/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Column - Problem */}
          <div>
            {/* Urgency Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-400">
              <AlertTriangle className="h-4 w-4" aria-hidden="true" />
              <span>Hard Money Nightmare?</span>
            </div>

            <h2 className="heading-lg font-bold text-white">
              We Specialize in <span className="text-gradient-amber">Rescue Deals</span>
            </h2>

            <p className="mt-6 text-lg text-white/80">
              Your balloon payment is coming due. Your lender won&apos;t extend. You&apos;re running out of time and options. Sound familiar?
            </p>

            <p className="mt-4 text-lg text-white/80">
              We&apos;ve helped hundreds of investors escape predatory hard money situations. With access to <span className="font-semibold text-amber-primary">20+ lenders</span>, we find solutions when others can&apos;t.
            </p>

            {/* Pain Points */}
            <div className="mt-10 space-y-4">
              {[
                'Balloon payment due in 30 days or less',
                'Lender charging 2+ points to extend',
                'Need more capital to finish renovations',
                'Stuck between hard money and conventional',
              ].map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-500/20">
                    <svg className="h-3 w-3 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <span className="text-white/80">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Solution Card */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-amber-primary/30 bg-white/5 p-8 backdrop-blur-sm md:p-10">
              <h3 className="mb-8 text-xl font-bold text-white">Your Rescue Options</h3>

              <ul className="space-y-6">
                {[
                  {
                    icon: Clock,
                    title: 'Bridge to New Hard Money',
                    description: 'Better terms, more time, lower extension fees. Close in 5-10 days.',
                  },
                  {
                    icon: ArrowRightLeft,
                    title: 'Exit to DSCR Loan',
                    description: 'Convert to a 30-year fixed with no balloon. No seasoning requirements.',
                  },
                  {
                    icon: Wallet,
                    title: 'Additional Renovation Capital',
                    description: 'Get the funding you need to finish your project before maturity.',
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.title} className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-primary/20">
                        <Icon className="h-6 w-6 text-amber-primary" aria-hidden="true" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{item.title}</h4>
                        <p className="mt-1 text-sm text-white/75">{item.description}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>

              {/* CTAs */}
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button
                  size="lg"
                  onClick={scrollToQuiz}
                  className="btn-glow group flex-1 shadow-lg shadow-amber-primary/30"
                >
                  <span>See My Options</span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Button>

                <a
                  href="tel:480-420-4918"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-white/30 bg-white/5 px-6 py-3.5 font-semibold text-white backdrop-blur-sm transition-all hover:border-amber-primary/50 hover:bg-white/10"
                >
                  <Phone className="h-5 w-5 text-amber-primary" aria-hidden="true" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>

            {/* Floating stat */}
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-amber-primary/20 bg-slate-deep/90 p-4 shadow-xl backdrop-blur-sm lg:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/20">
                  <svg className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Deals Rescued</p>
                  <p className="text-xs text-white/75">When other lenders couldn&apos;t perform</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
