import Image from "next/image";
import portrait from "@/public/images/profile.png";
import type { AboutContent } from "../../data/about";

export function AboutSection({ content, pageLayout = false }: { content: AboutContent; pageLayout?: boolean }) {
  const Heading = pageLayout ? "h1" : "h2";
  return (
    <section aria-labelledby="about-heading" className="site-container section-spacing about-page-section">
      <div className="about-page-grid w-full">
        <div className="about-page-content min-w-0">
          <p className="mb-6 text-xs font-semibold tracking-[0.18em] text-primary">
            GET TO KNOW ME
          </p>
          <Heading id="about-heading" className="about-page-heading">
            About Me
          </Heading>
          <div className="mt-6 space-y-5 text-base leading-8 text-muted-foreground sm:text-lg">
            <p className="text-foreground">
              I&apos;m a Computer Science student and aspiring full-stack developer based in Phnom Penh, Cambodia.
            </p>
            <p>
              I completed a six-month Full-Stack Web Development program at ISTAD, where I worked on ICHECK, a smart attendance management system.
            </p>
            <p>
              I enjoy building responsive user interfaces, developing backend functionality, and learning through hands-on projects.
            </p>
          </div>
        </div>
        <div className="about-page-visual">
          <div className="about-page-portrait">
            <Image
              src={portrait}
              alt={content.imageAlt}
              loading={pageLayout ? "eager" : "lazy"}
              fill
              unoptimized={pageLayout}
              sizes="(min-width: 1200px) 480px, (min-width: 1024px) 42vw, (min-width: 640px) calc(100vw - 96px), calc(100vw - 66px)"
              className="h-full w-full object-contain object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
