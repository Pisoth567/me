"use client";

import { AnimatedSpan, Terminal, TypingAnimation } from "@/components/ui/terminal";
import { useAnimationEnabled } from "./use-animation-enabled";
import { SpotlightCard } from "./spotlight-card";

interface TerminalEntry {
  command: string;
  output: string;
}

export function DeveloperTerminal({ entries }: { entries: readonly TerminalEntry[] }) {
  const animationEnabled = useAnimationEnabled();

  return (
    <div className="min-w-0">
      <dl className="sr-only">
        {entries.map(({ command, output }) => (
          <div key={command}>
            <dt>{command}</dt>
            <dd>{output}</dd>
          </div>
        ))}
      </dl>
      <div aria-hidden="true">
        <SpotlightCard className="developer-terminal shadow-sm">
          <Terminal
            key={animationEnabled ? "animated" : "static"}
            sequence={animationEnabled}
            className="h-auto max-h-none max-w-none rounded-2xl border-0 bg-transparent text-[var(--terminal-text)] [&_pre]:font-mono [&_code]:overflow-visible [&_code]:whitespace-pre-wrap [&_code]:wrap-break-word"
          >
            {entries.flatMap(({ command, output }) => animationEnabled ? [
              <TypingAnimation key={`${command}-command`} duration={75} className="block min-h-6 text-sm leading-6 text-[var(--terminal-command)]">
                {`$ ${command}`}
              </TypingAnimation>,
              <AnimatedSpan key={`${command}-output`} className="min-h-12 text-sm leading-6 text-[var(--terminal-text)]">
                {output}
              </AnimatedSpan>,
            ] : [
              <span key={`${command}-command`} className="block min-h-6 text-sm leading-6 text-[var(--terminal-command)]">$ {command}</span>,
              <span key={`${command}-output`} className="block min-h-12 text-sm leading-6 text-[var(--terminal-text)]">{output}</span>,
            ])}
          </Terminal>
        </SpotlightCard>
      </div>
    </div>
  );
}
