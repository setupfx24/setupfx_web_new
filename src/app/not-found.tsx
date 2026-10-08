import type { Metadata } from "next";
import Link from "next/link";

import { buttonStyles } from "@/components/ui/Button";
import { notFound } from "@/content/common";

export const metadata: Metadata = {
  title: notFound.title,
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="shell py-24 sm:py-32">
      <p aria-hidden="true" className="font-display text-5xl font-bold text-primary">
        {notFound.code}
      </p>
      <h1 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
        {notFound.title}
      </h1>
      <p className="mt-4 max-w-xl leading-relaxed text-muted">{notFound.description}</p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link href={notFound.primaryCta.href} className={buttonStyles({ size: "lg" })}>
          {notFound.primaryCta.label}
        </Link>
        <Link
          href={notFound.secondaryCta.href}
          className={buttonStyles({ variant: "secondary", size: "lg" })}
        >
          {notFound.secondaryCta.label}
        </Link>
      </div>
    </section>
  );
}
