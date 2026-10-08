import { Reveal } from "@/components/ui/Reveal";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

/**
 * The opening block on the pages behind the navbar. Same type scale and spacing as the
 * home page sections, so the pages read as one site.
 */
export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="shell pt-32 pb-12 sm:pt-40 sm:pb-16">
      <Reveal>
        <p className="text-[11px] font-medium tracking-[0.16em] text-muted uppercase">{eyebrow}</p>
        <h1 className="mt-5 max-w-3xl text-[2rem] leading-[1.1] font-medium text-balance sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 max-w-[640px] text-base leading-relaxed text-pretty text-muted sm:text-lg">
          {description}
        </p>
      </Reveal>
    </section>
  );
}
