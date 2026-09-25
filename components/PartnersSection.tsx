"use client";

import React from "react";

export function PartnersSection() {
  const partners = [
    {
      name: "Skyway Overseas",
      category: "Educational Services",
      icon: (
        <div className="w-10 h-10 rounded-full bg-sky-50 text-[#006398] font-bold flex items-center justify-center text-sm mb-2 group-hover:scale-105 transition-transform">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      ),
    },
    {
      name: "Careerx.club",
      category: "Career Partner",
      customRender: (
        <span className="font-display font-black text-[#FF6D4D] text-lg tracking-tight">
          Career<span className="text-slate-800">x</span>.club
        </span>
      ),
    },
    {
      name: "Global Vision",
      category: "Consultancy",
      icon: (
        <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-800 font-bold flex items-center justify-center text-xs mb-1.5 group-hover:scale-105 transition-transform">
          GVC
        </div>
      ),
    },
    {
      name: "stumagz®",
      category: "Youth Media Partner",
      customRender: (
        <span className="px-2.5 py-1 bg-red-600 text-white font-bold rounded text-xs tracking-tight">
          stumagz®
        </span>
      ),
    },
    {
      name: "Smart Interviews",
      category: "Learn • Evolve",
      customRender: (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src="https://imagedelivery.net/L-RRwTsGtjw4XmStu9Y7XA/ecec048f-d26f-4a71-78a2-d7d269a78a00/public"
          alt="Smart Interviews Logo"
          className="h-9 max-w-[120px] object-contain mb-1 group-hover:scale-105 transition-transform"
        />
      ),
    },
    {
      name: "Blue Cloud",
      category: "Technology Partner",
      customRender: (
        <div className="font-bold text-[#006398] text-sm leading-tight">
          Blue Cloud
          <span className="block text-[10px] text-slate-600 font-medium">Softech Solutions</span>
        </div>
      ),
    },
  ];

  return (
    <section className="py-20 bg-white border-t border-slate-200/80" id="sponsors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold text-[#006398] uppercase tracking-widest">
            Industry &amp; Community Ecosystem
          </span>
          <h2 className="text-3xl font-display font-bold text-[#0F172A] mt-2 tracking-tight">
            Current &amp; Previous Partners
          </h2>
          <p className="text-slate-500 text-sm mt-2">
            Organizations that have continually supported competitive programming and technical student development at VNRVJIET.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 items-center">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#FFFDFC] border border-slate-200 flex flex-col items-center justify-center text-center h-32 hover:border-[#FF6D4D]/50 hover:shadow-subtle-card transition-all group"
            >
              {partner.icon}
              {partner.customRender}
              <span className="text-xs font-bold text-slate-800 leading-tight mt-1">{partner.name}</span>
              <span className="text-[10px] text-slate-400 mt-0.5">{partner.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PartnersSection;
