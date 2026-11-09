
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text"
import { AuroraTextDemo } from "./aurora-text-demo"

export function AnimatedShinyTextDemo() {
  return (
    <div className="z-10 mb-2 flex items-center justify-center">
        <AnimatedShinyText className="inline-flex px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          <h1 className="text-3xl font-bold">Hi There, I&apos;m <AuroraTextDemo/>.</h1>
        </AnimatedShinyText>
    </div>
  )
}
