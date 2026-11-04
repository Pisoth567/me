import { DitherField } from "@/components/ui/dither-field"

const cards = [
  {
    pattern: "clouds",
    title: "Edge cache",
    body: "Static assets served from 300 cities.",
    className: "",
  }
] as const

export function DitherFieldCardDemo() {
  return (
    <div>
      {cards.map((card) => (
        <DitherField
          key={card.title}
          pattern={card.pattern}
          color="var(--muted-foreground)"
          intensity={0.6}
          className={`bg-card rounded-xl border md:h-56 md:p-6 ${card.className}`}
        >
          {/* Fades the dots out behind the text so it stays readable. */}
          {/* <div className="from-card absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t to-transparent" /> */}
          {/* <h3 className="relative text-lg font-semibold tracking-tight">
            {card.title}
          </h3>
          <p className="text-muted-foreground relative text-sm">{card.body}</p> */}
        </DitherField>
      ))}
    </div>
  )
}
