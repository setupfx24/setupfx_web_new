/**
 * The roster. One entry per person, grouped the way the team is actually organised.
 * `src` points at `public/images/team`, so a portrait arrives by dropping the file in
 * under the exact name below — no code change.
 */

export type TeamMember = {
  name: string;
  role: string;
  src: string;
};

export type Department = {
  name: string;
  description: string;
  members: TeamMember[];
};

export const founder: TeamMember = {
  name: "Shivam Singh",
  role: "Founder & Director",
  src: "/images/team/Shivam Singh.png",
};

export const departments: Department[] = [
  {
    name: "Development",
    description: "Engineers building the trading terminal, risk logic and back office.",
    members: [
      {
        name: "Vibhooti Tiwari",
        role: "Senior Developer",
        src: "/images/team/Vibhooti Tiwari.png",
      },
      {
        name: "Vaishanv Kumbhar",
        role: "Senior Developer",
        src: "/images/team/Vaishanv Kumbhar.png",
      },
      { name: "Tarun Dewangan", role: "Developer", src: "/images/team/Tarun Dewangan.png" },
      {
        name: "Harishankar Banjare",
        role: "Developer",
        src: "/images/team/Harishankar Banjare.png",
      },
      { name: "Shivam Kumar", role: "Developer", src: "/images/team/Shivam Kumar.png" },
      { name: "Omkar Mishra", role: "Developer", src: "/images/team/Omkar Mishra.png" },
    ],
  },
  {
    name: "Management",
    description: "Scoping, planning and delivery — the people who own your timeline.",
    members: [
      {
        name: "Suresh Chaudhary",
        role: "Senior Manager",
        src: "/images/team/Suresh Chaudhary.png",
      },
      /* The file on disk spells the surname lower-case; the display name does not. */
      { name: "Nidhi Kashyap", role: "Operation Manager", src: "/images/team/Nidhi kashyap.png" },
    ],
  },
  {
    name: "Designing",
    description: "UI/UX for dense data and fast decisions, across web and mobile.",
    members: [
      {
        name: "Dewanng Kumar",
        role: "UI Designer, Social Media Management",
        src: "/images/team/Dewanng Kumar.png",
      },
    ],
  },
];

/** Everyone, founder first — for the drifting avatar cloud on the home page. */
export const teamRoster: TeamMember[] = [
  founder,
  ...departments.flatMap((department) => department.members),
];
