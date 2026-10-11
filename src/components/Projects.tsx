import { DATA } from '../data';

export default function Projects() {
  return (
    <section id="projects" className="px-6 md:px-12 max-w-[1600px] mx-auto w-full py-24 border-t border-circuit/30">
      <div className="flex items-center gap-4 mb-16">
        <div className="w-12 h-[2px] bg-cyan"></div>
        <h2 className="font-mono text-sm md:text-base text-cyan tracking-widest uppercase font-bold">
          [ DEPLOYED_SYSTEMS ]
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        {DATA.projects.map((project, idx) => (
          <div 
            key={idx} 
            className="group relative bg-steel/20 border border-circuit/50 p-6 md:p-8 hover:bg-steel/40 hover:border-cyan/50 transition-all duration-300 cursor-none flex flex-col justify-between"
            style={{ minHeight: '300px' }}
          >
            {/* Animated Hover Brackets */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-transparent group-hover:border-cyan group-hover:-translate-x-2 group-hover:-translate-y-2 transition-all duration-300"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-transparent group-hover:border-cyan group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-300"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-transparent group-hover:border-cyan group-hover:-translate-x-2 group-hover:translate-y-2 transition-all duration-300"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-transparent group-hover:border-cyan group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-300"></div>

            {/* Hover Scanline */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-cyan/50 opacity-0 group-hover:opacity-100 group-hover:animate-scanline pointer-events-none z-10 hidden group-hover:block"></div>

            <div>
              <div className="flex justify-between items-start mb-6">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-hud group-hover:text-cyan transition-colors">
                  {project.name}
                </h3>
                <div className={`font-mono text-[9px] px-2 py-1 border ${project.status === 'Active' ? 'border-amber text-amber' : 'border-circuit text-circuit'} tracking-widest uppercase`}>
                  {project.status}
                </div>
              </div>

              <div className="font-sans text-sm text-hud/70 leading-relaxed mb-6 space-y-2">
                {project.description.map((desc, i) => (
                  <p key={i}>{desc}</p>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6 mt-4">
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="font-mono text-[9px] text-cyan bg-cyan/5 px-2 py-1 border border-cyan/20">
                    {t}
                  </span>
                ))}
              </div>

              {project.url && (
                <a 
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[10px] text-hud/50 hover:text-cyan tracking-widest uppercase flex items-center gap-2 w-fit border-b border-transparent hover:border-cyan transition-all"
                >
                  <span className="w-1.5 h-1.5 bg-current inline-block"></span>
                  ACCESS_LINK
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
