import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

export default function StatsCard({ title, value, icon: Icon, trend }: StatsCardProps) {
  return (
    <div className="glass-card rounded-2xl p-6 shadow-lg hover-lift">
      <div className="flex items-center justify-between">
        <div className="w-12 h-12 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-xl flex items-center justify-center">
          <Icon size={24} className="text-primary-600" />
        </div>
        {trend && (
          <span 
            className={`text-sm font-medium px-2.5 py-1 rounded-full ${
              trend.isPositive 
                ? 'bg-green-100 text-green-700' 
                : 'bg-red-100 text-red-700'
            }`}
          >
            {trend.isPositive ? '+' : ''}{trend.value}%
          </span>
        )}
      </div>
      <h3 className="mt-4 text-gray-600 text-sm font-medium">{title}</h3>
      <p className="mt-1 text-3xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
        {value}
      </p>
    </div>
  );
}