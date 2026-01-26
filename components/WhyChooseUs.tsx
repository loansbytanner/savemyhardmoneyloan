'use client';

import { Users, Zap, Shield, Handshake, Award } from 'lucide-react';

const reasons = [
  {
    icon: Users,
    title: '20+ Lender Network',
    description: 'We don\'t work for one lender — we shop your deal across 20+ private money and bridge lenders to find the best fit.',
  },
  {
    icon: Zap,
    title: 'Speed When It Matters',
    description: 'When your balloon is due in days, not weeks, we move fast. Average rescue closing time: 5-10 days.',
  },
  {
    icon: Shield,
    title: 'Deal Creativity',
    description: 'We\'ve seen every hard money nightmare. Our experience means we find solutions others miss.',
  },
  {
    icon: Handshake,
    title: 'No Upfront Fees',
    description: 'We don\'t charge application fees or upfront costs. You only pay when we close your deal.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-amber-primary/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-slate-dark/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-slate-deep/5 px-4 py-2 text-sm font-medium text-slate-dark">
            <Award className="h-4 w-4 text-amber-primary" />
            Why Work With Us
          </div>
          <h2 className="heading-lg font-bold text-slate-deep">
            Hard Money <span className="text-gradient-amber">Rescue Specialists</span>
          </h2>
          <p className="mt-4 text-lg text-slate-medium">
            We don&apos;t just originate loans. We specialize in fixing deals that have gone sideways.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="flex gap-5 rounded-2xl border border-slate-dark/10 bg-surface-warm p-6"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-primary to-amber-light">
                  <Icon className="h-6 w-6 text-slate-deep" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-deep">{reason.title}</h3>
                  <p className="mt-2 text-slate-medium">{reason.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
