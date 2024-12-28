import React from 'react';

interface StatCardProps {
  value: string;
  label: string;
  color: 'primary' | 'secondary';
}

export function StatCard({ value, label, color }: StatCardProps) {
  const colorStyles = {
    primary: 'border-[#8200fb]/30 hover:border-[#8200fb]/50',
    secondary: 'border-cyan-500/30 hover:border-cyan-500/50'
  };

  const textColors = {
    primary: 'text-[#8200fb]',
    secondary: 'text-cyan-500'
  };

  return (
    <div 
      className={`bg-gray-900/90 backdrop-blur-md p-6 rounded-xl border ${colorStyles[color]} 
        transform hover:-translate-y-2 transition-all duration-300 hover:shadow-lg 
        hover:shadow-${color === 'primary' ? '[#8200fb]' : 'cyan-500'}/10`}
    >
      <h4 className={`text-3xl font-bold mb-2 ${textColors[color]}`}>{value}</h4>
      <p className="text-base text-gray-300 font-medium">{label}</p>
    </div>
  );
}