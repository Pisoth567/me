import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import portrait from "@/public/images/profile.png";
import type { AboutContent } from "../../data/about";
import { portfolio } from "../../data/portfolio";

export function AboutSection({ content, pageLayout = false }: { content: AboutContent; pageLayout?: boolean }) {
  return (
    <section aria-labelledby="about-heading" className={`site-container section-spacing ${pageLayout ? "about-page-section" : ""}`}>
      <div className={pageLayout ? "about-page-grid" : "grid gap-8 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]"}>
        <div className="min-w-0">
          <p className={pageLayout ? "mb-6 text-xs font-semibold tracking-[0.18em] text-primary" : "border w-44 text-center py-1 bg-primary mb-4 text-xs font-bold tracking-[0.16em]"}>
            {content.eyebrow}
          </p>
          <h1 id="about-heading" className={pageLayout ? "about-page-heading" : "text-4xl leading-tight font-bold tracking-tight sm:text-5xl"}>
            {pageLayout ? portfolio.heading : content.heading}
          </h1>
          <div className="mt-6 space-y-5 text-base leading-8 text-muted-foreground sm:text-lg">
            <p className="text-foreground">{content.introduction}</p>
            {content.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          {pageLayout && (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:mt-10">
              <Link href="/#projects" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-secondary px-6 py-3 font-body text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">
                Explore my projects <ArrowUpRight aria-hidden="true" className="size-4 shrink-0" />
              </Link>
              <Link href="/#skills" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl border border-border bg-background px-6 py-3 font-body text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">
                View my skills <ArrowRight aria-hidden="true" className="size-4 shrink-0" />
              </Link>
            </div>
          )}
        </div>
        <div className={pageLayout ? "about-page-visual" : "mx-auto w-full min-w-0 max-w-md lg:max-w-none"}>
          <div className={pageLayout ? "about-page-portrait" : "w-full"}>
            <Image
              src={portrait}
              alt={content.imageAlt}
              unoptimized={pageLayout}
              sizes={pageLayout ? "(min-width: 1280px) 480px, (min-width: 768px) 40vw, (min-width: 640px) 480px, calc(100vw - 80px)" : "(min-width: 1280px) 454px, (min-width: 1024px) 40vw, (min-width: 480px) 448px, calc(100vw - 32px)"}
              className={pageLayout ? "h-full w-full rounded-2xl object-cover object-top" : "h-auto w-full object-contain"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
