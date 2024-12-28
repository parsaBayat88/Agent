import React from 'react';
import { Trophy, PhoneCall, Calendar } from 'lucide-react';
import AchievementCard from '../components/Achievements/AchievementCard';
import AchievementChart from '../components/Achievements/AchievementChart';

const todayAchievements = [
  {
    title: "Today's Leads",
    value: '23',
    icon: Trophy,
    color: 'bg-gradient-to-r from-purple-500 to-purple-600',
    description: 'New leads acquired today',
  },
  {
    title: 'Contacted Leads',
    value: '11',
    icon: PhoneCall,
    color: 'bg-gradient-to-r from-blue-500 to-blue-600',
    description: 'Successfully contacted leads',
  },
  {
    title: 'Meetings Scheduled',
    value: '5',
    icon: Calendar,
    color: 'bg-gradient-to-r from-green-500 to-green-600',
    description: 'New meetings scheduled today',
  },
];

export default function Achievements() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Today's Achievements</h1>
        <p className="text-gray-500 mt-2">Track your daily progress and milestones</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {todayAchievements.map((achievement) => (
          <AchievementCard key={achievement.title} {...achievement} />
        ))}
      </div>

      <AchievementChart />
    </div>
  );
}