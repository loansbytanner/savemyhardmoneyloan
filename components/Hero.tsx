'use client';

import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToQuiz = () => {
    const quizSection = document.getElementById('qualifier-quiz');
    if (quizSection) {
      quizSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[70vh] overflow-hidden bg-gradient-to-br from-white via-blue-50/50 to-blue-100/30">
      <div className="relative mx-auto max-w-4xl px-4 py-24 sm:px-6 md:py-32 lg:px-8">
        <div className="text-center">
          {/* Main Headline */}
          <h1 className="animate-fade-in-up heading-xl mb-6 font-bold tracking-tight text-text-primary">
            Need to Exit Your Hard Money Loan?
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-in-up mx-auto mb-10 max-w-2xl text-lg text-text-secondary md:text-xl" style={{ animationDelay: '100ms' }}>
            Our dedicated team is here to help you find a solution
          </p>

          {/* CTA Button */}
          <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <button
              onClick={scrollToQuiz}
              className="btn-primary group inline-flex items-center gap-2 rounded-full px-8 py-4 text-lg font-semibold shadow-lg"
            >
              <span>Get Started</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
