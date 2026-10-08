"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import type { NavItem } from "@/types";

function isActive(href: string, pathname: string): boolean {
  // In-page anchors (e.g. "/#process") never own the current route.
  if (href.includes("#")) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

type NavLinksProps = {
  items: NavItem[];
  className?: string;
  linkClassName?: string;
  /** Shows the short description under each label, used by the mobile menu. */
  withDescriptions?: boolean;
  /** Called after a link is activated, so an open menu can close itself. */
  onNavigate?: () => void;
};

export function NavLinks({
  items,
  className,
  linkClassName,
  withDescriptions = false,
  onNavigate,
}: NavLinksProps) {
  const pathname = usePathname();

  return (
    <ul className={className}>
      {items.map((item) => {
        const active = isActive(item.href, pathname);

        return (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={active ? "page" : undefined}
              onClick={onNavigate}
              className={cn(
                "block rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                active ? "text-primary" : "text-muted hover:text-foreground",
                linkClassName,
              )}
            >
              {item.label}
              {withDescriptions && item.description ? (
                <span className="mt-0.5 block text-xs font-normal text-muted">
                  {item.description}
                </span>
              ) : null}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
