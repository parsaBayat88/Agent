// Menu items configuration
export const MENU_ITEMS = [
  { path: '/', label: 'Overview' },
  { path: '/leads', label: 'Leads' },
  { path: '/achievements', label: 'Achievements' },
  { path: '/ai-tools', label: 'AI Tools' },
  { path: '/calendar', label: 'Calendar' },
  { path: '/billing', label: 'Billing' },
] as const;

// Status configurations
export const LEAD_STATUSES = {
  NEW: 'New',
  FOLLOW_UP: 'Follow-up',
  CLOSED: 'Closed',
} as const;

export const PRIORITY_LEVELS = {
  HIGH: 'High',
  MEDIUM: 'Medium',
  LOW: 'Low',
} as const;