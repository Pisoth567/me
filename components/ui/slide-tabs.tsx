"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Position = { left: number; width: number; opacity: number };

const tabs = ["Home", "Pricing", "Features", "Docs", "Blog"];

function measure(tab: HTMLLIElement): Position {
  return { left: tab.offsetLeft, width: tab.getBoundingClientRect().width, opacity: 1 };
}

export const SlideTabs = () => {
  const [position, setPosition] = useState<Position>({ left: 0, width: 0, opacity: 0 });
  const [selected, setSelected] = useState(0);
  const tabsRef = useRef<(HTMLLIElement | null)[]>([]);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const updatePosition = () => {
      const tab = tabsRef.current[selected];
      if (tab) setPosition(measure(tab));
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
  }, [selected]);

  const resetPosition = () => {
    const tab = tabsRef.current[selected];
    if (tab) setPosition(measure(tab));
  };

  return (
    <ul
      aria-label="Page selection"
      onMouseLeave={resetPosition}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) resetPosition();
      }}
      className="relative mx-auto flex w-fit rounded-full border-2 border-black bg-white p-1 dark:border-white dark:bg-neutral-800"
    >
      {tabs.map((tab, i) => (
        <li
          key={tab}
          ref={(element) => { tabsRef.current[i] = element; }}
          onMouseEnter={(event) => setPosition(measure(event.currentTarget))}
          className="z-10 block text-white mix-blend-difference"
        >
          <button
            type="button"
            aria-pressed={selected === i}
            onClick={() => {
              setSelected(i);
              const element = tabsRef.current[i];
              if (element) setPosition(measure(element));
            }}
            onFocus={() => {
              const element = tabsRef.current[i];
              if (element) setPosition(measure(element));
            }}
            className="block cursor-pointer rounded-full px-3 py-1.5 text-xs uppercase focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:px-5 md:py-3 md:text-base"
          >
            {tab}
          </button>
        </li>
      ))}
      <motion.li
        aria-hidden="true"
        initial={false}
        animate={position}
        transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 500, damping: 35 }}
        className="pointer-events-none absolute inset-y-1 z-0 rounded-full bg-black dark:bg-white"
      />
    </ul>
  );
};
