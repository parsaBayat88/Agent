import React from 'react';
import { Button } from '../ui/Button';
import { ArrowRight, Briefcase, TrendingUp, Award } from 'lucide-react';
import { BenefitCard } from '../benefits/BenefitCard';

const benefits = [
  {
    icon: Briefcase,
    emoji: '',
    title: 'More Sales, Less Work',
    description: 'Automated follow-ups through email, text, and voice calls keep leads engaged without the extra workload.'
  },
  {
    icon: TrendingUp,
    emoji: '',
    title: 'Boost Your ROI',
    description: 'Convert more ad clicks into meetings and property sales.'
  },
  {
    icon: Award,
    emoji: '',
    title: 'Stand Out from Competitors',
    description: 'Offer a seamless, high-tech experience that sets you apart.'
  }
];

export function BenefitsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#8200fb]/5 to-cyan-500/5" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-12 w-64 h-64 bg-[#8200fb]/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-12 w-64 h-64 bg-cyan-500/30 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-3 bg-gradient-to-r from-[#8200fb] to-cyan-500 bg-clip-text text-transparent">
            Why Real Estate Agencies Love This System
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#8200fb] to-cyan-500 mx-auto rounded-full mb-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
        <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2QwpVYzxRiXYomSmksCUl8IPJz-63vIqm1r6Yvosi_kmZrASWz2VnVJpzQhNV7kZiFkx-pkKhZ">
        
        <div className="text-center">
          <Button 
            size="lg"
            className="group hover:scale-105 transition-all duration-300"
          >
            👉 See How It Can Work for You
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
        </a>
      </div>
    </section>
  );
}