import type { Metadata } from "next";

import { ClientLogos } from "@/components/home/ClientLogos";
import { Stats } from "@/components/home/Stats";
import { PageHero } from "@/components/layout/PageHero";
import { resultsPage } from "@/content/pages";

export const metadata: Metadata = {
  title: resultsPage.seoTitle,
  description: resultsPage.seoDescription,
  alternates: { canonical: "/results" },
  openGraph: {
    title: `${resultsPage.seoTitle} — SetupFX`,
    description: resultsPage.seoDescription,
    url: "/results",
  },
};

export default function ResultsPage() {
  return (
    <>
      <PageHero
        eyebrow={resultsPage.eyebrow}
        title={resultsPage.title}
        description={resultsPage.description}
      />
      <Stats />
      <ClientLogos />
    </>
  );
}
