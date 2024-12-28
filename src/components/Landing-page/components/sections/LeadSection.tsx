import React from 'react';
import { Button } from '../ui/Button';
import { AlertCircle, CheckCircle, ArrowRight } from 'lucide-react';
import { FloatingStats } from '../stats/FloatingStats';

export function LeadSection() {
  const painPoints = [
    {
      text: "Most leads lose interest before you can call them.",
      icon: AlertCircle
    },
    {
      text: "Agents are stretched thin, juggling too many follow-ups.",
      icon: AlertCircle
    },
    {
      text: "You're spending on ads but not seeing the results you want.",
      icon: AlertCircle
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#8200fb]/10 to-cyan-500/10" />
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content Side */}
          <div className="relative z-10">
            <div className="mb-8">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#8200fb] to-cyan-500 bg-clip-text text-transparent animate-text">
                Losing Leads? Struggling with Follow-Ups?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                You're running ads, but here's the truth:
              </p>
            </div>

            <div className="space-y-6 mb-8">
              {painPoints.map((point, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 bg-gray-900/50 backdrop-blur-sm p-4 rounded-lg border border-gray-800 hover:border-[#8200fb]/50 transition-all duration-300 hover:transform hover:translate-x-2"
                >
                  <point.icon className="w-6 h-6 text-[#8200fb] flex-shrink-0 mt-1" />
                  <p className="text-gray-300">{point.text}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-800 mb-8 hover:border-cyan-500/50 transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Solution:</h3>
                  <p className="text-gray-300">
                    Our AI-powered system takes the hassle out of lead management. 
                    It follows up, answers questions, and schedules meetings—so your team can focus on closing deals.
                  </p>
                </div>
              </div>
            </div>
          <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2QwpVYzxRiXYomSmksCUl8IPJz-63vIqm1r6Yvosi_kmZrASWz2VnVJpzQhNV7kZiFkx-pkKhZ">
            
            <Button 
              size="lg"
              className="group hover:scale-105 transition-all duration-300"
            >
              Transform Your Lead Management
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            </a> 
          </div>

          {/* Image Side */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#8200fb]/20 to-cyan-500/20 blur-xl rounded-full animate-pulse" />
            <div className="relative rounded-2xl overflow-hidden border border-gray-800 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11"
                alt="Modern real estate dashboard with AI analytics"
                className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent opacity-60" />
              
              <FloatingStats />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}