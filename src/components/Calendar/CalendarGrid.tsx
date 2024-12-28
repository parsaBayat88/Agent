import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Home, Users, Phone } from 'lucide-react';
import { CalendarEvent, DayEvent } from '../../types/calendar';
import { getEventsForDate } from '../../utils/calendar';

// Sample events data
const sampleEvents: CalendarEvent[] = [
  {
    id: 1,
    title: 'Property Viewing - Luxury Villa',
    date: new Date(2024, 2, 15), // March 15, 2024
    time: '2:00 PM',
    location: '123 Luxury Lane',
    type: 'viewing',
  },
  {
    id: 2,
    title: 'Client Meeting',
    date: new Date(2024, 2, 15), // March 15, 2024
    time: '4:00 PM',
    location: 'Office',
    type: 'meeting',
  },
  // Add more sample events as needed
];

export default function CalendarGrid() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(new Date(currentDate.setMonth(
      currentDate.getMonth() + (direction === 'next' ? 1 : -1)
    )));
  };

  const renderEventIndicators = (dayEvents: DayEvent) => {
    return (
      <div className="flex gap-1 mt-1 justify-center">
        {dayEvents.hasViewing && (
          <div className="tooltip" data-tip="Viewing">
            <Home size={14} className="text-purple-600" />
          </div>
        )}
        {dayEvents.hasMeeting && (
          <div className="tooltip" data-tip="Meeting">
            <Users size={14} className="text-blue-600" />
          </div>
        )}
        {dayEvents.hasCall && (
          <div className="tooltip" data-tip="Call">
            <Phone size={14} className="text-green-600" />
          </div>
        )}
      </div>
    );
  };

  const renderDays = () => {
    const days = [];
    const today = new Date();

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-24 bg-gray-50/50 border border-gray-100"></div>);
    }

    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const currentDayDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
      const dayEvents = getEventsForDate(sampleEvents, currentDayDate);
      const isToday = 
        day === today.getDate() && 
        currentDate.getMonth() === today.getMonth() && 
        currentDate.getFullYear() === today.getFullYear();

      days.push(
        <div 
          key={day} 
          className={`h-24 border border-gray-100 p-2 transition-colors hover:bg-purple-50 
            ${isToday ? 'bg-purple-50 border-purple-200' : 'bg-white'}
            ${dayEvents.events.length > 0 ? 'cursor-pointer' : ''}`}
        >
          <div className="flex flex-col h-full">
            <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full 
              ${isToday ? 'bg-purple-600 text-white' : ''}`}
            >
              {day}
            </span>
            {renderEventIndicators(dayEvents)}
            {dayEvents.events.length > 0 && (
              <div className="mt-1 text-xs text-gray-600">
                {dayEvents.events.length} event{dayEvents.events.length > 1 ? 's' : ''}
              </div>
            )}
          </div>
        </div>
      );
    }

    return days;
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h2>
        <div className="flex gap-2">
          <button 
            onClick={() => navigateMonth('prev')}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={() => navigateMonth('next')}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-px">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center py-2 text-sm font-medium text-gray-600">
            {day}
          </div>
        ))}
        {renderDays()}
      </div>
    </div>
  );
}