"use client";

import { CheckCircle2, Phone } from "lucide-react";
import { useState } from "react";

import { Button, Card, CardContent, Container, Input, Label, SectionHeader, Textarea } from "@/components/ui";
import { contactSchema } from "@/lib/validations/contact";
import { cn } from "@/lib/utils";
import type { ContactFieldName, ContactProps } from "@/types";

type FieldErrors = Partial<Record<ContactFieldName, string>>;

/** Contact form that validates the message before opening WhatsApp. */
export function Contact({ data, className }: ContactProps) {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); setSuccess(false); setSubmitting(true);
    const raw = Object.fromEntries(new FormData(event.currentTarget));
    const result = contactSchema.safeParse(raw);
    if (!result.success) {
      const nextErrors: FieldErrors = {};
      for (const issue of result.error.issues) { const field = issue.path[0]; if (typeof field === "string") nextErrors[field as ContactFieldName] ??= issue.message; }
      setErrors(nextErrors); setSubmitting(false);
      document.getElementById(`field-${Object.keys(nextErrors)[0]}`)?.focus(); return;
    }
    const areaLabel = data.areas.find((area) => area.value === result.data.area)?.label ?? result.data.area;
    const message = [
      "Olá, Alan. Gostaria de iniciar um atendimento.",
      "",
      `Nome: ${result.data.nome}`,
      `E-mail: ${result.data.email}`,
      `Telefone: ${result.data.telefone}`,
      `Área: ${areaLabel}`,
      `Mensagem: ${result.data.mensagem}`,
    ].join("\n");

    setErrors({}); setSubmitting(false); setSuccess(true);
    window.location.assign(`https://wa.me/5585999535299?text=${encodeURIComponent(message)}`);
  }

  return <section id="contato" aria-label="Entre em contato" className={cn("bg-muted/55 py-section", className)}><Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20"><div><SectionHeader title={data.title} subtitle={data.description} /><div className="mt-8 rounded-xl border border-brand-gold/30 bg-secondary/10 p-5"><p className="flex items-center gap-2 text-sm font-semibold text-foreground"><Phone aria-hidden="true" className="size-4 text-brand-gold-ink" />Prefere falar por telefone?</p><a href="tel:+5585999535299" className="mt-2 inline-block text-lg font-semibold text-foreground underline decoration-secondary decoration-2 underline-offset-4 hover:text-brand-gold-ink">(85) 99953-5299</a></div></div>
    <Card variant="elevated"><CardContent className="pt-7"><form noValidate onSubmit={handleSubmit} className="grid gap-5" aria-describedby="form-status"><div className="grid gap-5 sm:grid-cols-2"><div><Label htmlFor="field-nome" error={errors.nome}>Nome</Label><Input id="field-nome" name="nome" autoComplete="name" placeholder="Seu nome" error={Boolean(errors.nome)} aria-describedby={errors.nome ? "error-nome" : undefined} /></div><div><Label htmlFor="field-email" error={errors.email}>E-mail</Label><Input id="field-email" name="email" type="email" autoComplete="email" placeholder="seuemail@gmail.com" error={Boolean(errors.email)} /></div></div><div className="grid gap-5 sm:grid-cols-2"><div><Label htmlFor="field-telefone" error={errors.telefone}>Telefone</Label><Input id="field-telefone" name="telefone" type="tel" autoComplete="tel" placeholder="(85) 99953-5299" error={Boolean(errors.telefone)} /></div><div><Label htmlFor="field-area" error={errors.area}>Área de atuação</Label><select id="field-area" name="area" defaultValue="" aria-invalid={Boolean(errors.area) || undefined} className="min-h-11 w-full rounded-md border border-border bg-card px-3 py-2 text-base text-foreground outline-none transition focus:border-secondary focus:ring-2 focus:ring-ring/20 aria-invalid:border-destructive"><option value="" disabled>Selecione uma área</option>{data.areas.map((area) => <option key={area.value} value={area.value}>{area.label}</option>)}</select></div></div><div><Label htmlFor="field-mensagem" error={errors.mensagem}>Mensagem</Label><Textarea id="field-mensagem" name="mensagem" placeholder="Descreva brevemente o motivo do contato" error={Boolean(errors.mensagem)} /></div><Button type="submit" variant="secondary" loading={submitting} loadingLabel="Abrindo WhatsApp" className="w-full sm:w-auto">{data.submitLabel}</Button><p id="form-status" aria-live="polite" className="text-sm text-muted-foreground">{success ? <span className="flex items-center gap-2 text-emerald-300"><CheckCircle2 aria-hidden="true" className="size-4" />{data.previewMessage}</span> : "Você será direcionado ao WhatsApp após a validação dos dados."}</p></form></CardContent></Card>
  </Container></section>;
}
