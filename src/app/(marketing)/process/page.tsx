import type { Metadata } from "next";

import { PricingPanel } from "@/components/home/PricingPanel";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { System } from "@/components/home/System";
import { PageHero } from "@/components/layout/PageHero";
import { processPage } from "@/content/pages";

export const metadata: Metadata = {
  title: processPage.seoTitle,
  description: processPage.seoDescription,
  alternates: { canonical: "/process" },
  openGraph: {
    title: `${processPage.seoTitle} — SetupFX`,
    description: processPage.seoDescription,
    url: "/process",
  },
};

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow={processPage.eyebrow}
        title={processPage.title}
        description={processPage.description}
      />
      <ProcessSteps heading={processPage.stepsHeading} />
      <System />
      <PricingPanel />
    </>
  );
}
