"use client";

import { motion, useReducedMotion } from "motion/react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Seconds to wait before this element animates, for staggering a group. */
  delay?: number;
};

/** Fades and lifts its children into view once, and does nothing if motion is reduced. */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
