"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import type { NavigationItem } from "@/types";

/** Props for MobileMenu: links, a CTA and the brand label announced inside the navigation dialog. */
export interface MobileMenuProps { navigation: readonly NavigationItem[]; cta: { label: string; href: string; ariaLabel?: string }; brandName: string; label: string; }
/** Off-canvas mobile navigation with an accessible dialog and animated hamburger state. */
export function MobileMenu({ navigation, cta, brandName, label }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  function goTo(href: string) { setOpen(false); window.setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" }), 150); }
  return <Sheet open={open} onOpenChange={setOpen}>
    <Button variant="ghost" size="icon" aria-label={open ? "Fechar menu" : label} aria-expanded={open} onClick={() => setOpen(!open)} className="lg:hidden">{open ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}</Button>
    <SheetContent side="right" className="w-[min(90vw,24rem)] p-7" showCloseButton={false}>
      <div className="flex items-center justify-between border-b border-border pb-5"><SheetTitle className="font-heading text-2xl">{brandName}</SheetTitle><Button variant="ghost" size="icon" aria-label="Fechar menu" onClick={() => setOpen(false)}><X aria-hidden="true" className="size-5" /></Button></div>
      <nav aria-label="Navegação móvel" className="mt-4 grid gap-1">{navigation.map((item) => <button key={item.href} type="button" onClick={() => goTo(item.href)} className="min-h-11 rounded-md px-3 text-left text-base font-semibold text-foreground transition hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring">{item.label}</button>)}</nav>
      <Button variant="primary" className="mt-auto w-full" onClick={() => goTo(cta.href)} aria-label={cta.ariaLabel}>{cta.label}</Button>
    </SheetContent>
  </Sheet>;
}
