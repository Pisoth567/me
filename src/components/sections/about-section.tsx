import Image from "next/image";
import portrait from "@/public/images/profile.png";
import type { AboutContent } from "../../data/about";

export function AboutSection({ content, pageLayout = false }: { content: AboutContent; pageLayout?: boolean }) {
  return (
    <section aria-labelledby="about-heading" className={`site-container section-spacing ${pageLayout ? "about-page-section" : ""}`}>
      <div className={pageLayout ? "about-page-grid" : "grid gap-8 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]"}>
        <div className="min-w-0">
          <p className={pageLayout ? "sr-only" : "border w-44 text-center py-1 bg-primary text-secondary mb-4 text-xs font-bold tracking-[0.16em] text-muted-foreground"}>
            {content.eyebrow}
          </p>
          <h1 id="about-heading" className={pageLayout ? "about-page-heading" : "text-4xl leading-tight font-bold tracking-tight sm:text-5xl"}>
            {pageLayout ? "WHO I AM?" : content.heading}
          </h1>
          <div className="mt-6 space-y-5 text-base leading-8 text-muted-foreground sm:text-lg">
            <p className="text-foreground">{content.introduction}</p>
            {content.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
        <div className={pageLayout ? "about-page-visual" : "mx-auto w-full min-w-0 max-w-md lg:max-w-none"}>
          <div className={pageLayout ? "about-page-portrait" : "w-full"}>
            <Image
              src={portrait}
              alt={content.imageAlt}
              unoptimized={pageLayout}
              sizes="(min-width: 1280px) 454px, (min-width: 1024px) 40vw, (min-width: 480px) 448px, calc(100vw - 32px)"
              className={pageLayout ? "h-full w-full object-cover object-top grayscale" : "h-auto w-full object-contain"}
            />
          </div>
          {pageLayout && <div className="about-page-label" aria-hidden="true"><span>ABOUT ME</span></div>}
        </div>
      </div>
    </section>
  );
}
