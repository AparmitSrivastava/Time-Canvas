import React from 'react';
import { Search, Settings, User } from 'lucide-react';

export const TopNav: React.FC = () => {
  return (
    <div className="flex items-center justify-between px-10 pt-6 pb-2 bg-white rounded-tr-[32px] flex-shrink-0">
      <div className="flex items-end gap-10">
        <h1 className="text-[26px] font-serif tracking-tight text-neutral-900 leading-none">Time Canvas</h1>
        <div className="flex gap-8 text-[11px] font-semibold tracking-wider text-neutral-400 mb-1 relative top-[1px]">
          <NavLink label="Gallery" />
          <NavLink label="Moments" isActive />
          <NavLink label="Curations" />
        </div>
      </div>
      <div className="flex items-center gap-6 text-neutral-400">
        <button className="hover:text-neutral-800 transition-colors"><Search size={16} strokeWidth={2.5} /></button>
        <button className="hover:text-neutral-800 transition-colors"><Settings size={16} strokeWidth={2.5} /></button>
        <button className="hover:text-neutral-800 transition-colors"><User size={16} strokeWidth={2.5} /></button>
      </div>
    </div>
  );
};

const NavLink = ({ label, isActive }: { label: string, isActive?: boolean }) => (
  <div className={`cursor-pointer pb-1 relative transition-colors ${isActive ? 'text-[#18669F]' : 'hover:text-neutral-700'}`}>
    {label}
    {isActive && (
      <div className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-[#18669F] rounded-full" />
    )}
  </div>
);
