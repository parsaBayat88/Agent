import React from 'react';
import { Bell, Search, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="glass-card border-b border-white/20 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center flex-1">
         
        </div>

        <div className="flex items-center gap-4">
          
          
          <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">John Smith</p>
              <p className="text-xs text-gray-500">Lead Agent</p>
            </div>
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-xl flex items-center justify-center">
              <User size={20} className="text-primary-600" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}