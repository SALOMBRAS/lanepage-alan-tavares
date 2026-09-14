"use client";

import { m, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/** Props for Reveal, an accessible viewport-entry animation wrapper. */
export interface RevealProps {
  /** Content that should enter softly when it reaches the viewport. */
  children: ReactNode;
  /** Optional delay in seconds used to sequence related elements. */
  delay?: number;
  /** Extra classes for the wrapper element. */
  className?: string;
}

/** Reveals content with a short fade and upward movement, respecting reduced-motion preferences. */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <m.div
      className={cn(className)}
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </m.div>
  );
}
