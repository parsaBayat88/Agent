import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { Button } from '../ui/Button';
import { FeatureGrid } from '../features/FeatureGrid';

export function FeaturesSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-12 w-64 h-64 bg-[#8200fb]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-12 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center bg-[#8200fb]/10 p-3 rounded-full mb-6">
            <Phone className="w-6 h-6 text-[#8200fb] mr-2" />
            <span className="text-[#8200fb] font-semibold">AI-Powered Voice Calls</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#8200fb] to-cyan-500 bg-clip-text text-transparent">
            Your AI Sales Assistant That Actually Makes Calls
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#8200fb] to-cyan-500 mx-auto rounded-full mb-6" />
          <p className="text-xl text-gray-400">
            Let our AI handle lead calls, qualify prospects, and book meetings while you focus on closing deals
          </p>
        </div>

        <FeatureGrid />
        <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2QwpVYzxRiXYomSmksCUl8IPJz-63vIqm1r6Yvosi_kmZrASWz2VnVJpzQhNV7kZiFkx-pkKhZ">
        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="group hover:scale-105 transition-all duration-300"
          >
            🎯 Schedule a Demo Call
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
        </a>
      </div>
    </section>
  );
}