import { SectionHeading } from "@/components/sections/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import { industries, industriesSection } from "@/content/industries";
import type { Heading } from "@/types";

export function Industries({ heading = industriesSection }: { heading?: Heading | null }) {
  return (
    <section id="industries" className="shell py-16 sm:py-24">
      {heading ? <SectionHeading {...heading} /> : null}

      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((industry) => (
          <li key={industry.slug} id={industry.slug} className="scroll-mt-24">
            <Card>
              <CardTitle>{industry.name}</CardTitle>
              <CardDescription>{industry.summary}</CardDescription>

              <ul className="mt-auto flex flex-wrap gap-2 pt-2">
                {industry.useCases.map((useCase) => (
                  <li key={useCase}>
                    <Badge variant="outline" className="normal-case">
                      {useCase}
                    </Badge>
                  </li>
                ))}
              </ul>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
}
