import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="group relative">
      <div className="absolute -inset-2 bg-gradient-to-r from-[#8200fb]/20 to-cyan-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-[#8200fb]/50 transition-all duration-300">
        <div className="bg-[#8200fb]/10 p-4 rounded-lg w-fit mb-6">
          <Icon className="w-8 h-8 text-[#8200fb]" />
        </div>
        <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-[#8200fb] to-cyan-500 bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}