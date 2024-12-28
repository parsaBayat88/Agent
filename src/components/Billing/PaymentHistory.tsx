import React from 'react';

export default function PaymentHistory() {
  const payments = [
    {
      id: 1,
      date: 'Feb 1, 2024',
      amount: '$99.00',
      status: 'Paid',
    },
    // Add more payment history
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4">Payment History</h2>
      <div className="space-y-4">
        {payments.map((payment) => (
          <div key={payment.id} className="flex justify-between items-center border-b pb-4">
            <div>
              <p className="font-medium">{payment.date}</p>
              <p className="text-sm text-gray-500">Premium Plan</p>
            </div>
            <div className="text-right">
              <p className="font-medium">{payment.amount}</p>
              <p className="text-sm text-green-600">{payment.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}