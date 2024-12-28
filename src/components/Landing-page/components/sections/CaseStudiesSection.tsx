import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

const caseStudies = [
  {
    title: "Luxury Real Estate Firm Increases Sales by 200%",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
    description: "How our AI-powered lead generation system transformed a luxury real estate firm's business.",
    results: ["200% increase in sales", "45% reduction in marketing costs", "3x faster lead qualification"]
  },
  {
    title: "Property Management Company Automates 80% of Tasks",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
    description: "Implementing AI automation for a property management company with 1000+ properties.",
    results: ["80% task automation", "90% faster response time", "50% cost reduction"]
  },
  {
    title: "Real Estate Agency Scales to 10x Growth",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    description: "How our AI solutions helped a local agency expand to multiple cities.",
    results: ["1000% business growth", "95% client satisfaction", "60% improved efficiency"]
  }
];

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-20 bg-gray-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Case Studies</h2>
          <p className="text-gray-400">
            Discover how our AI solutions have transformed real estate businesses across the industry.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#8200fb]/10 to-cyan-500/10 backdrop-blur-sm border border-white/10 hover:border-[#8200fb]/50 transition-all duration-300">
              <div className="absolute inset-0">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/80 to-gray-900/90" />
              </div>
              <div className="relative p-8">
                <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-[#8200fb]">
                  {study.title}
                </h3>
                <p className="text-gray-300 mb-6">{study.description}</p>
                <ul className="space-y-2 mb-6">
                  {study.results.map((result, idx) => (
                    <li key={idx} className="text-cyan-400">{result}</li>
                  ))}
                </ul>
                <Button variant="secondary" className="w-full group-hover:bg-[#8200fb] transition-colors duration-300">
                  Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}