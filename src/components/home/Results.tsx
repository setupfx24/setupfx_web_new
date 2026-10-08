import { AssetImage } from "@/components/ui/AssetImage";
import { Reveal } from "@/components/ui/Reveal";
import { results } from "@/content/home";
import { cn } from "@/lib/utils";

type Highlight = (typeof results.highlights)[keyof typeof results.highlights];
type Quote = (typeof results.quotes)[keyof typeof results.quotes];

const glowStyles = {
  blue: "border-[rgb(96_165_250/0.35)] shadow-[0_0_70px_-28px_var(--glow-blue)]",
  amber: "border-[rgb(250_204_21/0.32)] shadow-[0_0_70px_-28px_var(--glow-amber)]",
} as const;

/**
 * Two highlight cards and two quotes, on the diagonal: the narrow card leads the first
 * row and closes the second, so neither column reads as a straight stack.
 */
export function Results({ id }: { id?: string } = {}) {
  const { highlights, quotes } = results;

  return (
    <section id={id} className="shell scroll-mt-28 py-20 sm:py-28">
      <Reveal>
        <h2 className="text-center text-[1.75rem] leading-tight font-medium text-balance sm:text-4xl">
          {results.heading}
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:mt-16 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <HighlightCard highlight={highlights.first} />
        </Reveal>
        <Reveal delay={0.08} className="lg:col-span-7">
          <QuoteCard quote={quotes.first} />
        </Reveal>

        <Reveal delay={0.08} className="lg:col-span-7">
          <QuoteCard quote={quotes.second} />
        </Reveal>
        <Reveal className="lg:col-span-5">
          <HighlightCard highlight={highlights.second} />
        </Reveal>
      </div>
    </section>
  );
}

function HighlightCard({ highlight }: { highlight: Highlight }) {
  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-[28px] border card-surface p-7 sm:p-8",
        "transition-transform duration-300 hover:-translate-y-1",
        glowStyles[highlight.glow as keyof typeof glowStyles],
      )}
    >
      <p className="text-[11px] font-medium tracking-[0.16em] text-muted uppercase">
        {highlight.label}
      </p>
      <h3 className="mt-3 text-xl font-medium">{highlight.company}</h3>

      {/*
       * The number carries the card, so it takes the slack: `mt-auto` on the rule below
       * pins the result line to the floor however tall the neighbouring quote runs.
       */}
      <p className="mt-10 flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <span className="text-5xl font-medium tracking-tight sm:text-6xl">{highlight.value}</span>
        <span className="text-lg text-muted">{highlight.unit}</span>
      </p>

      <hr className="mt-auto mb-4 border-0 border-t border-border pt-10" />
      <p className="text-sm text-muted">{highlight.result}</p>
    </article>
  );
}

function QuoteCard({ quote }: { quote: Quote }) {
  return (
    <article className="flex h-full flex-col rounded-[28px] border border-border card-surface p-7 sm:p-8">
      {/*
       * The opening runs at full strength and the tail drops to muted, so the sentence
       * that matters lands first. An empty `tail` just renders nothing.
       */}
      <blockquote className="text-xl leading-snug text-pretty sm:text-[1.6rem]">
        &ldquo;{quote.quote}
        {quote.tail ? <span className="text-muted"> {quote.tail}</span> : null}&rdquo;
      </blockquote>

      <footer className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-12">
        <div className="flex items-center gap-3.5">
          <AssetImage
            src={quote.photo.src}
            alt={quote.photo.alt}
            sizes="56px"
            hideSlotLabel
            className="size-14 shrink-0 rounded-full border border-border"
          />
          <div>
            <p className="text-sm font-medium">{quote.name}</p>
            <p className="text-[13px] text-muted">{quote.role}</p>
          </div>
        </div>

        <AssetImage
          src={quote.logo.src}
          alt={quote.logo.alt}
          unoptimized
          sizes="130px"
          hideSlotLabel
          className="h-7 w-[130px] opacity-90"
          imageClassName="object-contain object-right"
        />
      </footer>
    </article>
  );
}
