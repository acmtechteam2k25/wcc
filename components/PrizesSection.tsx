"use client";

import React from "react";

export function PrizesSection() {
  return (
    <section className="py-20 bg-[#FBF9F8] border-t border-slate-200/80" id="prizes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 1st Prize (Winner) */}
          <div className="relative p-8 rounded-3xl bg-white border-2 border-[#FF6D4D] shadow-glow-coral flex flex-col items-center text-center transform md:-translate-y-3">
            <div className="absolute -top-3.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#FF6039] to-[#FF6D4D] text-white font-display text-[11px] font-bold tracking-wider uppercase shadow-sm">
              National Champion
            </div>
            <div className="w-16 h-16 rounded-2xl bg-orange-50 text-[#FF6D4D] flex items-center justify-center mb-5 mt-2">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF6D4D]">Winner</span>
            <h3 className="font-display font-bold text-4xl text-[#0F172A] mt-1 mb-2">₹25,000+</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-6">
              The Official ACM WCC 6.0 Golden Winner&apos;s Trophy, Certificate of National Excellence, and premier tech career mentorship.
            </p>
            <div className="mt-auto w-full pt-4 border-t border-orange-100 text-xs font-bold text-[#FF6D4D]">
              Highest Algorithmic Standing
            </div>
          </div>

          {/* 2nd Prize (First Runner-Up) */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-subtle-card flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-2xl bg-slate-100 text-slate-600 flex items-center justify-center mb-5">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V4a2 2 0 10-2 2h2"
                />
              </svg>
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">First Runner-Up</span>
            <h3 className="font-display font-bold text-3xl text-[#0F172A] mt-1 mb-2">₹15,000+</h3>
            <p className="text-xs text-slate-500 leading-relaxed mb-6">
              Silver Merit Trophies, official ACM recognition, Certificate of Achievement, and partner swags.
            </p>
            <div className="mt-auto w-full pt-4 border-t border-slate-100 text-xs font-medium text-slate-600">
              National Podium Finish
            </div>
          </div>

          {/* 3rd Prize (Second Runner-Up) */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-subtle-card flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-5">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Second Runner-Up</span>
            <h3 className="font-display font-bold text-3xl text-[#0F172A] mt-1 mb-2">₹10,000+</h3>
            <p className="text-xs text-slate-500 leading-relaxed mb-6">
              Bronze Merit Trophies, official ACM recognition, Certificate of Achievement, and participant kit.
            </p>
            <div className="mt-auto w-full pt-4 border-t border-slate-100 text-xs font-medium text-slate-600">
              National Podium Finish
            </div>
          </div>
        </div>

        {/* Consolation Prizes Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Consolation Prize 1 */}
          <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-subtle-card flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left hover:border-slate-300 transition-colors">
            <div className="w-13 h-13 rounded-2xl bg-sky-50 text-[#006398] flex items-center justify-center shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            </div>
            <div className="flex-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-sky-50 text-[#006398] text-[11px] font-bold uppercase tracking-wider mb-1">
                Special Merit
              </div>
              <h3 className="font-display font-bold text-xl text-[#0F172A]">Consolation Prize 1</h3>
              <p className="text-xs text-slate-500 leading-relaxed mt-1 mb-3">
                Cash prize reward, Certificate of Merit, official ACM accolades, and premium tech partner access packs.
              </p>
              <div className="text-xs font-semibold text-[#006398]">Honorable Mention • Ranked 4th</div>
            </div>
          </div>

          {/* Consolation Prize 2 */}
          <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-subtle-card flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left hover:border-slate-300 transition-colors">
            <div className="w-13 h-13 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            </div>
            <div className="flex-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-[11px] font-bold uppercase tracking-wider mb-1">
                Special Merit
              </div>
              <h3 className="font-display font-bold text-xl text-[#0F172A]">Consolation Prize 2</h3>
              <p className="text-xs text-slate-500 leading-relaxed mt-1 mb-3">
                Cash prize reward, Certificate of Merit, official ACM accolades, and premium tech partner access packs.
              </p>
              <div className="text-xs font-semibold text-emerald-600">Honorable Mention • Ranked 5th</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PrizesSection;
