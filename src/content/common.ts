import type { CallToAction } from "@/types";

/** Copy for the site chrome: header, footer and the 404 page. */

export const chrome = {
  skipToContent: "Skip to main content",
  openMenu: "Open main menu",
  closeMenu: "Close main menu",
  toggleTheme: "Switch colour theme",
  toggleToDark: "Switch to dark theme",
  toggleToLight: "Switch to light theme",
  headerCta: { label: "Start a project", href: "/contact" } satisfies CallToAction,
} as const;

export const notFound = {
  code: "404",
  title: "We cannot find that page",
  description:
    "The link may be out of date, or the page may have moved. Try the services overview or get in touch and we will point you to the right place.",
  primaryCta: { label: "Back to home", href: "/" } satisfies CallToAction,
  secondaryCta: { label: "Contact us", href: "/contact" } satisfies CallToAction,
} as const;
