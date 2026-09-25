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

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FFFDFC]">
      {/* 1. Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Persistent Top Navigation */}
      <Navbar />

      {/* 3. Hero Section with Kinetic Parallax & 3D Tilt Card (Contest Overview) */}
      <HeroSection />

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
