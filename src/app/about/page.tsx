import type { Metadata } from "next";
import { AboutSection } from "../../components/sections/about-section";
import { aboutContent } from "../../data/about";

export const metadata: Metadata = aboutContent.en.seo;

export default function AboutPage() {
  return (
    <main className="about-page min-h-screen">
      <AboutSection content={aboutContent.en} pageLayout />
    </main>
  );
}
