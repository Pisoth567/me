import type { Metadata } from "next";
import HeroSection from "../components/sections/hero-section";
import { homeTitle, homeDescription, identityGraph, pageMetadata } from "@/src/lib/seo";
import NavBarDemo from "../components/nav-bar";
import { AboutSection } from "../components/sections/about-section";
import { aboutContent } from "../data/about";

import { ExperienceSection } from "../components/sections/experience-section";

import { SkillsSection } from "../components/sections/skills-section";

import { ProjectsSection } from "../components/sections/projects-section";

import { EducationSection } from "../components/sections/education-section";

import { PortfolioFooter } from "../components/sections/portfolio-footer";

export const metadata: Metadata = pageMetadata(homeTitle, homeDescription, "/");

export default function Home() {
  const structuredData = identityGraph();
  return (
    <main className="min-h-screen text-foreground">
      {structuredData && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />}
      <div className="fixed inset-x-0 top-5 z-50 flex justify-center">
        <NavBarDemo />
      </div>

      <HeroSection />

      <div id="about" className="flex min-h-[50%] items-center scroll-mt-20">
        <AboutSection content={aboutContent.en} />
      </div>

      <ExperienceSection />

      <SkillsSection />

      <ProjectsSection />

      <EducationSection />

      <PortfolioFooter />
    </main>
  );
}
