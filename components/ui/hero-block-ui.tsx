"use client";

import { motion } from "framer-motion";

import { DiaTextReveal } from "@/components/ui/dia-text-reveal";
import { DockDemo } from "@/src/components/ui/dock-demo";
import TerminalDemo from "@/src/components/ui/terminal.demo";

export function HeroBlock() {
  return (
    <section
      id="home"
      className="relative flex min-h-[70vh] w-full flex-col items-center pt-20 pb-12"
    >
      <div className="site-container section-spacing relative z-10 grid flex-1 grid-cols-1 items-center gap-8 text-left lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        <motion.div
          className="min-w-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex rounded-full border border-border bg-muted px-3 py-1 text-xs tracking-[0.16em] text-muted-foreground">
            PORTFOLIO / 2026
          </span>

          <h1 className="@container mt-6 text-[clamp(1.75rem,5.5vw,3.75rem)] leading-[1.12] font-bold tracking-tight text-foreground lg:text-[clamp(2rem,4vw,4rem)]">
            <span className="block">My journey in tech</span>
            <span className="block min-h-[1.3em] text-[clamp(1rem,6.2cqw,4rem)] text-primary">
              <DiaTextReveal
                fixedWidth
                repeat
                repeatDelay={1.1}
                text={[
                  "Full Stack Developer",
                  "Computer Science Student",
                  "Software Engineer",
                ]}
                textColor="var(--primary)"
                className="w-full! leading-[1.3]"
              />
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground">
            I&apos;m a Computer Science student passionate about building modern web applications. From intuitive frontend experiences to practical backend systems, I enjoy transforming ideas into useful digital solutions.
          </p>

          <ul aria-label="Technologies" className="mt-6 flex flex-wrap gap-2">
            {["React", "Next.js", "Java", "Spring Boot", "PostgreSQL"].map((technology) => (
              <li key={technology} className="rounded-full border border-border bg-muted px-3 py-1.5 text-sm text-foreground">
                {technology}
              </li>
            ))}
          </ul>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-7 flex justify-start">
            <DockDemo />
          </motion.div>
        </motion.div>
        <div className="min-w-0">
          <TerminalDemo />
        </div>
      </div>
    </section>
  );
}
