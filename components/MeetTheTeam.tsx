'use client';

import { Phone, Mail, Calendar, Award, ArrowRight } from 'lucide-react';

const team = [
  {
    name: 'Tanner Cook',
    title: 'Hard Money Rescue Specialist',
    nmls: '2090424',
    phone: '480-420-4918',
    email: 'Tanner@cfmtg.com',
    calendar: 'https://calendly.com/tannercook/15min',
    bio: 'Tanner specializes in rescuing hard money deals that have gone sideways. With access to 20+ lenders and creative deal structuring expertise, he finds solutions when others can\'t.',
    specialties: ['Hard Money Rescue', 'Bridge Loans', 'DSCR Exits'],
  },
  {
    name: 'Zac Cook',
    title: 'Hard Money Rescue Specialist',
    nmls: '2111496',
    phone: '480-406-2016',
    email: 'Zac@cfmtg.com',
    calendar: 'https://cal.com/zaccook/consultation-with-zac',
    bio: 'Zac works with investors facing balloon payments, extension fee nightmares, and foreclosure threats. His experience in fix-and-flip financing means he understands the urgency of your situation.',
    specialties: ['Fix & Flip Rescue', 'Foreclosure Prevention', 'Renovation Funding'],
  },
];

export default function MeetTheTeam() {
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
            Your Rescue Team
          </div>
          <h2 className="heading-lg font-bold text-slate-deep">
            Meet the <span className="text-gradient-amber">Cook Brothers</span>
          </h2>
          <p className="mt-4 text-lg text-slate-medium">
            We&apos;ve seen every hard money nightmare. Let us help you find a way out.
          </p>
        </div>

        {/* Team Grid */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {team.map((member) => (
            <div
              key={member.name}
              className="card-premium card-hover group overflow-hidden rounded-3xl"
            >
              {/* Header */}
              <div className="relative bg-gradient-to-br from-slate-deep via-slate-dark to-slate-deep p-8">
                {/* Decorative elements */}
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-amber-primary/10 blur-2xl" />

                <div className="relative flex items-center gap-5">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-primary to-amber-light shadow-lg ring-2 ring-amber-primary/30">
                    <span className="text-3xl font-bold text-slate-deep">{member.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                    <p className="text-white/70">{member.title}</p>
                    <p className="mt-1 inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-sm text-amber-light backdrop-blur-sm">
                      NMLS #{member.nmls}
                    </p>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-8">
                <p className="mb-6 leading-relaxed text-slate-medium">{member.bio}</p>

                {/* Specialties */}
                <div className="mb-6">
                  <p className="mb-3 text-sm font-semibold text-slate-deep">Specialties</p>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="rounded-full bg-gradient-to-r from-amber-primary/10 to-amber-light/10 px-4 py-1.5 text-sm font-medium text-amber-primary"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact */}
                <div className="space-y-3 border-t border-slate-dark/10 pt-6">
                  <a
                    href={`tel:${member.phone}`}
                    className="flex items-center gap-3 rounded-lg p-2 text-slate-medium transition-all hover:bg-surface-warm hover:text-slate-deep"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-deep/5">
                      <Phone className="h-5 w-5 text-amber-primary" aria-hidden="true" />
                    </div>
                    <span className="font-medium">{member.phone}</span>
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-3 rounded-lg p-2 text-slate-medium transition-all hover:bg-surface-warm hover:text-slate-deep"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-deep/5">
                      <Mail className="h-5 w-5 text-amber-primary" aria-hidden="true" />
                    </div>
                    <span className="font-medium">{member.email}</span>
                  </a>
                  <a
                    href={member.calendar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex items-center gap-3 rounded-lg bg-gradient-to-r from-amber-primary/10 to-amber-light/10 p-2 text-amber-primary transition-all hover:from-amber-primary/20 hover:to-amber-light/20"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-amber-primary to-amber-light">
                      <Calendar className="h-5 w-5 text-slate-deep" aria-hidden="true" />
                    </div>
                    <span className="font-semibold">Schedule a Call</span>
                    <ArrowRight className="ml-auto h-5 w-5 transition-transform group-hover/link:translate-x-1" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
