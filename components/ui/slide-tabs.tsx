"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Position = { left: number; top: number; width: number; height: number; opacity: number };

const tabs = ["about", "experience", "skills", "projects", "education", "contact"];

function measure(tab: HTMLLIElement): Position {
  return { left: tab.offsetLeft, top: tab.offsetTop, width: tab.offsetWidth, height: tab.offsetHeight, opacity: 1 };
}

export const SlideTabs = () => {
  const [position, setPosition] = useState<Position>({ left: 0, top: 0, width: 0, height: 0, opacity: 0 });

  const tabsRef = useRef<(HTMLLIElement | null)[]>([]);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const updatePosition = () => {
      const tab = tabsRef.current[tabs.indexOf("projects")];
      if (tab) setPosition((current) => ({ ...measure(tab), opacity: current.opacity }));
    };
    const frame = requestAnimationFrame(updatePosition);
    const observer = new ResizeObserver(updatePosition);
    tabsRef.current.forEach((tab) => {
      if (tab) observer.observe(tab);
    });
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  const resetPosition = () => {
    setPosition((current) => ({ ...current, opacity: 0 }));
  };

  return (
    <nav aria-label="Main navigation">
      <ul
        onMouseLeave={resetPosition}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) resetPosition();
        }}
        className="relative mx-auto flex w-fit max-w-full flex-wrap justify-center rounded-3xl border border-border bg-[var(--navbar)] sm:rounded-full p-1"
      >
        {tabs.map((tab, i) => (
          <li
            key={tab}
            ref={(element) => { tabsRef.current[i] = element; }}
            onMouseEnter={(event) => {
              if (tab === "projects") setPosition(measure(event.currentTarget));
            }}
            className="z-10 block shrink-0"
          >
            {tab === "projects" ? (
              <Link
                href="/projects"
                onFocus={() => {
                  const element = tabsRef.current[i];
                  if (element) setPosition(measure(element));
                }}
                className="flex min-h-11 items-center justify-center rounded-full px-3 py-2 bg-secondary text-xs text-secondary-foreground uppercase focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring md:px-5 md:py-3 md:text-base"
              >
                {tab}
              </Link>
            ) : (
              <button
                type="button"
                disabled
                aria-label={`${tab} (coming soon)`}
                title="Coming soon"
                className="flex min-h-11 cursor-not-allowed items-center justify-center rounded-full px-3 py-2 text-xs text-muted-foreground uppercase md:px-5 md:py-3 md:text-base"
              >
                {tab}
              </button>
            )}
          </li>
        ))}
        <motion.li
          aria-hidden="true"
          initial={false}
          animate={position}
          transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 500, damping: 35 }}
          className="pointer-events-none absolute z-0 rounded-full border border-secondary"
        />
      </ul>
    </nav>
  );
};
