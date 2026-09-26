"use client";

import React, { useState } from "react";

export function StagesSection() {
  const [activeStage, setActiveStage] = useState(1);

  const stages = [
    {
      num: "STAGE 01",
      deadline: "Until Sept 24",
      title: "National Registration",
      desc: "Register on the Unstop portal as a Solo coder or Duo (1-2 members). Registration for Round 1 is completely free of cost for all student participants across India.",
      footnote: "Eligibility: All UG & PG Students",
      tagColor: "bg-orange-100 text-[#FF6D4D]",
      
    },
    {
      num: "STAGE 02",
      deadline: "09 Oct 2026",
      title: "Round 1: Virtual Arena",
      desc: "Conducted on HackerRank from 9:00 AM to 4:40 PM. Problems span advanced Data Structures, Dynamic Programming, Math, and Graph Algorithms.",
      footnote: "Mode: Fully Online Proctoring",
      tagColor: "bg-[#FF6D4D] text-white",
      
    },
    {
      num: "STAGE 03",
      deadline: "10 Oct 2026",
      title: "Audit & Shortlisting",
      desc: "Submissions undergo automated code similarity indexing and plagiarism audits. Top 150+ qualifying coders receive verified on-campus invitations.",
      footnote: "Merit Ranklist Published",
      tagColor: "bg-sky-100 text-[#006398]",
      
    },
    {
      num: "STAGE 04",
      deadline: "11 Oct 2026",
      title: "Round 2: Campus Finale",
      desc: "In-person battle at VNRVJIET High-Performance Computing Laboratories (9:00 AM – 4:40 PM) followed by the grand valedictory awards ceremony.",
      footnote: "Location: VNRVJIET, Hyderabad",
      tagColor: "bg-purple-100 text-purple-700",
      
    },
  ];

  return (
    <section className="py-20 bg-white border-t border-slate-200/80 relative" id="format">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal-on-scroll">
          <span className="text-xs font-bold text-[#FF6D4D] uppercase tracking-widest">
            Contest Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#0F172A] mt-2 tracking-tight">
            How WCC 6.0 Works
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-2.5">
            A four-stage evaluation pipeline engineered to test algorithmic dynamic reasoning, problem formulation, and real-time execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10" id="stages-grid">
          {stages.map((stage, idx) => {
            const isSelected = activeStage === idx;
            return (
              <div
                key={stage.num}
                onClick={() => setActiveStage(idx)}
                className={`stage-card relative flex flex-col p-6 rounded-2xl bg-[#FFFDFC] border-2 shadow-subtle-card hover:shadow-card-hover transition-all duration-200 cursor-pointer ${
                  isSelected ? "border-[#FF6D4D] shadow-card-hover" : "border-slate-200"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`stage-tag font-mono text-xs font-bold px-2.5 py-1 rounded transition-colors duration-200 ${
                      isSelected ? "bg-[#FF6D4D] text-white" : stage.tagColor
                    }`}
                  >
                    {stage.num}
                  </span>
                  <span
                    className={`text-xs font-medium ${
                      isSelected ? "text-[#FF6D4D] font-bold" : "text-slate-400"
                    }`}
                  >
                    {stage.deadline}
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg text-[#0F172A] mb-2">{stage.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">{stage.desc}</p>
                <div className="mt-auto pt-3 border-t border-slate-100 text-[11px] text-slate-500 flex items-center gap-1.5 font-medium">
                
                  {stage.footnote}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default StagesSection;
