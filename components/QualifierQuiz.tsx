'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ChevronLeft, ChevronRight, Loader2, CheckCircle2, Lock, Zap } from 'lucide-react';

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
      setSubmitError('Something went wrong. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <section id="qualifier-quiz" className="relative overflow-hidden bg-gradient-to-b from-blue-50/50 to-white py-24 md:py-32">
      <div className="relative mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-10 text-center">
          {!isSubmitted ? (
            <>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
                <Zap className="h-4 w-4" />
                See Your Options in 60 Seconds
              </div>
              <h2 className="text-3xl font-bold text-text-primary md:text-4xl">
                Get Your Rescue Options
              </h2>
              <p className="mt-3 text-text-secondary">
                Answer a few questions to see how we can help
              </p>
            </>
          ) : (
            <>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-success/30 bg-success/10 px-4 py-2 text-sm font-medium text-success">
                <CheckCircle2 className="h-4 w-4" />
                Successfully Submitted
              </div>
              <h2 className="text-3xl font-bold text-text-primary md:text-4xl">
                Thank You, {submittedName}!
              </h2>
              <p className="mt-3 text-text-secondary">
                We&apos;ll be in touch soon.
              </p>
            </>
          )}
        </div>

        {/* Quiz Card */}
        <div className="overflow-hidden rounded-3xl bg-white shadow-xl shadow-black/5 ring-1 ring-border">
          {/* Progress bar - hide on success */}
          {!isSubmitted && (
            <div className="bg-surface px-8 py-5">
              <div className="mb-2 flex justify-between text-sm">
                <span className="font-medium text-text-secondary">Step {currentStep + 1} of {totalSteps}</span>
                <span className="font-semibold text-primary">{Math.round(((currentStep + 1) / totalSteps) * 100)}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-border">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-primary-light transition-all duration-500 ease-out"
                  style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
                />
              </div>
            </div>
          )}

          <div className="p-8 md:p-10">
            {/* Quiz steps */}
            {isQuizStep && (
              <div>
                <h3 className="mb-2 text-2xl font-bold text-text-primary">
                  {steps[currentStep].question}
                </h3>
                <p className="mb-8 text-text-secondary">{steps[currentStep].subtitle}</p>

                <div className="grid gap-3 sm:grid-cols-2">
                  {steps[currentStep].options.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => handleOptionSelect(option.value)}
                      className={`group relative overflow-hidden rounded-xl border-2 p-5 text-left transition-all duration-200 ${
                        answers[steps[currentStep].id] === option.value
                          ? 'border-primary bg-primary/5 shadow-md'
                          : 'border-border hover:border-primary/40 hover:bg-surface'
                      }`}
                    >
                      {/* Selection indicator */}
                      <div className={`absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full transition-all ${
                        answers[steps[currentStep].id] === option.value
                          ? 'bg-primary'
                          : 'border-2 border-border'
                      }`}>
                        {answers[steps[currentStep].id] === option.value && (
                          <CheckCircle2 className="h-5 w-5 text-white" />
                        )}
                      </div>

                      <span className={`block text-lg font-semibold ${
                        answers[steps[currentStep].id] === option.value
                          ? 'text-primary'
                          : 'text-text-primary group-hover:text-primary'
                      }`}>
                        {option.label}
                      </span>
                      <span className="mt-1 block text-sm text-text-secondary">
                        {option.sublabel}
                      </span>
                    </button>
                  ))}
                </div>

                {currentStep > 0 && (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="mt-8 inline-flex items-center gap-1.5 font-medium text-text-secondary transition-colors hover:text-primary"
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
                <h3 className="mb-2 text-2xl font-bold text-text-primary">
                  Almost there!
                </h3>
                <p className="mb-8 text-text-secondary">
                  Enter your details and we&apos;ll reach out with your options.
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-semibold text-text-primary">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      autoComplete="name"
                      {...register('name')}
                      className="input-field w-full rounded-xl px-4 py-3.5 text-text-primary placeholder:text-text-secondary/50 focus:outline-none"
                      placeholder="John Smith"
                    />
                    {errors.name && (
                      <p className="mt-2 text-sm font-medium text-warning">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-semibold text-text-primary">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      autoComplete="email"
                      {...register('email')}
                      className="input-field w-full rounded-xl px-4 py-3.5 text-text-primary placeholder:text-text-secondary/50 focus:outline-none"
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="mt-2 text-sm font-medium text-warning">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-text-primary">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      autoComplete="tel"
                      {...register('phone')}
                      className="input-field w-full rounded-xl px-4 py-3.5 text-text-primary placeholder:text-text-secondary/50 focus:outline-none"
                      placeholder="(480) 555-1234"
                    />
                    {errors.phone && (
                      <p className="mt-2 text-sm font-medium text-warning">{errors.phone.message}</p>
                    )}
                  </div>

                  {submitError && (
                    <div className="rounded-xl border border-warning/20 bg-warning/5 p-4 text-sm font-medium text-warning">
                      {submitError}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="btn-primary mt-2 flex w-full items-center justify-center gap-2 rounded-full py-4 text-lg font-semibold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Get My Options
                        <ChevronRight className="h-5 w-5" aria-hidden="true" />
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleBack}
                    className="flex w-full items-center justify-center gap-1.5 py-2 font-medium text-text-secondary transition-colors hover:text-primary"
                  >
                    <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                    Back
                  </button>
                </form>
              </div>
            )}

            {/* Simple Success State */}
            {isSubmitted && (
              <div className="py-8 text-center">
                {/* Success Icon */}
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-success to-green-600 shadow-lg">
                  <CheckCircle2 className="h-10 w-10 text-white" aria-hidden="true" />
                </div>

                <p className="text-lg text-text-secondary">
                  We&apos;ve received your information and will be in touch soon.
                </p>
              </div>
            )}
          </div>

          {/* Trust footer - hide on success */}
          {!isSubmitted && (
            <div className="border-t border-border bg-surface/50 px-8 py-4">
              <div className="flex items-center justify-center gap-2 text-xs text-text-secondary">
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
