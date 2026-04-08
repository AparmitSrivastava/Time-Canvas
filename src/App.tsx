import React from 'react';
import { TopNav } from './components/Layout/TopNav';
import { Calendar } from './components/Calendar/Calendar';

export default function App() {
  return (
    <div 
      className="h-screen py-4 px-4 lg:py-6 lg:px-8 font-sans selection:bg-[#18669F]/20 flex items-center justify-center overflow-hidden"
      style={{
        backgroundColor: '#26272B',
        backgroundImage: 'radial-gradient(#3a3b40 1px, transparent 1px)',
        backgroundSize: '20px 20px'
      }}
    >
      <div className="w-full max-w-[1100px] h-full flex shadow-2xl rounded-[32px] bg-white ring-8 ring-white/5 overflow-hidden">
        <div className="flex-1 flex flex-col min-w-0 bg-white">
          <TopNav />
          <div className="flex-1 overflow-hidden relative">
             <Calendar />
          </div>
        </div>
      </div>
    </div>
  );
}
