import AnnouncementBar, { Navbar } from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import { StatsSection, StagesSection } from "@/components/MiddleSections";
import {
  EditionsSection,
  GallerySection,
  PrizesSection,
  PartnersSection,
} from "@/components/FeatureSections";
import { FaqSection, ClosingRegistration, Footer } from "@/components/FooterSections";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FFFDFC]">
      {/* 1. Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Persistent Top Navigation */}
      <Navbar />

      {/* 3. Hero Section with Kinetic Parallax & 3D Tilt Card */}
      <HeroSection />

      {/* 4. Evolution Across 6 Flagship Editions (Heritage of Excellence) */}
      <EditionsSection />

      {/* 5. Contest Architecture (Four-Stage Evaluation Pipeline) */}
      <StagesSection />

      {/* 6. Scale of WCC (National Reach & Legacy) */}
      <StatsSection />

      {/* 8. Previous Editions Photo Archive (Carousel) */}
      <GallerySection />

      {/* 9. Prizes, Honors & Merit Podium */}
      <PrizesSection />

      {/* 10. Industry & Community Ecosystem Partners */}
      <PartnersSection />

      {/* 11. Frequently Asked Questions (Accordion) */}
      <FaqSection />

      {/* 12. Closing Registration Finale */}
      <ClosingRegistration />

      {/* 13. Institutional Site Footer */}
      <Footer />
    </main>
  );
}
