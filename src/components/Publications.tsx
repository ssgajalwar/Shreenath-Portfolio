import { DATA } from '../data';

export default function Publications() {
  if (!DATA.publications || DATA.publications.length === 0) return null;

  return (
    <section className="px-6 md:px-12 max-w-[1600px] mx-auto w-full py-24 border-t border-circuit/30">
      <div className="flex items-center gap-4 mb-16">
        <div className="w-12 h-[2px] bg-cyan"></div>
        <h2 className="font-mono text-sm md:text-base text-cyan tracking-widest uppercase font-bold">
          [ RESEARCH_DATA ]
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {DATA.publications.map((pub, idx) => (
          <div key={idx} className="border border-circuit/50 bg-steel/10 p-6 md:p-8 hover:border-cyan/50 transition-colors group cursor-none flex flex-col justify-between">
             <div>
                <div className="flex justify-between items-start mb-4">
                   <div className="font-mono text-[9px] text-amber tracking-widest uppercase">
                     {pub.date} // VOL.{pub.volume} ISS.{pub.issue}
                   </div>
                   <div className="w-2 h-2 bg-circuit group-hover:bg-cyan transition-colors animate-pulse"></div>
                </div>
                
                <h3 className="font-display text-xl font-bold text-hud mb-4 group-hover:text-cyan transition-colors">
                  {pub.title}
                </h3>
                
                <div className="font-mono text-[10px] text-cyan/70 tracking-widest uppercase mb-6 px-3 py-1 bg-cyan/5 border border-cyan/20 w-fit">
                  {pub.journal}
                </div>
                
                <p className="font-sans text-sm text-hud/70 leading-relaxed mb-8">
                  {pub.description}
                </p>
             </div>
             
             {pub.doi && (
                <a 
                  href={pub.doi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[10px] text-hud/50 hover:text-cyan tracking-widest uppercase flex items-center gap-2 w-fit border border-circuit/50 hover:border-cyan bg-steel/30 px-4 py-2 transition-all group/btn"
                >
                  <span className="w-1.5 h-1.5 bg-current inline-block group-hover/btn:animate-ping"></span>
                  EXTRACT_FILE
                </a>
             )}
          </div>
        ))}
      </div>
    </section>
  );
}
