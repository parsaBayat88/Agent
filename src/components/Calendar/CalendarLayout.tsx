import React from 'react';
import CalendarGrid from './CalendarGrid';
import UpcomingEvents from './UpcomingEvents';

export default function CalendarLayout() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      <div className="lg:col-span-3">
        <CalendarGrid />
      </div>
      <div className="lg:col-span-1">
        <UpcomingEvents />
      </div>
    </div>
  );
}