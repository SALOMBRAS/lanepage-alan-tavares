import Image from "next/image";
import { ArrowRight, Phone, Scale } from "lucide-react";

import { Badge, Container, Reveal } from "@/components/ui";
import { cn } from "@/lib/utils";
import type { HeroProps } from "@/types";

/** Opening section that pairs a decisive call to action with an institutional portrait. */
export function Hero({ data, className }: HeroProps) {
  return (
    <section id="inicio" aria-label="Apresentação do escritório" className={cn("relative isolate overflow-hidden bg-background pb-16 pt-12 sm:pb-20 sm:pt-16 lg:pb-28 lg:pt-24", className)}>
      <div aria-hidden="true" className="hero-glow absolute -right-24 top-10 size-[29rem] rounded-full bg-secondary/45 blur-3xl" />
      <div aria-hidden="true" className="hero-orbit legal-grid absolute -right-20 top-0 h-[32rem] w-[32rem] rounded-full opacity-55" />
      <Container className="relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <Reveal className="max-w-2xl">
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-8 bg-brand-coral" />
            <Badge variant="outline" className="border-brand-coral/40 bg-secondary/25 text-brand-gold-ink">{data.eyebrow}</Badge>
          </div>
          <h1 className="mt-6 max-w-xl font-heading text-display font-semibold text-foreground">{data.headline}</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">{data.subheadline}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={data.ctas[0].href} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-secondary px-6 py-3.5 text-base font-semibold text-secondary-foreground shadow-lg shadow-black/25 transition duration-200 ease-out hover:scale-[1.02] hover:brightness-110 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background">
              <Phone aria-hidden="true" className="size-4" />{data.ctas[0].label}
            </a>
            <a href={data.ctas[1].href} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-brand-coral/45 bg-primary/50 px-6 py-3.5 text-base font-semibold text-foreground backdrop-blur-sm transition duration-200 hover:border-secondary hover:bg-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background">
              {data.ctas[1].label}<ArrowRight aria-hidden="true" className="size-4" />
            </a>
          </div>
          <dl className="mt-10 grid max-w-xl gap-4 border-y border-brand-coral/30 py-5 sm:grid-cols-2">
            <div>
              <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.17em] text-brand-gold-ink"><Scale aria-hidden="true" className="size-3.5" />Atuação</dt>
              <dd className="mt-1 text-sm font-medium text-foreground">Direito do Consumidor</dd>
            </div>
            <div className="border-brand-coral/30 sm:border-l sm:pl-5">
              <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.17em] text-brand-gold-ink"><Scale aria-hidden="true" className="size-3.5" />Defesa</dt>
              <dd className="mt-1 text-sm font-medium text-foreground">Direito Criminal</dd>
            </div>
          </dl>
        </Reveal>
        <Reveal delay={0.12} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-brand-coral/45 bg-primary p-1 shadow-2xl shadow-black/30">
            <div className="relative h-full overflow-hidden rounded-xl">
              <Image src={data.portrait.src} alt={data.portrait.alt} width={data.portrait.width} height={data.portrait.height} priority sizes="(min-width: 1024px) 40vw, 90vw" className="h-full w-full object-cover object-top transition duration-700 ease-out hover:scale-[1.03]" />
              <div className="absolute inset-0 bg-linear-to-t from-primary/90 via-primary/10 to-transparent" />
              <div className="absolute inset-x-6 bottom-6 border-l-2 border-secondary pl-4 text-primary-foreground">
                <p className="font-heading text-3xl">Alan Tavares</p>
                <p className="mt-1 text-sm font-semibold uppercase tracking-[0.14em]">Consumidor e Criminal</p>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
