import React from 'react';
import { LucideIcon } from 'lucide-react';

interface BenefitCardProps {
  icon: LucideIcon;
  emoji: string;
  title: string;
  description: string;
}
export function BenefitCard({ icon: Icon, emoji, title, description }: BenefitCardProps) {
  return (
    <div className="group relative">
      <div className="absolute -inset-2 bg-gradient-to-r from-[#8200fb]/20 to-cyan-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 " />
      <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-[#8200fb]/50 transition-all duration-300 h-[232px] md:h-[180px] lg:h-[232px]">
        <div className="flex items-center space-x-4 mb-4 ">
          <div className="bg-[#8200fb]/10 p-3 rounded-lg">
            <Icon className="w-6 h-6 text-[#8200fb]" />
          </div>
          <span className="text-2xl">{emoji}</span>
        </div>
        <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-[#8200fb] to-cyan-500 bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-gray-300 leading-relaxed md:hidden lg:block">
          {description}
        </p>
      </div>
    </div>
  );
}