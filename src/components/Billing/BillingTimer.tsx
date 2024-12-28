import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

export default function BillingTimer() {
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    const nextBilling = new Date('2024-04-01').getTime();
    
    const updateDays = () => {
      const now = new Date().getTime();
      const distance = nextBilling - now;
      setDaysLeft(Math.floor(distance / (1000 * 60 * 60 * 24)));
    };

    updateDays();
    const timer = setInterval(updateDays, 1000 * 60 * 60); // Update every hour

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center gap-3 mb-4">
        <Clock className="text-purple-600" size={24} />
        <h2 className="text-lg font-semibold">Time Until Next Billing</h2>
      </div>
      <div className="text-center">
        <div className="bg-purple-50 rounded-lg p-6 inline-block min-w-[200px]">
          <span className="text-4xl font-bold text-purple-600">{daysLeft}</span>
          <span className="text-xl font-semibold text-purple-600 ml-2">days</span>
        </div>
        <p className="text-sm text-gray-500 mt-2">Until your next billing cycle</p>
      </div>
    </div>
  );
}