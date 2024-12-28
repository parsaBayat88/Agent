import { Users, PhoneCall, Calendar, TrendingUp } from 'lucide-react';

export const dashboardStats = [
  {
    title: 'Total Leads',
    value: '2,543',
    icon: Users,
    trend: { value: 12.5, isPositive: true },
  },
  {
    title: 'Calls Today',
    value: '47',
    icon: PhoneCall,
    trend: { value: 8.2, isPositive: true },
  },
  {
    title: 'Scheduled Meetings',
    value: '12',
    icon: Calendar,
    trend: { value: 3.1, isPositive: true },
  },
  {
    title: 'Conversion Rate',
    value: '24%',
    icon: TrendingUp,
    trend: { value: 2.3, isPositive: false },
  },
];