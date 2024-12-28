import React from 'react';

interface GoogleCalendarProps {
  height?: string;
  width?: string;
}

export default function GoogleCalendar({ height = '600px', width = '100%' }: GoogleCalendarProps) {
  const calendarSrc = "https://calendar.google.com/calendar/embed?" + 
    "src=YOUR_CALENDAR_ID" + // Replace with actual calendar ID
    "&ctz=local" +
    "&wkst=1" +
    "&bgcolor=%23ffffff" +
    "&showTitle=0" +
    "&showNav=1" +
    "&showDate=1" +
    "&showPrint=0" +
    "&showTabs=1" +
    "&showCalendars=0" +
    "&showTz=1";

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <iframe
        src={calendarSrc}
        style={{ borderWidth: 0 }}
        width={width}
        height={height}
        frameBorder="0"
        scrolling="no"
        className="w-full"
        title="Google Calendar"
      />
    </div>
  );
}