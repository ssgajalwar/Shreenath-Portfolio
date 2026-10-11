import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function HudCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Check if hovering over clickable element
      const target = e.target as HTMLElement;
      const isClickable = window.getComputedStyle(target).cursor === 'pointer' || 
                          target.tagName.toLowerCase() === 'a' ||
                          target.tagName.toLowerCase() === 'button' ||
                          target.closest('a') != null ||
                          target.closest('button') != null;
                          
      setIsHovering(isClickable);
    };
    
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  // Hide on mobile/touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]" style={{ mixBlendMode: 'screen' }}>
      <motion.div
        className="absolute top-0 left-0 flex items-center justify-center"
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
          scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
      >
        <div className={`relative w-12 h-12 rounded-full border border-cyan/50 transition-colors duration-200 ${isHovering ? 'border-cyan' : ''}`}>
          {/* Center dot */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-cyan rounded-full"></div>
          
          {/* Brackets */}
          <div className={`absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-cyan transition-all duration-200 ${isHovering ? '-translate-x-1 -translate-y-1' : ''}`}></div>
          <div className={`absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-cyan transition-all duration-200 ${isHovering ? 'translate-x-1 -translate-y-1' : ''}`}></div>
          <div className={`absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-cyan transition-all duration-200 ${isHovering ? '-translate-x-1 translate-y-1' : ''}`}></div>
          <div className={`absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-cyan transition-all duration-200 ${isHovering ? 'translate-x-1 translate-y-1' : ''}`}></div>
          
          {/* Rotating ring on hover */}
          {isHovering && (
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-dashed border-cyan/40"
            ></motion.div>
          )}
        </div>
        
        {/* Coordinates readout */}
        <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 font-mono text-[8px] text-cyan/70 whitespace-nowrap">
          [{mousePosition.x.toString().padStart(4, '0')}, {mousePosition.y.toString().padStart(4, '0')}]
        </div>
      </motion.div>
    </div>
  );
}
