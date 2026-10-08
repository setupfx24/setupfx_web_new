import type { NavItem, SocialLink } from "@/types";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const siteConfig = {
  name: "SetupFX",
  tagline: "Software that runs your operations",
  /** Exact <title> for the home page, and the base of the Open Graph title. */
  seoTitle: "SetupFX | AI Analytics, ERP & CRM Software Development",
  description:
    "SetupFX builds AI analytics, ERP and CRM software for growing businesses, with support after launch.",
  url: siteUrl,
  ogImage: "/images/og-image.png",
  /** Full lockup: white wordmark with the blue mark, on a transparent background. */
  logo: { src: "/images/logo.png", width: 762, height: 279 },
  locale: "en_US",
  keywords: [
    "AI analytics",
    "ERP development",
    "CRM development",
    "custom software development",
    "systems integration",
    "SetupFX",
  ],
  contact: {
    email: "setupfx24@gmail.com",
    /** A WhatsApp number, not a desk line. Label it as such wherever it is shown. */
    whatsapp: "+1 (908) 228-0305",
    /** Where every "Book now" button lands: a WhatsApp chat with the message prefilled. */
    whatsappUrl:
      "https://api.whatsapp.com/send/?phone=19082280305&text=Hello&type=phone_number&app_absent=0",
    location: "Raipur, Chhattisgarh, India",
  },
  /** Registered entity details, shown on the contact and about pages. */
  legal: {
    entity: "Setupfx Softech OPC Pvt Ltd",
    office: "4012, 4th Floor, Currency Tower, Vishal Nagar, Raipur, Chhattisgarh 492001",
    gst: "22ABSCS5663H1ZX",
  },
} as const;

/** Primary navigation. Each link is its own page. */
export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Team", href: "/team" },
];

export const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/setupfx" },
  { label: "GitHub", href: "https://github.com/setupfx" },
  { label: "X", href: "https://x.com/setupfx" },
];

/** Crawlable routes. Used by `sitemap.ts`. */
export const siteRoutes: string[] = [
  "/",
  "/services",
  "/team",
  "/process",
  "/industries",
  "/about",
  "/contact",
];

export type SiteConfig = typeof siteConfig;
