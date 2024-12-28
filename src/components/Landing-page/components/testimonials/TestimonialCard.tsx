import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  image: string;
}

export function TestimonialCard({ quote, author, role, image }: TestimonialCardProps) {
  return (
    <div className="group relative">
      <div className="absolute -inset-4 bg-gradient-to-r from-[#8200fb]/20 to-cyan-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-[#8200fb]/50 transition-all duration-300">
        <Quote className="w-10 h-10 text-[#8200fb] mb-6 opacity-50" />
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">{quote}</p>
        <div className="flex items-center space-x-4">
          <img
            src={image}
            alt={author}
            className="w-12 h-12 rounded-full object-cover border-2 border-[#8200fb]"
          />
          <div>
            <h4 className="font-semibold text-white">{author}</h4>
            <p className="text-gray-400 text-sm">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}