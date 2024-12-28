import React, { useState } from 'react';
import { X, Send, Loader2 } from 'lucide-react';
import { AITool } from './types';

interface AIToolModalProps {
  tool: AITool;
  isOpen: boolean;
  onClose: () => void;
}

export default function AIToolModal({ tool, isOpen, onClose }: AIToolModalProps) {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setResult("Here's your AI-generated response...");
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-4xl h-[calc(100vh-2rem)] max-h-[800px] shadow-2xl flex flex-col">
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-gray-100 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 ${tool.color.background} rounded-xl flex items-center justify-center`}>
              <tool.icon size={20} className={tool.color.primary} />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900">{tool.title}</h2>
              <p className="text-xs sm:text-sm text-gray-500">{tool.description}</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 min-h-0">
          {/* Input Section */}
          <div className="p-4 sm:p-6 border-b lg:border-b-0 lg:border-r border-gray-100 flex flex-col min-h-0">
            <h3 className="text-sm font-medium text-gray-700 mb-2 shrink-0">Your Prompt</h3>
            <form onSubmit={handleSubmit} className="flex flex-col flex-1">
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Enter your prompt here..."
                className="flex-1 resize-none p-4 bg-gray-50 rounded-xl border border-gray-200 
                  focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
              <button
                type="submit"
                disabled={isLoading || !prompt.trim()}
                className="mt-4 w-full py-3 bg-gradient-to-r from-purple-600 to-purple-700 
                  text-white rounded-xl flex items-center justify-center gap-2
                  hover:from-purple-700 hover:to-purple-800 transition-all
                  disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
              >
                {isLoading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    <span className="hidden sm:inline">Processing...</span>
                    <span className="sm:hidden">...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Generate</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Result Section */}
          <div className="p-4 sm:p-6 bg-gray-50 flex flex-col min-h-0">
            <h3 className="text-sm font-medium text-gray-700 mb-2 shrink-0">Result</h3>
            <div className="flex-1 bg-white rounded-xl p-4 border border-gray-200 overflow-auto">
              {result ? (
                <div className="prose prose-sm max-w-none">
                  {result}
                </div>
              ) : (
                <div className="h-full flex items-center justify-center text-gray-400 text-sm">
                  Your result will appear here
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}