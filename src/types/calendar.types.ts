export interface CalendarEvent {
  id: string;
  title: string;
  date: Date;
  color?: string;
}

export interface DayData {
  date: Date;
  isCurrentMonth: boolean;
  isToday: boolean;
  events: CalendarEvent[];
}

export interface CalendarState {
  currentDate: Date;
  startDate: Date | null;
  endDate: Date | null;
  hoverDate: Date | null;
}

export interface CalendarEntry {
  id: string;
  startDate: string; // Stored as ISO string format
  endDate?: string;
  type: "note" | "milestone";
  content: string;
}
