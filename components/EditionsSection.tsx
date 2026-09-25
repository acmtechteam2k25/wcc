"use client";

import React, { useState } from "react";
import { EDITIONS_DATA } from "@/lib/contest-data";

export function EditionsSection() {
  const [selectedEdition, setSelectedEdition] = useState(6);
  const data = EDITIONS_DATA[selectedEdition];

  return (
    <section className="py-20 bg-[#FBF9F8] border-t border-slate-200/80 relative" id="excellence">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 reveal-on-scroll">
          <span className="text-xs font-bold text-[#FF6D4D] uppercase tracking-widest">
            Heritage of Excellence
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#0F172A] mt-2 tracking-tight">
            Evolution Across 6 Flagship Editions
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-2">
            Click across editions to trace how a departmental initiative scaled into a recognized national competitive standard.
          </p>
        </div>

        {/* Interactive Edition Selector Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-9" id="edition-tabs">
          {[6, 5, 4, 3, 2, 1].map((ed) => {
            const isCurrent = ed === 6;
            const isSelected = selectedEdition === ed;
            return (
              <button
                key={ed}
                onClick={() => setSelectedEdition(ed)}
                className={`edition-tab btn-lift px-4 py-2.5 rounded-xl font-display text-xs sm:text-sm transition-all ${
                  isSelected
                    ? "font-bold bg-[#FF6D4D] text-white shadow-md shadow-orange-500/20"
                    : "font-semibold bg-white text-slate-600 border border-slate-200 hover:border-slate-300"
                }`}
              >
                {isCurrent ? `WCC ${ed}.0 (Current)` : `WCC ${ed}.0 (${2020 + ed})`}
              </button>
            );
          })}
        </div>

        {/* Edition Content Display Pod */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-12 shadow-subtle-card overflow-hidden">
          <div key={selectedEdition} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center" style={{ animation: "heroFadeUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) both" }}>
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/70 text-[#FF6D4D] text-xs font-bold uppercase tracking-wider mb-4">
                {data.badge}
              </div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#0F172A] mb-3">
                {data.title}
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                {data.desc}
              </p>
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-100">
                {data.stats.map((stat, i) => (
                  <div key={i}>
                    <p className="text-xs text-slate-400 font-medium uppercase">{stat.label}</p>
                    <p className="font-display font-bold text-xl sm:text-2xl text-slate-900 mt-1">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 border border-slate-200/80">
              <h4 className="font-display font-bold text-sm text-slate-900 uppercase tracking-wider mb-3">
                Edition Highlights
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-600">
                {data.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6D4D] mt-1.5 shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EditionsSection;
