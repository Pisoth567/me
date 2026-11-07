export type AboutLocale = "en" | "km";

export interface AboutContent {
  eyebrow: string;
  heading: string;
  introduction: string;
  paragraphs: readonly string[];
  imageAlt: string;
  seo: { title: string; description: string };
}

export const aboutContent: Record<"en", AboutContent> &
  Partial<Record<Exclude<AboutLocale, "en">, AboutContent>> = {
  en: {
    eyebrow: "GET TO KNOW ME",
    heading: "About Me",
    introduction:
      "Hello! I'm Net Pisoth, a Computer Science student interested in full-stack development.",
    paragraphs: [
      "I enjoy learning how modern web applications are built, from responsive user interfaces to backend functionality.",
      "Through personal projects, I continue to improve my technical skills and explore new technologies.",
    ],
    imageAlt: "Portrait of Net Pisoth with colorful paint accents",
    seo: {
      title: "About Net Pisoth | Computer Science Student",
      description:
        "Meet Net Pisoth, a Computer Science student exploring full-stack development, responsive interfaces, and backend functionality through personal projects.",
    },
  },
};
