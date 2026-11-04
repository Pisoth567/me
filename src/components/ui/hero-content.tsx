import Image from "next/image"
import Link from "next/link"
import profileImage from "@/public/images/profile.png"

export function HeroContent() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="site-container relative grid min-w-0 items-center gap-12 lg:grid-cols-[minmax(0,11fr)_minmax(0,9fr)] lg:gap-12 xl:gap-16"
    >
      <div className="min-w-0 text-left [text-shadow:0_2px_12px_#000]">
        <p className="text-sm text-muted-foreground sm:text-base">Hello, welcome to my portfolio.</p>
        <h1 id="hero-heading" className="mt-4 text-4xl leading-tight font-bold tracking-tight break-words md:text-5xl lg:text-6xl">
          [Your name]
        </h1>
        <p className="mt-4 text-xl leading-snug text-foreground md:text-2xl">[Developer role / title]</p>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
          [Short introduction: add a few words about yourself and the work you want to share.]
        </p>
        <div className="mt-8 flex flex-wrap gap-3 text-shadow-none">
          <Link
            href="/projects"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-secondary px-6 py-3 text-sm font-bold text-secondary-foreground hover:bg-secondary-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            View Projects
          </Link>
        </div>
      </div>
      <figure className="mx-auto w-full max-w-[420px] min-w-0 lg:max-w-[480px]">
        <Image
          src={profileImage}
          alt="Net Pisoth"
          sizes="(min-width: 1280px) 480px, (min-width: 1024px) calc((100vw - 128px) * 0.45), (min-width: 452px) 420px, calc(100vw - 32px)"
          className="h-auto w-full object-contain"
          loading="eager"
        />
      </figure>
    </section>
  )
}
