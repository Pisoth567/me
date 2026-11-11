import Link from "next/link";
import { ArrowUpRight, CodeXml, Laptop, Palette } from "lucide-react";
import { content, type Locale } from "@/src/data/content";

const icons = { "full-stack": CodeXml, software: Laptop, design: Palette };

export function ExperienceSection({ locale = "en" }: { locale?: Locale }) {
  const copy = content[locale].experience;

  return (
    <section
      id="experience"
      lang={locale}
      aria-labelledby="experience-title"
      className="site-container section-spacing scroll-mt-24 py-16 sm:py-24"
    >
      <header className="max-w-3xl">
        <p className="text-xs font-semibold tracking-[0.16em] text-primary">{copy.eyebrow}</p>
        <h2 id="experience-title" className="mt-3 text-3xl leading-tight font-bold tracking-tight sm:text-4xl">
          {copy.heading}
        </h2>
        <p className="mt-4 leading-7 text-muted-foreground">{copy.description}</p>
      </header>

      <div className="mt-9 grid gap-5 lg:grid-cols-2">
        {copy.items.map((item) => {
          const featured = item.id === "full-stack";
          const Icon = icons[item.id];

          return (
            <article
              key={item.id}
              aria-labelledby={`experience-${item.id}`}
              className={`flex min-w-0 flex-col rounded-2xl border bg-card p-5 text-card-foreground sm:p-8 motion-safe:transition-[transform,border-color] motion-safe:duration-200 [@media(hover:hover)]:hover:border-primary/50 motion-safe:[@media(hover:hover)]:hover:-translate-y-0.5 ${featured ? "border-primary/30 lg:col-span-2" : "border-border"}`}
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                {featured ? (
                  <p className="text-xs font-semibold tracking-[0.14em] text-primary">{copy.featured}</p>
                ) : (
                  <Icon aria-hidden="true" className="size-6 shrink-0 text-primary" />
                )}
                <span className="ml-auto rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs whitespace-nowrap text-primary tabular-nums">
                  {item.period}
                </span>
              </div>

              <div className="mt-6 flex items-start gap-3">
                {featured && <Icon aria-hidden="true" className="mt-1 size-7 shrink-0 text-primary" />}
                <div className="min-w-0">
                  <h3 id={`experience-${item.id}`} className="text-2xl leading-snug font-bold tracking-tight sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.type}</p>
                </div>
              </div>

              <p className="mt-5 max-w-4xl leading-7 text-muted-foreground">{item.description}</p>

              {item.highlights && (
                <dl className="mt-6 grid gap-5 border-t border-border pt-6 lg:grid-cols-3">
                  {item.highlights.map((highlight) => (
                    <div key={highlight.label} className="min-w-0">
                      <dt className="font-semibold text-primary">{highlight.label}</dt>
                      <dd className="mt-2 text-sm leading-7 text-muted-foreground">{highlight.description}</dd>
                    </div>
                  ))}
                </dl>
              )}

              <div className="mt-auto pt-6">
                <ul className="flex flex-wrap gap-2">
                  {item.badges.map((badge) => (
                    <li key={badge} className="rounded-full border border-border bg-muted px-3 py-1 text-sm">
                      {badge}
                    </li>
                  ))}
                </ul>
                {featured && (
                  <>
                    <Link
                      href="/projects/icheck-smart-attendance"
                      className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                    >
                      {copy.projectLink}
                      <ArrowUpRight aria-hidden="true" className="size-4 shrink-0" />
                    </Link>
                    <p className="mt-4 text-xs leading-6 text-muted-foreground">{copy.journeyNote}</p>
                  </>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
