"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";

import { system } from "@/content/home";

/**
 * Hand-placed so the cluster reads as a crowd rather than a grid. One entry per team
 * member; extra positions are ignored, so adding a portrait needs no layout change.
 */
const LAYOUT = [
  { left: 38, top: 0, size: 62 },
  { left: 66, top: 6, size: 50 },
  { left: 14, top: 10, size: 54 },
  { left: 44, top: 24, size: 76 },
  { left: 76, top: 30, size: 58 },
  { left: 3, top: 38, size: 46 },
  { left: 24, top: 44, size: 66 },
  { left: 62, top: 52, size: 54 },
  { left: 12, top: 64, size: 56 },
  { left: 42, top: 68, size: 50 },
  { left: 72, top: 72, size: 44 },
  { left: 0, top: 4, size: 40 },
] as const;

/** Seconds for one copy of the cluster to travel a full container width. */
const DRIFT_SECONDS = 22;

type AvatarCloudProps = {
  /** Already filtered on the server, so every entry here has a portrait on disk. */
  avatars: { src: string; name: string }[];
};

export function AvatarCloud({ avatars }: AvatarCloudProps) {
  const reduceMotion = useReducedMotion();
  const members = avatars.slice(0, LAYOUT.length);

  return (
    <>
      <span className="sr-only">{system.cards.team.avatarAlt}</span>
      <div
        aria-hidden="true"
        className="relative h-60 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      >
        {/*
         * Two identical copies side by side. Sliding the pair left by exactly half its
         * own width lands copy two where copy one started, so the loop never seams.
         */}
        <motion.div
          className="flex h-full w-[200%]"
          animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
          transition={
            reduceMotion ? undefined : { duration: DRIFT_SECONDS, repeat: Infinity, ease: "linear" }
          }
        >
          {[0, 1].map((copy) => (
            <div key={copy} className="relative h-full w-1/2 shrink-0">
              {members.map((avatar, index) => {
                const spot = LAYOUT[index];

                return (
                  <motion.div
                    key={`${copy}-${avatar.src}`}
                    title={avatar.name}
                    className="absolute overflow-hidden rounded-full border border-white/10 bg-[linear-gradient(145deg,#1a1a1a,#0a0a0a)] shadow-[0_8px_24px_-8px_rgba(0,0,0,0.9)]"
                    style={{
                      left: `${spot.left}%`,
                      top: `${spot.top}%`,
                      width: spot.size,
                      height: spot.size,
                    }}
                    animate={reduceMotion ? undefined : { y: [0, -10] }}
                    transition={
                      reduceMotion
                        ? undefined
                        : {
                            duration: 2.6 + (index % 5) * 0.35,
                            repeat: Infinity,
                            repeatType: "mirror",
                            ease: "easeInOut",
                            delay: index * 0.18,
                          }
                    }
                  >
                    <Image
                      src={avatar.src}
                      alt=""
                      width={spot.size * 2}
                      height={spot.size * 2}
                      /*
                       * The portraits are 2:3 studio shots with the head in the upper
                       * third. Scaling from the top edge drops the face into the widest
                       * part of the circle while keeping that edge pinned to the rim —
                       * a `translate` would slide it inside and cut a flat line across
                       * the top of the head instead.
                       */
                      className="size-full origin-top scale-[1.35] object-cover object-top"
                      loading="lazy"
                    />
                  </motion.div>
                );
              })}
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
}
