import Link from "next/link";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { GithubIcon, Linkedin01Icon, TelegramIcon } from "@hugeicons/core-free-icons";
import { content, type Locale } from "@/src/data/content";

// Existing verified destinations from the portfolio's Social Dock.
const socials = [
  { name: "GitHub", href: "https://github.com/Pisoth567", icon: GithubIcon },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/net-pisoth-a03255436/", icon: Linkedin01Icon },
  { name: "Telegram", href: "https://t.me/net_pisoth", icon: TelegramIcon },
];
const linkClass = "inline-flex min-h-11 items-center justify-center rounded-md text-muted-foreground motion-safe:transition-colors motion-safe:duration-200 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring";

export function PortfolioFooter({ locale = "en", contactHref = "mailto:pisoth887@gmail.com" }: { locale?: Locale; contactHref?: string }) {
  const copy = content[locale];
  return (
    <footer lang={locale} className="site-container border-t border-border py-8 sm:py-10">
      <div className="grid items-center gap-5 text-center md:grid-cols-[1fr_auto_1fr] md:gap-6 md:text-left">
        <div className="min-w-0">
          <div className="flex items-center justify-center gap-3 md:justify-start">
            <Image src="/images/brand/np-logo.png" alt="" width={40} height={40} className="size-10 shrink-0" />
            <p lang="en" className="text-xl font-bold tracking-[.12em] text-primary">NET PISOTH</p>
          </div>
          <p className="mt-2 text-xs leading-6 text-muted-foreground">{copy.footer}</p>
        </div>
        <nav aria-label={locale === "km" ? "តំណភ្ជាប់នៅបាតទំព័រ" : "Footer navigation"} className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium">
          <Link href="#about" className={linkClass}>{copy.nav.about}</Link>
          <Link href="#projects" className={linkClass}>{copy.nav.projects}</Link>
          <Link href={contactHref} className={linkClass}>{copy.footerContact}</Link>
        </nav>
        <div className="flex justify-center gap-2 md:justify-end">
          {socials.map(({ name, href, icon }) => (
            <a key={name} href={href} aria-label={name} target="_blank" rel="noopener noreferrer" className={`${linkClass} size-11`}>
              <HugeiconsIcon icon={icon} aria-hidden="true" className="size-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
