import type { Metadata } from "next";
import { pageMetadata } from "@/src/lib/seo";
import { AboutSection } from "../../components/sections/about-section";
import { aboutContent } from "../../data/about";

export const metadata: Metadata = pageMetadata(aboutContent.en.seo.title, aboutContent.en.seo.description, "/about");

export default function AboutPage() {
  return (
    <main className="about-page min-h-screen">
      <AboutSection content={aboutContent.en} pageLayout />
    </main>
  );
}
