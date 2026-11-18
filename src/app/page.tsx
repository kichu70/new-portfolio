"use client";

import "./homePage.css";
import Navbar from "@/components/navbar/Navbar";
import {
  AmbientGlows,
  HeroSection,
  AboutSection,
  ProjectsSection,
  ExperienceSection,
  FooterSection,
} from "@/components/home";

export default function Home() {
  return (
    <main className="portfolio-universe">
      <AmbientGlows />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <FooterSection />
    </main>
  );
}
