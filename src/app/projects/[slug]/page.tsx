import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CodeXml } from "lucide-react";
import { projects } from "@/src/data/content";
import { ProjectPreview } from "@/src/components/ui/project-preview";
import { pageMetadata } from "@/src/lib/seo";
const Github = CodeXml;

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return pageMetadata(`${project.name} | Net Pisoth`, project.description, `/projects/${project.slug}`);
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return <main className="site-container min-h-screen py-28 sm:py-36"><Link href="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"><ArrowLeft className="size-4" /> All projects</Link><p className="mt-10 text-xs font-semibold tracking-[.16em] text-primary uppercase">{project.status}</p><h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">{project.name}</h1><p className="mt-4 text-muted-foreground">{project.category}</p><p className="mt-8 max-w-3xl text-lg leading-8 text-muted-foreground">{project.details}</p><div className="mt-8 max-w-4xl"><ProjectPreview project={project} /></div><div className="mt-10 grid gap-6 lg:grid-cols-2"><section className="rounded-3xl border border-border bg-card p-6"><h2 className="text-xl font-bold">Technology</h2><div className="mt-5 flex flex-wrap gap-2">{project.technologies.map((technology) => <span key={technology} className="rounded-full bg-muted px-3 py-1 text-sm">{technology}</span>)}</div></section><section className="rounded-3xl border border-border bg-card p-6"><h2 className="text-xl font-bold">Verified project areas</h2><ul className="mt-5 space-y-3 text-muted-foreground">{project.features.map((feature) => <li key={feature}>— {feature}</li>)}</ul></section></div><div className="mt-8 flex flex-wrap gap-3">{project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">Visit website <ArrowUpRight className="size-4" /></a>}{project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"><Github className="size-4" /> View source</a>}</div></main>;
}
