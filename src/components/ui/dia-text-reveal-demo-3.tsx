import { DiaTextReveal } from "@/components/ui/dia-text-reveal"

export function DiaTextRevealDemo3() {
  return (
    <div className="@container w-full min-w-0 text-foreground">
      <h1 className="whitespace-nowrap text-center text-[min(5.8cqw,3rem)] leading-tight tracking-tight">
        Learn to{" "}
        <DiaTextReveal
          className="w-auto!"
          fixedWidth
          repeat
          repeatDelay={1.1}
          text={["Full Stack Developer", "Computer Science", "Software Engineer"]}
        />
      </h1>
    </div>
  )
}
