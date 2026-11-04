import DemoOne from "@/components/ui/demo";
import { DitherFieldDemo } from "../components/ui/dither-field-demo";
import { HeroContent } from "../components/ui/hero-content";

export default function Home() {
  return (
    <div className="relative isolate flex min-h-svh flex-col bg-black">
      <DitherFieldDemo />
      <DemoOne />
      <main className="relative z-10 flex flex-1 items-center py-6 sm:py-8">
        <HeroContent />
      </main>
    </div>
  );
}
