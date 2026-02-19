import React from "react";
import HeroSection from "@/components/cv/HeroSection";
import PositioningSection from "@/components/cv/PositioningSection";
import ExperienceTimeline from "@/components/cv/ExperienceTimeline";
import AIExpertiseSection from "@/components/cv/AIExpertiseSection";
import TechStackSection from "@/components/cv/TechStackSection";
import ManagementSection from "@/components/cv/ManagementSection";
import EducationSection from "@/components/cv/EducationSection";
import ValueProposition from "@/components/cv/ValueProposition";
import ContactSection from "@/components/cv/ContactSection";
import LifeSection from "@/components/cv/LifeSection";
import ChatBot from "@/components/cv/ChatBot";

export default function Home() {
  React.useEffect(() => { document.title = "Fabien SIMON"; }, []);
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <PositioningSection />
      <ExperienceTimeline />
      <AIExpertiseSection />
      <TechStackSection />
      <ManagementSection />
      <EducationSection />
      <ValueProposition />
      <LifeSection />
      <ContactSection />

      {/* Footer */}
      <footer className="bg-slate-950 py-8 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Fabien SIMON — Consultant freelance · Lyon / Genève
          </p>
        </div>
      </footer>
    </div>
  );
}