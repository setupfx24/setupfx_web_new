"use client";

import { animate, useInView, useMotionValue, useReducedMotion, useTransform } from "motion/react";
import { motion } from "motion/react";
import { useEffect, useRef } from "react";

type CountUpProps = {
  value: number;
  suffix?: string;
  className?: string;
};

/**
 * Counts to `value` the first time it scrolls into view. The digits stay blue while
 * they change and settle to off-white at the end. The number lives in a motion value,
 * so counting never re-renders React.
 */
export function CountUp({ value, suffix = "", className }: CountUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduceMotion = useReducedMotion();

  const count = useMotionValue(0);
  const text = useTransform(count, (latest) => Math.round(latest).toLocaleString("en-US"));
  const color = useTransform(
    count,
    [0, value * 0.88, value],
    ["var(--accent)", "var(--accent)", "var(--foreground)"],
  );

  useEffect(() => {
    if (!inView) return;

    if (reduceMotion) {
      count.set(value);
      return;
    }

    const controls = animate(count, value, { duration: 1.8, ease: [0.16, 1, 0.3, 1] });
    return () => controls.stop();
  }, [inView, value, count, reduceMotion]);

  return (
    <motion.div ref={ref} style={{ color }} className={className}>
      {/* The live value, announced once rather than on every tick. */}
      <span className="sr-only">{`${value.toLocaleString("en-US")}${suffix}`}</span>
      <span aria-hidden="true">
        <motion.span>{text}</motion.span>
        {suffix}
      </span>
    </motion.div>
  );
}
