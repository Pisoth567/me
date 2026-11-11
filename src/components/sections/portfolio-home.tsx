"use client";

import { ArrowUpRight, CodeXml, MapPin } from "lucide-react";
import { useState } from "react";
import { PortfolioFooter } from "./portfolio-footer";
import { EducationSection } from "./education-section";
import { ProjectsSection } from "./projects-section";
import { SkillsSection } from "./skills-section";
import { ExperienceSection } from "./experience-section";

import { content, type Locale } from "@/src/data/content";
import NavBarDemo from "@/src/components/nav-bar";
import { DitherField } from "@/components/ui/dither-field";
import TerminalDemo from "@/src/components/ui/terminal.demo";
import { DeveloperRole } from "@/src/components/ui/developer-role";

const sectionClass = "site-container section-spacing scroll-mt-24 py-16 sm:py-24";
const Github = CodeXml;

export function PortfolioHome() {
  const [locale, setLocale] = useState<Locale>("en");
  const copy = content[locale];

  return (
    <main lang={locale === "km" ? "km" : "en"} className="min-h-screen overflow-x-clip text-foreground">
      <div className="fixed inset-x-0 top-3 z-50 flex justify-center px-2 sm:top-5">
        <NavBarDemo labels={copy.nav} locale={locale} onLocaleChange={() => setLocale(locale === "en" ? "km" : "en")} />
      </div>

      <section id="home" className="relative isolate flex min-h-[min(860px,100svh)] items-center overflow-hidden pt-24">
        <DitherField className="absolute inset-0 -z-10 text-primary/35" intensity={0.62} />
        <div className="site-container grid w-full items-center gap-12 py-16 lg:grid-cols-[1.08fr_.92fr] lg:py-24">
          <div className="min-w-0">
            <p className="mb-5 text-sm font-semibold tracking-[.18em] text-primary">{copy.hero.greeting}</p>
            <h1 className="max-w-4xl text-5xl leading-[.96] font-bold tracking-[-.055em] sm:text-6xl lg:text-7xl">{copy.hero.headline}</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">{copy.hero.introduction}</p>
            <div className="mt-6"><DeveloperRole roles={[...copy.hero.roles]} /></div>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#projects" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/85">{copy.hero.explore} <ArrowUpRight className="size-4" /></a>
              <a href="#about" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold transition-colors hover:bg-muted">{copy.hero.about}</a>
              <a href="#contact" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold transition-colors hover:bg-muted">{copy.hero.contact}</a>
            </div>
          </div>
          <TerminalDemo />
        </div>
      </section>

      <section id="about" className={sectionClass} aria-labelledby="about-title">
        <SectionLead eyebrow={copy.about.eyebrow} title={copy.about.heading} />
        <div className="mt-9 grid gap-5 rounded-3xl border border-border bg-card p-6 sm:p-8 lg:grid-cols-[.9fr_1.1fr]">
          <p className="text-xl leading-8 font-semibold">{copy.about.introduction}</p>
          <div className="space-y-4 text-muted-foreground">{copy.about.paragraphs.map((paragraph) => <p key={paragraph} className="leading-8">{paragraph}</p>)}</div>
        </div>
      </section>

      <ExperienceSection locale={locale} />

      <SkillsSection locale={locale} />

      <ProjectsSection locale={locale} />

      <EducationSection locale={locale} />

      <section id="contact" className={`${sectionClass} pb-10`} aria-labelledby="contact-title">
        <div className="rounded-3xl border border-primary/30 bg-primary/10 p-7 sm:p-10"><p className="text-xs font-semibold tracking-[.16em] text-primary">{copy.contact.eyebrow}</p><h2 id="contact-title" className="mt-3 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">{copy.contact.heading}</h2><p className="mt-4 max-w-xl leading-7 text-muted-foreground">{copy.contact.description}</p><div className="mt-7 flex flex-wrap items-center gap-4"><a href="https://github.com/Pisoth567" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"><Github className="size-4" />{copy.contact.github}</a><span className="inline-flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="size-4 text-primary" />{copy.contact.location}</span></div></div>
      </section>
      <PortfolioFooter locale={locale} contactHref="#contact" />
    </main>
  );
}

function SectionLead({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return <div className="max-w-3xl"><p className="text-xs font-semibold tracking-[.16em] text-primary">{eyebrow}</p><h2 className="mt-3 text-3xl leading-tight font-bold tracking-tight sm:text-4xl">{title}</h2>{description && <p className="mt-4 leading-7 text-muted-foreground">{description}</p>}</div>;
}
