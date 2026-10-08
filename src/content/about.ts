import type { Heading } from "@/types";

export const aboutPage: Heading = {
  eyebrow: "About",
  title: "A small team that stays on the project",
  description:
    "SetupFX is a senior-only studio. The engineers in your discovery workshop are the ones who write the code and answer the phone after launch.",
};

export const story: string[] = [
  "We started SetupFX after years of watching good businesses pay for software that nobody used. The pattern was always the same: a long requirements document, a team that never met the people doing the work, and a launch that quietly went back to spreadsheets.",
  "So we work the other way around. We spend the first week on your floor, we ship something usable inside six weeks, and we measure the project on whether the work actually got easier.",
];

export const valuesHeading = "How we work";

export const values: { title: string; description: string }[] = [
  {
    title: "Scope before code",
    description:
      "Every engagement starts with a written blueprint and a fixed estimate. If the numbers do not work, you find out in week two rather than month six.",
  },
  {
    title: "You own everything",
    description:
      "Source code, infrastructure and documentation sit in your accounts from day one. We are a choice you keep making, not a dependency.",
  },
  {
    title: "Senior engineers only",
    description:
      "No layer of account managers between you and the people building the system. You talk to the engineer who wrote the module.",
  },
  {
    title: "Boring technology",
    description:
      "We pick tools your next hire will already know. Novelty is a cost, and it is usually paid by whoever maintains the system later.",
  },
];
