import { DitherField } from "@/components/ui/dither-field"

export function DitherFieldDemo() {
  return (
    <DitherField
      aria-hidden="true"
      pattern="horizon"
      color={["#341009", "#FF4C29", "#FFAD99"]}
      intensity={0.28}
      className="pointer-events-none absolute inset-0 z-0 w-full bg-black"
    >
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/40 via-black/15 to-transparent" />
    </DitherField>
  )
}
