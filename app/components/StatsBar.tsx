'use client';

import { TrendingUp, Users, Building2 } from 'lucide-react';

export function StatsBar() {
  const stats = [
    { icon: Building2, label: 'Properties', value: '1,240' },
    { icon: Users, label: 'Investors', value: '5,420' },
    { icon: TrendingUp, label: 'Total Value', value: '$42M' },
  ];

  return (
    <div className="bg-surface border-y border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold text-fg">{stat.value}</div>
                <div className="text-sm text-fg/60">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
