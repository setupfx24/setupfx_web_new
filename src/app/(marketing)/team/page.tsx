import type { Metadata } from "next";

import { Leadership } from "@/components/home/Leadership";
import { PricingPanel } from "@/components/home/PricingPanel";
import { TeamGrid } from "@/components/home/TeamGrid";
import { PageHero } from "@/components/layout/PageHero";
import { teamPage } from "@/content/pages";

export const metadata: Metadata = {
  title: teamPage.seoTitle,
  description: teamPage.seoDescription,
  alternates: { canonical: "/team" },
  openGraph: {
    title: `${teamPage.seoTitle} — SetupFX`,
    description: teamPage.seoDescription,
    url: "/team",
  },
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow={teamPage.eyebrow}
        title={teamPage.title}
        description={teamPage.description}
      />
      <Leadership />
      <TeamGrid heading={teamPage.membersHeading} />
      <PricingPanel />
    </>
  );
}
