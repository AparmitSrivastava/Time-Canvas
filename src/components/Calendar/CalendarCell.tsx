import React from 'react';
import { clsx } from 'clsx';
import { format, isSameDay, isWithinInterval, isBefore, isAfter } from 'date-fns';
import { DayData } from '../../types/calendar.types';

interface CalendarCellProps {
  day: DayData;
  startDate: Date | null;
  endDate: Date | null;
  hoverDate: Date | null;
  onClick: () => void;
  onHover: () => void;
}

export const CalendarCell: React.FC<CalendarCellProps> = ({ 
  day, startDate, endDate, hoverDate, onClick, onHover 
}) => {
  if (!day.isCurrentMonth) {
    return <div className="h-[44px]" />;
  }

  const dateNum = format(day.date, 'dd');
  
  // Boundary calculations
  const isStart = startDate ? isSameDay(day.date, startDate) : false;
  const isEnd = endDate ? isSameDay(day.date, endDate) : false;
  
  // Determine if it fills the middle
  let isInRange = false;
  if (startDate && endDate) {
    isInRange = isWithinInterval(day.date, { start: startDate, end: endDate });
  } else if (startDate && hoverDate) {
    const rangeStart = isBefore(startDate, hoverDate) ? startDate : hoverDate;
    const rangeEnd = isBefore(startDate, hoverDate) ? hoverDate : startDate;
    isInRange = isWithinInterval(day.date, { start: rangeStart, end: rangeEnd });
  }

  // Visual layout properties 
  const hasDot = ['2', '7', '11'].includes(format(day.date, 'd'));
  
  // Connectors extending outward logically depending on hover and anchor layout
  const extendRight = !!startDate && isStart && (
    (endDate && isBefore(startDate, endDate)) || 
    (!endDate && hoverDate && isBefore(startDate, hoverDate))
  );
  const extendLeft = !!startDate && !!endDate && isEnd && isBefore(startDate, endDate);
  const hoverExtendLeft = !!startDate && !!hoverDate && !endDate && isStart && isAfter(startDate, hoverDate);

  const showHighlightBG = isInRange && !isStart && !isEnd;

  return (
    <div
      onClick={onClick}
      onMouseEnter={onHover}
      className="h-[44px] flex flex-col items-center cursor-pointer group relative"
    >
      {/* Dynamic Range Background Blocks */}
      {showHighlightBG && (
        <div className="absolute top-1 bottom-1 -left-1 -right-1 bg-[#18669F]/[0.05] transition-all duration-200 rounded-sm" />
      )}
      
      {/* Bridging End Caps */}
      {(extendRight || extendLeft || hoverExtendLeft) && (
        <div className={clsx(
          "absolute top-1 bottom-1 bg-[#18669F]/[0.05] transition-all duration-200 z-0",
          extendRight && "left-1/2 -right-1 rounded-l-[14px]",
          extendLeft && "-left-1 right-1/2 rounded-r-[14px]",
          hoverExtendLeft && "-left-1 right-1/2 rounded-r-[14px]"
        )} />
      )}
      
      {/* Internal Typography Container */}
      <div className="flex flex-col items-center z-10 w-full h-full pt-[4px]">
        {/* Core Date Numerical Identity */}
        <span
          className={clsx(
            "text-[12px] tracking-wide font-medium flex items-center justify-center rounded-full transition-all duration-300 w-[24px] h-[24px]",
            (isStart || isEnd) ? "bg-[#18669F] text-white font-bold shadow-md shadow-[#18669F]/30 scale-105" 
              : isInRange ? "text-[#18669F] scale-105 bg-[#18669F]/0" 
              : day.isToday ? "text-[#18669F] font-bold ring-[1.5px] ring-[#18669F]/30 bg-[#18669F]/0" 
              : "text-neutral-500 group-hover:text-neutral-900 group-hover:bg-neutral-100 bg-transparent"
          )}
        >
          {dateNum}
        </span>
        
        {/* Isolated Indicators */}
        {hasDot && !day.isToday && !(isStart || isEnd) && (
          <div className="w-[3px] h-[3px] bg-[#18669F]/40 rounded-full mt-1 z-10 transition-colors"></div>
        )}
        {day.isToday && !(isStart || isEnd) && (
          <div className="w-[3px] h-[3px] bg-[#18669F] rounded-full mt-1 z-10 transition-colors"></div>
        )}

        {/* Temporary Labels - hidden if overlapping full scale selections */}
        {!isInRange && (
          <div className="mt-1 flex flex-col items-center w-full min-h-[16px] z-10 pointer-events-none fade-in">
            {day.isToday && !isStart && !isEnd && (
              <div className="bg-[#18669F] text-white text-[7px] font-bold px-3 py-1 rounded-[3px] tracking-widest shadow-sm">
                TODAY
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
