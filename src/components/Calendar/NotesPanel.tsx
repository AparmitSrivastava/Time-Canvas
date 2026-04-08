import React from 'react';
import { CalendarEntry } from '../../types/calendar.types';
import { EntryInput } from './EntryInput';
import { EntryCard } from './EntryCard';

interface NotesPanelProps {
  entries: CalendarEntry[];
  startDate: Date | null;
  endDate: Date | null;
  onAddEntry: (type: "note" | "milestone", content: string) => void;
}

export const NotesPanel: React.FC<NotesPanelProps> = ({ 
  entries, startDate, endDate, onAddEntry 
}) => {
  // Sort or split them natively based on structural assignment rules
  const notes = entries.filter(e => e.type === 'note');
  const milestones = entries.filter(e => e.type === 'milestone');

  return (
    <div className="mt-1 flex flex-col">
      <h3 className="text-[18px] font-serif text-neutral-800 mb-3">Curation Notes</h3>

      <div className="flex flex-col relative pb-4">
        
        {/* Dynamic Context Panel floating seamlessly when active spans are rendered */}
        <EntryInput 
          startDate={startDate} 
          endDate={endDate} 
          onAdd={onAddEntry} 
        />

        {/* Dual Context Pillars matching visual baseline rules */}
        <div className="flex gap-4 items-stretch">
          
          {/* Notes Pipeline */}
          <div className="w-1/2 flex flex-col gap-3 pr-1">
            {notes.length === 0 ? (
              <p className="text-[8px] font-bold uppercase tracking-widest text-neutral-400 p-2 opacity-60">
                No notes found. Select a date above to spin up a curation thought.
              </p>
            ) : (
              notes.map(note => <EntryCard key={note.id} entry={note} />)
            )}
          </div>

          {/* Milestones Dashboard */}
          <div className="w-1/2 bg-[#F0F2F5] rounded-xl py-4 px-5 border border-[#EAECEF] flex flex-col shadow-inner">
            <p className="text-[8px] font-bold tracking-[0.2em] text-[#A6ADB5] uppercase mb-4 text-center shadow-sm">
              Upcoming <br/> Milestones
            </p>
            
            <div className="flex flex-col gap-3 flex-1 overflow-y-auto custom-scrollbar pr-1">
              {milestones.length === 0 ? (
                <p className="text-[8px] font-bold text-center uppercase tracking-widest text-neutral-400 opacity-60 mt-2">
                  Timeline Clear
                </p>
              ) : (
                milestones.map(milestone => <EntryCard key={milestone.id} entry={milestone} />)
              )}
            </div>
            
            <div className="mt-8 pt-5 border-t border-neutral-200/60 pb-1 flex justify-between">
              <span className="text-neutral-300 text-[9px] font-bold tracking-widest uppercase">
                {milestones.length} logged
              </span>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};
