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
        <div className="text-center mb-14">
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

export function ClosingRegistration() {
  return (
    <section
      className="py-20 bg-gradient-to-b from-[#FFFDFC] to-orange-50/60 border-t border-slate-200/80 relative"
      id="register"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
            className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 rounded-xl font-display font-bold text-base text-white bg-gradient-to-r from-[#FF6039] to-[#FF6D4D] hover:from-[#FF6D4D] hover:to-[#EA580C] shadow-glow-coral hover:shadow-xl transition-all duration-200"
          >
            <span>REGISTER ON UNSTOP PLATFORM</span>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#0F172A] text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Institutional Identity (5 cols) */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3.5 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtJIj9F8GOPiDXDawEfnV9HvrR1CAJchbAMdK3bvOI2Z8l6jCfrS8YGwdRcDGkI2wr_MR30UlOGt5III6xT2c8x92gR41ZmY7odQBLrNcpnWHfd8McA0yEVjD_FznO9ikua9LkdB3gAx-AnngUNFQ2FWXRItpwSFRGMH9YF2gY0NrOELA2_Rtzj9mz15RW0oJjYxVLR8A6VAhI_MeHbbOwrb1RPzSS3hFUY9LoJRenXUZ2wBEoI_rKwltpckf-QjuAamY"
                alt="ACM VNRVJIET Logo"
                className="w-10 h-10 object-contain"
              />
              <div>
                <span className="text-white font-display font-bold text-base">ACM VNRVJIET</span>
                <p className="text-[11px] text-slate-400">Student Chapter • Dept. of Information Technology</p>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-4 max-w-sm">
              Vallurupalli Nageswara Rao Vignana Jyothi Institute of Engineering and Technology (VNRVJIET). Autonomous institution accredited with NAAC A++ (CGPA 3.68/4.00) and recognized by AICTE.
            </p>
            <div className="text-[11px] text-slate-400">
              Bachupally, Nizampet (S.O), Hyderabad, Telangana 500090
            </div>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="md:col-span-3">
            <h4 className="text-white font-display font-bold text-xs uppercase tracking-wider mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#overview" className="hover:text-white transition-colors">
                  Contest Overview
                </a>
              </li>
              <li>
                <a href="#format" className="hover:text-white transition-colors">
                  Contest Journey
                </a>
              </li>
              <li>
                <a href="#history" className="hover:text-white transition-colors">
                  WCC Evolution (1.0 to 6.0)
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Photo Archives
                </a>
              </li>
              <li>
                <a href="#sponsors" className="hover:text-white transition-colors">
                  Partners &amp; Ecosystem
                </a>
              </li>
            </ul>
          </div>

          {/* Official Channels & Inquiries (4 cols) */}
          <div className="md:col-span-4">
            <h4 className="text-white font-display font-bold text-xs uppercase tracking-wider mb-4">
              Official Channels
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-slate-400 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span>
                  GitHub:{" "}
                  <a
                    href="https://github.com/acmvnrvjiet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    acmvnrvjiet
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-slate-400 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span>
                  LinkedIn:{" "}
                  <a
                    href="https://linkedin.com/company/acm-vnrvjiet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    acm-vnrvjiet
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
                <span>
                  Portal:{" "}
                  <a
                    href="https://vnrvjiet.acm.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    vnrvjiet.acm.org
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>© 2026 ACM VNRVJIET Student Chapter. All rights reserved.</div>
          <div>Winter Coding Contest is an official flagship property of ACM VNRVJIET.</div>
        </div>
      </div>
    </footer>
  );
}
