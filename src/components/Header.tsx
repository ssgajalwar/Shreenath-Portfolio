import { useState, useEffect } from 'react';
import { DATA } from '../data';

export default function Header() {
  const [time, setTime] = useState(new Date().toISOString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toISOString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 pointer-events-none p-4 md:p-6 max-w-[1920px] mx-auto left-1/2 -translate-x-1/2">
      <div className="flex justify-between items-start">
        {/* Left Target Frame */}
        <div className="pointer-events-auto flex flex-col gap-1">
          <div className="bg-steel/80 backdrop-blur-md border-l-2 border-cyan px-4 py-2 flex items-center gap-4 clip-bracket-bottom-right cursor-none">
            <div className="relative flex items-center justify-center w-6 h-6 rounded-full border border-cyan/50 bg-cyan/10">
              <div className="w-1.5 h-1.5 bg-cyan rounded-full animate-pulse shadow-[0_0_8px_rgba(79,216,232,0.8)]"></div>
              <div className="absolute inset-0 border border-t-cyan border-r-transparent border-b-cyan/30 border-l-transparent rounded-full animate-[spin_2s_linear_infinite]"></div>
            </div>
            
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm md:text-base tracking-widest leading-none text-hud uppercase">
                {DATA.name.split(' ')[0]}_OS
              </span>
              <span className="font-mono text-[8px] md:text-[10px] text-cyan/70 tracking-widest mt-1 uppercase">
                UNIT_STATUS: <span className="text-amber">ONLINE</span>
              </span>
            </div>
          </div>
        </div>

        {/* Center Nav Panel (Desktop) */}
        <nav className="pointer-events-auto hidden md:flex items-center gap-1 bg-steel/60 backdrop-blur-md border-y border-cyan/30 px-8 py-1">
          {[
            { label: 'DIAGNOSTICS', href: '#about' },
            { label: 'ARSENAL', href: '#skills' },
            { label: 'LOGS', href: '#projects' },
            { label: 'COMMS', href: '#contact' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative px-4 py-2 font-mono text-[10px] text-hud/70 hover:text-cyan tracking-widest uppercase cursor-none group"
            >
              <span className="relative z-10 font-bold">{item.label}</span>
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-cyan transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </a>
          ))}
        </nav>

        {/* Right Telemetry Panel */}
        <div className="pointer-events-auto flex flex-col gap-1 items-end">
          <div className="bg-steel/80 backdrop-blur-md border-r-2 border-amber px-4 py-2 flex items-center gap-4 clip-bracket-top-left cursor-none">
            <div className="flex flex-col text-right">
              <span className="font-mono text-xs md:text-sm font-bold text-amber tracking-widest">
                {time.split('T')[1].substring(0, 8)} Z
              </span>
              <span className="font-mono text-[8px] text-cyan/70 tracking-widest mt-1">SYS_CLOCK</span>
            </div>
            
            {/* Audio Waveform Mock */}
            <div className="flex items-end gap-[2px] h-5 opacity-70">
              <div className="w-[2px] bg-cyan animate-[pulse_0.8s_ease-in-out_infinite] h-2"></div>
              <div className="w-[2px] bg-cyan animate-[pulse_1.2s_ease-in-out_infinite] h-4"></div>
              <div className="w-[2px] bg-cyan animate-[pulse_0.5s_ease-in-out_infinite] h-5"></div>
              <div className="w-[2px] bg-cyan animate-[pulse_1.5s_ease-in-out_infinite] h-3"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
