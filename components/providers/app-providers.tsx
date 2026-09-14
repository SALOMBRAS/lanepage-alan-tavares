"use client";

import { LazyMotion, MotionConfig } from "framer-motion";
import type { PropsWithChildren } from "react";

const loadFeatures = () =>
  import("./motion-features").then((module) => module.default);

export function AppProviders({ children }: PropsWithChildren) {
  return (
    <LazyMotion features={loadFeatures} strict>
      <MotionConfig reducedMotion="user" transition={{ duration: 0.2 }}>
        {children}
      </MotionConfig>
    </LazyMotion>
  );
}
