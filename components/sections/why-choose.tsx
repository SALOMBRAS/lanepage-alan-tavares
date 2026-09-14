import Image from "next/image";

import { Container, Reveal, SectionHeader } from "@/components/ui";
import { iconMap } from "@/lib/icons";
import { cn } from "@/lib/utils";
import type { WhyChooseProps } from "@/types";

/** Alternating editorial blocks explaining how the office approaches each engagement. */
export function WhyChoose({ items, className }: WhyChooseProps) {
  return (
    <section id="diferenciais" aria-label="Diferenciais do escritório" className={cn("py-section", className)}>
      <Container>
        <SectionHeader title="Presença quando cada detalhe importa" subtitle="Uma abordagem pensada para informar, acolher e construir o próximo passo com clareza." className="mb-12" />
        <div className="grid gap-16 lg:gap-24">
          {items.map((item, index) => {
            const Icon = iconMap[item.icon];
            const number = String(index + 1).padStart(2, "0");
            const isPortrait = item.image.height > item.image.width;

            return (
              <Reveal key={item.id} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
                <article className="contents">
                  <div className={cn("relative aspect-[16/10] overflow-hidden rounded-2xl border border-brand-coral/35 bg-primary shadow-xl shadow-black/15", item.imageSide === "right" && "lg:order-2")}>
                    <Image src={item.image.src} alt={item.image.alt} width={item.image.width} height={item.image.height} sizes="(min-width: 1024px) 45vw, 100vw" className={cn("h-full w-full object-cover transition duration-700 ease-out hover:scale-[1.025]", isPortrait && "object-[50%_8%]")} />
                    <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-primary/35 to-transparent" />
                  </div>
                  <div className="max-w-xl">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Como trabalhamos · {number}</p>
                    <div className="grid size-11 place-items-center rounded-md bg-secondary/15 text-secondary transition duration-300 hover:bg-secondary hover:text-secondary-foreground"><Icon aria-hidden="true" className="size-5" /></div>
                    <h3 className="mt-5 font-heading text-3xl font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-4 text-base leading-8 text-muted-foreground">{item.description}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
