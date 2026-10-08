import type { Metadata } from "next";

import { PricingPanel } from "@/components/home/PricingPanel";
import { Services } from "@/components/home/Services";
import { PageHero } from "@/components/layout/PageHero";
import { servicesPage } from "@/content/pages";

export const metadata: Metadata = {
  title: servicesPage.seoTitle,
  description: servicesPage.seoDescription,
  alternates: { canonical: "/services" },
  openGraph: {
    title: `${servicesPage.seoTitle} — SetupFX`,
    description: servicesPage.seoDescription,
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow={servicesPage.eyebrow}
        title={servicesPage.title}
        description={servicesPage.description}
      />
      <Services heading={null} showDetails />
      <PricingPanel />
    </>
  );
}
