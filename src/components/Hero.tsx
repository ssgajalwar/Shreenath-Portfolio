import { DATA } from '../data';

export default function Hero() {
  const firstName = DATA.name.split(' ')[0];
  const lastName = DATA.name.split(' ')[1] || '';
  const tagline = "Building systems that think and scale.";

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-12 max-w-[1600px] mx-auto w-full">
      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-8 md:gap-0 mt-20">
        
        {/* Main Target ID */}
        <div className="flex flex-col relative group">
          <div className="absolute -inset-8 border border-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
             <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan/50"></div>
             <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan/50"></div>
             <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan/50"></div>
             <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan/50"></div>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 bg-amber animate-pulse"></span>
            <span className="font-mono text-[10px] md:text-xs text-amber tracking-widest uppercase">
              TARGET_ID // ACQUIRED
            </span>
          </div>
          
          <h1 className="font-display text-[12vw] md:text-[8vw] leading-[0.85] font-bold tracking-tighter uppercase text-hud relative">
            <span className="relative z-10">{firstName}</span>
            <span className="absolute -top-4 -right-8 font-mono text-sm text-cyan/50 rotate-90 origin-bottom-left">v_01</span>
          </h1>
          <h1 className="font-display text-[12vw] md:text-[8vw] leading-[0.85] font-bold tracking-tighter uppercase text-hud/40">
            {lastName}
          </h1>
        </div>

        {/* Telemetry Data */}
        <div className="flex flex-col gap-6 md:max-w-md border-l border-cyan/20 pl-6 relative">
          <div className="absolute top-0 left-0 w-[2px] h-8 bg-cyan"></div>
          
          <div>
            <div className="font-mono text-[10px] text-cyan/70 tracking-widest uppercase mb-1">DESIGNATION</div>
            <div className="font-display text-lg md:text-xl font-bold text-hud uppercase tracking-wide">
              {DATA.title}
            </div>
          </div>
          
          <div>
            <div className="font-mono text-[10px] text-cyan/70 tracking-widest uppercase mb-1">PRIMARY_DIRECTIVE</div>
            <div className="font-sans text-sm text-hud/70 leading-relaxed">
              {tagline}
            </div>
          </div>

          <div className="flex gap-4 mt-4">
            <a href="#projects" className="relative group px-6 py-3 bg-cyan/10 border border-cyan text-cyan font-mono text-[10px] tracking-widest uppercase cursor-none overflow-hidden flex items-center gap-2">
              <span className="absolute inset-0 bg-cyan/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
              <span className="relative z-10 font-bold">INITIALIZE_MODULES</span>
              <span className="w-1.5 h-1.5 bg-cyan rounded-full relative z-10"></span>
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="relative group px-6 py-3 bg-steel/50 border border-circuit hover:border-cyan text-hud/70 hover:text-cyan font-mono text-[10px] tracking-widest uppercase cursor-none transition-colors flex items-center gap-2">
              <span className="font-bold">EXTRACT_DATA [RESUME]</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
