import React, { useState } from 'react';
import { MonthCover } from './MonthCover';
import { CalendarHeader } from './CalendarHeader';
import { CalendarGrid } from './CalendarGrid';
import { NotesPanel } from './NotesPanel';
import { useCalendar } from '../../hooks/useCalendar';
import { getCalendarDays, getMonthName } from '../../utils/calendarHelpers';

export const Calendar: React.FC = () => {
  const { state, entries, addEntry, nextMonth, prevMonth, selectDate, handleHover } = useCalendar();
  const [flipState, setFlipState] = useState<'idle' | 'flipping-up' | 'dropping-down'>('idle');
  const [flipDir, setFlipDir] = useState<'next' | 'prev'>('next');
  
  const days = getCalendarDays(state.currentDate);
  const currentMonthName = getMonthName(state.currentDate);

  // Cinematic two-part physical hinge flip.
  const handleFlipTransition = (direction: 'next' | 'prev') => {
    if (flipState !== 'idle') return;
    setFlipDir(direction);
    setFlipState('flipping-up');
    
    // Stage 1: Wait for 400ms as page physically swings completely upward against screen boundary
    setTimeout(() => {
      if (direction === 'next') nextMonth();
      else prevMonth();
      
      // Stage 2: Suspend transition entirely. Pre-load the new page rotated instantaneously over the wire.
      setFlipState('dropping-down');
      
      // Stage 3: Provide DOM tick clearance, then organically drop the new page via gravity downwards to 0deg.
      requestAnimationFrame(() => {
        setTimeout(() => {
          setFlipState('idle');
        }, 50);
      });
    }, 450);
  };

  const getTransformStyle = (): React.CSSProperties => {
    if (flipState === 'flipping-up') {
      return { 
        transform: flipDir === 'next' ? 'perspective(2500px) rotateX(90deg)' : 'perspective(2500px) rotateX(-90deg)', 
        opacity: 0, 
        transition: 'all 450ms cubic-bezier(0.4, 0, 1, 1)' 
      };
    }
    if (flipState === 'dropping-down') {
      return { 
        transform: flipDir === 'next' ? 'perspective(2500px) rotateX(-90deg)' : 'perspective(2500px) rotateX(90deg)', 
        opacity: 0, 
        transition: 'none' 
      };
    }
    return { 
      transform: 'perspective(2500px) rotateX(0deg)', 
      opacity: 1, 
      transition: 'all 550ms cubic-bezier(0, 0, 0.2, 1)' 
    };
  };

  return (
    <div 
      className="flex h-full px-8 pb-6 gap-8 origin-top transform-gpu"
      style={getTransformStyle()}
    >
      {/* Left huge illustration */}
      <div className="w-[42%] flex-shrink-0 relative shadow-sm h-full">
        <MonthCover monthName={currentMonthName} />
      </div>
      
      {/* Right Content Stream */}
      <div className="flex-1 flex flex-col pt-1 pr-2 overflow-y-auto custom-scrollbar">
        <CalendarHeader 
          title="Timeline"
          subtitle={`${currentMonthName} / curated view`}
          onNext={() => handleFlipTransition('next')}
          onPrev={() => handleFlipTransition('prev')}
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
