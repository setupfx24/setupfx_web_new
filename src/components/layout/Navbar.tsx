"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { PillButton } from "@/components/ui/PillButton";
import { navItems, siteConfig } from "@/config/site";
import { hero } from "@/content/home";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Navbar() {
  const [condensed, setCondensed] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (value) => {
    setCondensed(value > 48);
  });

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="fixed inset-x-0 top-0 z-50 shell flex justify-center pt-4">
      <motion.nav
        layout
        aria-label="Main"
        transition={{ duration: 0.4, ease: EASE }}
        className={cn(
          "flex items-center border border-border",
          condensed
            ? "gap-1 rounded-full bg-black/55 py-1.5 pr-1.5 pl-3 backdrop-blur-xl"
            : "w-full justify-between gap-2 rounded-2xl bg-[#0a0a0a]/90 py-2 pr-1.5 pl-3 backdrop-blur-xl sm:gap-4 sm:pr-2 sm:pl-6",
        )}
      >
        <AnimatePresence initial={false}>
          {!condensed ? (
            <motion.div
              key="wordmark"
              layout
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="hidden overflow-hidden sm:block"
            >
              <Link href="/" className="block">
                <Image
                  src={siteConfig.logo.src}
                  alt={siteConfig.name}
                  width={siteConfig.logo.width}
                  height={siteConfig.logo.height}
                  /* Rendered ~98px wide, so keep Next from fetching a full-size variant. */
                  sizes="110px"
                  priority
                  /* Matches the height of the pill button opposite, so the bar does not grow. */
                  className="h-9 w-auto"
                />
              </Link>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <motion.ul layout className="flex items-center gap-0.5 sm:gap-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "block rounded-full px-1.5 py-1.5 text-[13px] whitespace-nowrap transition-colors sm:px-3.5",
                  isActive(item.href) ? "text-foreground" : "text-muted hover:text-foreground",
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </motion.ul>

        <motion.div layout>
          <PillButton label={hero.primaryCta.label} href={hero.primaryCta.href} size="sm" />
        </motion.div>
      </motion.nav>
    </header>
  );
}
