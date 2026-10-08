import { AssetImage } from "@/components/ui/AssetImage";
import { Reveal } from "@/components/ui/Reveal";
import { leadership } from "@/content/home";

type LeadershipProps = {
  /** Anchor target. Only the pages that advertise this section as "results" set it. */
  id?: string;
};

export function Leadership({ id }: LeadershipProps = {}) {
  const { founder, details } = leadership;

  return (
    <section id={id} className="shell scroll-mt-28 py-20 sm:py-28">
      <Reveal>
        <h2 className="text-center text-[1.75rem] leading-tight font-medium text-balance sm:text-4xl">
          {leadership.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-[15px] text-balance text-muted">
          {leadership.description}
        </p>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:mt-16 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <article className="flex h-full flex-col items-center rounded-[28px] border border-[rgb(96_165_250/0.35)] card-surface p-7 text-center shadow-[0_0_70px_-28px_var(--glow-blue)] transition-transform duration-300 hover:-translate-y-1 sm:p-8">
            {/*
             * The ring sits on a wrapper rather than the image so it reads as a halo
             * around the portrait instead of a hairline on the crop edge.
             */}
            <div className="rounded-full p-1.5 ring-1 ring-[rgb(96_165_250/0.3)]">
              <AssetImage
                src={founder.photo.src}
                alt={founder.photo.alt}
                sizes="(max-width: 640px) 200px, 240px"
                hideSlotLabel
                priority={false}
                className="size-44 rounded-full border border-border sm:size-56"
                imageClassName="object-top"
              />
            </div>

            <h3 className="mt-7 text-xl font-medium">{founder.name}</h3>
            <p className="mt-1.5 text-sm text-muted">{founder.role}</p>
          </article>
        </Reveal>

        <Reveal delay={0.08} className="lg:col-span-7">
          <article className="flex h-full flex-col rounded-[28px] border border-border card-surface p-7 sm:p-8">
            <h3 className="text-[11px] font-medium tracking-[0.16em] text-muted uppercase">
              {leadership.detailsHeading}
            </h3>

            {/*
             * Label left, value right, each row divided — the same shape as the contact
             * page, so the two read as one set of facts rather than two versions of it.
             */}
            <dl className="mt-6 divide-y divide-border border-t border-border">
              {details.map((detail) => (
                <div
                  key={detail.label}
                  className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-4"
                >
                  <dt className="text-sm font-medium">{detail.label}</dt>
                  <dd className="text-[15px] text-muted sm:text-right">
                    {detail.href ? (
                      <a
                        href={detail.href}
                        className="transition-colors hover:text-foreground"
                        {...(detail.href.startsWith("http")
                          ? { target: "_blank", rel: "noreferrer" }
                          : {})}
                      >
                        {detail.value}
                      </a>
                    ) : (
                      detail.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
