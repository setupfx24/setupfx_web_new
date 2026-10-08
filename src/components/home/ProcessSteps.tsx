import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { processSteps } from "@/content/process";

/** The five delivery stages, in the same card treatment as the rest of the site. */
export function ProcessSteps({ heading }: { heading?: string | null }) {
  return (
    <section className="shell py-16 sm:py-24">
      {heading ? (
        <Reveal>
          <h2 className="text-center text-[1.75rem] leading-tight font-medium text-balance sm:text-4xl">
            {heading}
          </h2>
        </Reveal>
      ) : null}

      <ol className="mt-12 grid gap-5 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
        {processSteps.map((step, index) => (
          <li key={step.order}>
            <Reveal delay={index * 0.06} className="h-full">
              <article className="flex h-full flex-col rounded-[28px] border border-border card-surface p-6 sm:p-7">
                <div className="flex items-center justify-between gap-3">
                  <span aria-hidden="true" className="text-2xl font-medium text-accent">
                    {step.order}
                  </span>
                  <Badge variant="outline">{step.duration}</Badge>
                </div>
                <h3 className="mt-5 text-xl font-medium">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{step.summary}</p>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
