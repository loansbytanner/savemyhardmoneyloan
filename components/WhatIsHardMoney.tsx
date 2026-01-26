'use client';

import { X, Check, AlertTriangle, TrendingUp } from 'lucide-react';

export default function WhatIsHardMoney() {
  return (
    <section className="relative overflow-hidden bg-slate-deep py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute -right-40 top-1/4 h-[500px] w-[500px] rounded-full bg-amber-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-primary/30 bg-white/5 px-4 py-2 text-sm font-medium text-amber-light backdrop-blur-sm">
            <AlertTriangle className="h-4 w-4 text-amber-primary" />
            Understanding Your Situation
          </div>
          <h2 className="heading-lg font-bold text-white">
            Why Hard Money Loans Go <span className="text-gradient-amber">Wrong</span>
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Hard money loans are powerful tools — until they become traps. Here&apos;s what typically goes sideways.
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* The Problem Card */}
          <div className="rounded-3xl border border-red-500/20 bg-gradient-to-br from-red-500/10 to-transparent p-8 md:p-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-red-500/20 px-4 py-2 text-sm font-semibold text-red-400">
              <X className="h-4 w-4" />
              Common Hard Money Pitfalls
            </div>

            <ul className="space-y-5">
              {[
                { title: 'Balloon Payment Shock', desc: 'Full principal due in 6-18 months with no warning' },
                { title: 'Predatory Extension Fees', desc: 'Some lenders charge 2+ points per month to extend' },
                { title: 'Project Delays', desc: 'Renovations run over and loan matures mid-project' },
                { title: 'Exit Strategy Fails', desc: 'Can\'t sell or refinance before balloon comes due' },
                { title: '12-Month Seasoning Trap', desc: 'Banks won\'t refinance until you\'ve owned 12 months' },
                { title: 'Loan-to-Own Schemes', desc: 'Some lenders WANT you to default so they can foreclose' },
              ].map((item) => (
                <li key={item.title} className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-500/20">
                    <X className="h-4 w-4 text-red-400" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="font-semibold text-white">{item.title}</span>
                    <p className="mt-0.5 text-sm text-white/75">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* The Solution Card */}
          <div className="rounded-3xl border border-green-500/20 bg-gradient-to-br from-green-500/10 to-transparent p-8 md:p-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-green-500/20 px-4 py-2 text-sm font-semibold text-green-400">
              <Check className="h-4 w-4" />
              How We Solve It
            </div>

            <ul className="space-y-5">
              {[
                { title: '20+ Lender Network', desc: 'We find the lender that fits YOUR situation' },
                { title: 'No Prepayment Penalty', desc: 'Refinance out anytime without extra fees' },
                { title: '5-10 Day Closings', desc: 'When time is critical, we move fast' },
                { title: 'DSCR Exit Strategy', desc: 'Convert to 30-year fixed with no seasoning requirement' },
                { title: 'Additional Capital Available', desc: 'Get funding to finish your project' },
                { title: 'Ethical Lenders Only', desc: 'We work with lenders who want you to succeed' },
              ].map((item) => (
                <li key={item.title} className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-500/20">
                    <Check className="h-4 w-4 text-green-400" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="font-semibold text-white">{item.title}</span>
                    <p className="mt-0.5 text-sm text-white/75">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-16 rounded-2xl border border-amber-primary/20 bg-white/5 p-8 backdrop-blur-sm">
          <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-16">
            <div className="flex items-center gap-4">
              <TrendingUp className="h-8 w-8 text-red-400" />
              <div>
                <div className="text-3xl font-bold text-white">22%</div>
                <div className="text-sm text-white/75">House flip failure rate (2023)</div>
              </div>
            </div>
            <div className="hidden h-12 w-px bg-white/20 md:block" />
            <div className="flex items-center gap-4">
              <AlertTriangle className="h-8 w-8 text-amber-primary" />
              <div>
                <div className="text-3xl font-bold text-white">$957B</div>
                <div className="text-sm text-white/75">CRE loans maturing in 2025</div>
              </div>
            </div>
            <div className="hidden h-12 w-px bg-white/20 md:block" />
            <div className="flex items-center gap-4">
              <Check className="h-8 w-8 text-green-400" />
              <div>
                <div className="text-3xl font-bold text-white">5-10 Days</div>
                <div className="text-sm text-white/75">Our average rescue close time</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
