import Link from "next/link";
import { ArrowUpRight, CodeXml, GraduationCap } from "lucide-react";
import { content, type Locale } from "@/src/data/content";

const icons = { university: GraduationCap, training: CodeXml };

export function EducationSection({ locale = "en" }: { locale?: Locale }) {
  const copy = content[locale].education;
  return (
    <section id="education" lang={locale} aria-labelledby="education-title" className="site-container section-spacing scroll-mt-24 py-16 sm:py-24">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold tracking-[.16em] text-primary">{copy.eyebrow}</p>
        <h2 id="education-title" className="mt-3 text-3xl leading-snug font-bold tracking-tight sm:text-4xl">{copy.heading}</h2>
        <p className="mt-4 leading-7 text-muted-foreground">{copy.description}</p>
      </header>

      <ol className="mt-9">
        {copy.items.map((item) => {
          const Icon = icons[item.id];
          return (
            <li key={item.id} className="relative pb-6 pl-7 last:pb-0 before:absolute before:top-8 before:-bottom-8 before:left-[6px] before:w-0.5 before:bg-primary/25 last:before:hidden sm:pl-10">
              <span aria-hidden="true" className="absolute top-8 left-0 z-10 size-3.5 rounded-full border-4 border-primary bg-background" />
              <article aria-labelledby={`education-${item.id}`} className="min-w-0 rounded-2xl border border-border bg-card p-5 text-card-foreground motion-safe:transition-[transform,border-color] motion-safe:duration-200 [@media(hover:hover)]:hover:border-primary/50 motion-safe:[@media(hover:hover)]:hover:-translate-y-0.5 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-xs leading-5 font-semibold tracking-[.12em] text-primary">{item.category}</p>
                  <span lang="en" className="ml-auto rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs leading-5 whitespace-nowrap text-primary tabular-nums">{item.period}</span>
                </div>
                <div className="mt-6 flex items-start gap-3">
                  <Icon aria-hidden="true" className="mt-1 size-6 shrink-0 text-primary sm:size-7" />
                  <div className="min-w-0">
                    <h3 id={`education-${item.id}`} className="text-2xl leading-snug font-bold tracking-tight sm:text-3xl">{item.program}</h3>
                    <p lang="en" className="mt-2 font-semibold">{item.school}</p>
                    {item.institutionName && <p lang="en" className="mt-1 text-sm leading-6 text-muted-foreground">{item.institutionName}</p>}
                    {item.location && <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.location}</p>}
                  </div>
                </div>
                <p className="mt-5 max-w-4xl leading-7 text-muted-foreground">{item.description}</p>
                <ul className="mt-6 flex flex-wrap gap-2" lang={item.id === "training" ? "en" : locale}>
                  {item.badges.map((badge) => <li key={badge} className="rounded-full border border-border bg-muted px-3 py-1 text-sm leading-6">{badge}</li>)}
                </ul>
                {item.id === "training" && (
                  <Link href="/projects/icheck-smart-attendance" className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">
                    {copy.projectLink}<ArrowUpRight aria-hidden="true" className="size-4 shrink-0" />
                  </Link>
                )}
              </article>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
