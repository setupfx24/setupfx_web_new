import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

type BadgeProps = ComponentProps<"span"> & {
  variant?: "default" | "outline";
};

export function Badge({ variant = "default", className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide uppercase",
        variant === "default" ? "bg-surface-raised text-muted" : "border border-border text-muted",
        className,
      )}
      {...props}
    />
  );
}
