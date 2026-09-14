"use client";
import { m, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
/** Props for SectionHeader, with an optional supporting subtitle and text alignment. */
export interface SectionHeaderProps { title: string; subtitle?: string; align?: "left" | "center" | "right"; className?: string; }
/** Reusable section heading that reveals once on entering the viewport. */
export function SectionHeader({ title, subtitle, align = "left", className }: SectionHeaderProps) {
  const reduceMotion = useReducedMotion();
  const alignClass = { left: "text-left", center: "mx-auto text-center", right: "ml-auto text-right" }[align];
  return <m.div initial={reduceMotion ? false : { opacity: 0, y: 14 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.35, ease: "easeOut" }} className={cn("max-w-2xl", alignClass, className)}><h2 className="font-heading text-title font-semibold text-foreground">{title}</h2>{subtitle ? <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">{subtitle}</p> : null}</m.div>;
}
