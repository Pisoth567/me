"use client";

import { TypingAnimation } from "@/components/ui/typing-animation";
import { useAnimationEnabled } from "./use-animation-enabled";

export function DeveloperRole({ roles }: { roles: string[] }) {
  const animationEnabled = useAnimationEnabled();

  return (
    <div className="min-h-16 text-xl leading-8 font-bold text-foreground md:text-2xl">
      <p className="sr-only">{roles.join(". ")}.</p>
      <div aria-hidden="true" className="grid">
        <div className={`col-start-1 row-start-1 ${animationEnabled ? "invisible" : ""}`}>
          {roles.map((role) => <span key={role} className="block">{role}</span>)}
        </div>
        {animationEnabled && (
          <TypingAnimation
            words={roles}
            loop
            typeSpeed={90}
            deleteSpeed={50}
            pauseDelay={2200}
            startOnView={false}
            className="col-start-1 row-start-1 leading-8 tracking-normal"
          />
        )}
      </div>
    </div>
  );
}
