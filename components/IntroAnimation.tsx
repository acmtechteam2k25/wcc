"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const [stage, setStage] = useState(0);
  const lockupRef = useRef<HTMLDivElement>(null);
  const [transformStyle, setTransformStyle] = useState({});

  useEffect(() => {
    // Accessibility check
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      onComplete();
      return;
    }

    const t1 = setTimeout(() => setStage(1), 600); // 1: Text reveal (moves logo left organically)
    const t2 = setTimeout(() => {
      // 2: Move to navbar
      setStage(2);
      
      // Calculate exact FLIP transform to destination
      const target = document.getElementById("brand-logo-wrap");
      const current = lockupRef.current;
      
      if (target && current) {
        const targetRect = target.getBoundingClientRect();
        
        // We only want to align the logo's left and top. 
        // The logo inside our lockup is the first child.
        const logoTarget = targetRect;
        const logoCurrent = current.children[0].getBoundingClientRect();

        const deltaX = logoTarget.left - logoCurrent.left;
        const deltaY = logoTarget.top - logoCurrent.top;
        
        setTransformStyle({
          transform: `translate(${deltaX}px, ${deltaY}px)`,
        });
      }
    }, 2400); 

    const t3 = setTimeout(() => {
      // 3: Fade out overlay
      setStage(3);
      setTimeout(() => onComplete(), 500); // Fire callback after fade
    }, 3200);

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  if (stage === 3) return null;

  return (
    <div className={`fixed inset-0 z-[100] bg-[#FFFDFC] transition-opacity duration-500 ease-out ${
      stage >= 3 ? "opacity-0 pointer-events-none" : "opacity-100"
    }`}>
      {/* Subtle warm orange/peach atmospheric glow */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
         <div className="w-[80vw] h-[80vw] max-w-[600px] max-h-[600px] bg-orange-50 rounded-full blur-[80px]" />
      </div>

      <div className="relative w-full h-full pointer-events-none overflow-hidden">
        
        {/* Centered container */}
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex justify-center">
          
            {/* The Lockup */}
            <div 
              ref={lockupRef}
              className="flex items-center transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] origin-top-left"
              style={transformStyle}
            >
              
              {/* Logo */}
              <div className={`relative transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] shrink-0 ${
                stage >= 2 ? "w-11 h-11" : "w-16 h-16 sm:w-20 sm:h-20"
              }`}>
                <Image src="/acm-vnrvjiet-logo.png" alt="ACM Logo" fill className="object-contain drop-shadow-sm" priority />
              </div>
              
              {/* Text Reveal */}
              <div className={`overflow-hidden transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                stage >= 1 
                  ? (stage >= 2 ? "max-w-[400px] ml-3.5 opacity-100" : "max-w-[600px] ml-4 sm:ml-5 opacity-100") 
                  : "max-w-0 ml-0 opacity-0"
              }`}>
                <div className={`font-display font-extrabold text-[#0F172A] tracking-tight whitespace-nowrap transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  stage >= 2 ? "text-base sm:text-lg" : "text-xl sm:text-3xl"
                }`}>
                  ACM VNRVJIET <span className={`font-light text-[#FF6D4D] transition-opacity duration-300 ${stage >= 2 ? "opacity-0" : "opacity-100"}`}>PRESENTS</span>
                </div>
              </div>

            </div>

        </div>
      </div>
    </div>
  );
}
