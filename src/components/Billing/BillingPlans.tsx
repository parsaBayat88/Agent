import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    duration: '1 Month',
    price: 99,
    savings: 0,
    features: ['Basic AI Tools', 'Email Support', '100 Lead Credits'],
  },
  {
    duration: '3 Months',
    price: 269,
    savings: 28,
    features: ['All AI Tools', 'Priority Support', '500 Lead Credits'],
    recommended: true,
  },
  {
    duration: '1 Year',
    price: 899,
    savings: 289,
    features: ['All AI Tools', '24/7 Support', 'Unlimited Lead Credits'],
  },
];

export default function BillingPlans() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {plans.map((plan) => (
        <div 
          key={plan.duration}
          className={`bg-white rounded-xl p-6 shadow-sm ${
            plan.recommended ? 'ring-2 ring-purple-500' : ''
          }`}
        >
          {plan.recommended && (
            <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-1 rounded-full">
              Recommended
            </span>
          )}
          <div className="mt-4">
            <h3 className="text-lg font-semibold">{plan.duration}</h3>
            <div className="mt-2">
              <span className="text-3xl font-bold">${plan.price}</span>
              <span className="text-gray-500">/period</span>
            </div>
            {plan.savings > 0 && (
              <p className="text-green-600 text-sm mt-1">Save ${plan.savings}</p>
            )}
          </div>
          <ul className="mt-6 space-y-3">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2">
                <Check size={16} className="text-green-500" />
                <span className="text-sm text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
          <button className="w-full mt-6 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors">
            Select Plan
          </button>
        </div>
      ))}
    </div>
  );
}