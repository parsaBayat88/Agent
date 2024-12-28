import React from 'react';

const logos = [
  {
    name: 'Company 1',
    url: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623'
  },
  {
    name: 'Company 2',
    url: 'https://images.unsplash.com/photo-1560179707-f14e90ef3624'
  },
  {
    name: 'Company 3',
    url: 'https://images.unsplash.com/photo-1560179707-f14e90ef3625'
  },
  {
    name: 'Company 4',
    url: 'https://images.unsplash.com/photo-1560179707-f14e90ef3626'
  }
];

export function LogoCarousel() {
  return (
    <div className="relative overflow-hidden py-12">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-transparent to-gray-950 z-10" />
      
      <div className="flex space-x-12 animate-scroll">
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-32 h-16 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800 p-4 flex items-center justify-center group hover:border-[#8200fb]/50 transition-all duration-300"
          >
            <img
              src={logo.url}
              alt={logo.name}
              className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}