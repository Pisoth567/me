import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

export function AnimatedThemeTogglerDemo() {
  return (
    <AnimatedThemeToggler className="flex size-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring [&_svg]:size-5" />
  );
}
