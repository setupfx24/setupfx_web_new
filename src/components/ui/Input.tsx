import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

/**
 * Form control primitives. They share one set of styles so an input, a textarea
 * and a select line up in the same form. React 19 forwards `ref` as a normal prop,
 * which lets `react-hook-form`'s `register()` spread straight onto them.
 */
const controlStyles = cn(
  "w-full rounded-lg border border-border bg-surface px-3 py-2.5 text-sm text-foreground",
  "placeholder:text-muted/70 transition-colors",
  "aria-invalid:border-red-500 aria-invalid:ring-1 aria-invalid:ring-red-500/40",
  "disabled:cursor-not-allowed disabled:opacity-60",
);

export function Label({ className, ...props }: ComponentProps<"label">) {
  return <label className={cn("text-sm font-medium text-foreground", className)} {...props} />;
}

export function Input({ className, ...props }: ComponentProps<"input">) {
  return <input className={cn(controlStyles, className)} {...props} />;
}

export function Textarea({ className, rows = 6, ...props }: ComponentProps<"textarea">) {
  return <textarea rows={rows} className={cn(controlStyles, "resize-y", className)} {...props} />;
}

export function Select({ className, ...props }: ComponentProps<"select">) {
  return <select className={cn(controlStyles, "pr-8", className)} {...props} />;
}
