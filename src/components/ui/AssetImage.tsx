import Image, { type ImageProps } from "next/image";

import { SlotLabel } from "@/components/ui/SlotLabel";
import { hasAsset } from "@/lib/assets";
import { cn } from "@/lib/utils";

type AssetImageProps = Omit<ImageProps, "src" | "alt"> & {
  src: string;
  alt: string;
  /** Applied to the wrapper, which also holds the aspect ratio. */
  className?: string;
  /** Applied to the image itself. */
  imageClassName?: string;
  /** Hides the slot label where the box is too small to read it. */
  hideSlotLabel?: boolean;
  /** `light` is for slots sitting on the cream hero panel. */
  placeholderTone?: "dark" | "light";
};

const placeholderTones = {
  dark: "border-white/10 bg-[linear-gradient(145deg,#141414_0%,#070707_60%,#0d0d0d_100%)]",
  light: "border-black/15 bg-[linear-gradient(145deg,#e6e3dd_0%,#dcd8d1_60%,#e9e6e0_100%)]",
} as const;

/**
 * Renders an image once its file exists, and a labelled block of the same shape until
 * then. The wrapper keeps its size either way, so no section shifts when the artwork
 * arrives.
 */
export function AssetImage({
  src,
  alt,
  className,
  imageClassName,
  hideSlotLabel = false,
  placeholderTone = "dark",
  fill = true,
  ...props
}: AssetImageProps) {
  if (!hasAsset(src)) {
    return (
      <div
        role="presentation"
        className={cn(
          "grid place-items-center overflow-hidden rounded-[inherit] border border-dashed",
          placeholderTones[placeholderTone],
          className,
        )}
      >
        {hideSlotLabel ? null : <SlotLabel src={src} tone={placeholderTone} />}
      </div>
    );
  }

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image
        src={src}
        alt={alt}
        fill={fill}
        className={cn("object-cover", imageClassName)}
        {...props}
      />
    </div>
  );
}
