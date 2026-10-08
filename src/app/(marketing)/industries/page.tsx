import type { Metadata } from "next";

import { CTA } from "@/components/sections/CTA";
import { Industries } from "@/components/sections/Industries";
import { PageHeader } from "@/components/sections/SectionHeading";
import { Stats } from "@/components/sections/Stats";
import { industriesPage } from "@/content/industries";

export const metadata: Metadata = {
  title: industriesPage.title,
  description: industriesPage.description,
  alternates: { canonical: "/industries" },
  openGraph: {
    title: `${industriesPage.title} — SetupFX`,
    description: industriesPage.description,
    url: "/industries",
  },
};

export default function IndustriesPage() {
  return (
    <>
      <PageHeader {...industriesPage} />
      <Industries heading={null} />
      <Stats />
      <CTA />
    </>
  );
}
