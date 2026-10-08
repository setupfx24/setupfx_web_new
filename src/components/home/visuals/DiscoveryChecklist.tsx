"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

import { system } from "@/content/home";
import { cn } from "@/lib/utils";

const card = system.cards.discovery;
const STEP_MS = 700;

/**
 * A checklist that works through itself once in view: the active row spins, then ticks
 * blue with its status, and the pill at the bottom flips to the ready state.
 */
export function DiscoveryChecklist() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduceMotion = useReducedMotion();
  const [step, setStep] = useState(0);

  // With motion reduced the finished state is shown immediately, with no timers at all.
  const completed = reduceMotion ? card.checklist.length : step;

  useEffect(() => {
    if (!inView || reduceMotion) return;

    const timers = card.checklist.map((_, index) =>
      setTimeout(() => setStep(index + 1), STEP_MS * (index + 1)),
    );

    return () => {
      for (const timer of timers) clearTimeout(timer);
    };
  }, [inView, reduceMotion]);

  const done = completed >= card.checklist.length;

  return (
    <div ref={ref} className="space-y-2">
      {card.checklist.map((item, index) => {
        const isDone = index < completed;
        const isActive = index === completed && !done;

        return (
          <div
            key={item.title}
            className={cn(
              "flex items-center gap-3 rounded-xl border px-3 py-2.5",
              /* Reveal colours stay slow; the hover lift is quick so it feels responsive. */
              "[transition:background-color_500ms_ease,border-color_500ms_ease,transform_250ms_ease]",
              "hover:-translate-y-0.5 hover:border-border-strong hover:bg-white/[0.06]",
              isDone ? "border-border-strong bg-white/[0.04]" : "border-border bg-white/[0.015]",
            )}
          >
            <span className="grid size-5 shrink-0 place-items-center">
              {isDone ? (
                <motion.svg
                  initial={{ scale: 0.4, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  viewBox="0 0 20 20"
                  className="size-5 text-accent"
                  aria-hidden="true"
                >
                  <circle cx="10" cy="10" r="9" fill="currentColor" opacity="0.18" />
                  <path
                    d="m6 10.2 2.6 2.6L14 7.4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </motion.svg>
              ) : (
                <span
                  aria-hidden="true"
                  className={cn(
                    "size-4 rounded-full border-2 border-white/15",
                    isActive && "animate-spin border-t-accent",
                  )}
                />
              )}
            </span>

            <span className="flex-1 truncate text-[13px] text-foreground/90">{item.title}</span>

            {isDone ? (
              <motion.span
                initial={{ opacity: 0, x: 6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="text-[11px] text-muted"
              >
                {item.status}
              </motion.span>
            ) : null}
          </div>
        );
      })}

      <div
        aria-live="polite"
        className={cn(
          "mt-4 flex items-center justify-center rounded-xl border px-4 py-2.5 text-[13px]",
          "[transition:color_500ms_ease,border-color_500ms_ease,box-shadow_300ms_ease,transform_250ms_ease]",
          "hover:-translate-y-0.5",
          done
            ? "border-accent/60 text-accent shadow-[0_0_28px_-6px_rgba(124,188,240,0.45)] hover:shadow-[0_0_38px_-4px_rgba(124,188,240,0.65)]"
            : "border-border text-muted hover:border-border-strong",
        )}
      >
        {done ? card.ready : card.pending}
      </div>
    </div>
  );
}
