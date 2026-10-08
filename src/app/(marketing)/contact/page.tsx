import type { Metadata } from "next";

import { ContactForm } from "@/components/forms/ContactForm";
import { PageHeader } from "@/components/sections/SectionHeading";
import { contactDetails, contactHeadings, contactPage } from "@/content/contact";

export const metadata: Metadata = {
  title: contactPage.title,
  description: contactPage.description,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `${contactPage.title} — SetupFX`,
    description: contactPage.description,
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader {...contactPage} />

      <section className="shell grid gap-12 py-16 sm:py-24 lg:grid-cols-[2fr_1fr]">
        <div>
          <h2 className="sr-only">{contactHeadings.form}</h2>
          <ContactForm />
        </div>

        <aside>
          <h2 className="font-display text-lg font-semibold">{contactHeadings.details}</h2>
          <dl className="mt-4 space-y-4">
            {contactDetails.map((detail) => (
              <div key={detail.label}>
                <dt className="text-sm text-muted">{detail.label}</dt>
                <dd className="mt-0.5">
                  {detail.href ? (
                    <a href={detail.href} className="transition-colors hover:text-primary">
                      {detail.value}
                    </a>
                  ) : (
                    detail.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </aside>
      </section>
    </>
  );
}
