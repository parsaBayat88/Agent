import { LucideIcon } from 'lucide-react';

export interface AITool {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  status: 'Active' | 'Inactive' | 'Maintenance';
  color: {
    primary: string;
    background: string;
  };
  metrics?: {
    label: string;
    value: string;
  }[];
}