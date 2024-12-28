import React from 'react';
import CalendarHeader from '../components/Calendar/CalendarHeader';
import CalendarLayout from '../components/Calendar/CalendarLayout';

export default function Calendar() {
  return (
    <div className="space-y-6">
      <CalendarHeader 
        title="Calendar" 
        subtitle="Manage your schedule and upcoming events"
      />
      <CalendarLayout />
    </div>
  );
}