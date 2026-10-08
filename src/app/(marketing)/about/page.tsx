import type { Metadata } from "next";

import { Leadership } from "@/components/home/Leadership";
import { CTA } from "@/components/sections/CTA";
import { PageHeader } from "@/components/sections/SectionHeading";
import { Stats } from "@/components/sections/Stats";
import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import { aboutPage, story, values, valuesHeading } from "@/content/about";

export const metadata: Metadata = {
  title: aboutPage.title,
  description: aboutPage.description,
  alternates: { canonical: "/about" },
  openGraph: {
    title: `${aboutPage.title} — SetupFX`,
    description: aboutPage.description,
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader {...aboutPage} />

      <section className="shell py-16 sm:py-24">
        <div className="max-w-2xl space-y-5">
          {story.map((paragraph) => (
            <p key={paragraph} className="text-lg leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}
        </div>

        <h2 className="mt-16 font-display text-2xl font-bold tracking-tight sm:text-3xl">
          {valuesHeading}
        </h2>

        <ul className="mt-8 grid gap-6 sm:grid-cols-2">
          {values.map((value) => (
            <li key={value.title}>
              <Card>
                <CardTitle>{value.title}</CardTitle>
                <CardDescription>{value.description}</CardDescription>
              </Card>
            </li>
          ))}
        </ul>
      </section>

      <Leadership />
      <Stats />
      <CTA />
    </>
  );
}
