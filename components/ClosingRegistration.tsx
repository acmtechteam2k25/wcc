"use client";

import React from "react";

export function ClosingRegistration() {
  return (
    <section
      className="py-20 bg-gradient-to-b from-[#FFFDFC] to-orange-50/60 border-t border-slate-200/80 relative"
      id="register"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal-on-scroll">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-[#FF6D4D] text-xs font-bold uppercase tracking-wider mb-6">
          PORTAL LOCKS SEPTEMBER 24, 2026
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#0F172A] tracking-tight uppercase max-w-3xl mx-auto mb-5 leading-tight">
          READY TO COMPETE AT THE <span className="text-[#FF6D4D]">NATIONAL LEVEL?</span>
        </h2>
        <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto mb-8 text-balance">
          Join over 6,000 <span className="text-[#FF6D4D] font-bold">+ </span>algorithmic coders in Winter Coding Contest 6.0. Round 1 is 100% Free. Test your skill against the finest minds across India.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-semibold text-slate-700 mb-9">
          <div className="px-4 py-2.5 rounded-xl bg-white border border-slate-200 shadow-sm">
            Round 1 (Online): <span className="text-[#FF6D4D] font-bold">09 Oct, 2026</span>
          </div>
          <div className="hidden sm:block text-slate-300">•</div>
          <div className="px-4 py-2.5 rounded-xl bg-white border border-slate-200 shadow-sm">
            Round 2 (Campus): <span className="text-[#0F172A] font-bold">11 Oct, 2026</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://unstop.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 rounded-xl font-display font-bold text-base text-white bg-gradient-to-r from-[#FF6039] to-[#FF6D4D] hover:from-[#FF6D4D] hover:to-[#EA580C] shadow-glow-coral hover:shadow-glow-coral-lg active:scale-[0.98] active:translate-y-0.5 hover:-translate-y-1 transition-all duration-200 group"
          >
            <span>REGISTER ON UNSTOP PLATFORM</span>
            <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ClosingRegistration;
