import React from 'react';
import { CalendarCell } from './CalendarCell';
import { DayData } from '../../types/calendar.types';

const WEEKDAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

interface CalendarGridProps {
  days: DayData[];
  startDate: Date | null;
  endDate: Date | null;
  hoverDate: Date | null;
  onSelectDate: (date: Date) => void;
  onHoverDate: (date: Date | null) => void;
}

export const CalendarGrid: React.FC<CalendarGridProps> = ({ 
  days, startDate, endDate, hoverDate, onSelectDate, onHoverDate 
}) => {
  return (
    <div className="w-full flex-shrink-0" onMouseLeave={() => onHoverDate(null)}>
      <div className="grid grid-cols-7 mb-2">
        {WEEKDAYS.map((day) => (
          <div key={day} className="text-[8px] font-bold text-neutral-400 tracking-[0.2em] text-center uppercase">
            {day}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-y-[2px]">
        {days.map((day, idx) => (
          <CalendarCell 
            key={idx} 
            day={day} 
            startDate={startDate}
            endDate={endDate}
            hoverDate={hoverDate}
            onClick={() => onSelectDate(day.date)}
            onHover={() => onHoverDate(day.date)}
          />
        ))}
      </div>
    </div>
  );
};
