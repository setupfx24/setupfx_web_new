import { Badge } from "@/components/ui/Badge";
import type { Heading } from "@/types";

/** The <h1> block at the top of a page. */
export function PageHeader({ eyebrow, title, description }: Heading) {
  return (
    <div className="shell border-b border-border py-14 sm:py-20">
      <Badge variant="outline">{eyebrow}</Badge>
      <h1 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{description}</p>
    </div>
  );
}

/** The <h2> block that introduces a section within a page. */
export function SectionHeading({ eyebrow, title, description }: Heading) {
  return (
    <div className="max-w-2xl">
      <Badge>{eyebrow}</Badge>
      <h2 className="mt-4 font-display text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
      <p className="mt-3 leading-relaxed text-muted">{description}</p>
    </div>
  );
}
