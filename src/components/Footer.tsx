import { DATA } from '../data';

export default function Footer() {
  return (
    <footer className="border-t border-circuit/30 bg-void relative z-10">
      <div className="px-6 md:px-12 max-w-[1600px] mx-auto w-full py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <div className="flex items-center gap-4">
           <div className="w-8 h-[1px] bg-cyan/50"></div>
           <p className="font-mono text-[9px] text-cyan/70 tracking-widest uppercase">
             © {new Date().getFullYear()} {DATA.name}. SYS_VERSION 2.4.
           </p>
        </div>
        
        <div className="flex items-center gap-4">
          <a href="#top" className="font-mono text-[9px] text-hud/50 hover:text-cyan tracking-widest uppercase transition-colors cursor-none flex items-center gap-2">
            [ RETURN_TO_TOP ] <span className="text-cyan rotate-[-90deg]">→</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
