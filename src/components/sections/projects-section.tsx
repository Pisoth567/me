import Link from "next/link";
import { ArrowUpRight, CodeXml as Github } from "lucide-react";
import { content, projects, type Locale } from "@/src/data/content";
import { ProjectPreview } from "@/src/components/ui/project-preview";

// Explicit selection and order stay fixed when the full project collection grows.
const featuredSlugs = ["icheck-smart-attendance", "generate-description-ai"];
const featuredProjects = featuredSlugs.map((slug) => projects.find((project) => project.slug === slug)!);
const actionClass = "inline-flex min-h-11 items-center gap-1.5 rounded-lg text-sm font-semibold underline-offset-4 hover:text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring";

export function ProjectsSection({ locale = "en" }: { locale?: Locale }) {
  const copy = content[locale].projects;
  return (
    <section id="projects" lang={locale} aria-labelledby="projects-title" className="site-container section-spacing scroll-mt-24 py-16 sm:py-24">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold tracking-[.16em] text-primary">{copy.eyebrow}</p>
        <h2 id="projects-title" className="mt-3 text-3xl leading-snug font-bold tracking-tight sm:text-4xl">{copy.heading}</h2>
        <p className="mt-4 leading-7 text-muted-foreground">{copy.description}</p>
      </header>

      <div className="mt-9 grid items-stretch gap-5 md:grid-cols-2">
        {featuredProjects.map((project, index) => {
          const translated = locale === "km" ? project.km : project;
          return (
            <article key={project.slug} aria-labelledby={`featured-${project.slug}`} className="flex min-w-0 flex-col rounded-2xl border border-border bg-card p-3 text-card-foreground motion-safe:transition-[transform,border-color] motion-safe:duration-200 [@media(hover:hover)]:hover:border-primary/50 motion-safe:[@media(hover:hover)]:hover:-translate-y-1">
              <ProjectPreview project={project} locale={locale} />
              <div className="flex flex-1 flex-col px-2 pt-6 pb-3 sm:px-4 sm:pb-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs leading-5 font-semibold text-primary">{translated.categoryLabel}</span>
                  <span aria-hidden="true" className="text-xs text-muted-foreground tabular-nums">0{index + 1}</span>
                </div>
                <h3 id={`featured-${project.slug}`} lang="en" className="mt-5 text-2xl leading-snug font-bold tracking-tight sm:text-3xl">{project.cardTitle ?? project.name}</h3>
                {translated.subtitle && <p className="mt-2 text-sm leading-6 text-muted-foreground">{translated.subtitle}</p>}
                <p className="mt-4 leading-7 text-muted-foreground">{translated.description}</p>
                <div className="mt-auto pt-6">
                  <ul className="flex flex-wrap gap-2" lang="en">
                    {project.technologies.map((technology) => <li key={technology} className="rounded-full border border-border bg-muted px-3 py-1 text-xs leading-5">{technology}</li>)}
                  </ul>
                  <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-1 border-t border-border pt-4">
                    {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className={actionClass} aria-label={`${copy.source} — ${project.cardTitle ?? project.name}`}><Github aria-hidden="true" className="size-4" />{copy.source}</a>}
                    {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" className={actionClass} aria-label={`${copy.live} — ${project.cardTitle ?? project.name}`}>{copy.live}<ArrowUpRight aria-hidden="true" className="size-4" /></a>}
                    <Link href={`/projects/${project.slug}`} className={`${actionClass} text-primary`} aria-label={`${copy.details} — ${project.cardTitle ?? project.name}`}>{copy.details}<ArrowUpRight aria-hidden="true" className="size-4" /></Link>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
      <div className="mt-6 flex justify-end">
        <Link href="/projects" className={`${actionClass} text-primary`}>{copy.all}<ArrowUpRight aria-hidden="true" className="size-4" /></Link>
      </div>
    </section>
  );
}
