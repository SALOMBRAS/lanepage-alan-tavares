import type { HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva("inline-flex min-h-6 items-center rounded-full px-2.5 py-1 text-xs font-semibold leading-none", { variants: { variant: { default: "bg-primary text-primary-foreground", success: "bg-emerald-100 text-emerald-900", warning: "bg-secondary text-secondary-foreground", outline: "border border-border bg-transparent text-foreground" } }, defaultVariants: { variant: "default" } });
/** Props for Badge, used to label short statuses such as “Gratuito” or “Urgente”. */
export interface BadgeProps extends HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {}
/** Compact status label with accessible semantic color pairs. */
export function Badge({ className, variant, ...props }: BadgeProps) { return <span className={cn(badgeVariants({ variant }), className)} {...props} />; }
export { badgeVariants };
