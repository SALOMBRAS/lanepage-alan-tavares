import { z } from "zod";

import { practiceAreaIds } from "@/lib/constants";

function normalizeBrazilianPhone(value: string): string {
  const digits = value.replace(/\D/g, "");
  // A national number may itself start with DDD 55; strip only the country code.
  if (digits.startsWith("55") && (digits.length === 12 || digits.length === 13)) {
    return digits.slice(2);
  }
  return digits;
}

const phoneSchema = z
  .string({ error: "Informe seu telefone." })
  .trim()
  .min(10, "Informe um telefone com DDD.")
  .max(25, "Use até 25 caracteres no telefone.")
  .refine(
    (value) => /^\+?[\d\s().-]+$/.test(value),
    "Use somente números e a formatação usual de telefone.",
  )
  .refine(
    (value) => !value.startsWith("+") || /^55\d{10,11}$/.test(value.replace(/\D/g, "")),
    "Para números internacionais, use o código do Brasil (+55).",
  )
  .transform(normalizeBrazilianPhone)
  .refine(
    (value) => /^[1-9]{2}(?:[2-5]\d{7}|9\d{8})$/.test(value),
    "Informe um telefone brasileiro válido com DDD.",
  )
  .transform((value) => `+55${value}`);

/** Shared validation only: no network request, inbox or persistence is configured. */
export const contactSchema = z.object({
  nome: z
    .string({ error: "Informe seu nome." })
    .trim()
    .min(2, "O nome deve ter pelo menos 2 caracteres.")
    .max(100, "O nome deve ter no máximo 100 caracteres.")
    .refine((value) => /\p{L}/u.test(value), "Informe um nome com letras."),
  email: z
    .string({ error: "Informe seu e-mail." })
    .trim()
    .min(1, "Informe seu e-mail.")
    .max(254, "O e-mail deve ter no máximo 254 caracteres.")
    .pipe(z.email({ error: "Informe um e-mail válido." })),
  telefone: phoneSchema,
  area: z.enum(practiceAreaIds, { error: "Selecione uma área de atuação." }),
  mensagem: z
    .string({ error: "Escreva sua mensagem." })
    .trim()
    .min(10, "A mensagem deve ter pelo menos 10 caracteres.")
    .max(2000, "A mensagem deve ter no máximo 2.000 caracteres."),
});

export type ContactInput = z.input<typeof contactSchema>;
export type ContactOutput = z.output<typeof contactSchema>;
