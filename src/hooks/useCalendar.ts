import { useState, useEffect } from 'react';
import { addMonths, subMonths, isBefore } from 'date-fns';
import { CalendarState, CalendarEntry } from '../types/calendar.types';

export const useCalendar = (initialDate = new Date()) => {
  const [state, setState] = useState<CalendarState>({
    currentDate: initialDate,
    startDate: null,
    endDate: null,
    hoverDate: null,
  });

  const [entries, setEntries] = useState<CalendarEntry[]>(() => {
    const saved = localStorage.getItem('calendar-entries');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      } catch (e) {
        console.error("Failed to parse calendar entries");
      }
    }
    return [];
  });

  // Sync to persistence actively
  useEffect(() => {
    localStorage.setItem('calendar-entries', JSON.stringify(entries));
  }, [entries]);

  const addEntry = (type: "note" | "milestone", content: string) => {
    if (!state.startDate) return;

    const newEntry: CalendarEntry = {
      id: crypto.randomUUID ? crypto.randomUUID() : (Date.now() + Math.random().toString(36).substring(2)),
      startDate: state.startDate.toISOString(),
      endDate: state.endDate ? state.endDate.toISOString() : undefined,
      type,
      content
    };

    // Prepend new logic blocks chronologically upwards
    setEntries(prev => [newEntry, ...prev]);
  };

  const nextMonth = () => {
    setState((prev) => ({
      ...prev,
      currentDate: addMonths(prev.currentDate, 1),
    }));
  };

  const prevMonth = () => {
    setState((prev) => ({
      ...prev,
      currentDate: subMonths(prev.currentDate, 1),
    }));
  };

  const selectDate = (date: Date) => {
    setState((prev) => {
      if (!prev.startDate || (prev.startDate && prev.endDate)) {
         return { ...prev, startDate: date, endDate: null };
      }

      if (isBefore(date, prev.startDate)) {
         return { ...prev, startDate: date, endDate: prev.startDate };
      } else {
         return { ...prev, endDate: date };
      }
    });
  };

  const handleHover = (date: Date | null) => {
    setState((prev) => ({ ...prev, hoverDate: date }));
  };

  return {
    state,
    entries,
    addEntry,
    nextMonth,
    prevMonth,
    selectDate,
    handleHover,
  };
};
