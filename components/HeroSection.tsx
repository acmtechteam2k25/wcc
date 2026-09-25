"use client";

import React, { useRef, useEffect } from "react";

export default function HeroSection({ introComplete = true }: { introComplete?: boolean }) {
  const heroRef = useRef<HTMLDivElement>(null);
  const posterContainerRef = useRef<HTMLDivElement>(null);
  const tiltCardRef = useRef<HTMLDivElement>(null);
  const posterFrameRef = useRef<HTMLDivElement>(null);

  // 1. Kinetic Typography Mouse Tracking
  useEffect(() => {
    const heroEl = heroRef.current;
    if (!heroEl) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = heroEl.getBoundingClientRect();
      const normX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const normY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      document.documentElement.style.setProperty("--pointer-x", normX.toFixed(3));
      document.documentElement.style.setProperty("--pointer-y", normY.toFixed(3));
    };

    const handleMouseLeave = () => {
      document.documentElement.style.setProperty("--pointer-x", "0");
      document.documentElement.style.setProperty("--pointer-y", "0");
    };

    heroEl.addEventListener("mousemove", handleMouseMove);
    heroEl.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      heroEl.removeEventListener("mousemove", handleMouseMove);
      heroEl.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // 2. 3D Tilt Parallax for the Official Poster
  useEffect(() => {
    const container = posterContainerRef.current;
    const tiltCard = tiltCardRef.current;
    const posterFrame = posterFrameRef.current;
    if (!container || !tiltCard) return;

    const handleTiltMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -12;
      const rotateY = ((x - centerX) / centerX) * 12;

      tiltCard.classList.remove("poster-float-anim");
      tiltCard.style.transform = `rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale(1.025)`;

      if (posterFrame) {
        const shadowX = (centerX - x) * 0.12;
        const shadowY = Math.max(15, (centerY - y) * 0.15 + 25);
        posterFrame.style.boxShadow = `${shadowX}px ${shadowY}px 45px -10px rgba(15, 23, 42, 0.28)`;
      }
    };

    const handleTiltLeave = () => {
      tiltCard.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
      tiltCard.classList.add("poster-float-anim");
      if (posterFrame) {
        posterFrame.style.boxShadow = "";
      }
    };

    container.addEventListener("mousemove", handleTiltMove);
    container.addEventListener("mouseleave", handleTiltLeave);

    return () => {
      container.removeEventListener("mousemove", handleTiltMove);
      container.removeEventListener("mouseleave", handleTiltLeave);
    };
  }, []);

  return (
    <section
      id="overview"
      ref={heroRef}
      className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden glow-radial-orange"
    >
      {/* Atmospheric depth lighting */}
      <div className="absolute top-6 right-[-8%] w-[500px] h-[500px] rounded-full glow-radial-blue pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-[5%] w-[450px] h-[350px] rounded-full bg-orange-100/30 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column (7 Cols) - Kinetic Display */}
          <div className="lg:col-span-7 flex flex-col items-start text-left hero-kinetic-title">
            {/* Eyebrow Pill */}
            <div className={`${introComplete ? "anim-pill-in" : "opacity-0"} inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-xs sm:text-sm text-slate-700 mb-5`}>
              <span className="w-2 h-2 rounded-full bg-[#FF6D4D]" />
              <span className="font-medium">ACM VNRVJIET&nbsp;</span>
              <span className="text-[#FF6D4D] font-bold">| presents</span>
            </div>

            {/* Massive Display Headline with Kinetic Typography Depth */}
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl xl:text-7xl tracking-tight text-[#0F172A] uppercase leading-[1.04] mb-4 select-none">
              <span className={`kinetic-word kinetic-word-winter ${introComplete ? "anim-word-1" : "opacity-0"} block`}>WINTER</span>
              <span className={`kinetic-word kinetic-word-coding ${introComplete ? "anim-word-2" : "opacity-0"} block`}>CODING</span>
              <span className="relative inline-block text-[#FF6D4D] cursor-default">
                <span className={`kinetic-word kinetic-word-contest ${introComplete ? "anim-word-3" : "opacity-0"}`}>CONTEST</span>
                <span className={`kinetic-word kinetic-word-edition ${introComplete ? "anim-word-4" : "opacity-0"} inline-block ml-2 relative`}>
                  6.0
                </span>
              </span>
            </h1>

            {/* Tagline Subtitle */}
            <p className={`${introComplete ? "anim-tagline" : "opacity-0"} text-lg sm:text-2xl text-slate-600 font-normal tracking-normal mb-7`}>
              Code, Compile and Compete at <span className="font-bold text-[#0F172A]">National Level</span>.
            </p>

            {/* Standout Editorial Status Badges */}
            <div className={`${introComplete ? "anim-badges" : "opacity-0"} flex flex-wrap items-center gap-2.5 mb-7`}>
            </div>

            {/* 3 Editorial Highlight Pods */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-xl mb-8">
              {/* Pod 1 */}
              <div className={`${introComplete ? "anim-pod-1" : "opacity-0"} p-3.5 rounded-2xl bg-white border border-orange-200/90 shadow-subtle-card flex items-center gap-3 transition-transform duration-200 hover:-translate-y-1 hover:shadow-card-hover cursor-default`}>
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#FF6D4D] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Prize Pool</p>
                  <p className="font-display font-bold text-[#0F172A] text-base">
                    ₹50,000+ <span className="text-xs text-[#FF6D4D] font-medium">Honors</span>
                  </p>
                </div>
              </div>

              {/* Pod 2 */}
              <div className={`${introComplete ? "anim-pod-2" : "opacity-0"} p-3.5 rounded-2xl bg-white border border-slate-200 shadow-subtle-card flex items-center gap-3 transition-transform duration-200 hover:-translate-y-1 hover:shadow-card-hover cursor-default`}>
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#006398] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Team Size</p>
                  <p className="font-display font-bold text-[#0F172A] text-base">1 – 2 Members</p>
                </div>
              </div>

              {/* Pod 3 */}
              <div className={`${introComplete ? "anim-pod-3" : "opacity-0"} p-3.5 rounded-2xl bg-white border border-emerald-200 shadow-subtle-card flex items-center gap-3 transition-transform duration-200 hover:-translate-y-1 hover:shadow-card-hover cursor-default`}>
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Round 1 Pass</p>
                  <p className="font-display font-bold text-emerald-700 text-base">100% FREE</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className={`${introComplete ? "anim-cta" : "opacity-0"} flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto`}>
              <a
                href="https://unstop.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-lift inline-flex items-center justify-center px-8 py-4 rounded-xl font-display font-bold text-sm sm:text-base text-white bg-gradient-to-r from-[#FF6039] to-[#FF6D4D] hover:from-[#FF6D4D] hover:to-[#EA580C] shadow-glow-coral hover:shadow-glow-coral-lg transition-all duration-200 group"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>REGISTER FOR FREE NOW</span>
                <svg
                  className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              <a
                href="#format"
                className="btn-lift inline-flex items-center justify-center px-6 py-4 rounded-xl font-display font-semibold text-sm sm:text-base text-slate-700 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 shadow-sm transition-all duration-200"
              >
                <svg className="w-4 h-4 mr-2 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
                <span>Explore Architecture & Schedule</span>
              </a>
            </div>
          </div>

          {/* Right Column (5 Cols) - 3D Perspective Poster Canvas */}
          <div
            id="poster-container"
            ref={posterContainerRef}
            className={`lg:col-span-5 flex justify-center poster-perspective-wrapper ${introComplete ? "anim-poster" : "opacity-0"}`}
          >
            <div
              id="tilt-card"
              ref={tiltCardRef}
              className="relative max-w-[420px] sm:max-w-[460px] w-full poster-tilt-card poster-float-anim"
              style={{ transform: "rotateX(0deg) rotateY(0deg) scale(1)" }}
            >
              <div
                id="poster-glow-bg"
                className="absolute -inset-3 bg-gradient-to-r from-orange-400/40 to-amber-300/30 rounded-3xl blur-2xl opacity-60 transition-opacity duration-300 pointer-events-none"
              />
              <div
                id="poster-frame"
                ref={posterFrameRef}
                className="relative rounded-2xl bg-white p-3 border border-slate-200/90 shadow-2xl overflow-hidden transition-shadow duration-300"
              >
                {/* EXACT AUTHENTIC POSTER ARTIFACT */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAJIua8QDrhg963yM3OiDM5tyOeqB9z4L-wOstlhEV4ixo2B322df2zW7I22eWATxFQSjstaStivP6n7GrQZgzjOZPMJWUVsBUTHFHzwDBzewW0iVBeQuepHmSJQbRhxjUALVTq8gznmPusloSGNAeJJTJvzHS9Av-pyjDSyKQgiT4cWQA4iUy-C5UwIEMsDE82X2sikdtoUOGEg6W9UXvZy_9cReKM1LkkJwsDzuo2q8qKMJNQbXK1k6LqHzpsAoTusE"
                  alt="Official Winter Coding Contest 6.0 Poster"
                  className="w-full h-auto aspect-[1080/1350] rounded-xl object-contain shadow-inner bg-slate-50 transition-transform duration-300"
                  loading="eager"
                />

                <div className="mt-3 grid grid-cols-2 gap-2 text-[11px] font-medium">
                  <div className="p-2 rounded-lg bg-orange-50 border border-orange-200/60 text-orange-950">
                    <div className="font-bold text-[#FF6D4D] uppercase text-[9px] tracking-wide">
                      Round 1 (Online)
                    </div>
                    <div>09 OCT 2026 • 9:00 AM</div>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-800">
                    <div className="font-bold text-slate-500 uppercase text-[9px] tracking-wide">
                      Round 2 (Campus)
                    </div>
                    <div>11 OCT 2026 • VNRVJIET</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
