"use client";

import React, { useState } from "react";
import { GALLERY_SLIDES } from "@/lib/contest-data";

import Image from "next/image";

export function GallerySection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((curr) => (curr === 0 ? GALLERY_SLIDES.length - 1 : curr - 1));
  };

  const nextSlide = React.useCallback(() => {
    setCurrentSlide((curr) => (curr === GALLERY_SLIDES.length - 1 ? 0 : curr + 1));
  }, []);

  React.useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="py-20 bg-white border-t border-slate-200/80" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
          <div className="reveal-on-scroll">
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
          <div className="flex items-center gap-2 mt-4 sm:mt-0 reveal-on-scroll" style={{ transitionDelay: '0.1s' }}>
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
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 shadow-xl reveal-on-scroll" style={{ transitionDelay: '0.2s' }}>
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {GALLERY_SLIDES.map((slide, idx) => (
              <div key={idx} className="min-w-full relative">
                <div className="aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden relative">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 1280px"
                    className="object-cover object-center opacity-95 hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />
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

export default GallerySection;
