"use client";

import { LoaderCircle } from "lucide-react";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition duration-200 ease-out focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 motion-safe:hover:scale-[1.02] motion-safe:active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary: "bg-secondary text-secondary-foreground shadow-sm hover:brightness-110",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:brightness-105",
        ghost: "text-foreground hover:bg-muted",
        outline: "border border-border bg-transparent text-foreground hover:border-primary hover:bg-muted",
        withIcon: "bg-secondary text-secondary-foreground shadow-sm hover:brightness-110",
      },
      size: {
        sm: "min-h-10 px-4 py-2 text-xs",
        default: "min-h-11 px-5 py-3 text-sm",
        lg: "min-h-12 px-6 py-3.5 text-base",
        icon: "size-11 p-0",
        "icon-sm": "size-10 p-0",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  },
);

/** Props for Button, including visual variant, size, loading state and native button attributes. */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  /** Replaces the button content with a progress indicator and prevents interaction. */
  loading?: boolean;
  /** Content displayed while `loading` is true. */
  loadingLabel?: string;
  /** Visible button content. */
  children: ReactNode;
  /** Renders button styles on a child element, such as an anchor. */
  asChild?: boolean;
}

/** Accessible action button with token-based variants and motion that respects reduced-motion. */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant, size, loading = false, loadingLabel = "Carregando", disabled, children, type = "button", asChild = false, ...props },
  ref,
) {
  const isDisabled = disabled || loading;
  if (asChild) {
    return <Slot.Root ref={ref} className={cn(buttonVariants({ variant, size }), className)} aria-busy={loading || undefined} {...props}>{children}</Slot.Root>;
  }
  const Component = asChild ? Slot.Root : "button";
  return <Component ref={ref} type={type} role="button" className={cn(buttonVariants({ variant, size }), className)} disabled={isDisabled} aria-busy={loading || undefined} {...props}>
    {loading ? <LoaderCircle aria-hidden="true" className="size-4 animate-spin" /> : null}
    <span>{loading ? loadingLabel : children}</span>
  </Component>;
});

Button.displayName = "Button";
export { buttonVariants };
