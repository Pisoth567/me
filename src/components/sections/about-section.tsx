import Image from "next/image";
import portrait from "@/public/images/profile.png";
import type { AboutContent } from "../../data/about";

export function AboutSection({ content }: { content: AboutContent }) {
  return (
    <section aria-labelledby="about-heading" className="site-container section-spacing">
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,11fr)_minmax(0,9fr)] lg:gap-14">
        <div className="min-w-0">
          <p className="mb-4 text-xs font-bold tracking-[0.16em] text-muted-foreground">
            {content.eyebrow}
          </p>
          <h1 id="about-heading" className="text-4xl leading-tight font-bold tracking-tight sm:text-5xl">
            {content.heading}
          </h1>
          <div className="mt-6 space-y-5 text-base leading-8 text-muted-foreground sm:text-lg">
            <p className="text-foreground">{content.introduction}</p>
            {content.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
        <div className="mx-auto w-full min-w-0 max-w-md lg:max-w-none">
          <div className="overflow-hidden rounded-2xl border border-border bg-card p-3 shadow-sm sm:p-5">
            <Image
              src={portrait}
              alt={content.imageAlt}
              sizes="(min-width: 1280px) 454px, (min-width: 1024px) 40vw, (min-width: 480px) 448px, calc(100vw - 32px)"
              className="h-auto w-full rounded-lg bg-accent object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
