import { useEffect, useState } from 'react';
import { DATA } from '../data';

const getPowerLevel = (str: string) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return 65 + (Math.abs(hash) % 35);
};

const PowerBar = ({ label, percentage }: { label: string, percentage: number }) => {
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(percentage);
    }, 500);
    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <div className="flex flex-col gap-1 mb-4">
      <div className="flex justify-between items-end">
        <span className="font-mono text-[10px] text-hud/80 uppercase tracking-widest">{label}</span>
        <span className="font-mono text-[9px] text-cyan/70">{Math.round(width)}%</span>
      </div>
      <div className="h-1.5 w-full bg-steel border border-circuit/30 relative overflow-hidden">
        <div 
          className="absolute top-0 left-0 h-full bg-cyan transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        >
          <div className="absolute top-0 right-0 w-4 h-full bg-white/50 blur-[2px]"></div>
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_90%,var(--color-void)_90%)] bg-[size:10px_100%]"></div>
      </div>
    </div>
  );
};

export default function Skills() {
  return (
    <section id="skills" className="px-6 md:px-12 max-w-[1600px] mx-auto w-full py-24 border-t border-circuit/30">
      <div className="flex items-center gap-4 mb-12">
        <div className="w-12 h-[2px] bg-cyan"></div>
        <h2 className="font-mono text-sm md:text-base text-cyan tracking-widest uppercase font-bold">
          [ ARSENAL_READOUT ]
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        {DATA.skills.map((group, idx) => (
          <div key={idx} className="relative border border-circuit/40 bg-steel/10 p-6 md:p-8">
            <div className="absolute top-0 left-4 px-2 -translate-y-1/2 bg-void font-mono text-[10px] text-amber tracking-widest uppercase border border-circuit/40">
              SYS.{group.category.replace(/[^a-zA-Z0-9]/g, '_').toUpperCase()}
            </div>
            
            <div className="absolute top-2 right-2 flex gap-1">
               <div className="w-1 h-1 bg-cyan/50"></div>
               <div className="w-1 h-1 bg-cyan/50"></div>
               <div className="w-1 h-1 bg-cyan"></div>
            </div>

            <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-2">
              {group.items.map((skill, sIdx) => (
                <PowerBar key={sIdx} label={skill} percentage={getPowerLevel(skill)} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
