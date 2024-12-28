export interface CalendarEvent {
  id: number;
  title: string;
  date: Date;
  time: string;
  location: string;
  type: 'viewing' | 'meeting' | 'call';
}

export interface DayEvent {
  hasViewing: boolean;
  hasMeeting: boolean;
  hasCall: boolean;
  events: CalendarEvent[];
}