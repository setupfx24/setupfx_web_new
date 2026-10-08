import Image from "next/image";
import Link from "next/link";

import { AssetImage } from "@/components/ui/AssetImage";
import { PillButton } from "@/components/ui/PillButton";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/config/site";
import { footer } from "@/content/home";

export function SiteFooter() {
  return (
    <footer className="relative isolate mt-10 overflow-hidden">
      <Reveal>
        <div className="relative z-10 shell pt-6 text-center sm:pt-10">
          <h2 className="mx-auto max-w-3xl text-[1.75rem] leading-tight font-medium text-balance sm:text-4xl">
            {footer.headline}
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-sm leading-relaxed text-pretty text-muted sm:text-[15px]">
            {footer.subtitle}
          </p>

          {/*
           * The negative margin pulls the image up underneath, so the pills sit on its
           * top edge. That edge is inside the mask fade, so they land on near black.
           */}
          <div className="mt-10 -mb-10 flex flex-wrap justify-center gap-3 sm:mt-12 sm:-mb-14">
            <PillButton label={footer.primaryCta.label} href={footer.primaryCta.href} />
            <PillButton
              label={footer.secondaryCta.label}
              href={footer.secondaryCta.href}
              showIcon={false}
              className="border border-border-strong bg-transparent text-foreground hover:bg-white/10"
            />
          </div>
        </div>
      </Reveal>

      {/* Halftone crowd image bleeding to the bottom of the page, fading in from black. */}
      <AssetImage
        src={footer.image.src}
        alt={footer.image.alt}
        sizes="100vw"
        className="relative aspect-[2076/757] w-full [mask-image:linear-gradient(to_bottom,transparent,black_18%)]"
        imageClassName="object-cover object-bottom"
      />

      <div className="shell flex flex-wrap items-center justify-between gap-x-6 gap-y-4 pb-6 text-[12px] text-muted">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link href="/" className="block" aria-label={`${siteConfig.name} home`}>
            <Image
              src={siteConfig.logo.src}
              alt={siteConfig.name}
              width={siteConfig.logo.width}
              height={siteConfig.logo.height}
              sizes="80px"
              className="h-6 w-auto"
            />
          </Link>

          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {footer.links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-foreground">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <p>{footer.copyright}</p>
      </div>
    </footer>
  );
}
