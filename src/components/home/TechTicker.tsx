"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";

import { techTicker } from "@/content/home";
import { techIcons } from "@/content/tech-icons";

/** Seconds for one copy of the strip to travel its own width. */
const DRIFT_SECONDS = 26;

export function TechTicker() {
  const reduceMotion = useReducedMotion();

  return (
    <section aria-label={techTicker.ariaLabel} className="py-8 sm:py-12">
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        {/*
         * Two identical copies laid end to end. Sliding the pair left by exactly half
         * its own width lands copy two where copy one began, so the loop never seams.
         */}
        <motion.div
          className="flex w-max"
          animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
          transition={
            reduceMotion ? undefined : { duration: DRIFT_SECONDS, repeat: Infinity, ease: "linear" }
          }
        >
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              /* The second copy is scenery; a screen reader should read the list once. */
              aria-hidden={copy === 1 ? "true" : undefined}
              className="flex shrink-0 items-center gap-8 sm:gap-12"
            >
              {techIcons.map((tech) => (
                <li key={tech.name} className="flex items-center gap-8 sm:gap-12">
                  <span className="flex items-center gap-3 text-lg font-medium whitespace-nowrap text-foreground/85 transition-colors duration-300 hover:text-foreground sm:text-xl">
                    {/*
                     * Brand artwork in its own colours, so it is left unoptimised and
                     * served as the SVG it already is.
                     */}
                    <Image
                      src={tech.src}
                      alt=""
                      width={28}
                      height={28}
                      unoptimized
                      className="size-7 shrink-0 sm:size-8"
                    />
                    {tech.name}
                  </span>
                  <span aria-hidden="true" className="size-1 shrink-0 rounded-full bg-accent/50" />
                </li>
              ))}
            </ul>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
