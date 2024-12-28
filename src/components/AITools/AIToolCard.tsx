import React from 'react';
import { AITool } from './types';
import { useAITools } from '../../hooks/useAITools';

interface AIToolCardProps {
  tool: AITool;
}

export default function AIToolCard({ tool }: AIToolCardProps) {
  const { openToolModal } = useAITools();
  const { title, description, icon: Icon, status, color } = tool;

  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="flex items-start sm:items-center gap-3 sm:gap-4">
        <div className={`w-10 h-10 sm:w-12 sm:h-12 ${color.background} rounded-lg flex items-center justify-center shrink-0`}>
          <Icon size={24} className={color.primary} />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-semibold text-gray-900 text-sm sm:text-base truncate">{title}</h3>
          <p className="text-xs sm:text-sm text-gray-500 line-clamp-2">{description}</p>
        </div>
      </div>
      
      <div className="mt-4 flex flex-col sm:flex-row gap-3 sm:gap-0 sm:justify-between sm:items-center">
        <span className={`px-2.5 py-1 text-xs font-semibold rounded-full w-fit
          ${status === 'Active' ? 'bg-green-100 text-green-800' : 
            status === 'Maintenance' ? 'bg-yellow-100 text-yellow-800' : 
            'bg-red-100 text-red-800'}`}>
          {status}
        </span>
        <button
          onClick={() => openToolModal(tool)}
          className="w-full sm:w-auto px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-700 
            text-white rounded-lg hover:from-purple-700 hover:to-purple-800 
            transition-all duration-300 shadow-sm hover:shadow-purple-500/25
            text-sm sm:text-base"
        >
          Use Tool
        </button>
      </div>
    </div>
  );
}