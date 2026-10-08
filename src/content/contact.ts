import { siteConfig } from "@/config/site";
import type { EnquiryTopic } from "@/lib/constants";
import type { Heading } from "@/types";

export const contactPage: Heading = {
  eyebrow: "Contact",
  title: "Start a conversation",
  description:
    "Tell us what you are trying to fix and we will reply within one business day with next steps, an outline of scope and a realistic range on cost.",
};

export const contactHeadings = {
  form: "Enquiry form",
  details: "Other ways to reach us",
} as const;

export const contactDetails: { label: string; value: string; href?: string }[] = [
  { label: "Company", value: siteConfig.legal.entity },
  { label: "Email", value: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
  {
    label: "WhatsApp",
    value: siteConfig.contact.whatsapp,
    /* wa.me wants the digits alone, so the display formatting is stripped here. */
    href: `https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g, "")}`,
  },
  { label: "Office", value: siteConfig.legal.office },
  { label: "GST No.", value: siteConfig.legal.gst },
];

/** Labels for the enquiry topics defined in `src/lib/constants.ts`. */
export const topicLabels: Record<EnquiryTopic, string> = {
  "ai-analytics": "AI analytics",
  erp: "ERP system",
  crm: "CRM platform",
  "custom-software": "Custom software",
  integrations: "Systems integration",
  support: "Support for an existing system",
  other: "Something else",
};

export const contactForm = {
  legend: "Project enquiry",
  fields: {
    name: { label: "Full name", placeholder: "Alex Moreau" },
    email: { label: "Work email", placeholder: "alex@company.com" },
    company: { label: "Company", placeholder: "Company name", optionalNote: "Optional" },
    topic: { label: "What do you need help with?", placeholder: "Choose a topic" },
    message: {
      label: "What are you trying to fix?",
      placeholder:
        "Tell us about the process that is causing problems, the systems involved and any deadline you are working to.",
    },
  },
  submit: { idle: "Send enquiry", pending: "Sending..." },
  status: {
    success: "Thanks, your enquiry is on its way. We will reply within one business day.",
    error: "Something went wrong sending your enquiry. Please email us instead.",
    invalid: "Please check the highlighted fields and try again.",
  },
  privacyNote: "We use your details to reply to this enquiry only.",
} as const;
