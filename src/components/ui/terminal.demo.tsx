"use client";

import { Terminal } from "./terminal";

export default function TerminalDemo() {
  return (
    <div className="flex w-full min-w-0 items-center justify-center">
      <Terminal
        className="hero-terminal w-full shadow-xl"
        lines={[
          { type: "success", text: "Name: Net Pisoth." },
          { type: "input", text: "alias: PisothDCode." },
          { type: "output", text: "location: Phnom Penh, Cambodia 🇰🇭" },
          {
            type: "system",
            text: `skills: [
      'HTML', 'CSS', 'JavaScript','TypeScript',
      'React', 'Next.js','Java', 'Spring Boot',
      'Python','PostgreSQL', 'Git','Docker']`,
          },
          { type: "success", text: "hardWorker: true," },
          { type: "success", text: "quickLearner: true," },
          { type: "success", text: "passionateDeveloper: true," },
        ]}
      />
    </div>
  );
}
