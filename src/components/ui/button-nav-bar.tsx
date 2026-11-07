"use client";

import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import {
  Home,
  BriefcaseBusiness,
  CodeXml,
  FolderGit2,
  GraduationCap,
  User,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { AnimatedThemeTogglerDemo } from "./animated-theme-toggler-demo";

const navItems = [
  { label: "Home", icon: Home },
  { label: "About", icon: User },
  { label: "Experience", icon: BriefcaseBusiness },
  { label: "Skills", icon: CodeXml },
  { label: "Projects", icon: FolderGit2 },
  { label: "Education", icon: GraduationCap },
];

const MOBILE_LABEL_WIDTH = 72;

type BottomNavBarProps = {
  className?: string;
  defaultIndex?: number;
  stickyBottom?: boolean;
};

export function BottomNavBar({
  className,
  defaultIndex = 0,
  stickyBottom = false,
}: BottomNavBarProps) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const index = navItems.findIndex(
              (item) => item.label.toLowerCase() === entry.target.id,
            );
            if (index !== -1) setActiveIndex(index);
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    for (const item of navItems) {
      const section = document.getElementById(item.label.toLowerCase());
      if (section) observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 26 }}
      role="navigation"
      aria-label="Bottom Navigation"
      className={cn(
        "bg-card dark:bg-card border border-border dark:border-sidebar-border rounded-full flex items-center p-2 shadow-xl space-x-1 min-w-[320px] max-w-[95vw] h-13",
        stickyBottom && "fixed inset-x-0 bottom-4 mx-auto z-20 w-fit",
        className,
      )}
    >
      <div className="flex min-w-0 items-center gap-1 overflow-x-auto">
      {navItems.map((item, idx) => {
        const Icon = item.icon;
        const isActive = activeIndex === idx;

        return (
          <motion.a
            key={item.label}
            whileTap={{ scale: 0.97 }}
            className={cn(
              "flex items-center gap-0 px-3 py-2 rounded-full transition-colors duration-200 relative h-10 min-w-11 min-h-10 max-h-11",
              isActive
                ? "bg-primary/10 dark:bg-primary/15 text-secondary dark:text-primary gap-2"
                : "bg-transparent text-muted-foreground dark:text-muted-foreground hover:bg-muted dark:hover:bg-muted",
              "focus:outline-none focus-visible:ring-0",
            )}
            href={`#${item.label.toLowerCase()}`}
            onClick={(event) => {
              if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

              const id = item.label.toLowerCase();
              const section = document.getElementById(id);
              if (!section) return;

              event.preventDefault();
              window.history.pushState(null, "", `#${id}`);
              section.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            aria-label={item.label}
            aria-current={isActive ? "location" : undefined}
          >
            <Icon
              size={22}
              strokeWidth={2}
              aria-hidden
              className="transition-colors duration-200"
            />

            <motion.div
              initial={false}
              animate={{
                width: isActive ? `${MOBILE_LABEL_WIDTH}px` : "0px",
                opacity: isActive ? 1 : 0,
                marginLeft: isActive ? "8px" : "0px",
              }}
              transition={{
                width: { type: "spring", stiffness: 350, damping: 32 },
                opacity: { duration: 0.19 },
                marginLeft: { duration: 0.19 },
              }}
              className={cn("overflow-hidden flex items-center max-w-18")}
            >
              <span
                className={cn(
                  "font-medium text-xs whitespace-nowrap select-none transition-opacity duration-200 overflow-hidden text-ellipsis text-[clamp(0.625rem,0.5263rem+0.5263vw,1rem)] leading-[1.9]",
                  isActive ? "text-secondary dark:text-primary" : "opacity-0",
                )}
                title={item.label}
              >
                {item.label}
              </span>
            </motion.div>
          </motion.a>
        );
      })}
      </div>
      <div className="shrink-0 border-l border-border pl-1">
        <AnimatedThemeTogglerDemo />
      </div>
    </motion.nav>
  );
}

export default BottomNavBar;
