import { AssetImage } from "@/components/ui/AssetImage";
import { Reveal } from "@/components/ui/Reveal";
import { clients } from "@/content/home";

/** The client marks, four to a row. Each slot holds its shape until a real logo lands. */
export function ClientLogos() {
  return (
    <section className="shell py-16 sm:py-20">
      <Reveal>
        <h2 className="text-center text-[1.75rem] leading-tight font-medium text-balance sm:text-4xl">
          {clients.heading}
        </h2>
      </Reveal>

      <ul className="mt-10 grid grid-cols-2 gap-4 sm:mt-14 lg:grid-cols-4">
        {clients.logos.map((logo, index) => (
          <li key={logo.src}>
            <Reveal delay={(index % 4) * 0.05}>
              {/*
               * Squarer marks are limited by the slot height rather than its width, so
               * the slot runs a little taller than wide-logo framing alone would need
               * and the padding stays tight.
               */}
              <div className="grid aspect-[16/9] place-items-center rounded-2xl border border-border card-surface p-3 transition-colors duration-300 hover:border-border-strong">
                <AssetImage
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  /*
                   * The source files run to several megapixels, so these go through the
                   * image optimiser rather than being served raw like the old SVG slots.
                   */
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 420px"
                  className="h-full w-full opacity-80 transition-opacity hover:opacity-100"
                  imageClassName="object-contain"
                />
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
