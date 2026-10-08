"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";

import { SlotLabel } from "@/components/ui/SlotLabel";

/** How long each artwork takes to cross the panel. */
const SECONDS_PER_IMAGE = 18;

type PanelBackdropProps = {
  /** Resolved on the server, so a missing file still holds its space. */
  images: { src: string; alt: string; exists: boolean }[];
};

/**
 * Slides the panel artwork sideways on an endless loop. The track holds two identical
 * copies, so moving it left by exactly half its own width lands copy two where copy one
 * started and the loop never shows a seam.
 */
export function PanelBackdrop({ images }: PanelBackdropProps) {
  const reduceMotion = useReducedMotion();
  const track = [...images, ...images];
  const slideWidth = 100 / track.length;

  return (
    <div aria-hidden="true" className="absolute inset-0 -z-20 overflow-hidden">
      <motion.div
        className="flex h-full"
        style={{ width: `${track.length * 100}%` }}
        animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
        transition={
          reduceMotion
            ? undefined
            : {
                duration: SECONDS_PER_IMAGE * images.length,
                repeat: Infinity,
                ease: "linear",
              }
        }
      >
        {track.map((image, index) => (
          <div
            key={`${index}-${image.src}`}
            className="relative h-full shrink-0"
            style={{ width: `${slideWidth}%` }}
          >
            {image.exists ? (
              <Image
                src={image.src}
                alt=""
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover"
              />
            ) : (
              <div className="grid h-full place-items-center border border-dashed border-white/10 bg-[linear-gradient(145deg,#141414_0%,#070707_60%,#0d0d0d_100%)]">
                <SlotLabel src={image.src} />
              </div>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
