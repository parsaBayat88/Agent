import React, { useState } from 'react';
import { X, Wand2, Brain, Mail, MessageSquare, LineChart, Search, Clock } from 'lucide-react';

interface CreateToolModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
}

const iconOptions = [
  { icon: Brain, name: 'Brain', color: 'text-purple-600' },
  { icon: Mail, name: 'Mail', color: 'text-blue-600' },
  { icon: MessageSquare, name: 'Chat', color: 'text-pink-600' },
  { icon: LineChart, name: 'Analytics', color: 'text-orange-600' },
  { icon: Search, name: 'Search', color: 'text-teal-600' },
  { icon: Clock, name: 'Clock', color: 'text-green-600' },
];

export default function CreateToolModal({ isOpen, onClose, onSubmit }: CreateToolModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    icon: 'Brain',
    aiPrompt: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-xl">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <div className="bg-purple-100 p-2 rounded-lg">
              <Wand2 className="text-purple-600" size={24} />
            </div>
            <h2 className="text-xl font-semibold">Create AI Tool</h2>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="Enter tool name"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Icon
            </label>
            <div className="grid grid-cols-6 gap-2">
              {iconOptions.map((option) => (
                <button
                  key={option.name}
                  type="button"
                  onClick={() => setFormData({ ...formData, icon: option.name })}
                  className={`p-3 rounded-lg ${
                    formData.icon === option.name 
                      ? 'bg-purple-100 ring-2 ring-purple-500' 
                      : 'bg-gray-50 hover:bg-gray-100'
                  } transition-all`}
                >
                  <option.icon className={option.color} size={20} />
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              placeholder="Describe what your AI tool does"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              rows={3}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              AI Prompt <span className="text-red-500">*</span>
            </label>
            <textarea
              required
              placeholder="Enter the AI prompt for your tool"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              rows={4}
              value={formData.aiPrompt}
              onChange={(e) => setFormData({ ...formData, aiPrompt: e.target.value })}
            />
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 text-gray-700 hover:bg-gray-100 rounded-xl transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors"
            >
              Create Tool
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}