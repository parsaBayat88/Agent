import React from 'react';
import { Check } from 'lucide-react';
import { Button } from './Button';
import { Card } from './Card';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  popular?: boolean;
}

export function PricingCard({ title, price, features, popular }: PricingCardProps) {
  return (
    <Card className={`relative ${popular ? 'border-cyan-500' : ''}`}>
      {popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan-500 text-white px-3 py-1 rounded-full text-sm">
          Most Popular
        </span>
      )}
      <div className="text-center">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <div className="mb-4">
          <span className="text-3xl font-bold text-white">{price}</span>
          {price !== 'Custom' && <span className="text-gray-400">/month</span>}
        </div>
      </div>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-300">
            <Check className="h-5 w-5 text-cyan-500 mr-2" />
            {feature}
          </li>
        ))}
      </ul>
      <Button
        variant={popular ? 'primary' : 'secondary'}
        className="w-full"
      >
        Get Started
      </Button>
    </Card>
  );
}