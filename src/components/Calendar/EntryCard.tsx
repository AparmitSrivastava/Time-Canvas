import React from 'react';
import { format, parseISO } from 'date-fns';
import { CalendarEntry } from '../../types/calendar.types';

interface EntryCardProps {
  entry: CalendarEntry;
}

export const EntryCard: React.FC<EntryCardProps> = ({ entry }) => {
  const isNote = entry.type === 'note';
  
  // Safely extract the date mapping falling back to legacy key or skipping
  const rawStart = entry.startDate || (entry as any).date;
  if (!rawStart) return null;

  const start = parseISO(rawStart);
  const end = entry.endDate ? parseISO(entry.endDate) : null;
  
  let dateString = format(start, 'MMM do');
  if (end) {
    dateString += ` - ${format(end, 'MMM do')}`;
  }

  // Pure Curation Note Variant
  if (isNote) {
    return (
      <div className="bg-[#F0F2F5] p-4 rounded-xl border border-[#EAECEF] flex flex-col hover:shadow-sm transition-shadow">
        <p className="text-[8px] font-bold tracking-[0.18em] text-[#A6ADB5] uppercase mb-4 shadow-sm border-l-2 pl-2 border-neutral-300">
          {dateString} Entry
        </p>
        <p className="text-neutral-600 leading-[1.85] italic text-[11px] whitespace-pre-wrap">
          "{entry.content}"
        </p>
      </div>
    );
  }

  // Milestone Variant
  return (
    <div className="flex items-start gap-4 hover:translate-x-[2px] transition-transform">
      <span className="text-[#A6ADB5] text-[20px] font-serif leading-none mt-1 opacity-70">
        {format(start, 'dd MMM')}
      </span>
      <div className="flex-1">
        <h4 className="text-[11px] font-bold text-neutral-800 mb-1 leading-snug break-words pr-2">
          {entry.content}
        </h4>
        <p className="text-[8px] font-bold text-neutral-400 leading-tight uppercase tracking-[0.1em]">
          {end ? `Ends ${format(end, 'MMM do')}` : 'Milestone Check'}
        </p>
      </div>
    </div>
  );
};
