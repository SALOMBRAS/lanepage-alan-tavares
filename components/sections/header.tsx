"use client";

import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Button, Container, MobileMenu } from "@/components/ui";
import { cn } from "@/lib/utils";
import type { HeaderProps } from "@/types";

/** Fixed responsive site navigation, with a compact state after scrolling. */
export function Header({ data, className }: HeaderProps) {
  const [compact, setCompact] = useState(false);
  useEffect(() => { const onScroll = () => setCompact(window.scrollY > 16); onScroll(); window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll); }, []);
  function handleAnchor(event: React.MouseEvent<HTMLAnchorElement>, href: string) { event.preventDefault(); document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" }); }
  return <header id="inicio-navegacao" aria-label="Cabeçalho principal" className={cn("fixed inset-x-0 top-0 z-40 border-b border-transparent transition duration-200", compact ? "border-border bg-background/95 shadow-sm backdrop-blur-xl" : "bg-background/80 backdrop-blur-md", className)}>
    <Container className={cn("flex items-center justify-between transition-all duration-200", compact ? "h-16" : "h-header")}>
      <a href={data.brand.href} onClick={(event) => handleAnchor(event, data.brand.href)} className="min-h-11 py-1 focus-visible:ring-2 focus-visible:ring-ring" aria-label="Ir ao início"><span className="block font-heading text-xl font-semibold tracking-tight">{data.brand.name}</span><span className="block text-[0.67rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">{data.brand.subtitle}</span></a>
      <nav aria-label="Navegação principal" className="hidden items-center gap-1 lg:flex">{data.navigation.map((item) => <a key={item.href} href={item.href} onClick={(event) => handleAnchor(event, item.href)} className="rounded-md px-3 py-2 text-sm font-semibold text-muted-foreground transition hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring">{item.label}</a>)}</nav>
      <div className="flex items-center gap-2"><Button asChild variant="withIcon" size="sm" aria-label={data.cta.ariaLabel} className="hidden lg:inline-flex"><a href={data.cta.href} onClick={(event) => handleAnchor(event, data.cta.href)}><ArrowUpRight aria-hidden="true" className="size-4" />{data.cta.label}</a></Button><MobileMenu navigation={data.navigation} cta={data.cta} brandName={data.brand.name} label={data.mobileMenuLabel} /></div>
    </Container>
  </header>;
}
