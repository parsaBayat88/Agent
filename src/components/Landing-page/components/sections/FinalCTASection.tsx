import React from 'react';
import { ArrowRight, Rocket } from 'lucide-react';
import { Button } from '../ui/Button';

export function FinalCTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-12 w-96 h-96 bg-[#8200fb]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-12 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-3xl p-12 border border-gray-800 hover:border-[#8200fb]/50 transition-all duration-300">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center bg-[#8200fb]/10 p-3 rounded-full mb-6">
                <Rocket className="w-6 h-6 text-[#8200fb] mr-2" />
                <span className="text-[#8200fb] font-semibold">Ready to Transform Your Business?</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#8200fb] to-cyan-500 bg-clip-text text-transparent">
                Ready to See the Difference?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Leads shouldn't slip through the cracks. Let AI do the hard work, so you can focus on what matters—closing deals.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2QwpVYzxRiXYomSmksCUl8IPJz-63vIqm1r6Yvosi_kmZrASWz2VnVJpzQhNV7kZiFkx-pkKhZ">
              <Button 
                size="lg"
                className="group hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              >
                👉 Book Your Free Demo Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}