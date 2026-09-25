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
      icon: (
        <svg className="w-3.5 h-3.5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      num: "STAGE 02",
      deadline: "09 Oct 2026",
      title: "Round 1: Virtual Arena",
      desc: "Conducted on HackerRank from 9:00 AM to 4:40 PM. Problems span advanced Data Structures, Dynamic Programming, Math, and Graph Algorithms.",
      footnote: "Mode: Fully Online Proctoring",
      tagColor: "bg-[#FF6D4D] text-white",
      icon: (
        <svg className="w-3.5 h-3.5 text-[#FF6D4D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      num: "STAGE 03",
      deadline: "10 Oct 2026",
      title: "Audit & Shortlisting",
      desc: "Submissions undergo automated code similarity indexing and plagiarism audits. Top 150+ qualifying coders receive verified on-campus invitations.",
      footnote: "Merit Ranklist Published",
      tagColor: "bg-sky-100 text-[#006398]",
      icon: (
        <svg className="w-3.5 h-3.5 text-[#006398]" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      num: "STAGE 04",
      deadline: "11 Oct 2026",
      title: "Round 2: Campus Finale",
      desc: "In-person battle at VNRVJIET High-Performance Computing Laboratories (9:00 AM – 4:40 PM) followed by the grand valedictory awards ceremony.",
      footnote: "Location: VNRVJIET, Hyderabad",
      tagColor: "bg-purple-100 text-purple-700",
      icon: (
        <svg className="w-3.5 h-3.5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
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
                  {stage.icon}
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
