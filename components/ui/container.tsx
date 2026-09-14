import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
/** Props for Container, including `className` to adapt spacing or width locally. */
export type ContainerProps = HTMLAttributes<HTMLDivElement>;
/** Responsive page-width wrapper with mobile-first gutters. */
export function Container({ className, ...props }: ContainerProps) { return <div className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)} {...props} />; }
