"use client";

import React from "react";

export function PrizesSection() {
  return (
    <section className="py-20 bg-[#FBF9F8] border-t border-slate-200/80" id="prizes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal-on-scroll">
          <span className="text-xs font-bold text-[#FF6D4D] uppercase tracking-widest">
            Recognitions
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#0F172A] mt-2 tracking-tight">
            Prizes, Honors &amp; Merit
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-2">
            Rewarding algorithmic mastery with direct cash honors, distinguished trophies, and verified certifications.
          </p>
        </div>

        {/* Top 3 Podium Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 mt-10 md:mt-12">
          {/* 1st Prize (Winner) */}
          <div className="relative p-8 sm:p-10 rounded-3xl bg-white border-2 border-[#FF6D4D] shadow-glow-coral flex flex-col items-center text-center transform md:-translate-y-3">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#FF6039] to-[#FF6D4D] text-white font-display text-[11px] font-bold tracking-wider uppercase shadow-sm whitespace-nowrap z-10">
              National Champion
            </div>
            
            <div className="pt-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF6D4D] block mb-1">Winner</span>
              <h3 className="font-display font-extrabold text-5xl text-[#0F172A] mb-3 tracking-tight">₹25,000<span className="text-[#FF6D4D]">+</span></h3>
            </div>
            
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              The Official ACM WCC 6.0 Golden Winner&apos;s Trophy, Certificate of National Excellence, and premier tech career mentorship.
            </p>
            <div className="mt-auto w-full pt-5 border-t border-orange-100/50 text-xs font-bold text-[#FF6D4D] uppercase tracking-wider">
              Highest Algorithmic Standing
            </div>
          </div>

          {/* 2nd Prize (First Runner-Up) */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-subtle-card flex flex-col items-center text-center">
            <div className="pt-2">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block mb-1">First Runner-Up</span>
              <h3 className="font-display font-bold text-4xl text-[#0F172A] mb-3 tracking-tight">₹15,000<span className="text-slate-400">+</span></h3>
            </div>
            
            <p className="text-sm text-slate-500 leading-relaxed mb-6">
              Silver Merit Trophies, official ACM recognition, Certificate of Achievement, and partner swags.
            </p>
            <div className="mt-auto w-full pt-5 border-t border-slate-100 text-xs font-medium text-slate-600 uppercase tracking-wider">
              National Podium Finish
            </div>
          </div>

          {/* 3rd Prize (Second Runner-Up) */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-subtle-card flex flex-col items-center text-center">
            <div className="pt-2">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block mb-1">Second Runner-Up</span>
              <h3 className="font-display font-bold text-4xl text-[#0F172A] mb-3 tracking-tight">₹10,000<span className="text-slate-400">+</span></h3>
            </div>
            
            <p className="text-sm text-slate-500 leading-relaxed mb-6">
              Bronze Merit Trophies, official ACM recognition, Certificate of Achievement, and participant kit.
            </p>
            <div className="mt-auto w-full pt-5 border-t border-slate-100 text-xs font-medium text-slate-600 uppercase tracking-wider">
              National Podium Finish
            </div>
          </div>
        </div>

        {/* Consolation Prizes Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-6 sm:mt-8">
          {/* Consolation Prize 1 */}
          <div className="p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-subtle-card flex flex-col text-center sm:text-left hover:border-slate-300 transition-colors">
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 mb-4 border-b border-slate-100 pb-4">
              <h3 className="font-display font-bold text-2xl text-[#0F172A] tracking-tight">Consolation 1</h3>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-sky-50 text-[#006398] text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">
                Special Merit
              </div>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed mb-4">
              Cash prize reward, Certificate of Merit, official ACM accolades, and premium tech partner access packs.
            </p>
            <div className="mt-auto text-xs font-semibold text-[#006398] uppercase tracking-wider">Honorable Mention • Ranked 4th</div>
          </div>

          {/* Consolation Prize 2 */}
          <div className="p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-subtle-card flex flex-col text-center sm:text-left hover:border-slate-300 transition-colors">
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 mb-4 border-b border-slate-100 pb-4">
              <h3 className="font-display font-bold text-2xl text-[#0F172A] tracking-tight">Consolation 2</h3>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">
                Special Merit
              </div>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed mb-4">
              Cash prize reward, Certificate of Merit, official ACM accolades, and premium tech partner access packs.
            </p>
            <div className="mt-auto text-xs font-semibold text-emerald-600 uppercase tracking-wider">Honorable Mention • Ranked 5th</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PrizesSection;
