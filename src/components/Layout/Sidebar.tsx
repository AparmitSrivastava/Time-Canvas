import React from 'react';
import { Calendar as CalendarIcon, BookOpen, Archive, Image as ImageIcon } from 'lucide-react';

export const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-[#F8F9FB] flex flex-col h-full rounded-l-[32px] border-r border-[#EEEEF0] p-7 flex-shrink-0">
      {/* Profile */}
      <div className="flex items-center gap-3 mb-12 pt-2">
        <img src="https://i.pravatar.cc/150?u=a04258" alt="Profile" className="w-10 h-10 rounded-md shadow-sm border border-neutral-200" />
        <div>
          <h3 className="text-sm font-bold text-neutral-800 leading-none mb-1.5">The Curator</h3>
          <p className="text-[9px] text-neutral-400 font-bold tracking-widest uppercase">Editorial View</p>
        </div>
      </div>

      {/* Nav Links */}
      <div className="flex flex-col gap-1.5">
        <NavItem icon={<CalendarIcon size={16} />} label="OVERVIEW" />
        <NavItem icon={<BookOpen size={16} />} label="TIMELINE" isActive />
        <NavItem icon={<Archive size={16} />} label="ARCHIVES" />
        <NavItem icon={<ImageIcon size={16} />} label="EXHIBITS" />
      </div>

      {/* Action Button */}
      <div className="mt-auto pb-4">
        <button className="w-full bg-[#18669F] text-white py-3.5 rounded-sm text-[10px] font-bold tracking-widest uppercase shadow-sm hover:bg-[#13507C] transition-colors">
          NEW ENTRY
        </button>
      </div>
    </div>
  );
};

const NavItem = ({ icon, label, isActive }: { icon: React.ReactNode, label: string, isActive?: boolean }) => (
  <div className={`flex items-center gap-3.5 px-4 py-3.5 rounded-sm cursor-pointer transition-colors ${isActive ? 'bg-white text-[#18669F] shadow-[0_2px_10px_rgb(0,0,0,0.03)] font-bold' : 'text-neutral-400 hover:bg-neutral-100/50 hover:text-neutral-800 font-bold'}`}>
    {icon}
    <span className="text-[10px] tracking-widest uppercase">{label}</span>
  </div>
);
