import React from 'react';
import { Calendar as CalendarIcon } from 'lucide-react';

interface CalendarHeaderProps {
  title: string;
  subtitle?: string;
}

export default function CalendarHeader({ title, subtitle }: CalendarHeaderProps) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="p-2 bg-purple-100 rounded-lg">
        <CalendarIcon className="text-purple-600" size={24} />
      </div>
      <div>
        <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
        {subtitle && <p className="text-gray-500 mt-1">{subtitle}</p>}
      </div>
    </div>
  );
}