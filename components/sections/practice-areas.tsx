import { Card, CardContent, CardHeader, CardTitle, Container, Reveal, SectionHeader } from "@/components/ui";
import { iconMap } from "@/lib/icons";
import { cn } from "@/lib/utils";
import type { PracticeArea, PracticeAreasProps } from "@/types";

const categories = ["Direito do Consumidor", "Direito Criminal"] as const;

/** Grid of practice areas, separated between consumer law and criminal law. */
export function PracticeAreas({ items, className }: PracticeAreasProps) {
  const areasByCategory = categories.map((category) => ({ category, items: items.filter((item) => item.category === category) }));

  return (
    <section id="areas-de-atuacao" aria-label="Áreas de atuação" className={cn("bg-card py-section", className)}>
      <Container>
        <SectionHeader title="Áreas de atuação" subtitle="Atuação em Direito do Consumidor e Direito Criminal, com orientação clara em cada etapa." className="mb-12" />
        <div className="grid gap-14">
          {areasByCategory.map(({ category, items: categoryItems }) => <PracticeAreaGroup key={category} category={category} items={categoryItems} />)}
        </div>
      </Container>
    </section>
  );
}

function PracticeAreaGroup({ category, items }: { category: string; items: readonly PracticeArea[] }) {
  return (
    <div>
      <div className="mb-5 flex items-center gap-4">
        <span aria-hidden="true" className="font-heading text-4xl text-brand-coral/80">{String(items.length).padStart(2, "0")}</span>
        <h3 className="font-heading text-3xl font-semibold text-foreground">{category}</h3>
        <span aria-hidden="true" className="h-px flex-1 bg-border" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => {
          const Icon = iconMap[item.icon];
          return (
            <Reveal key={item.id} delay={Math.min(index * 0.055, 0.22)}>
              <Card variant="interactive" className="group h-full overflow-hidden border-brand-coral/25 bg-linear-to-br from-card via-card to-secondary/10 hover:border-brand-coral/60">
                <CardHeader>
                  <div className="mb-3 grid size-11 place-items-center rounded-md bg-secondary/40 text-brand-gold-ink transition duration-300 group-hover:scale-110 group-hover:bg-secondary">
                    <Icon aria-hidden="true" className="size-5" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent><p className="text-sm leading-6 text-muted-foreground">{item.description}</p></CardContent>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
