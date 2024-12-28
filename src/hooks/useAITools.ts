import { create } from 'zustand';
import { AITool } from '../components/AITools/types';

interface AIToolsStore {
  selectedTool: AITool | null;
  isModalOpen: boolean;
  openToolModal: (tool: AITool) => void;
  closeToolModal: () => void;
}

export const useAITools = create<AIToolsStore>((set) => ({
  selectedTool: null,
  isModalOpen: false,
  openToolModal: (tool) => set({ selectedTool: tool, isModalOpen: true }),
  closeToolModal: () => set({ selectedTool: null, isModalOpen: false }),
}));