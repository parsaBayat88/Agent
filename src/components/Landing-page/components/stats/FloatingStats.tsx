import React from 'react';
import { StatCard } from './StatCard';

const stats = [
  {
    value: '24/7',
    label: 'Lead Response',
    color: 'primary' as const
  },
  {
    value: '90%',
    label: 'Conversion Rate',
    color: 'secondary' as const
  },
  {
    value: '500+',
    label: 'Agents Served',
    color: 'secondary' as const
  },
  {
    value: '1M+',
    label: 'Leads Managed',
    color: 'primary' as const
  }
];

export function FloatingStats() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="grid grid-cols-2 gap-6 p-8 w-full max-w-2xl">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            value={stat.value}
            label={stat.label}
            color={stat.color}
          />
        ))}
      </div>
    </div>
  );
}