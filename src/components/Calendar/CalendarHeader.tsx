import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CalendarHeaderProps {
  title: string;
  subtitle: string;
  onNext: () => void;
  onPrev: () => void;
}

export const CalendarHeader: React.FC<CalendarHeaderProps> = ({ title, subtitle, onNext, onPrev }) => {
  return (
    <div className="flex items-start justify-between mb-4 flex-shrink-0">
      <div>
        <h2 className="text-[24px] lg:text-[32px] font-serif text-neutral-800 leading-tight mb-1">{title}</h2>
        <p className="text-[9px] lg:text-[10px] text-neutral-400 font-bold tracking-[0.1em] uppercase">{subtitle}</p>
      </div>

      <div className="flex items-center gap-2 lg:gap-4 pt-1 lg:pt-3 pr-0 lg:pr-2">
        <button onClick={onPrev} className="text-neutral-800 hover:opacity-70 transition-opacity hover:bg-gray-100 rounded-full p-2">
          <ChevronLeft size={22} strokeWidth={2.5} />
        </button>
        <button onClick={onNext} className="text-neutral-800 hover:opacity-70 transition-opacity hover:bg-gray-100 rounded-full p-2">
          <ChevronRight size={22} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
};
