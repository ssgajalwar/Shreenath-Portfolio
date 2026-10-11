import { DATA } from '../data';

export default function About() {
  return (
    <section id="about" className="px-6 md:px-12 max-w-[1600px] mx-auto w-full py-24 relative border-t border-circuit/30">
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(42,92,122,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(42,92,122,0.05)_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none -z-10"></div>

      <div className="flex items-center gap-4 mb-16">
        <div className="w-12 h-[2px] bg-cyan"></div>
        <h2 className="font-mono text-sm md:text-base text-cyan tracking-widest uppercase font-bold">
          [ SYS_DIAGNOSTIC_REPORT ]
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
        
        {/* Profile Scan */}
        <div className="lg:col-span-4 flex justify-center lg:justify-start">
          <div className="relative w-64 h-64 md:w-80 md:h-80 group">
             {/* Hexagon Frame */}
             <div 
               className="absolute inset-0 border border-cyan/40 bg-steel/20 backdrop-blur-sm overflow-hidden"
               style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
             >
                {/* Simulated image - replaced with gradient for now to fit theme */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan/20 to-void mix-blend-overlay"></div>
                
                {/* Scanner Line */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-cyan shadow-[0_0_15px_#4FD8E8] animate-scanline"></div>
                
                {/* Wireframe overlay */}
                <div className="absolute inset-0 opacity-20 bg-[linear-gradient(45deg,transparent_48%,var(--color-cyan)_49%,var(--color-cyan)_51%,transparent_52%)] bg-[size:20px_20px]"></div>
             </div>
             
             {/* Corner brackets */}
             <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-cyan/50"></div>
             <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-cyan/50"></div>
             <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-cyan/50"></div>
             <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-cyan/50"></div>
             
             {/* Data readouts around frame */}
             <div className="absolute top-1/2 -right-16 -translate-y-1/2 font-mono text-[8px] text-cyan/60 flex flex-col gap-1">
                <span>X: 145.2</span>
                <span>Y: 890.1</span>
                <span>Z: 001.0</span>
             </div>
          </div>
        </div>

        {/* Bio Text */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          <div className="bg-steel/30 border border-circuit/50 p-6 relative">
            <div className="absolute top-0 left-0 w-2 h-full bg-cyan/20"></div>
            
            <p className="font-display text-xl md:text-2xl text-hud mb-6">
              Specialized in Agentic AI systems, RAG pipelines, and cloud-native architecture.
            </p>
            
            <div className="font-sans text-sm md:text-base text-hud/70 leading-relaxed flex flex-col gap-4">
              {DATA.summary.split('. ').map((sentence, idx) => {
                 if(!sentence) return null;
                 return (
                   <p key={idx} className="flex gap-3">
                     <span className="font-mono text-cyan/50 mt-1">{`>`}</span>
                     <span>{sentence.trim() + (sentence.endsWith('.') ? '' : '.')}</span>
                   </p>
                 )
              })}
            </div>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             {[
               { label: 'EXPERIENCE', val: '5+ YRS' },
               { label: 'AI_MODELS', val: '10+ DEP' },
               { label: 'REQ_HANDLED', val: '1M+' },
               { label: 'PAPERS', val: '4 PUB' }
             ].map((stat, i) => (
                <div key={i} className="border border-circuit/40 bg-void/50 p-4 relative group hover:border-cyan/50 transition-colors cursor-none">
                   <div className="font-mono text-[10px] text-cyan/60 mb-2">{stat.label}</div>
                   <div className="font-display text-xl font-bold text-hud group-hover:text-cyan transition-colors">{stat.val}</div>
                   <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan/50"></div>
                </div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
}
