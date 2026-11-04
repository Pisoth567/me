import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="site-container section-spacing min-h-svh space-y-6">
      <h1 className="text-3xl font-bold">Projects</h1>
      <p className="text-muted-foreground">Project content is not available yet. This page is a placeholder.</p>
      <Link href="/" className="text-foreground decoration-secondary underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">
        Back to home
      </Link>
    </main>
  );
}
