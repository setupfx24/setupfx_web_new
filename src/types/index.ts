/** Shared types used across config, content and components. */

export type NavItem = {
  label: string;
  href: string;
  /** Short description, used by the mobile navigation. */
  description?: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

/** Heading block that introduces a section or a page. */
export type Heading = {
  eyebrow: string;
  title: string;
  description: string;
};

export type Service = {
  slug: string;
  title: string;
  summary: string;
  /** Concrete results a client can expect. */
  outcomes: string[];
};

export type Industry = {
  slug: string;
  name: string;
  summary: string;
  useCases: string[];
};

export type ProcessStep = {
  /** Display label for the step order, e.g. "01". */
  order: string;
  title: string;
  summary: string;
  duration: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type CallToAction = {
  label: string;
  href: string;
};
