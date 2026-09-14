"use client";
import type { LabelHTMLAttributes, ReactNode } from "react";
import { forwardRef } from "react";
import { m } from "framer-motion";
import { cn } from "@/lib/utils";
/** Props for Label, including optional helper/error content bound to a labelled field. */
export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> { error?: string; children: ReactNode; }
/** Label with a nearby animated error message and native `htmlFor` association. */
export const Label = forwardRef<HTMLLabelElement, LabelProps>(function Label({ className, error, children, ...props }, ref) { return <div className="grid gap-1.5"><label ref={ref} className={cn("text-sm font-semibold text-foreground", className)} {...props}>{children}</label>{error ? <m.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.16 }} role="alert" className="text-sm text-destructive">{error}</m.p> : null}</div>; });
Label.displayName = "Label";
