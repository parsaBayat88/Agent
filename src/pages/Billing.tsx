import React from 'react';
import BillingPlans from '../components/Billing/BillingPlans';
import BillingTimer from '../components/Billing/BillingTimer';

export default function Billing() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Billing Management</h1>
        <p className="text-gray-500 mt-2">Manage your subscription and billing preferences</p>
      </div>

      <BillingTimer />
      
      <div>
        <h2 className="text-xl font-semibold mb-4">Select a Plan</h2>
        <BillingPlans />
      </div>
    </div>
  );
}