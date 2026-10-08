import { siteConfig } from "@/config/site";
import { founder, teamRoster } from "@/content/team";

/**
 * Every piece of copy on the home page, plus the asset paths each section expects.
 * Components read from here so wording and imagery change without touching markup.
 */

export const hero = {
  headline: "Software Built for How Your Business Runs.",
  description:
    "We design and build AI analytics, ERP and CRM software around your workflows, and we stay with you after launch.",
  primaryCta: { label: "Book now", href: siteConfig.contact.whatsappUrl },
  secondaryCta: { label: "See the work", href: "/services" },
  /** One cut-out scene across the bottom of the panel: rocket behind, crowd in front. */
  art: { src: "/images/hero-img.png", alt: "" },
} as const;

export const video = {
  src: "/images/hero-video1.mp4",
  poster: "/images/video_thumb1.png",
  /** Describes the video for people who cannot see it. */
  label: "SetupFX founder introducing how the team builds software",
  muteOn: "Unmute video",
  muteOff: "Mute video",
  play: "Play video",
  pause: "Pause video",
} as const;

export const stats = {
  /** Names the section for screen readers, which skip the numbers on their own. */
  ariaLabel: "SetupFX by the numbers",
  /** `value` is the number to count to; `suffix` frames it. */
  items: [
    { value: 120, suffix: "+", label: "Projects delivered" },
    { value: 8, suffix: "+", label: "Countries served" },
    { display: "24/7", label: "Support coverage" },
  ],
  images: {
    left: { src: "/images/side-img.png", alt: "" },
    right: { src: "/images/side-img.png", alt: "" },
  },
} as const;

export const techTicker = {
  /** The strip is decorative motion; this names it for anyone not seeing it scroll. */
  ariaLabel: "Technologies we build with",
  /* The entries themselves live in `tech-icons.ts`, beside their brand marks. */
} as const;

export const system = {
  heading: "The system behind software that scales.",
  cards: {
    discovery: {
      label: "DISCOVERY",
      title: "Map your workflow.",
      body: "We study how your team works, find the slow steps, and plan what to build first.",
      checklist: [
        { title: "Discovery workshop", status: "Complete" },
        { title: "Process mapping", status: "Complete" },
        { title: "Feature planning", status: "Developed" },
        { title: "Scope sign-off", status: "Validated" },
      ],
      pending: "Finding your priorities",
      ready: "Plan ready",
    },
    team: {
      label: "BUILD & TEAM",
      title: "Work with a dedicated team.",
      body: "Engineers, designers and analysts work as one team on your product, with a demo every week.",
      /** Real team portraits, from the single roster in `team.ts`. */
      members: teamRoster,
      avatarAlt: "Portraits of the SetupFX delivery team",
    },
    support: {
      label: "SUPPORT & GROWTH",
      title: "Never stop improving.",
      body: "We monitor usage, fix issues fast, and add new features as your business grows.",
      image: { src: "/images/card_img1.png", alt: "Product screen under review" },
    },
  },
} as const;

export const services = {
  heading: "What we build.",
  detailsHeading: "What that covers",
  items: [
    {
      slug: "ai-analytics",
      title: "AI & Analytics",
      body: "Turn your sales, stock and operations data into dashboards and forecasts your team can act on.",
      details: [
        "Data from your existing systems pulled into one model",
        "Dashboards built around the decisions you make daily",
        "Demand and revenue forecasting",
        "Alerts when a number moves outside its usual range",
      ],
    },
    {
      slug: "erp",
      title: "ERP Systems",
      body: "One system for orders, inventory, purchasing, accounts and HR.",
      details: [
        "Orders, stock and purchasing in a single flow",
        "Role-based approvals with a full audit trail",
        "GST-ready invoicing and accounts",
        "Attendance, payroll and leave in the same place",
      ],
    },
    {
      slug: "crm",
      title: "CRM Platforms",
      body: "Track every lead and customer in one place, with reminders so no follow-up is missed.",
      details: [
        "Leads captured from your site, calls and WhatsApp",
        "Pipeline stages with automatic follow-up reminders",
        "Quotes, orders and history on every customer record",
        "Sales reporting by team, source and stage",
      ],
    },
    {
      slug: "custom-software",
      title: "Custom Software",
      body: "Web apps, mobile apps and integrations for work that off-the-shelf tools do not cover.",
      details: [
        "Web and mobile apps shaped around your process",
        "Integrations with the tools you already pay for",
        "Admin panels with proper roles and permissions",
        "Documented code, handed over in your repository",
      ],
    },
  ],
} as const;

export const leadership = {
  heading: "Leadership",
  description: "The person accountable for every platform we ship.",
  founder: {
    name: founder.name,
    role: founder.role,
    photo: { src: founder.src, alt: `${founder.name}, ${founder.role}` },
  },
  /** Registered details, so the card states who you are actually contracting with. */
  detailsHeading: "Registered details",
  details: [
    { label: "Company", value: siteConfig.legal.entity },
    { label: "Office", value: siteConfig.legal.office },
    { label: "GST No.", value: siteConfig.legal.gst },
    { label: "Email", value: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
    {
      label: "WhatsApp",
      value: siteConfig.contact.whatsapp,
      href: `https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g, "")}`,
    },
  ] as { label: string; value: string; href?: string }[],
} as const;

export const pricing = {
  label: "FULLY MANAGED DEVELOPMENT",
  title: "Your software project. Managed from day one.",
  includedHeading: "What's included",
  included: [
    "Discovery and planning",
    "Design and development",
    "Testing and launch",
    "Ongoing support and updates",
  ],
  minimum: { caption: "Starting with a minimum of", value: "1", unit: "month" },
  custom: "Custom pricing based on your project goals and scope.",
  cta: { label: "Book now", href: siteConfig.contact.whatsappUrl },
  /** Collage artworks that slide behind the panel on a loop. */
  backgrounds: [
    { src: "/images/bg_img.png", alt: "" },
    { src: "/images/bg_img1.png", alt: "" },
  ],
} as const;

export const footer = {
  /** The closing line, read just before the page runs out into the image. */
  headline: "Let's build the system your business runs on.",
  subtitle:
    "Tell us how your team works today. We map the gaps, scope the first build, and stay with you long after launch.",
  primaryCta: { label: "Book now", href: siteConfig.contact.whatsappUrl },
  secondaryCta: { label: "See the work", href: "/services" },
  image: { src: "/images/footer_img.png", alt: "" },
  links: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Cookie Policy", href: "/cookies" },
    { label: "Terms of Service", href: "/terms" },
  ],
  copyright: "© 2026 SetupFX. All rights reserved.",
} as const;
