import { useState, FormEvent } from 'react';
import { DATA } from '../data';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="px-6 md:px-12 max-w-[1600px] mx-auto w-full py-24 border-t border-circuit/30 mb-20 relative">
      <div className="absolute top-0 right-12 w-[1px] h-32 bg-gradient-to-b from-cyan to-transparent"></div>
      
      <div className="flex items-center gap-4 mb-16">
        <div className="w-12 h-[2px] bg-cyan"></div>
        <h2 className="font-mono text-sm md:text-base text-cyan tracking-widest uppercase font-bold">
          [ DIRECT_CHANNEL ]
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        
        {/* Terminal Info */}
        <div className="flex flex-col">
          <div className="bg-steel/30 border border-circuit/50 p-6 md:p-8 relative">
             <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan"></div>
             
             <div className="flex items-center gap-2 mb-6">
               <span className="w-2 h-2 bg-amber rounded-full animate-pulse shadow-[0_0_8px_rgba(255,180,84,0.8)]"></span>
               <span className="font-mono text-[10px] text-amber tracking-widest uppercase">COMMS_OPEN</span>
             </div>
             
             <p className="font-display text-xl text-hud mb-12">
               Initiate secure transmission. System is currently accepting new connections for collaboration, networking, and challenging integrations.
             </p>
             
             <div className="flex flex-col gap-4 font-mono text-[10px] md:text-xs tracking-widest uppercase">
                <div className="flex items-center gap-4">
                   <span className="text-cyan/50 w-24">MAILTO:</span>
                   <a href={`mailto:${DATA.email}`} className="text-hud hover:text-cyan transition-colors">{DATA.email}</a>
                </div>
                <div className="flex items-center gap-4">
                   <span className="text-cyan/50 w-24">LINKEDIN:</span>
                   <a href={DATA.linkedin} target="_blank" rel="noopener noreferrer" className="text-hud hover:text-cyan transition-colors">[ ACCESS_PROFILE ]</a>
                </div>
                <div className="flex items-center gap-4">
                   <span className="text-cyan/50 w-24">GITHUB:</span>
                   <a href={DATA.github} target="_blank" rel="noopener noreferrer" className="text-hud hover:text-cyan transition-colors">[ ACCESS_REPOS ]</a>
                </div>
             </div>
          </div>
        </div>

        {/* Transmission Form */}
        <div className="relative">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 bg-steel/10 p-6 md:p-8 border border-circuit/30 relative overflow-hidden group">
            
            {/* Scanline on focus/hover */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-cyan/20 animate-scanline opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none"></div>

            {status === 'sent' && (
              <div className="absolute inset-0 z-20 bg-void/90 backdrop-blur-sm flex flex-col items-center justify-center border border-cyan/50">
                <div className="w-12 h-12 rounded-full border-2 border-cyan flex items-center justify-center mb-4 relative">
                  <div className="absolute inset-0 border border-cyan/30 rounded-full animate-ping"></div>
                  <div className="w-4 h-4 bg-cyan rounded-full animate-pulse"></div>
                </div>
                <div className="font-mono text-cyan tracking-widest uppercase text-sm">TRANSMISSION CONFIRMED</div>
                <div className="font-mono text-[9px] text-cyan/50 mt-2">AWAITING_RESPONSE...</div>
              </div>
            )}

            <div className="relative">
               <label className="font-mono text-[9px] text-cyan/70 tracking-widest uppercase mb-2 block">IDENTIFIER</label>
               <input 
                 type="text" 
                 required
                 className="w-full bg-void border border-circuit/50 px-4 py-3 font-mono text-xs text-hud focus:outline-none focus:border-cyan focus:bg-steel/30 transition-colors cursor-none"
               />
            </div>
            
            <div className="relative">
               <label className="font-mono text-[9px] text-cyan/70 tracking-widest uppercase mb-2 block">RETURN_ADDRESS</label>
               <input 
                 type="email" 
                 required
                 className="w-full bg-void border border-circuit/50 px-4 py-3 font-mono text-xs text-hud focus:outline-none focus:border-cyan focus:bg-steel/30 transition-colors cursor-none"
               />
            </div>
            
            <div className="relative">
               <label className="font-mono text-[9px] text-cyan/70 tracking-widest uppercase mb-2 block">DATA_PAYLOAD</label>
               <textarea 
                 required
                 rows={4}
                 className="w-full bg-void border border-circuit/50 px-4 py-3 font-mono text-xs text-hud focus:outline-none focus:border-cyan focus:bg-steel/30 transition-colors resize-none cursor-none"
               ></textarea>
            </div>
            
            <button 
              type="submit" 
              disabled={status === 'sending' || status === 'sent'}
              className="mt-2 relative w-full py-4 bg-cyan/10 border border-cyan text-cyan font-mono text-xs tracking-widest uppercase hover:bg-cyan hover:text-void transition-colors cursor-none disabled:opacity-50 flex justify-center items-center gap-3 overflow-hidden group/btn"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan/30 to-transparent -translate-x-full group-hover/btn:animate-[scanline_1s_linear_infinite_rotate-90]"></div>
              <span className="relative z-10 flex items-center gap-2">
                 {status === 'sending' ? (
                   <>
                     <span className="w-2 h-2 bg-current rounded-full animate-ping"></span>
                     TRANSMITTING...
                   </>
                 ) : (
                   'TRANSMIT_DATA'
                 )}
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
