import { TiltedGridHero } from "@/components/ui/tilted-grid-hero";
import { content, type Locale } from "@/src/data/content";
import { TECH_LOGOS } from "@/src/data/skills";

export function SkillsSection({ locale = "en" }: { locale?: Locale }) {
  const copy = content[locale].skills;

  return (
    <section id="skills" lang={locale} aria-labelledby="skills-title" className="site-container section-spacing scroll-mt-24 pt-16 pb-8 sm:pt-24 sm:pb-12">
      <header>
        <p className="text-xs font-semibold tracking-[.16em] text-primary">{copy.eyebrow}</p>
        <div className="mx-auto mt-6 max-w-3xl text-center">
          <h2 id="skills-title" className="text-3xl leading-snug font-bold tracking-tight sm:text-4xl">{copy.heading}</h2>
          <p className="mx-auto mt-4 max-w-xl leading-7 text-muted-foreground">{copy.description}</p>
        </div>
      </header>

      <TiltedGridHero
        images={TECH_LOGOS}
        speed={4}
        tileHeight={30}
        aspectRatio={1}
        gap={12}
        axis={55}
        curve={70}
        fade={12}
        aria-hidden="true"
        className="mt-8 h-[280px] w-full overflow-hidden rounded-2xl border border-border bg-card sm:h-[360px] lg:h-[420px]"
      />

    </section>
  );
}
