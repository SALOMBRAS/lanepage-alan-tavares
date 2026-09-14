import type { TextareaHTMLAttributes } from "react";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
/** Props for Textarea; standard refs make it directly compatible with React Hook Form's `register`. */
export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> { error?: boolean; }
/** Resizable long-text form field with visible validation states. */
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea({ className, error, ...props }, ref) { return <textarea ref={ref} aria-invalid={error || undefined} className={cn("flex min-h-32 w-full resize-y rounded-md border border-border bg-card px-3 py-2 text-base text-foreground outline-none transition duration-200 placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/20 disabled:cursor-not-allowed disabled:bg-muted disabled:opacity-60 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20", className)} {...props} />; });
Textarea.displayName = "Textarea";
