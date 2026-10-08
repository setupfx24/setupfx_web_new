/** Values shared by more than one module. */

/** Endpoint the contact form posts to. */
export const CONTACT_ENDPOINT = "/api/contact";

/** Length limits enforced by both the Zod schema and the form inputs. */
export const FIELD_LIMITS = {
  name: { min: 2, max: 80 },
  company: { max: 80 },
  message: { min: 20, max: 2000 },
} as const;

/** Subjects offered by the contact form. The source of truth for the Zod enum. */
export const ENQUIRY_TOPICS = [
  "ai-analytics",
  "erp",
  "crm",
  "custom-software",
  "integrations",
  "support",
  "other",
] as const;

export type EnquiryTopic = (typeof ENQUIRY_TOPICS)[number];

/**
 * Static date reported by `sitemap.ts`, and the year shown in the footer.
 * Kept constant so every page can still be prerendered — reading the clock
 * during render would opt routes out of static generation.
 */
export const SITE_LAST_MODIFIED = "2026-10-07";
export const COPYRIGHT_YEAR = "2026";
