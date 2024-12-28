import React from 'react';
import { CreditCard } from 'lucide-react';

export default function BillingInfo() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4">Billing Information</h2>
      <div className="flex items-center gap-4 mb-6">
        <CreditCard className="text-purple-600" />
        <div>
          <p className="font-medium">Premium Plan</p>
          <p className="text-sm text-gray-500">Next billing date: March 1, 2024</p>
        </div>
      </div>
      <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700">
        Update Payment Method
      </button>
    </div>
  );
}