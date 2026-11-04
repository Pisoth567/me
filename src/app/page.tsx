import DemoOne from "@/components/ui/demo";
import { DitherFieldDemo } from "../components/ui/dither-field-demo";

export default function Home() {
  return (
    <main className="h-screen">
      <DemoOne />
      <DitherFieldDemo/>
    </main>
  );
}