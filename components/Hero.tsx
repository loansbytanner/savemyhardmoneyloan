'use client';

import { Phone, ArrowRight, AlertTriangle, Clock, Shield } from 'lucide-react';
import Button from './ui/Button';

export default function Hero() {
  const scrollToQuiz = () => {
    const quizSection = document.getElementById('qualifier-quiz');
    if (quizSection) {
      quizSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-slate-deep">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="animate-float absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-amber-primary/20 to-transparent blur-3xl" />
        <div className="animate-float absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-slate-medium/30 to-transparent blur-3xl" style={{ animationDelay: '2s' }} />
        <div className="animate-float absolute right-1/4 top-1/3 h-[300px] w-[300px] rounded-full bg-red-500/10 blur-3xl" style={{ animationDelay: '4s' }} />

        {/* Grid pattern */}
        <div className="absolute inset-0 grid-pattern opacity-30" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-deep/50 to-slate-deep" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 md:py-32 lg:px-8 lg:py-40">
        <div className="text-center">
          {/* Urgency Badges Row */}
          <div className="animate-fade-in-up mb-8 flex flex-wrap items-center justify-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-500/10 px-5 py-2.5 text-sm font-medium text-red-400 backdrop-blur-sm">
              <AlertTriangle className="h-4 w-4" aria-hidden="true" />
              <span>Balloon Payment Due?</span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-primary/30 bg-white/5 px-4 py-2 text-sm font-medium text-amber-light backdrop-blur-sm">
              <Clock className="h-4 w-4 text-amber-primary" aria-hidden="true" />
              <span>We Close in Days, Not Months</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="animate-fade-in-up heading-xl mb-6 font-bold tracking-tight text-white" style={{ animationDelay: '100ms' }}>
            Your Hard Money Loan is Due.{' '}
            <br className="hidden md:block" />
            <span className="relative inline-block">
              <span className="text-gradient-amber">We Can Help.</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 8.5C50 2.5 150 2.5 298 8.5" stroke="url(#amber-gradient)" strokeWidth="3" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="amber-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f59e0b"/>
                    <stop offset="50%" stopColor="#fcd34d"/>
                    <stop offset="100%" stopColor="#fbbf24"/>
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>

          {/* Value props */}
          <div className="animate-fade-in-up mx-auto mb-8 flex max-w-3xl flex-wrap items-center justify-center gap-3 md:gap-6" style={{ animationDelay: '200ms' }}>
            {[
              { value: '20+', label: 'Lenders' },
              { value: '5-10', label: 'Day Close' },
              { value: 'No', label: 'Upfront Fees' },
              { value: 'DSCR', label: 'Exit Available' },
            ].map((item, i) => (
              <div key={item.label} className="flex items-baseline gap-1.5">
                <span className="text-2xl font-bold text-amber-primary md:text-3xl">{item.value}</span>
                <span className="text-sm text-white/75">{item.label}</span>
                {i < 3 && <span className="ml-3 hidden text-white/20 md:inline">|</span>}
              </div>
            ))}
          </div>

          {/* Subheadline */}
          <p className="animate-fade-in-up mx-auto mb-10 max-w-2xl text-lg text-white/80 md:text-xl" style={{ animationDelay: '300ms' }}>
            When your hard money lender won&apos;t extend, your balloon is coming due, or you need capital to finish — we have <span className="font-semibold text-white">20+ lenders</span> ready to rescue your deal.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6" style={{ animationDelay: '400ms' }}>
            <Button
              size="lg"
              onClick={scrollToQuiz}
              className="btn-glow group min-w-[220px] shadow-lg shadow-amber-primary/30"
            >
              <Shield className="mr-2 h-5 w-5" aria-hidden="true" />
              <span>Save My Deal</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Button>

            <div className="flex gap-3">
              <a
                href="tel:480-420-4918"
                className="btn-outline-glow group inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/5 px-6 py-4 font-semibold text-white backdrop-blur-sm transition-all hover:border-amber-primary/50 hover:bg-white/10 min-h-[48px]"
              >
                <Phone className="h-4 w-4 text-amber-primary" aria-hidden="true" />
                <span className="text-sm">Tanner</span>
              </a>
              <a
                href="tel:480-406-2016"
                className="btn-outline-glow group inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/5 px-6 py-4 font-semibold text-white backdrop-blur-sm transition-all hover:border-amber-primary/50 hover:bg-white/10 min-h-[48px]"
              >
                <Phone className="h-4 w-4 text-amber-primary" aria-hidden="true" />
                <span className="text-sm">Zac</span>
              </a>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="animate-fade-in-up mt-16 flex flex-wrap items-center justify-center gap-6 md:gap-10" style={{ animationDelay: '500ms' }}>
            {[
              { text: 'Rescue Specialists' },
              { text: 'Nationwide Lending' },
              { text: 'DSCR Exit Strategy' },
              { text: 'No Prepayment Penalty' },
            ].map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-2 text-sm text-white/70"
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-primary/20">
                  <svg className="h-3 w-3 text-amber-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-bounce md:block">
          <div className="flex h-8 w-5 items-start justify-center rounded-full border-2 border-white/30 p-1">
            <div className="h-2 w-1 rounded-full bg-amber-primary" />
          </div>
        </div>
      </div>
    </section>
  );
}
