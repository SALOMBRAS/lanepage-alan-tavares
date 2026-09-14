import { Quote, Star } from "lucide-react";

import { Card, CardContent, Container, Reveal, SectionHeader } from "@/components/ui";
import { cn } from "@/lib/utils";
import type { TestimonialsProps } from "@/types";

/** Static, keyboard-readable testimonial layout that makes demonstration content explicit. */
export function Testimonials({ items, className }: TestimonialsProps) {
  return (
    <section id="depoimentos" aria-label="Depoimentos de clientes" className={cn("bg-muted/55 py-section", className)}>
      <Container>
        <SectionHeader align="center" title="Relatos de atendimento" subtitle="Espaço preparado para publicar depoimentos autorizados e verificáveis." className="mb-10" />
        <div className="grid gap-5 lg:grid-cols-3">
          {items.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.08}>
              <Card variant="bordered" className="flex h-full border-brand-coral/30 bg-card/85 transition duration-300 hover:-translate-y-1 hover:border-brand-coral/60 hover:shadow-xl hover:shadow-black/15">
                <CardContent className="flex h-full flex-col pt-7">
                  <Quote aria-hidden="true" className="size-7 text-secondary" />
                  <div className="mt-5 flex gap-1" aria-label={`${item.rating} de 5 estrelas`}>
                    {Array.from({ length: item.rating }, (_, starIndex) => <Star key={starIndex} aria-hidden="true" className="size-4 fill-secondary text-secondary" />)}
                  </div>
                  <blockquote className="mt-4 flex-1 text-base leading-7 text-foreground">“{item.quote}”</blockquote>
                  <div className="mt-6 border-t border-border pt-4">
                    <p className="font-semibold text-foreground">{item.name}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{item.case}</p>
                    {item.isMock ? <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-secondary">Depoimento demonstrativo</p> : null}
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
