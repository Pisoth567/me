import { QrCode, TextCursorInput } from "lucide-react";
import { content, type Locale, type Project } from "@/src/data/content";

// An explicitly labeled illustration, never a fabricated application screenshot.
export function ProjectPreview({ project, locale = "en" }: { project: Project; locale?: Locale }) {
  if (project.screenshot) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border bg-muted/50">
        <Image
          src={project.screenshot}
          alt={locale === "km" ? "ទំព័រដើម Generate Description AI បង្ហាញព័ត៌មានផលិតផល របៀបសរសេរ និងជម្រើសភាសា" : "Generate Description AI homepage showing product information, writing tone, and output language controls"}
          fill
          sizes="(min-width: 768px) 65vw, 100vw"
          className="object-contain"
        />
      </div>
    );
  }
  const Icon = project.preview === "attendance" ? QrCode : TextCursorInput;
  return (
    <div role="img" aria-label={`${project.cardTitle ?? project.name} — ${content[locale].projects.placeholder}`} className="relative flex aspect-video w-full flex-col items-center justify-center gap-4 overflow-hidden rounded-xl border border-border bg-muted/50 px-4 text-center">
      <div aria-hidden="true" className="absolute size-56 rounded-full border border-primary/10 sm:size-72" />
      <div aria-hidden="true" className="absolute size-40 rounded-full border border-primary/10 sm:size-52" />
      <Icon aria-hidden="true" className="relative size-12 text-primary sm:size-16" strokeWidth={1.25} />
      <span aria-hidden="true" lang="en" className="relative text-lg font-bold tracking-tight sm:text-2xl">{project.cardTitle ?? project.name}</span>
      <span aria-hidden="true" className="absolute inset-x-3 bottom-3 text-[10px] leading-4 text-muted-foreground sm:text-xs">{content[locale].projects.placeholder}</span>
    </div>
  );
}
import Image from "next/image";
