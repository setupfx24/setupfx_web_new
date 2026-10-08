import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { siteConfig } from "@/config/site";

/** Merges conditional class names and removes conflicting Tailwind utilities. */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/** Turns a site-relative path into an absolute URL for metadata and sitemaps. */
export function absoluteUrl(path: string): string {
  return new URL(path, siteConfig.url).toString();
}
