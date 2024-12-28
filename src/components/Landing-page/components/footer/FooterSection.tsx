import React from 'react';

interface FooterSectionProps {
  title: string;
  children: React.ReactNode;
}

export function FooterSection({ title, children }: FooterSectionProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold bg-gradient-to-r from-[#8200fb] to-cyan-500 bg-clip-text text-transparent">
        {title}
      </h3>
      {children}
    </div>
  );
}