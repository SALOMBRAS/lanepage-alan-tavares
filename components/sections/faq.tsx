import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Container, SectionHeader } from "@/components/ui";
import { cn } from "@/lib/utils";
import type { FAQProps } from "@/types";

/** Frequently asked questions rendered with accessible Radix accordion controls. */
export function FAQ({ items, className }: FAQProps) { return <section id="perguntas-frequentes" aria-label="Perguntas frequentes" className={cn("py-section", className)}><Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20"><SectionHeader title="Dúvidas frequentes" subtitle="Respostas iniciais para ajudar você a entender como o contato pode começar." /><Accordion type="single" collapsible className="divide-y divide-border border-y border-border">{items.map((item) => <AccordionItem key={item.id} value={item.id}><AccordionTrigger className="py-5 text-base no-underline hover:no-underline">{item.question}</AccordionTrigger><AccordionContent className="pr-8 pb-5 text-base leading-7 text-muted-foreground">{item.answer}</AccordionContent></AccordionItem>)}</Accordion></Container></section>; }
