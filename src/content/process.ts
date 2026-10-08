import type { Heading, ProcessStep } from "@/types";

export const processSection: Heading = {
  eyebrow: "Process",
  title: "How a project runs",
  description:
    "Five stages, each ending in something you can review. You know the cost and the scope before the build stage starts.",
};

export const processSteps: ProcessStep[] = [
  {
    order: "01",
    title: "Discovery",
    summary:
      "We sit with the people doing the work, map the current process and agree the one outcome that matters most.",
    duration: "1 week",
  },
  {
    order: "02",
    title: "Blueprint",
    summary:
      "Architecture, data model, screen flows and a fixed estimate. You get a written plan you could hand to any team.",
    duration: "1 to 2 weeks",
  },
  {
    order: "03",
    title: "Build",
    summary:
      "Two-week sprints with a working demo at the end of each one. Priorities can change between sprints, not inside them.",
    duration: "6 to 16 weeks",
  },
  {
    order: "04",
    title: "Launch",
    summary:
      "Data migration, integrations, training for your team and a rehearsed rollback plan before anything goes live.",
    duration: "1 to 2 weeks",
  },
  {
    order: "05",
    title: "Support",
    summary:
      "Monitoring, agreed response times and a shared roadmap for what the system should do next quarter.",
    duration: "Ongoing",
  },
];
