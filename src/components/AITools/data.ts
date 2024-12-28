import { Mail, Brain, Clock, MessageSquare, Search, LineChart } from 'lucide-react';
import { AITool } from './types';

export const aiTools: AITool[] = [
  {
    id: 'email-automation',
    title: 'Email Automation',
    description: 'AI-powered email campaigns and follow-ups',
    icon: Mail,
    status: 'Active',
    color: {
      primary: 'text-blue-600',
      background: 'bg-blue-100',
    },
    metrics: [
      { label: 'Emails Sent', value: '1,234' },
      { label: 'Open Rate', value: '45%' },
    ],
  },
  {
    id: 'lead-scoring',
    title: 'Lead Scoring',
    description: 'Intelligent lead prioritization system',
    icon: Brain,
    status: 'Active',
    color: {
      primary: 'text-purple-600',
      background: 'bg-purple-100',
    },
    metrics: [
      { label: 'Leads Scored', value: '892' },
      { label: 'Accuracy', value: '94%' },
    ],
  },
  {
    id: 'smart-scheduling',
    title: 'Smart Scheduling',
    description: 'AI-optimized meeting scheduler',
    icon: Clock,
    status: 'Active',
    color: {
      primary: 'text-green-600',
      background: 'bg-green-100',
    },
    metrics: [
      { label: 'Meetings Scheduled', value: '156' },
      { label: 'Time Saved', value: '45h' },
    ],
  },
  {
    id: 'chatbot',
    title: 'AI Chatbot',
    description: 'Intelligent customer support assistant',
    icon: MessageSquare,
    status: 'Active',
    color: {
      primary: 'text-pink-600',
      background: 'bg-pink-100',
    },
    metrics: [
      { label: 'Conversations', value: '2,456' },
      { label: 'Resolution Rate', value: '85%' },
    ],
  },
  {
    id: 'market-analysis',
    title: 'Market Analysis',
    description: 'Real-time market insights and predictions',
    icon: LineChart,
    status: 'Active',
    color: {
      primary: 'text-orange-600',
      background: 'bg-orange-100',
    },
    metrics: [
      { label: 'Reports Generated', value: '342' },
      { label: 'Accuracy', value: '91%' },
    ],
  },
  {
    id: 'property-matcher',
    title: 'Property Matcher',
    description: 'AI-powered property recommendations',
    icon: Search,
    status: 'Active',
    color: {
      primary: 'text-teal-600',
      background: 'bg-teal-100',
    },
    metrics: [
      { label: 'Matches Made', value: '567' },
      { label: 'Success Rate', value: '78%' },
    ],
  },
];