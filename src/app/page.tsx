import type { Metadata } from "next";
import HeroSection from "../components/sections/hero-section";
import { portfolio } from "../data/portfolio";
import NavBarDemo from "../components/nav-bar";
import { AboutSection } from "../components/sections/about-section";
import { aboutContent } from "../data/about";

export const metadata: Metadata = portfolio.seo;

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-x-0 top-5 z-50 flex justify-center">
        <NavBarDemo />
      </div>

      <HeroSection />

      <div id="about" className="flex min-h-screen items-center scroll-mt-20">
        <AboutSection content={aboutContent.en} />
      </div>

      {["Experience", "Skills", "Projects", "Education"].map((title) => (
        <section
          key={title}
          id={title.toLowerCase()}
          className="flex h-screen items-center justify-center px-6"
        >
          <h1 className="text-4xl font-bold">{title}</h1>
        </section>
      ))}
    </main>
  );
}
