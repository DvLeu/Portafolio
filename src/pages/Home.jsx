import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { ProjectSection } from "../components/ProjectSection";
import { Reveal } from "../components/Reveal";
import { SkillsSection } from "../components/SkillsSection";
import { StarBackground } from "../components/StarBackground";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Analytics />
      <SpeedInsights />

      <StarBackground />
      <Navbar />

      {/* z-10 keeps the content above the fixed star background */}
      <main className="relative z-10">
        <HeroSection />
        <Reveal>
          <AboutSection />
        </Reveal>
        <Reveal>
          <ExperienceSection />
        </Reveal>
        <Reveal>
          <SkillsSection />
        </Reveal>
        <Reveal>
          <ProjectSection />
        </Reveal>
        <Reveal>
          <ContactSection />
        </Reveal>
      </main>

      <Footer />
    </div>
  );
};
