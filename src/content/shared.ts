import { siteConfig } from "@/config/site";
import type { CallToAction, Stat } from "@/types";

/**
 * Copy for the section components reused by /services, /industries and /about.
 * The home page has its own, separate copy in `src/content/home.ts`.
 */

export const stats: Stat[] = [
  { value: "120+", label: "Projects delivered" },
  { value: "8+", label: "Countries served" },
  { value: "24/7", label: "Support coverage" },
  { value: "9 yrs", label: "Average team experience" },
];

export const cta: {
  title: string;
  description: string;
  primaryCta: CallToAction;
  secondaryCta: CallToAction;
} = {
  title: "Tell us what is slowing your team down",
  description:
    "Send a short brief and we will reply within one business day with a clear view of scope, cost and timeline. No sales call required.",
  primaryCta: { label: "Book now", href: siteConfig.contact.whatsappUrl },
  secondaryCta: { label: "Read our process", href: "/#process" },
};
