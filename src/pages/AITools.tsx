import React from 'react';
import AIToolCard from '../components/AITools/AIToolCard';
import AIToolModal from '../components/AITools/AIToolModal';
import { aiTools } from '../components/AITools/data';
import { useAITools } from '../hooks/useAITools';

export default function AITools() {
  const { selectedTool, isModalOpen, closeToolModal } = useAITools();

  return (
    <div className="space-y-6 px-4 sm:px-6 py-6">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">AI Tools</h1>
        <p className="text-sm sm:text-base text-gray-500 mt-1">Powerful AI tools to enhance your workflow</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {aiTools.map((tool) => (
          <AIToolCard key={tool.id} tool={tool} />
        ))}
      </div>

      {selectedTool && (
        <AIToolModal
          tool={selectedTool}
          isOpen={isModalOpen}
          onClose={closeToolModal}
        />
      )}
    </div>
  );
}