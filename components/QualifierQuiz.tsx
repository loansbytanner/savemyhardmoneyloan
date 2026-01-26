'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ChevronLeft, ChevronRight, Loader2, CheckCircle2, Lock, Zap, Phone, Calendar, Clock, AlertTriangle } from 'lucide-react';
import Button from './ui/Button';

const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const steps = [
  {
    id: 'situation',
    question: 'What\'s your situation?',
    subtitle: 'Select the option that best describes where you are',
    options: [
      { value: 'balloon-due', label: 'Balloon Coming Due', sublabel: 'Payment due soon' },
      { value: 'need-extension', label: 'Need Extension', sublabel: 'Current lender won\'t extend' },
      { value: 'need-capital', label: 'Need More Capital', sublabel: 'Project over budget' },
      { value: 'foreclosure-threat', label: 'Facing Foreclosure', sublabel: 'Already in default' },
    ],
  },
  {
    id: 'urgency',
    question: 'How urgent is this?',
    subtitle: 'When do you need to close?',
    options: [
      { value: 'days', label: 'Days', sublabel: 'Emergency - under 2 weeks' },
      { value: 'weeks', label: '2-4 Weeks', sublabel: 'Urgent but manageable' },
      { value: '1-2-months', label: '1-2 Months', sublabel: 'Some time to plan' },
      { value: 'planning', label: 'Just Planning', sublabel: 'Exploring options' },
    ],
  },
  {
    id: 'propertyType',
    question: 'What type of property?',
    subtitle: 'Select the property type',
    options: [
      { value: 'sfr', label: 'Single Family', sublabel: '1 unit residence' },
      { value: '2-4-unit', label: '2-4 Unit', sublabel: 'Duplex to quad' },
      { value: 'commercial', label: 'Commercial', sublabel: 'Retail, office, etc.' },
      { value: 'mixed-use', label: 'Mixed Use', sublabel: 'Residential + commercial' },
    ],
  },
  {
    id: 'loanAmount',
    question: 'Current loan amount?',
    subtitle: 'Approximate balance on your hard money loan',
    options: [
      { value: 'under-250k', label: 'Under $250K', sublabel: 'Smaller deal' },
      { value: '250k-500k', label: '$250K - $500K', sublabel: 'Mid-size' },
      { value: '500k-1m', label: '$500K - $1M', sublabel: 'Larger deal' },
      { value: 'over-1m', label: 'Over $1M', sublabel: 'Large deal' },
    ],
  },
  {
    id: 'equityPosition',
    question: 'Estimated equity position?',
    subtitle: 'How much equity do you have in the property?',
    options: [
      { value: '30-plus', label: '30%+ Equity', sublabel: 'Strong position' },
      { value: '20-30', label: '20-30% Equity', sublabel: 'Good position' },
      { value: '10-20', label: '10-20% Equity', sublabel: 'Tight but workable' },
      { value: 'under-10', label: 'Under 10%', sublabel: 'Minimal equity' },
    ],
  },
  {
    id: 'propertyCondition',
    question: 'Property condition?',
    subtitle: 'Current state of the property',
    options: [
      { value: 'rent-ready', label: 'Rent Ready', sublabel: 'Could lease today' },
      { value: 'minor-work', label: 'Minor Work Left', sublabel: 'Nearly complete' },
      { value: 'mid-renovation', label: 'Mid-Renovation', sublabel: 'Work in progress' },
      { value: 'major-work', label: 'Major Work Needed', sublabel: 'Substantial rehab left' },
    ],
  },
  {
    id: 'experience',
    question: 'Investment experience?',
    subtitle: 'How many deals have you completed?',
    options: [
      { value: 'first', label: 'First Deal', sublabel: 'New investor' },
      { value: '1-5', label: '1-5 Deals', sublabel: 'Getting started' },
      { value: '6-10', label: '6-10 Deals', sublabel: 'Experienced' },
      { value: '10-plus', label: '10+ Deals', sublabel: 'Pro investor' },
    ],
  },
];

const calendars = [
  'https://calendly.com/tannercook/15min',
  'https://cal.com/zaccook/consultation-with-zac',
];

function getNextCalendar(): string {
  if (typeof window !== 'undefined') {
    const lastIndex = parseInt(localStorage.getItem('lastCalendarIndex') || '0', 10);
    const nextIndex = (lastIndex + 1) % calendars.length;
    localStorage.setItem('lastCalendarIndex', String(nextIndex));
    return calendars[nextIndex];
  }
  return calendars[0];
}

export default function QualifierQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const totalSteps = steps.length + 1;
  const isQuizStep = currentStep < steps.length;
  const isContactStep = currentStep === steps.length;

  const isUrgent = answers.situation === 'balloon-due' ||
                   answers.situation === 'foreclosure-threat' ||
                   answers.urgency === 'days';

  const handleOptionSelect = (value: string) => {
    const stepId = steps[currentStep].id;
    setAnswers((prev) => ({ ...prev, [stepId]: value }));
    setTimeout(() => {
      setCurrentStep((prev) => prev + 1);
    }, 300);
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(0, prev - 1));
  };

  const onSubmit = async (contactData: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    const leadData = {
      ...answers,
      ...contactData,
      source: 'savemyhardmoneyloan.com',
      timestamp: new Date().toISOString(),
    };

    try {
      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(leadData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit');
      }

      setSubmittedName(contactData.name.split(' ')[0]);
      setIsSubmitted(true);
      setIsSubmitting(false);
    } catch {
      setSubmitError('Something went wrong. Please try again or call us directly.');
      setIsSubmitting(false);
    }
  };

  return (
    <section id="qualifier-quiz" className="relative overflow-hidden py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-deep via-slate-dark to-slate-deep">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-amber-primary/10 blur-3xl" />
        <div className="absolute -right-40 bottom-1/4 h-[500px] w-[500px] rounded-full bg-slate-medium/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-10 text-center">
          {!isSubmitted ? (
            <>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-primary/30 bg-white/5 px-4 py-2 text-sm font-medium text-amber-light backdrop-blur-sm">
                <Zap className="h-4 w-4 text-amber-primary" />
                See Your Options in 60 Seconds
              </div>
              <h2 className="text-3xl font-bold text-white md:text-4xl">
                Get Your Rescue Options
              </h2>
              <p className="mt-3 text-white/75">
                Answer a few questions to see how we can help
              </p>
            </>
          ) : (
            <>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-400 backdrop-blur-sm">
                <CheckCircle2 className="h-4 w-4" />
                Successfully Submitted
              </div>
              <h2 className="text-3xl font-bold text-white md:text-4xl">
                We&apos;re On It!
              </h2>
              <p className="mt-3 text-white/75">
                {isUrgent ? 'Expect a call within hours.' : 'We\'ll be in touch within 1 business day.'}
              </p>
            </>
          )}
        </div>

        {/* Quiz Card */}
        <div className="overflow-hidden rounded-3xl bg-white shadow-2xl shadow-black/20">
          {/* Progress bar - hide on success */}
          {!isSubmitted && (
            <div className="bg-surface-warm px-8 py-5">
              <div className="mb-2 flex justify-between text-sm">
                <span className="font-medium text-slate-dark/70">Step {currentStep + 1} of {totalSteps}</span>
                <span className="font-semibold text-amber-primary">{Math.round(((currentStep + 1) / totalSteps) * 100)}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-slate-dark/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-amber-primary via-amber-light to-amber-primary transition-all duration-500 ease-out"
                  style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
                />
              </div>
            </div>
          )}

          <div className="p-8 md:p-10">
            {/* Quiz steps */}
            {isQuizStep && (
              <div>
                {/* Urgent Deal Banner */}
                {isUrgent && currentStep > 1 && (
                  <div className="mb-6 flex items-center gap-3 rounded-xl border border-red-500/30 bg-gradient-to-r from-red-500/10 to-red-500/5 p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-500/20">
                      <AlertTriangle className="h-5 w-5 text-red-500" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-deep">Urgent Deal Priority</p>
                      <p className="text-xs text-slate-dark/70">We&apos;ll fast-track your request. Expect a call within hours.</p>
                    </div>
                  </div>
                )}

                <h3 className="mb-2 text-2xl font-bold text-slate-deep">
                  {steps[currentStep].question}
                </h3>
                <p className="mb-8 text-slate-dark/70">{steps[currentStep].subtitle}</p>

                <div className="grid gap-3 sm:grid-cols-2">
                  {steps[currentStep].options.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => handleOptionSelect(option.value)}
                      className={`group relative overflow-hidden rounded-xl border-2 p-5 text-left transition-all duration-200 ${
                        answers[steps[currentStep].id] === option.value
                          ? 'border-amber-primary bg-gradient-to-br from-amber-primary/10 to-amber-primary/5 shadow-md'
                          : 'border-slate-dark/10 hover:border-amber-primary/40 hover:bg-surface-warm'
                      }`}
                    >
                      {/* Selection indicator */}
                      <div className={`absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full transition-all ${
                        answers[steps[currentStep].id] === option.value
                          ? 'bg-amber-primary'
                          : 'border-2 border-slate-dark/20'
                      }`}>
                        {answers[steps[currentStep].id] === option.value && (
                          <CheckCircle2 className="h-5 w-5 text-slate-deep" />
                        )}
                      </div>

                      <span className={`block text-lg font-semibold ${
                        answers[steps[currentStep].id] === option.value
                          ? 'text-slate-deep'
                          : 'text-slate-deep group-hover:text-amber-primary'
                      }`}>
                        {option.label}
                      </span>
                      <span className="mt-1 block text-sm text-slate-dark/50">
                        {option.sublabel}
                      </span>
                    </button>
                  ))}
                </div>

                {currentStep > 0 && (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="mt-8 inline-flex items-center gap-1.5 font-medium text-slate-medium transition-colors hover:text-amber-primary"
                  >
                    <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                    Back
                  </button>
                )}
              </div>
            )}

            {/* Contact form step */}
            {isContactStep && (
              <div>
                <h3 className="mb-2 text-2xl font-bold text-slate-deep">
                  Almost there!
                </h3>
                <p className="mb-8 text-slate-dark/70">
                  Enter your details and we&apos;ll call you with your rescue options.
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-semibold text-slate-deep">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      autoComplete="name"
                      {...register('name')}
                      className="input-premium w-full rounded-xl border-2 border-slate-dark/10 bg-surface-warm px-4 py-3.5 text-slate-deep placeholder:text-slate-dark/40 focus:border-amber-primary focus:bg-white focus:outline-none"
                      placeholder="John Smith"
                    />
                    {errors.name && (
                      <p className="mt-2 text-sm font-medium text-red-500">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-deep">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      autoComplete="email"
                      {...register('email')}
                      className="input-premium w-full rounded-xl border-2 border-slate-dark/10 bg-surface-warm px-4 py-3.5 text-slate-deep placeholder:text-slate-dark/40 focus:border-amber-primary focus:bg-white focus:outline-none"
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="mt-2 text-sm font-medium text-red-500">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-slate-deep">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      autoComplete="tel"
                      {...register('phone')}
                      className="input-premium w-full rounded-xl border-2 border-slate-dark/10 bg-surface-warm px-4 py-3.5 text-slate-deep placeholder:text-slate-dark/40 focus:border-amber-primary focus:bg-white focus:outline-none"
                      placeholder="(480) 555-1234"
                    />
                    {errors.phone && (
                      <p className="mt-2 text-sm font-medium text-red-500">{errors.phone.message}</p>
                    )}
                  </div>

                  {submitError && (
                    <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-600">
                      {submitError}
                    </div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    className="btn-glow mt-2 w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Get My Rescue Options
                        <ChevronRight className="h-5 w-5" aria-hidden="true" />
                      </>
                    )}
                  </Button>

                  <button
                    type="button"
                    onClick={handleBack}
                    className="flex w-full items-center justify-center gap-1.5 py-2 font-medium text-slate-medium transition-colors hover:text-amber-primary"
                  >
                    <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                    Back
                  </button>
                </form>
              </div>
            )}

            {/* Thank You / Success State */}
            {isSubmitted && (
              <div className="text-center">
                {/* Success Icon */}
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-green-600 shadow-lg">
                  <CheckCircle2 className="h-10 w-10 text-white" aria-hidden="true" />
                </div>

                <h3 className="mb-2 text-2xl font-bold text-slate-deep">
                  Thank You, {submittedName}!
                </h3>
                <p className="mb-8 text-slate-dark/70">
                  {isUrgent
                    ? 'We\'ve flagged your deal as urgent. Expect a call within hours.'
                    : 'We\'ve received your information and will reach out within 1 business day.'
                  }
                </p>

                {/* What happens next */}
                <div className="mb-8 rounded-xl bg-surface-warm p-6 text-left">
                  <h4 className="mb-4 font-semibold text-slate-deep">What happens next?</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-primary/20 text-xs font-bold text-amber-primary">1</div>
                      <span className="text-sm text-slate-dark/70">We&apos;ll review your situation and shop our 20+ lender network</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-primary/20 text-xs font-bold text-amber-primary">2</div>
                      <span className="text-sm text-slate-dark/70">A rescue specialist will call to discuss your options</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-primary/20 text-xs font-bold text-amber-primary">3</div>
                      <span className="text-sm text-slate-dark/70">We&apos;ll present the best rescue solutions for your deal</span>
                    </li>
                  </ul>
                </div>

                {/* Optional Actions */}
                <div className="space-y-4">
                  <p className="text-sm font-medium text-slate-deep">Want to get started faster?</p>

                  {/* Schedule Call Option */}
                  <a
                    href={getNextCalendar()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-amber-primary bg-amber-primary/10 px-6 py-3.5 font-semibold text-amber-primary transition-all hover:bg-amber-primary hover:text-slate-deep"
                  >
                    <Calendar className="h-5 w-5" aria-hidden="true" />
                    Schedule a Call Now
                    <span className="text-xs opacity-70">(Optional)</span>
                  </a>

                  {/* Direct Call Options */}
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <a
                      href="tel:480-420-4918"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-slate-dark/20 px-5 py-3 font-medium text-slate-medium transition-all hover:border-amber-primary/50 hover:bg-surface-warm"
                    >
                      <Phone className="h-4 w-4 text-amber-primary" aria-hidden="true" />
                      Call Tanner
                    </a>
                    <a
                      href="tel:480-406-2016"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-slate-dark/20 px-5 py-3 font-medium text-slate-medium transition-all hover:border-amber-primary/50 hover:bg-surface-warm"
                    >
                      <Phone className="h-4 w-4 text-amber-primary" aria-hidden="true" />
                      Call Zac
                    </a>
                  </div>
                </div>

                {/* Urgent deal note */}
                {isUrgent && (
                  <div className="mt-6 rounded-xl border border-red-500/30 bg-red-500/10 p-4">
                    <div className="flex items-center justify-center gap-2 text-sm font-semibold text-red-500">
                      <Clock className="h-4 w-4" aria-hidden="true" />
                      Urgent Deal Priority
                    </div>
                    <p className="mt-1 text-xs text-slate-dark/70">
                      We&apos;ve flagged your deal as time-sensitive. Expect a call within a few hours.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Trust footer - hide on success */}
          {!isSubmitted && (
            <div className="border-t border-slate-dark/10 bg-surface-warm/50 px-8 py-4">
              <div className="flex items-center justify-center gap-2 text-xs text-slate-dark/50">
                <Lock className="h-3.5 w-3.5" aria-hidden="true" />
                Your information is secure and will never be sold.
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
