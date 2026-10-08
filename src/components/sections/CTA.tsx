import Link from "next/link";

import { buttonStyles } from "@/components/ui/Button";
import { cta } from "@/content/shared";

export function CTA() {
  return (
    <section className="shell py-16 sm:py-24">
      <div className="rounded-2xl border border-border bg-surface-raised p-8 sm:p-12">
        <h2 className="max-w-2xl font-display text-2xl font-bold tracking-tight sm:text-3xl">
          {cta.title}
        </h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-muted">{cta.description}</p>

        <div className="mt-7 flex flex-wrap gap-3">
          <Link href={cta.primaryCta.href} className={buttonStyles({ size: "lg" })}>
            {cta.primaryCta.label}
          </Link>
          <Link
            href={cta.secondaryCta.href}
            className={buttonStyles({ variant: "secondary", size: "lg" })}
          >
            {cta.secondaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
