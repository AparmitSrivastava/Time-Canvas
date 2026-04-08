import React, { useState } from 'react';
import { format } from 'date-fns';
import { clsx } from 'clsx';

interface EntryInputProps {
  startDate: Date | null;
  endDate: Date | null;
  onAdd: (type: "note" | "milestone", content: string) => void;
}

export const EntryInput: React.FC<EntryInputProps> = ({ startDate, endDate, onAdd }) => {
  const [type, setType] = useState<"note" | "milestone">("note");
  const [content, setContent] = useState("");

  if (!startDate) return null;

  let headerText = format(startDate, 'MMM do');
  if (endDate) {
    headerText += ` - ${format(endDate, 'MMM do')}`;
  }

  const handleSubmit = () => {
    if (!content.trim()) return;
    onAdd(type, content.trim());
    setContent(""); // reset internal form
  };

  return (
    <div className="flex-shrink-0 w-full bg-[#FAFAFA] border border-[#EEEEF0] rounded-xl p-4 mb-4 shadow-sm flex flex-col gap-3 animate-in fade-in slide-in-from-top-2 duration-300 relative z-10">
      <div className="flex items-center justify-between">
        <h4 className="text-[12px] font-bold tracking-widest text-[#18669F] uppercase">{headerText}</h4>

        {/* Toggle between Note vs Milestone */}
        <div className="flex bg-[#EAECEF] rounded-[6px] p-1">
          <button 
            onClick={() => setType('note')}
            className={clsx(
              "px-3 py-1 text-[8px] font-bold uppercase tracking-widest rounded-[4px] transition-all",
              type === 'note' ? "bg-white shadow-sm text-neutral-800" : "text-neutral-400 hover:text-neutral-600"
            )}
          >
            Note
          </button>
          <button 
            onClick={() => setType('milestone')}
            className={clsx(
              "px-3 py-1 text-[8px] font-bold uppercase tracking-widest rounded-[4px] transition-all",
              type === 'milestone' ? "bg-white shadow-sm text-neutral-800" : "text-neutral-400 hover:text-neutral-600"
            )}
          >
            Milestone
          </button>
        </div>
      </div>

      <textarea 
        autoFocus
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Spin up a new thought..."
        className="w-full bg-transparent resize-none outline-none text-[13px] leading-relaxed text-neutral-800 placeholder-neutral-400 min-h-[40px]"
        spellCheck={false}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit();
          }
        }}
      />

      <div className="flex justify-end mt-1">
        <button 
          onClick={handleSubmit}
          disabled={!content.trim()}
          className="bg-[#18669F] text-white px-5 py-2.5 rounded-[4px] text-[8px] font-bold tracking-[0.15em] uppercase shadow-sm hover:translate-y-[-1px] hover:shadow-md hover:bg-[#13507C] focus:bg-[#0E3D5C] disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-none disabled:cursor-not-allowed transition-all"
        >
          Add {type}
        </button>
      </div>
    </div>
  );
};
