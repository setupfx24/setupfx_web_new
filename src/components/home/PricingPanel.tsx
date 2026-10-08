import { PanelBackdrop } from "@/components/home/PanelBackdrop";
import { PillButton } from "@/components/ui/PillButton";
import { Reveal } from "@/components/ui/Reveal";
import { pricing } from "@/content/home";
import { hasAsset } from "@/lib/assets";

export function PricingPanel() {
  const backgrounds = pricing.backgrounds.map((image) => ({
    ...image,
    exists: hasAsset(image.src),
  }));

  return (
    <section className="shell py-20 sm:py-28">
      <Reveal>
        <div className="relative isolate overflow-hidden rounded-[32px] border border-border">
          {/* Collage artwork sliding behind the text on a loop. */}
          <PanelBackdrop images={backgrounds} />

          {/*
           * Darkest through the middle, lighter at both edges, so the headline stays
           * readable while the artwork still reads at both edges.
           */}
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(0,0,0,0.58)_0%,rgba(0,0,0,0.9)_22%,rgba(0,0,0,0.96)_50%,rgba(0,0,0,0.9)_78%,rgba(0,0,0,0.58)_100%)] backdrop-blur-[3px]"
          />

          <div className="mx-auto max-w-3xl px-6 py-14 sm:px-10 sm:py-20 lg:py-24">
            <p className="text-[11px] font-medium tracking-[0.16em] text-muted uppercase">
              {pricing.label}
            </p>

            <h2 className="mt-5 text-[1.75rem] leading-[1.15] font-medium text-balance sm:text-[2.75rem]">
              {pricing.title}
            </h2>

            <h3 className="mt-10 text-sm font-medium">{pricing.includedHeading}</h3>
            <ul className="mt-5 space-y-4">
              {pricing.included.map((item) => (
                <li key={item} className="flex items-start gap-3.5 text-[15px] text-foreground/85">
                  <svg
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    className="mt-0.5 size-4 shrink-0 text-accent"
                  >
                    <path
                      d="m4 10.4 3.6 3.6L16 5.6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-12 grid gap-8 border-t border-white/15 pt-10 sm:grid-cols-2 sm:gap-10">
              <div>
                <p className="text-[15px] text-muted">{pricing.minimum.caption}</p>
                <p className="mt-4 flex items-baseline gap-2">
                  <span className="text-5xl font-medium tracking-tight">
                    {pricing.minimum.value}
                  </span>
                  <span className="text-lg text-muted">{pricing.minimum.unit}</span>
                </p>
              </div>

              <div className="flex flex-col items-start gap-5 sm:border-l sm:border-white/15 sm:pl-10">
                <p className="text-[15px] text-muted">{pricing.custom}</p>
                <PillButton label={pricing.cta.label} href={pricing.cta.href} size="lg" />
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
