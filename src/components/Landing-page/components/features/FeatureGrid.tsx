import React from 'react';
import { BarChart3, Users, Clock, Phone } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

const features = [
  {
    icon: Phone,
    title: 'AI Voice Assistant',
    description: 'Our AI makes natural-sounding calls to leads, handles inquiries, and books meetings automatically.'
  },
  {
    icon: Users,
    title: 'Lead Management Dashboard',
    description: 'Manage contacts, follow-ups, and scheduled meetings with ease through our intuitive dashboard.'
  },
  {
    icon: Clock,
    title: '24/7 Engagement',
    description: 'AI works around the clock to keep leads warm through calls, texts, and emails.'
  },
  {
    icon: BarChart3,
    title: 'Call Analytics & Insights',
    description: 'Track call outcomes, meeting conversion rates, and optimize your lead engagement strategy.'
  }
];

export function FeatureGrid() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </div>
  );
}