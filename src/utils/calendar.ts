import { CalendarEvent, DayEvent } from '../types/calendar';

export const getEventsForDate = (events: CalendarEvent[], date: Date): DayEvent => {
  const dayEvents = events.filter(event => 
    event.date.getDate() === date.getDate() &&
    event.date.getMonth() === date.getMonth() &&
    event.date.getFullYear() === date.getFullYear()
  );

  return {
    hasViewing: dayEvents.some(event => event.type === 'viewing'),
    hasMeeting: dayEvents.some(event => event.type === 'meeting'),
    hasCall: dayEvents.some(event => event.type === 'call'),
    events: dayEvents,
  };
};