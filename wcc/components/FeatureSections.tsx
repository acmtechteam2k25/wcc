"use client";

import React, { useState } from "react";
import { EDITIONS_DATA, GALLERY_SLIDES } from "@/lib/contest-data";

export function EditionsSection() {
  const [selectedEdition, setSelectedEdition] = useState(6);
  const data = EDITIONS_DATA[selectedEdition];

  return (
    <section className="py-20 bg-[#FBF9F8] border-t border-slate-200/80 relative" id="history">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
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
        <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-12 shadow-subtle-card transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
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

export function GallerySection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((curr) => (curr === 0 ? GALLERY_SLIDES.length - 1 : curr - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((curr) => (curr === GALLERY_SLIDES.length - 1 ? 0 : curr + 1));
  };

  return (
    <section className="py-20 bg-white border-t border-slate-200/80" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
          <div>
            <span className="text-xs font-bold text-[#FF6D4D] uppercase tracking-widest">
              Archival Moments
            </span>
            <h2 className="text-3xl font-display font-bold text-[#0F172A] mt-2 tracking-tight">
              Previous Editions Photo Archive
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Moments of intense problem-solving, grand stage felicitation, and campus celebration.
            </p>
          </div>

          {/* Carousel Controller Arrows */}
          <div className="flex items-center gap-2 mt-4 sm:mt-0">
            <button
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="w-10 h-10 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 flex items-center justify-center transition-colors shadow-sm"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Slide"
              className="w-10 h-10 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 flex items-center justify-center transition-colors shadow-sm"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Real Photo Carousel */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 shadow-xl">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {GALLERY_SLIDES.map((slide, idx) => (
              <div key={idx} className="min-w-full relative">
                <div className="aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover object-center opacity-95 hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                </div>
                <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div>
                    <span className="px-3 py-1 rounded-md text-xs font-bold uppercase bg-[#FF6D4D] text-white">
                      {slide.tag}
                    </span>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-white mt-2">
                      {slide.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 max-w-xl mt-1">{slide.desc}</p>
                  </div>
                  <div className="shrink-0 text-xs font-mono text-slate-300 bg-black/50 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10">
                    {slide.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {GALLERY_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`transition-all rounded-full ${
                currentSlide === i ? "w-8 h-2 bg-[#FF6D4D]" : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export function PrizesSection() {
  return (
    <section className="py-20 bg-[#FBF9F8] border-t border-slate-200/80">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 2nd Prize */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-subtle-card flex flex-col items-center text-center order-2 md:order-1">
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

          {/* 1st Prize (Champion) */}
          <div className="relative p-8 rounded-3xl bg-white border-2 border-[#FF6D4D] shadow-glow-coral flex flex-col items-center text-center order-1 md:order-2 transform md:-translate-y-3">
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
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF6D4D]">Grand Winner</span>
            <h3 className="font-display font-bold text-4xl text-[#0F172A] mt-1 mb-2">₹25,000+</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-6">
              The Official ACM WCC 6.0 Golden Winner&apos;s Trophy, Certificate of National Excellence, and premier tech career mentorship.
            </p>
            <div className="mt-auto w-full pt-4 border-t border-orange-100 text-xs font-bold text-[#FF6D4D]">
              Highest Algorithmic Standing
            </div>
          </div>

          {/* 3rd Prize */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-subtle-card flex flex-col items-center text-center order-3">
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

        {/* Additional Honors Pill Bar */}
        <div className="mt-10 p-4 rounded-2xl bg-white border border-slate-200/90 flex flex-wrap items-center justify-around gap-4 text-center text-xs font-medium text-slate-600">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FF6D4D]" />
            Certificates for all Round 2 Finalists
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            ACM Digital Library Access credits
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-sky-500" />
            Category Honors for Best All-Women Team
          </span>
        </div>
      </div>
    </section>
  );
}

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
