import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  time: string;
  date: string;
  location: string;
  type: 'viewing' | 'meeting' | 'call';
}

const events: Event[] = [
  {
    id: 1,
    title: 'Property Viewing - Luxury Villa',
    time: '2:00 PM',
    date: 'Today',
    location: '123 Luxury Lane',
    type: 'viewing',
  },
  {
    id: 2,
    title: 'Client Meeting - Johnson Family',
    time: '4:30 PM',
    date: 'Today',
    location: 'Virtual Meeting',
    type: 'meeting',
  },
  {
    id: 3,
    title: 'Follow-up Call - Smith Property',
    time: '10:00 AM',
    date: 'Tomorrow',
    location: 'Phone Call',
    type: 'call',
  },
];

const getEventColor = (type: Event['type']) => {
  switch (type) {
    case 'viewing':
      return 'bg-purple-100 text-purple-800';
    case 'meeting':
      return 'bg-blue-100 text-blue-800';
    case 'call':
      return 'bg-green-100 text-green-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export default function UpcomingEvents() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4">Upcoming Events</h2>
      <div className="space-y-4">
        {events.map((event) => (
          <div key={event.id} className="p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-medium text-gray-900">{event.title}</h3>
              <span className={`text-xs px-2 py-1 rounded-full ${getEventColor(event.type)}`}>
                {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
              </span>
            </div>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar size={14} />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} />
                <span>{event.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}