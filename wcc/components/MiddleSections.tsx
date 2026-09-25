"use client";

import React, { useEffect, useRef, useState } from "react";

export function GlanceSection() {
  return (
    <section className="py-12 bg-white border-y border-slate-200/80" id="glance">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-slate-100">
          <div>
            <span className="text-xs font-bold text-[#FF6D4D] tracking-widest uppercase">Executive Summary</span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#0F172A] mt-1">Event at a Glance</h2>
          </div>
          <p className="text-slate-500 text-sm mt-2 md:mt-0 font-medium">
            Essential facts and qualification framework
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-slate-200">
          {/* 01 Stages */}
          <div className="py-4 md:py-0 md:px-6 first:pl-0">
            <span className="font-mono text-xs font-bold text-[#FF6D4D]">01 / STAGES</span>
            <h3 className="font-display font-bold text-[#0F172A] text-lg mt-1 mb-1.5">2 Rigorous Rounds</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Online HackerRank Qualifier leading into an in-person campus grand finale marathon at VNRVJIET.
            </p>
          </div>

          {/* 02 Squad */}
          <div className="py-4 md:py-0 md:px-6">
            <span className="font-mono text-xs font-bold text-[#FF6D4D]">02 / SQUAD</span>
            <h3 className="font-display font-bold text-[#0F172A] text-lg mt-1 mb-1.5">1 – 2 Coders / Team</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Open to all undergraduate and postgraduate engineering and technology scholars nationwide.
            </p>
          </div>

          {/* 03 Stakes */}
          <div className="py-4 md:py-0 md:px-6">
            <span className="font-mono text-xs font-bold text-[#FF6D4D]">03 / STAKES</span>
            <h3 className="font-display font-bold text-[#0F172A] text-lg mt-1 mb-1.5">₹50,000+ Honors</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Direct cash pool, official ACM trophies, accredited certificates, and industry recognition.
            </p>
          </div>

          {/* 04 Access */}
          <div className="py-4 md:py-0 md:px-6">
            <span className="font-mono text-xs font-bold text-[#FF6D4D]">04 / ACCESS</span>
            <h3 className="font-display font-bold text-[#0F172A] text-lg mt-1 mb-1.5">100% Free Entry</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Democratizing algorithmic arena access with zero financial threshold for Round 1 nationwide.
            </p>
          </div>

          {/* 05 Deadline */}
          <div className="py-4 md:py-0 md:px-6 last:pr-0">
            <span className="font-mono text-xs font-bold text-[#FF6D4D]">05 / DEADLINE</span>
            <h3 className="font-display font-bold text-[#0F172A] text-lg mt-1 mb-1.5">24 Sept, 2026</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Portal lock on Unstop platform. Early registrations receive official preparation toolkits.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState({
    coders: 0,
    impressions: 0,
    institutions: 0,
    finalists: 0,
    honors: 0,
  });

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    let hasCounted = false;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasCounted) {
          hasCounted = true;
          const targets = {
            coders: 6000,
            impressions: 90000,
            institutions: 500,
            finalists: 150,
            honors: 50000,
          };

          const duration = 1800;
          const startTime = performance.now();

          const update = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);

            setCounts({
              coders: Math.floor(easeOut * targets.coders),
              impressions: Math.floor(easeOut * targets.impressions),
              institutions: Math.floor(easeOut * targets.institutions),
              finalists: Math.floor(easeOut * targets.finalists),
              honors: Math.floor(easeOut * targets.honors),
            });

            if (progress < 1) {
              requestAnimationFrame(update);
            } else {
              setCounts(targets);
            }
          };

          requestAnimationFrame(update);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 sm:py-20 bg-[#FBF9F8] relative overflow-hidden" id="overview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold text-[#006398] uppercase tracking-widest">
            National Reach &amp; Legacy
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#0F172A] mt-2 tracking-tight">
            The Scale of Winter Coding Contest
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-2.5">
            Over six continuous editions, WCC has matured into one of the country&apos;s most fiercely competitive algorithmic arenas.
          </p>
        </div>

        <div ref={sectionRef} className="grid grid-cols-2 md:grid-cols-5 gap-5" id="stats-counter-section">
          {/* Metric 1 */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-subtle-card text-center hover:border-orange-300 transition-colors">
            <div className="font-display font-extrabold text-3xl sm:text-4xl text-[#0F172A] tracking-tight">
              {counts.coders.toLocaleString("en-IN")}+
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#FF6D4D] mt-2">Expected Coders</div>
            <p className="text-[11px] text-slate-400 mt-1">Pan-India talent pipeline</p>
          </div>

          {/* Metric 2 */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-subtle-card text-center hover:border-orange-300 transition-colors">
            <div className="font-display font-extrabold text-3xl sm:text-4xl text-[#0F172A] tracking-tight">
              {counts.impressions.toLocaleString("en-IN")}+
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#006398] mt-2">Impressions</div>
            <p className="text-[11px] text-slate-400 mt-1">High-density collegiate reach</p>
          </div>

          {/* Metric 3 */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-subtle-card text-center hover:border-orange-300 transition-colors">
            <div className="font-display font-extrabold text-3xl sm:text-4xl text-[#0F172A] tracking-tight">
              {counts.institutions.toLocaleString("en-IN")}+
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 mt-2">Institutions</div>
            <p className="text-[11px] text-slate-400 mt-1">IITs, NITs, BITS &amp; Universities</p>
          </div>

          {/* Metric 4 */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-subtle-card text-center hover:border-orange-300 transition-colors">
            <div className="font-display font-extrabold text-3xl sm:text-4xl text-[#0F172A] tracking-tight">
              {counts.finalists.toLocaleString("en-IN")}+
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 mt-2">Campus Finalists</div>
            <p className="text-[11px] text-slate-400 mt-1">Curated algorithmic minds</p>
          </div>

          {/* Metric 5 */}
          <div className="col-span-2 md:col-span-1 p-6 rounded-2xl bg-white border border-slate-200/90 shadow-subtle-card text-center hover:border-orange-300 transition-colors">
            <div className="font-display font-extrabold text-3xl sm:text-4xl text-[#FF6D4D] tracking-tight">
              ₹{counts.honors.toLocaleString("en-IN")}+
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-700 mt-2">Direct Honors</div>
            <p className="text-[11px] text-slate-400 mt-1">Verified cash &amp; trophies</p>
          </div>
        </div>
      </div>
    </section>
  );
}

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
        <div className="text-center max-w-2xl mx-auto mb-14">
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
