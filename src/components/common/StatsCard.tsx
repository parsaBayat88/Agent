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
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
          <Icon size={24} className="text-purple-600" />
        </div>
        {trend && (
          <span className={`text-sm ${trend.isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {trend.isPositive ? '+' : ''}{trend.value}%
          </span>
        )}
      </div>
      <h3 className="mt-4 text-gray-500 text-sm">{title}</h3>
      <p className="mt-1 text-2xl font-semibold">{value}</p>
    </div>
  );
}