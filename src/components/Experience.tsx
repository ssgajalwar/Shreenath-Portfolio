import { DATA } from '../data';

export default function Experience() {
  return (
    <section id="experience" className="px-6 md:px-12 max-w-[1600px] mx-auto w-full py-24 border-t border-circuit/30">
      <div className="flex items-center gap-4 mb-16">
        <div className="w-12 h-[2px] bg-cyan"></div>
        <h2 className="font-mono text-sm md:text-base text-cyan tracking-widest uppercase font-bold">
          [ EVENT_LOG ]
        </h2>
      </div>

      <div className="relative pl-6 md:pl-12 border-l border-circuit/50">
        {DATA.experience.map((job, idx) => (
          <div key={idx} className="relative mb-16 last:mb-0 group cursor-none">
            {/* Timeline node */}
            <div className="absolute -left-[27px] md:-left-[51px] top-1.5 w-3 h-3 bg-void border-2 border-circuit/50 group-hover:border-cyan group-hover:shadow-[0_0_8px_#4FD8E8] transition-all rounded-full z-10">
               <div className="absolute inset-0 m-auto w-1 h-1 bg-cyan opacity-0 group-hover:opacity-100 rounded-full transition-opacity"></div>
            </div>
            
            {/* Active connection line on hover */}
            <div className="absolute -left-[24px] md:-left-[48px] top-4 w-[2px] h-full bg-gradient-to-b from-cyan to-transparent opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>

            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-4">
              <div className="font-mono text-xs text-amber tracking-widest uppercase">
                LOG_{String(idx + 1).padStart(3, '0')} // {job.duration}
              </div>
              <h3 className="font-display text-2xl font-bold text-hud group-hover:text-cyan transition-colors">
                {job.role}
              </h3>
            </div>
            
            <div className="font-mono text-[10px] text-cyan/70 tracking-widest uppercase mb-6 px-3 py-1 bg-cyan/5 border border-cyan/20 w-fit">
              {job.company}
            </div>

            <ul className="space-y-3">
              {job.responsibilities.map((resp, aIdx) => (
                <li key={aIdx} className="font-sans text-sm text-hud/70 leading-relaxed flex items-start gap-3">
                  <span className="font-mono text-cyan/50 mt-1">::</span>
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
