import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DATA } from '../data';

export default function BootSequence({ onComplete }: { onComplete: () => void }) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const sequence = async () => {
      // Stage 0: Initial boot text
      await new Promise(r => setTimeout(r, 800));
      setStage(1);
      
      // Stage 1: Loading modules
      await new Promise(r => setTimeout(r, 1200));
      setStage(2);
      
      // Stage 2: Target lock
      await new Promise(r => setTimeout(r, 800));
      setStage(3);
      
      // Complete
      await new Promise(r => setTimeout(r, 500));
      onComplete();
    };
    
    sequence();
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="fixed inset-0 z-[99999] bg-void flex items-center justify-center overflow-hidden"
      >
        {/* Scan line effect */}
        <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] pointer-events-none opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-[10vh] bg-gradient-to-b from-transparent via-cyan/20 to-transparent animate-scanline pointer-events-none"></div>

        <div className="relative z-10 font-mono flex flex-col items-center">
          {stage >= 0 && (
             <motion.div 
               initial={{ opacity: 0 }} 
               animate={{ opacity: 1 }} 
               className="text-cyan/70 text-sm mb-8 text-center"
             >
               <div className="mb-2 uppercase">INITIALIZING SG_OS v2.4...</div>
               {stage >= 1 && <div className="uppercase animate-pulse">CALIBRATING NEURAL MESH...</div>}
               {stage >= 2 && <div className="text-amber uppercase">IDENTITY: CONFIRMED</div>}
             </motion.div>
          )}

          {stage >= 2 && (
            <motion.div 
              initial={{ scale: 0.5, opacity: 0, rotate: -90 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ type: 'spring', damping: 20, stiffness: 100 }}
              className="relative w-64 h-64 border-2 border-cyan/30 rounded-full flex items-center justify-center"
            >
              <div className="absolute inset-4 border border-dashed border-cyan/50 rounded-full animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute inset-8 border border-cyan/20 rounded-full animate-[spin_5s_linear_infinite_reverse]"></div>
              
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-1 bg-cyan shadow-[0_0_10px_#4FD8E8]"></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-1 bg-cyan shadow-[0_0_10px_#4FD8E8]"></div>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-4 bg-cyan shadow-[0_0_10px_#4FD8E8]"></div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-4 bg-cyan shadow-[0_0_10px_#4FD8E8]"></div>
              
              <div className="font-display font-bold text-2xl tracking-widest text-hud uppercase shadow-cyan">
                {DATA.name.split(' ')[0]}
              </div>
            </motion.div>
          )}
        </div>
        
        <button 
          onClick={onComplete}
          className="absolute bottom-12 text-cyan/50 hover:text-cyan font-mono text-xs tracking-widest uppercase"
        >
          [ SKIP_SEQUENCE ]
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
