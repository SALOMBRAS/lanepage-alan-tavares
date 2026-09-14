"use client";

import type { HTMLAttributes, KeyboardEvent, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const cardVariants = cva("rounded-xl bg-card text-card-foreground", {
  variants: {
    variant: {
      default: "shadow-sm",
      bordered: "border border-border shadow-none",
      elevated: "shadow-card",
      interactive: "border border-border shadow-sm transition duration-200 ease-out motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-card focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    },
  },
  defaultVariants: { variant: "default" },
});

/** Props for Card. An `onClick` turns it into a keyboard-operable interactive surface. */
export interface CardProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> { children: ReactNode; onClick?: () => void; }

/** General purpose card with optional elevation and a safe interactive variant. */
export function Card({ className, variant, onClick, onKeyDown, children, ...props }: CardProps) {
  const interactive = Boolean(onClick);
  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    onKeyDown?.(event);
    if (!event.defaultPrevented && interactive && (event.key === "Enter" || event.key === " ")) { event.preventDefault(); onClick?.(); }
  }
  return <div className={cn(cardVariants({ variant: interactive ? "interactive" : variant }), className)} onClick={onClick} onKeyDown={handleKeyDown} role={interactive ? "button" : undefined} tabIndex={interactive ? 0 : undefined} {...props}>{children}</div>;
}

/** Props shared by the semantic Card subcomponents. */
export type CardSlotProps = HTMLAttributes<HTMLDivElement>;
export function CardHeader({ className, ...props }: CardSlotProps) { return <div className={cn("flex flex-col gap-2 p-6", className)} {...props} />; }
export function CardTitle({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) { return <h3 className={cn("font-heading text-2xl font-semibold", className)} {...props} />; }
export function CardDescription({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) { return <p className={cn("text-sm leading-6 text-muted-foreground", className)} {...props} />; }
export function CardContent({ className, ...props }: CardSlotProps) { return <div className={cn("px-6 pb-6", className)} {...props} />; }
export { cardVariants };
