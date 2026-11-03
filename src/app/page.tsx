import DemoOne from "@/components/ui/demo";
import { StripedPatternDemo } from "../components/ui/striped-pattern-demo";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <DemoOne />
      <StripedPatternDemo />

    </main>
  );
}