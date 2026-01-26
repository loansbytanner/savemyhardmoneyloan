'use client';

import { Building2, Clock, Users, Shield } from 'lucide-react';

const stats = [
  {
    icon: Building2,
    value: '20+',
    label: 'Lending Partners',
    description: 'Private money & bridge lenders',
  },
  {
    icon: Clock,
    value: '5-10 Days',
    label: 'Average Close Time',
    description: 'When time is critical',
  },
  {
    icon: Users,
    value: 'Nationwide',
    label: 'Coverage',
    description: 'All 50 states',
  },
  {
    icon: Shield,
    value: 'NMLS',
    label: 'Licensed',
    description: '#173855',
  },
];

export default function TrustBar() {
  return (
    <section className="relative bg-slate-dark py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-primary/20">
                  <Icon className="h-6 w-6 text-amber-primary" aria-hidden="true" />
                </div>
                <div className="text-2xl font-bold text-white md:text-3xl">{stat.value}</div>
                <div className="mt-1 text-sm font-medium text-white/80">{stat.label}</div>
                <div className="mt-0.5 text-xs text-white/50">{stat.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
