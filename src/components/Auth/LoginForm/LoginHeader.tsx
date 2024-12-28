import React from 'react';
import { Building2 } from 'lucide-react';

export default function LoginHeader() {
  return (
    <div className="text-center">
      <div className="flex justify-center">
        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
          <Building2 className="h-8 w-8 text-purple-600" />
        </div>
      </div>
      <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
        Welcome back
      </h2>
      <p className="mt-2 text-sm text-gray-600">
        Sign in to access your dashboard
      </p>
    </div>
  );
}