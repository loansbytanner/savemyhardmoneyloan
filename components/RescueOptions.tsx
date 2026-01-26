'use client';

import { ArrowRightLeft, Clock, Wallet, Home, Sparkles } from 'lucide-react';

const options = [
  {
    icon: Clock,
    title: 'Bridge-to-Bridge Refinance',
    description: 'Replace your current hard money loan with better terms. Lower rates, longer term, no predatory extension fees.',
    features: ['Close in 5-10 days', 'No prepayment penalty', 'Up to 85% LTV'],
  },
  {
    icon: ArrowRightLeft,
    title: 'Hard Money to DSCR Exit',
    description: 'Convert your short-term hard money into a 30-year DSCR loan. No balloon payments, no seasoning requirements.',
    features: ['30-year fixed available', 'No income verification', 'Property must be rent-ready'],
  },
  {
    icon: Wallet,
    title: 'Additional Capital Injection',
    description: 'Need more money to finish your renovation? We can get you additional funding to complete the project.',
    features: ['Fund renovation overruns', 'Close before maturity', 'Keep your existing timeline'],
  },
  {
    icon: Home,
    title: 'Foreclosure Prevention',
    description: 'Already in default? We work with borrowers facing foreclosure to find emergency exit solutions.',
    features: ['Fast-track processing', 'Distressed property OK', 'Creative deal structures'],
  },
];

export default function RescueOptions() {
  return (
    <section className="relative overflow-hidden bg-surface-warm py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-slate-deep/5 px-4 py-2 text-sm font-medium text-slate-dark">
            <Sparkles className="h-4 w-4 text-amber-primary" />
            Rescue Solutions
          </div>
          <h2 className="heading-lg font-bold text-slate-deep">
            Your <span className="text-gradient-amber">Options</span> When Time is Running Out
          </h2>
          <p className="mt-4 text-lg text-slate-medium">
            Every situation is different. Here&apos;s how we can help depending on where you are.
          </p>
        </div>

        {/* Options Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {options.map((option) => {
            const Icon = option.icon;
            return (
              <div
                key={option.title}
                className="card-premium card-hover rounded-3xl p-8 md:p-10"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-primary/20 to-amber-light/10">
                  <Icon className="h-7 w-7 text-amber-primary" aria-hidden="true" />
                </div>

                <h3 className="text-xl font-bold text-slate-deep">{option.title}</h3>
                <p className="mt-3 text-slate-medium">{option.description}</p>

                <ul className="mt-6 space-y-3">
                  {option.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500/20">
                        <svg className="h-3 w-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-slate-dark">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
