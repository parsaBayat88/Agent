import React from 'react';
import { LucideIcon } from 'lucide-react';

interface LoginInputProps {
  id: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon: LucideIcon;
}

export default function LoginInput({ 
  id, 
  type, 
  placeholder, 
  value, 
  onChange, 
  icon: Icon 
}: LoginInputProps) {
  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {placeholder}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon className="h-5 w-5 text-gray-400" />
        </div>
        <input
          id={id}
          name={id}
          type={type}
          autoComplete={type === 'password' ? 'current-password' : id}
          required
          value={value}
          onChange={onChange}
          className="appearance-none relative block w-full px-3 py-3 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}