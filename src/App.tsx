import { TopNav } from './components/Layout/TopNav';
import { Calendar } from './components/Calendar/Calendar';

export default function App() {
  return (
    <div 
      className="min-h-screen lg:h-screen py-0 lg:py-6 lg:px-8 font-sans selection:bg-[#18669F]/20 flex items-start lg:items-center justify-center overflow-x-hidden lg:overflow-hidden"
      style={{
        backgroundColor: '#26272B',
        backgroundImage: 'radial-gradient(#3a3b40 1px, transparent 1px)',
        backgroundSize: '20px 20px'
      }}
    >
      <div className="w-full max-w-[1000px] min-h-screen lg:min-h-0 lg:h-full flex flex-col lg:flex-row shadow-2xl lg:rounded-[32px] bg-white lg:ring-8 lg:ring-white/5 overflow-hidden">
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
