import type { InputHTMLAttributes } from "react";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
/** Props for Input; standard refs make it directly compatible with React Hook Form's `register`. */
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> { error?: boolean; }
/** Form input with visible focus, invalid and disabled states. */
export const Input = forwardRef<HTMLInputElement, InputProps>(function Input({ className, error, ...props }, ref) { return <input ref={ref} aria-invalid={error || undefined} className={cn("flex min-h-11 w-full rounded-md border border-border bg-card px-3 py-2 text-base text-foreground outline-none transition duration-200 placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/20 disabled:cursor-not-allowed disabled:bg-muted disabled:opacity-60 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20", className)} {...props} />; });
Input.displayName = "Input";
