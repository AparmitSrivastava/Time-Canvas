import React from 'react';
import { MonthCover } from './MonthCover';
import { CalendarHeader } from './CalendarHeader';
import { CalendarGrid } from './CalendarGrid';
import { NotesPanel } from './NotesPanel';
import { useCalendar } from '../../hooks/useCalendar';
import { getCalendarDays, getMonthName } from '../../utils/calendarHelpers';

export const Calendar: React.FC = () => {
  const { state, entries, addEntry, nextMonth, prevMonth, selectDate, handleHover } = useCalendar();
  const days = getCalendarDays(state.currentDate);
  const currentMonthName = getMonthName(state.currentDate);

  return (
    <div className="flex h-full px-8 pb-6 gap-8">
      {/* Left huge illustration */}
      <div className="w-[42%] flex-shrink-0 relative shadow-sm h-full">
        <MonthCover monthName={currentMonthName} />
      </div>
      
      {/* Right Content Stream */}
      <div className="flex-1 flex flex-col pt-1 pr-2 overflow-y-auto custom-scrollbar">
        <CalendarHeader 
          title="Timeline"
          subtitle={`${currentMonthName} / curated view`}
          onNext={nextMonth}
          onPrev={prevMonth}
        />
        <div className="mb-2">
          <CalendarGrid 
            days={days} 
            startDate={state.startDate}
            endDate={state.endDate}
            hoverDate={state.hoverDate}
            onSelectDate={selectDate} 
            onHoverDate={handleHover}
          />
        </div>
        
        <NotesPanel 
          entries={entries}
          startDate={state.startDate}
          endDate={state.endDate}
          onAddEntry={addEntry}
        />
      </div>
    </div>
  );
};
