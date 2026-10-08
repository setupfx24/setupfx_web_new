"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { NavLinks } from "@/components/layout/NavLinks";
import { navItems } from "@/config/site";
import { chrome } from "@/content/common";
import { useScrollLock } from "@/hooks/use-scroll-lock";

const PANEL_ID = "mobile-nav-panel";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [openedAt, setOpenedAt] = useState(pathname);

  useScrollLock(open);

  // Close whenever the route changes, including on browser back and forward.
  if (openedAt !== pathname) {
    setOpenedAt(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((previous) => !previous)}
        aria-expanded={open}
        aria-controls={PANEL_ID}
        aria-label={open ? chrome.closeMenu : chrome.openMenu}
        className="inline-flex size-10 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:bg-surface-raised hover:text-foreground"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          className="size-5"
          aria-hidden="true"
        >
          {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>

      <div
        id={PANEL_ID}
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-border bg-surface shadow-lg"
      >
        <nav aria-label="Main" className="px-4 py-3">
          <NavLinks
            items={navItems}
            className="flex flex-col gap-1"
            linkClassName="py-3"
            withDescriptions
            onNavigate={() => setOpen(false)}
          />
        </nav>
      </div>
    </div>
  );
}
