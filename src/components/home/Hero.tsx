import { AssetImage } from "@/components/ui/AssetImage";
import { PillButton } from "@/components/ui/PillButton";
import { Reveal } from "@/components/ui/Reveal";
import { hero } from "@/content/home";

/** Decorative survey marks, placed to echo the grid behind the artwork. */
const MARKS = [
  { left: "14%", top: "34%" },
  { left: "86%", top: "34%" },
  { left: "28%", top: "58%" },
  { left: "72%", top: "58%" },
  { left: "50%", top: "26%" },
];

export function Hero() {
  return (
    <section>
      <Reveal>
        <div className="relative isolate w-full overflow-hidden bg-hero-surface">
          {/* Measured-grid backdrop, faded out towards the edges. */}
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--hero-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--hero-line)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_78%)] bg-[size:72px_72px]"
          />
          <div aria-hidden="true" className="absolute inset-0 -z-10">
            {MARKS.map((mark) => (
              <span
                key={`${mark.left}-${mark.top}`}
                style={{ left: mark.left, top: mark.top }}
                className="absolute size-2.5 -translate-x-1/2 -translate-y-1/2"
              >
                <span className="absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-hero-mark" />
                <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-hero-mark" />
              </span>
            ))}
          </div>

          <div className="relative z-20 shell pt-28 text-center sm:pt-36">
            <h1 className="mx-auto max-w-4xl text-[2rem] leading-[1.06] font-medium text-balance text-hero-foreground sm:text-5xl lg:text-[3.25rem]">
              {hero.headline}
            </h1>

            <p className="mx-auto mt-5 max-w-[520px] text-sm leading-relaxed text-pretty text-hero-muted sm:text-[15px]">
              {hero.description}
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <PillButton
                label={hero.primaryCta.label}
                href={hero.primaryCta.href}
                tone="dark"
                showIcon={false}
              />
              <PillButton
                label={hero.secondaryCta.label}
                href={hero.secondaryCta.href}
                tone="outline"
                showIcon={false}
              />
            </div>
          </div>

          {/* Artwork stage. Taller than its slot and pulled up by the difference, so
              more of the scene shows and it rises behind the buttons without making
              the panel any taller. */}
          <div className="relative -mt-20 h-[400px] sm:-mt-16 sm:h-[540px] lg:-mt-20 lg:h-[656px]">
            <AssetImage
              src={hero.art.src}
              alt={hero.art.alt}
              sizes="100vw"
              placeholderTone="light"
              className="absolute inset-0"
              imageClassName="object-cover object-bottom"
            />
          </div>

          {/* Fades the panel into the page background so it meets the video seamlessly. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-28 bg-gradient-to-b from-transparent to-background sm:h-40"
          />
        </div>
      </Reveal>
    </section>
  );
}
