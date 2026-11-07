import { Fragment } from "react";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  GithubIcon,
  Home01Icon,
  Linkedin02Icon,
  Mail01Icon,
  NewTwitterIcon,
  UserIcon,
} from "@hugeicons/core-free-icons";

const items = [
  { label: "Home", icon: Home01Icon, href: "/", internal: true },
  { label: "About", icon: UserIcon, href: "/about", internal: true },
  { label: "GitHub", icon: GithubIcon, href: "https://github.com/Pisoth567/me", internal: false },
  { label: "LinkedIn", icon: Linkedin02Icon, href: null, internal: false },
  { label: "X", icon: NewTwitterIcon, href: null, internal: false },
  { label: "Email", icon: Mail01Icon, href: null, internal: false },
] as const;

const targetClassName = "hero-icon-link relative cursor-pointer inline-flex size-11 shrink-0 items-center justify-center rounded-xl text-[#364356] transition-colors hover:bg-[#EFFDF4] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#527D10] motion-reduce:transition-none";

export function HeroIconBox() {
  return (
    <nav aria-label="Personal navigation and social links" className="mt-7 flex w-fit max-w-full items-center rounded-[16px] border border-[#E1E7EF] bg-white p-0 min-[360px]:p-1 shadow-sm sm:gap-1">
      {items.map(({ label, icon, href, internal }, index) => (
        <Fragment key={label}>
          {index === 2 && <span aria-hidden="true" className="mx-0.5 min-[360px]:mx-1 h-6 w-px shrink-0 bg-[#E1E7EF]" />}
          {href === null ? (
            <button
              type="button"
              disabled
              aria-label={`${label} — coming soon`}
              title={`${label} — coming soon`}
              className="inline-flex size-11 shrink-0 cursor-not-allowed items-center justify-center rounded-xl text-[#364356] opacity-40"
            >
              <HugeiconsIcon icon={icon} size={20} strokeWidth={1.75} aria-hidden="true" />
            </button>
          ) : internal ? (
            <Link href={href} aria-label={label} className={targetClassName}>
              <HugeiconsIcon icon={icon} size={20} strokeWidth={1.75} aria-hidden="true" />
              <span aria-hidden="true" className="hero-icon-tooltip">{label}</span>
            </Link>
          ) : (
            <a href={href} aria-label={label} className={targetClassName}>
              <HugeiconsIcon icon={icon} size={20} strokeWidth={1.75} aria-hidden="true" />
              <span aria-hidden="true" className="hero-icon-tooltip">{label}</span>
            </a>
          )}
        </Fragment>
      ))}
    </nav>
  );
}
