import Link from "next/link";

export default function ProjectPage() {
  return (
    <main className="site-container section-spacing min-h-svh space-y-6">
      <h1 className="text-3xl font-bold">Project details</h1>
      <p className="text-muted-foreground">Project details are not available yet. This page is a placeholder.</p>
      <Link href="/projects" className="text-foreground decoration-secondary underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">
        Back to projects
      </Link>
    </main>
  );
}
