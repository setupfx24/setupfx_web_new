import Link from "next/link";

import { cn } from "@/lib/utils";

type Tone = "light" | "dark" | "outline";
type Size = "sm" | "md" | "lg";

type PillButtonProps = {
  label: string;
  href: string;
  size?: Size;
  /** `light` sits on the dark page, `dark` and `outline` on the cream hero panel. */
  tone?: Tone;
  /** The small square on the left edge. Off for the plain hero pills. */
  showIcon?: boolean;
  /** Swaps the square glyph from the default arrow to a play triangle. */
  withPlayIcon?: boolean;
  className?: string;
};

const tones: Record<Tone, string> = {
  light: "bg-[#f5f5f5] text-black hover:bg-white",
  dark: "bg-[#0b0b0c] text-[#f5f5f5] hover:bg-black",
  outline: "border border-black/10 bg-white text-[#0b0b0c] hover:bg-[#fafaf8]",
};

const iconTones: Record<Tone, string> = {
  light: "bg-black text-white",
  dark: "bg-[#f5f5f5] text-black",
  outline: "bg-[#0b0b0c] text-white",
};

const sizes: Record<Size, { withIcon: string; plain: string; icon: string; glyph: string }> = {
  sm: { withIcon: "h-9 gap-2 pr-3.5 pl-1.5", plain: "h-9 px-4", icon: "size-6", glyph: "size-2.5" },
  md: { withIcon: "h-11 gap-2.5 pr-5 pl-2", plain: "h-11 px-5", icon: "size-7", glyph: "size-3" },
  lg: { withIcon: "h-12 gap-3 pr-6 pl-2", plain: "h-12 px-6", icon: "size-8", glyph: "size-3.5" },
};

const textSizes: Record<Size, string> = {
  sm: "text-[13px]",
  md: "text-sm",
  lg: "text-[15px]",
};

/** The rounded pill used across the page, with or without its leading square. */
export function PillButton({
  label,
  href,
  size = "md",
  tone = "light",
  showIcon = true,
  withPlayIcon = false,
  className,
}: PillButtonProps) {
  const style = sizes[size];

  /*
   * WhatsApp and the like leave the site, so they open in a new tab through a plain
   * anchor. Routing those through `next/link` would have it try to prefetch a route
   * that does not exist here.
   */
  const isExternal = /^https?:\/\//.test(href);
  const Tag = isExternal ? "a" : Link;
  const externalProps = isExternal ? { target: "_blank", rel: "noreferrer" } : {};

  return (
    <Tag
      href={href}
      {...externalProps}
      className={cn(
        "inline-flex shrink-0 items-center rounded-xl font-medium",
        "transition-[transform,background-color] duration-200 active:scale-[0.98]",
        tones[tone],
        textSizes[size],
        showIcon ? style.withIcon : style.plain,
        className,
      )}
    >
      {showIcon ? (
        <span
          aria-hidden="true"
          className={cn(
            "grid shrink-0 place-items-center rounded-[7px]",
            iconTones[tone],
            style.icon,
          )}
        >
          {withPlayIcon ? (
            <svg viewBox="0 0 10 12" fill="currentColor" className={style.glyph}>
              <path d="M0 0.8c0-.6.7-1 1.2-.7l7.4 4.2c.5.3.5 1.1 0 1.4L1.2 11.9C.7 12.2 0 11.8 0 11.2V.8Z" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 12 12"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.6}
              strokeLinecap="round"
              strokeLinejoin="round"
              className={style.glyph}
            >
              <path d="M3.2 8.8 8.8 3.2" />
              <path d="M4.6 3.2h4.2v4.2" />
            </svg>
          )}
        </span>
      ) : null}
      {label}
    </Tag>
  );
}
