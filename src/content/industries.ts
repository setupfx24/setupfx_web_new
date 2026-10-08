import type { Heading, Industry } from "@/types";

export const industriesSection: Heading = {
  eyebrow: "Industries",
  title: "Sectors we already understand",
  description:
    "We have shipped systems in each of these, so the first workshop starts with questions about your business rather than about the basics.",
};

export const industriesPage: Heading = {
  eyebrow: "Industries",
  title: "Where we work",
  description:
    "Different sectors, the same pattern: scattered data, manual handoffs and reporting nobody trusts. Here is what we typically build in each.",
};

export const industries: Industry[] = [
  {
    slug: "manufacturing",
    name: "Manufacturing",
    summary: "Production planning, shop-floor visibility and quality traceability.",
    useCases: ["Production scheduling", "Machine downtime analytics", "Batch traceability"],
  },
  {
    slug: "retail",
    name: "Retail and e-commerce",
    summary: "Stock accuracy across channels and demand forecasting that survives a busy season.",
    useCases: ["Multi-channel inventory", "Demand forecasting", "Returns handling"],
  },
  {
    slug: "logistics",
    name: "Logistics",
    summary: "Fleet, route and warehouse operations with live status for customers.",
    useCases: ["Route optimisation", "Warehouse management", "Delivery tracking portals"],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    summary: "Scheduling, records and reporting under strict access and audit requirements.",
    useCases: ["Patient scheduling", "Audit-ready access logs", "Compliance reporting"],
  },
  {
    slug: "financial-services",
    name: "Financial services",
    summary: "Client onboarding, risk reporting and reconciliation at volume.",
    useCases: ["KYC onboarding", "Risk dashboards", "Automated reconciliation"],
  },
  {
    slug: "professional-services",
    name: "Professional services",
    summary: "Projects, utilisation and billing joined up end to end.",
    useCases: ["Resource planning", "Time and billing", "Margin reporting"],
  },
];
