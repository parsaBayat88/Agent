import React from 'react';
import { LucideIcon } from 'lucide-react';

interface AchievementCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  color: string;
  description: string;
}

export default function AchievementCard({ title, value, icon: Icon, color, description }: AchievementCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
      <div className={`w-16 h-16 ${color} rounded-2xl flex items-center justify-center mb-4 transform -rotate-6`}>
        <Icon size={32} className="text-white transform rotate-6" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
      <p className="text-sm font-medium text-gray-600 mt-1">{title}</p>
      <p className="text-sm text-gray-500 mt-2">{description}</p>
    </div>
  );
}