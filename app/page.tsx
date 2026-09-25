"use client";

import { useState, useEffect } from "react";
import AnnouncementBar, { Navbar } from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import EditionsSection from "@/components/EditionsSection";
import StagesSection from "@/components/StagesSection";
import StatsSection from "@/components/StatsSection";
import GallerySection from "@/components/GallerySection";
import PrizesSection from "@/components/PrizesSection";
import PartnersSection from "@/components/PartnersSection";
import FaqSection from "@/components/FaqSection";
import ClosingRegistration from "@/components/ClosingRegistration";
import Footer from "@/components/Footer";
import IntroAnimation from "@/components/IntroAnimation";

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);

  // Fallback for prefers-reduced-motion
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIntroComplete(true);
    }
    
    // Scroll reveal logic
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".reveal-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen flex flex-col bg-[#FFFDFC]">
      {!introComplete && (
        <IntroAnimation onComplete={() => setIntroComplete(true)} />
      )}

      {/* 1. Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Persistent Top Navigation */}
      <Navbar introComplete={introComplete} />

      {/* 3. Hero Section with Kinetic Parallax & 3D Tilt Card (Contest Overview) */}
      <HeroSection introComplete={introComplete} />

      {/* 4. Evolution Across 6 Flagship Editions (Heritage of Excellence) */}
      <EditionsSection />

      {/* 5. Contest Architecture (Four-Stage Evaluation Pipeline) */}
      <StagesSection />

      {/* 6. Scale of WCC (National Reach & Legacy) */}
      <StatsSection />

      {/* 7. Previous Editions Photo Archive (Carousel) */}
      <GallerySection />

      {/* 8. Prizes, Honors & Merit Podium */}
      <PrizesSection />

      {/* 9. Industry & Community Ecosystem Partners */}
      <PartnersSection />

      {/* 10. Frequently Asked Questions (Accordion) */}
      <FaqSection />

      {/* 11. Closing Registration Finale */}
      <ClosingRegistration />

      {/* 12. Institutional Site Footer */}
      <Footer />
    </main>
  );
}
