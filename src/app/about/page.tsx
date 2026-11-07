import type { Metadata } from "next";
import { AboutSection } from "../../components/sections/about-section";
import { aboutContent } from "../../data/about";

export const metadata: Metadata = aboutContent.en.seo;

export default function AboutPage() {
  return (
    <main className="light min-h-screen bg-background text-foreground">
      <AboutSection content={aboutContent.en} />
    </main>
  );
}
