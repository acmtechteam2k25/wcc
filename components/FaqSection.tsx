"use client";

import React, { useState } from "react";
import { FAQ_ITEMS } from "@/lib/contest-data";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-[#FBF9F8] border-t border-slate-200/80" id="faqs">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 reveal-on-scroll">
          <span className="text-xs font-bold text-[#FF6D4D] uppercase tracking-widest">Inquiries</span>
          <h2 className="text-3xl font-display font-bold text-[#0F172A] mt-2 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 text-sm mt-2">
            Everything you need to know about eligibility, platform rules, and Round 2 logistics.
          </p>
        </div>

        {/* Functional Smooth Accordion */}
        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="faq-item bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between font-display font-bold text-slate-900 text-base hover:text-[#FF6D4D] transition-colors"
                >
                  <span>{item.q}</span>
                  <svg
                    className={`w-5 h-5 text-slate-400 transform transition-transform duration-200 faq-icon ${
                      isOpen ? "rotate-180 text-[#FF6D4D]" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`faq-answer px-6 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed ${isOpen ? "open" : ""}`}>
                  <div>{item.a}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
