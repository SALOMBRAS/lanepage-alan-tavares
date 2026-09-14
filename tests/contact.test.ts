import assert from "node:assert/strict";
import test from "node:test";

import { practiceAreaIds } from "@/lib/constants";
import { contactSchema } from "@/lib/validations/contact";

const validContact = {
  nome: "  João Exemplo  ",
  email: "  joao@example.com  ",
  telefone: "(11) 99999-1234",
  area: practiceAreaIds[0],
  mensagem: "  Gostaria de informações sobre o atendimento.  ",
};

test("normaliza espaços e telefones sem confundir o DDD 55 com o país", () => {
  for (const [telefone, expected] of [
    ["(11) 99999-1234", "+5511999991234"],
    ["+55 (11) 99999-1234", "+5511999991234"],
    ["55 11 99999-1234", "+5511999991234"],
    ["(55) 99999-1234", "+5555999991234"],
    ["+55 (55) 99999-1234", "+5555999991234"],
    ["(11) 3333-1234", "+551133331234"],
  ]) {
    const result = contactSchema.parse({ ...validContact, telefone });
    assert.equal(result.telefone, expected);
    assert.equal(result.nome, "João Exemplo");
    assert.equal(result.email, "joao@example.com");
  }
});

test("rejeita campos vazios, área forjada, limites excedidos e telefone inválido", () => {
  for (const invalid of [
    { nome: "   " },
    { nome: "1".repeat(10) },
    { email: "invalido" },
    { area: "area-inexistente" },
    { mensagem: "   " },
    { mensagem: "a".repeat(2001) },
    { nome: "a".repeat(101) },
    { telefone: "+1 212 555 1234" },
    { telefone: "(00) 99999-1234" },
    { telefone: "(11) abc99-1234" },
    { telefone: "(11) 9999-1234" },
  ]) {
    assert.equal(contactSchema.safeParse({ ...validContact, ...invalid }).success, false);
  }
});

test("retorna erros associados a todos os cinco campos obrigatórios", () => {
  const result = contactSchema.safeParse({});
  assert.equal(result.success, false);
  if (!result.success) {
    assert.deepEqual(
      result.error.issues.map((issue) => issue.path[0]).sort(),
      ["area", "email", "mensagem", "nome", "telefone"],
    );
  }
});
