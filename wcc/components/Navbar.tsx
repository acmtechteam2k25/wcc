"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function AnnouncementBar() {
  return (
    <div className="anim-bar-in w-full bg-gradient-to-r from-[#FF6039] via-[#FF6D4D] to-[#EA580C] text-white px-4 py-2 text-xs sm:text-sm font-medium tracking-wide shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 sm:gap-4 flex-wrap text-center">
        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold bg-white/20 backdrop-blur-sm border border-white/25">
          OFFICIAL WCC 6.0
        </span>
        <span>
          National Algorithmic Arena • Round 1 is 100% FREE • Registration closes September 24, 2026
        </span>
        <a
          href="#register"
          className="inline-flex items-center font-bold underline underline-offset-4 hover:text-white/90 transition-colors ml-1"
        >
          Register Now
          <svg className="w-3.5 h-3.5 ml-1 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setScrolled(scrollPos > 60);

      const sectionIds = ["overview", "glance", "format", "history", "gallery", "sponsors", "faqs"];
      let current = "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - 140;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Overview", href: "#overview", id: "overview" },
    { name: "At a Glance", href: "#glance", id: "glance" },
    { name: "Contest Journey", href: "#format", id: "format" },
    { name: "6 Editions", href: "#history", id: "history" },
    { name: "Archive", href: "#gallery", id: "gallery" },
    { name: "Partners", href: "#sponsors", id: "sponsors" },
    { name: "FAQs", href: "#faqs", id: "faqs" },
  ];

  return (
    <header
      id="main-header"
      className={`anim-nav-in sticky top-0 z-40 bg-[#FFFDFC]/95 backdrop-blur-md border-b transition-all duration-300 ${
        scrolled ? "shadow-sm border-slate-200" : "border-slate-200/80"
      }`}
    >
      <div
        id="header-container"
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        {/* Left: ACM VNRVJIET Diamond Logo Seal */}
        <a href="#" className="flex items-center gap-3.5 group">
          <div
            id="brand-logo-wrap"
            className="w-11 h-11 shrink-0 flex items-center justify-center transition-transform duration-200 group-hover:scale-105"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVsFV5jmI4DYgste6wBbS0ajAbzE2NNqLdaeL0_LGkPW3YTuYbgfjMRYtFgmv-aXbseIseeb-apNmLmN6qMlh_EKi7V4UqoGxjJCggaRADc1hYGgXTr4JRuIXgM2AY3KIo3qxE7JHRccq3MMxAhFQ7UN4FSR7AExqDdIb8d89oqTBs9Z1honiDHe-pu1vrPmece8UltBLlCoLPbyekVN-nhekSkKNaozcwZJxB0du2Q5U7QowEExa0t5txinv3B0T8JWA"
              alt="ACM VNRVJIET Official Seal"
              className="w-11 h-11 object-contain drop-shadow-sm"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-display font-extrabold text-[#0F172A] tracking-tight text-base sm:text-lg">
                ACM VNRVJIET
              </span>
              <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-sky-50 text-[#006398] border border-sky-200/80">
                Autonomous
              </span>
            </div>
            <p className="text-[11px] text-slate-500 font-medium tracking-tight">Estd. 1988</p>
          </div>
        </a>

        {/* Center: Desktop Navigation Links with Active Kinetic Indicators */}
        <nav className="hidden xl:flex items-center gap-6 text-[13px] font-semibold text-slate-600">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              data-target={link.id}
              className={`nav-link transition-colors hover:text-[#FF6D4D] ${
                activeSection === link.id ? "nav-active" : ""
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Far Right Action Cluster */}
        <div className="flex items-center gap-3">
          <span className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Round 1 Free Pass
          </span>

          <a
            href="https://unstop.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-lift inline-flex items-center justify-center px-4 sm:px-5 py-2.5 rounded-xl font-display font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-[#FF6039] to-[#FF6D4D] hover:from-[#FF6D4D] hover:to-[#EA580C] shadow-md shadow-orange-500/25 hover:shadow-glow-coral transition-all duration-200 group"
          >
            <span>REGISTER ON UNSTOP</span>
            <svg
              className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white/95 backdrop-blur-md border-b border-slate-200 px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold text-slate-700 hover:text-[#FF6D4D] py-1"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs font-bold text-emerald-700">Round 1 Free Pass</span>
            <a
              href="https://unstop.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-[#FF6D4D] underline"
            >
              Register on Unstop →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
