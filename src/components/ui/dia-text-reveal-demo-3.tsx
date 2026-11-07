import { DiaTextReveal } from "@/components/ui/dia-text-reveal"

export function DiaTextRevealDemo3() {
  return (
    <div className="text-foreground flex items-center justify-center">
      <h1 className="text-left tracking-tight md:text-4xl">
        Learn to{" "}
        <DiaTextReveal
          repeat
          repeatDelay={1.2}
          text={["Full Stack Developer", "Computer Science", "Software Engineer"]}
        />
      </h1>
    </div>
  )
}
