import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/content/home";

/**
 * The four services, in the same card treatment as the feature cards above them.
 * `heading` can be dropped where the page already introduces the list with its <h1>.
 * The per-service breakdown is off by default, so the home page stays a summary and
 * only the services page carries the full detail.
 */
export function Services({
  heading = services.heading,
  showDetails = false,
}: {
  heading?: string | null;
  showDetails?: boolean;
}) {
  return (
    <section id="services" className="shell scroll-mt-28 py-20 sm:py-28">
      {heading ? (
        <Reveal>
          <h2 className="text-center text-[1.75rem] leading-tight font-medium text-balance sm:text-4xl">
            {heading}
          </h2>
        </Reveal>
      ) : null}

      <ul className="mt-12 grid gap-5 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
        {services.items.map((service, index) => (
          <li key={service.slug}>
            <Reveal delay={index * 0.06} className="h-full">
              <article className="flex h-full flex-col rounded-[28px] border border-border card-surface p-6 sm:p-7">
                <h3 className="text-xl font-medium sm:text-[1.375rem]">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{service.body}</p>

                {showDetails ? (
                  <>
                    <p className="mt-7 text-[11px] font-medium tracking-[0.16em] text-muted uppercase">
                      {services.detailsHeading}
                    </p>
                    <ul className="mt-4 space-y-3 border-t border-border pt-4">
                      {service.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex gap-3 text-[13px] leading-relaxed text-muted"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-[7px] size-1.5 shrink-0 rounded-full bg-accent"
                          />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </>
                ) : null}
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
