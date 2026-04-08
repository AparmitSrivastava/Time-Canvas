import { startOfMonth, endOfMonth, startOfWeek, endOfWeek, eachDayOfInterval, format, isSameMonth, isToday } from 'date-fns';
import { DayData } from '../types/calendar.types';

export const getCalendarDays = (currentDate: Date): DayData[] => {
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(monthStart);
  
  // Get grid boundaries (Sunday to Saturday)
  const startDate = startOfWeek(monthStart); 
  const endDate = endOfWeek(monthEnd);

  const days = eachDayOfInterval({ start: startDate, end: endDate });

  return days.map(date => ({
    date,
    isCurrentMonth: isSameMonth(date, monthStart),
    isToday: isToday(date),
    events: [], // To be extended for real event data later
  }));
};

export const getMonthName = (date: Date): string => {
  return format(date, 'MMMM');
};
