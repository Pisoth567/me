import { StripedPattern } from "../magicui/striped-pattern"

export function StripedPatternDemo() {
  return (
    <div className="relative top-5 flex h-200 w-full flex-col items-center justify-center overflow-hidden rounded-lg border">
      <StripedPattern className="mask-[radial-gradient(300px_circle_at_center,white,transparent)]" />
    </div>
  )
}
