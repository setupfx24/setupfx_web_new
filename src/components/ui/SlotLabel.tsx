import { assetFileName, assetSpec } from "@/lib/asset-specs";
import { cn } from "@/lib/utils";

/** Names an empty image slot and the size it expects. Removed once the file exists. */
export function SlotLabel({
  src,
  tone = "dark",
  className,
}: {
  src: string;
  /** `light` is for slots sitting on the cream hero panel. */
  tone?: "dark" | "light";
  className?: string;
}) {
  const spec = assetSpec(src);
  const isLight = tone === "light";

  return (
    <span
      className={cn(
        "pointer-events-none flex max-w-full flex-col items-center gap-1 px-2 text-center",
        className,
      )}
    >
      <span
        className={cn(
          "max-w-full truncate font-mono text-[11px]",
          isLight ? "text-black/45" : "text-white/45",
        )}
      >
        {assetFileName(src)}
      </span>
      {spec ? (
        <span className={cn("text-[11px]", isLight ? "text-black/35" : "text-white/30")}>
          {spec}
        </span>
      ) : null}
    </span>
  );
}
