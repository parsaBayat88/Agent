import { useState, useEffect } from 'react';
import { Lead } from '../types/lead';
import { LEAD_STATUSES, PRIORITY_LEVELS } from '../utils/constants';
import { timeAgo } from '../utils/formatters';

const sampleLeads: Lead[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    email: 'sarah.j@example.com',
    phone: '(555) 123-4567',
    status: LEAD_STATUSES.NEW,
    priority: PRIORITY_LEVELS.HIGH,
    lastContact: timeAgo(new Date(Date.now() - 2 * 60 * 60 * 1000)), // 2 hours ago
  },
  {
    id: 2,
    name: 'Michael Chen',
    email: 'm.chen@example.com',
    phone: '(555) 987-6543',
    status: LEAD_STATUSES.FOLLOW_UP,
    priority: PRIORITY_LEVELS.MEDIUM,
    lastContact: timeAgo(new Date(Date.now() - 24 * 60 * 60 * 1000)), // 1 day ago
  },
];

export function useLeads(showAll: boolean = false) {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    try {
      // Simulate API call
      setLeads(showAll ? sampleLeads : sampleLeads.slice(0, 1));
      setLoading(false);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch leads'));
      setLoading(false);
    }
  }, [showAll]);

  return { leads, loading, error };
}