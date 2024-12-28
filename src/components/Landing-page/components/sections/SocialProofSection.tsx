import React from 'react';
import { TestimonialCard } from '../testimonials/TestimonialCard';
import { LogoCarousel } from '../logos/LogoCarousel';

const testimonials = [
  {
    quote: "Since using this system, our meeting show-up rates have tripled! It's like having an extra agent working 24/7.",
    author: "Sarah Johnson",
    role: "Real Estate Broker",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  },
  {
    quote: "We've seen a 40% increase in sales from our Facebook ad campaigns. This system pays for itself.",
    author: "Mark Anderson",
    role: "Agency Owner",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
  }
];

export function SocialProofSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-12 w-64 h-64 bg-[#8200fb]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-12 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#8200fb] to-cyan-500 bg-clip-text text-transparent">
            Don't Just Take Our Word for It
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#8200fb] to-cyan-500 mx-auto rounded-full mb-6" />
          <p className="text-xl text-gray-400">
            Hear from agencies that have transformed their business with our AI system
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#8200fb]/5 to-cyan-500/5" />
          <div className="relative">
            <h3 className="text-2xl font-semibold text-center mb-8 text-gray-300">
              Trusted by Leading Real Estate Agencies
            </h3>
            <LogoCarousel />
          </div>
        </div>
      </div>
    </section>
  );
}