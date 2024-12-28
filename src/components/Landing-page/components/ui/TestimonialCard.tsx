import React from 'react';
import { Card } from './Card';

interface TestimonialCardProps {
  name: string;
  title: string;
  image: string;
  quote: string;
  metric?: string;
}

export function TestimonialCard({ name, title, image, quote, metric }: TestimonialCardProps) {
  return (
    <Card className="flex flex-col h-full">
      <div className="flex items-center mb-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="text-white font-semibold">{name}</h4>
          <p className="text-gray-400 text-sm">{title}</p>
        </div>
      </div>
      <p className="text-gray-300 italic mb-4">"{quote}"</p>
      {metric && (
        <div className="mt-auto">
          <p className="text-cyan-500 font-semibold">{metric}</p>
        </div>
      )}
    </Card>
  );
}