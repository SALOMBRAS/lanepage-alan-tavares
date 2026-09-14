# Alan Tavares Advocacia

Landing page responsiva para Alan Tavares, com atuação em Direito do Consumidor e Direito Criminal. O projeto usa Next.js 15 App Router, TypeScript, Tailwind CSS v4, componentes shadcn/ui e animações respeitando `prefers-reduced-motion`.

A página inclui navegação, hero, áreas de atuação, diferenciais, indicadores, depoimentos, FAQ com JSON-LD, formulário validado com Zod, SEO técnico e imagens editoriais otimizadas.

## Executar

Requer Node.js **20.9 ou superior** e npm. O `package-lock.json` registra a instalação para uso com `npm ci`.

```sh
npm ci
npm run dev
```

Abra `http://localhost:3000`. Para validar e executar a versão de produção:

```sh
npm run check
npm run build
npm start
```

`check` executa ESLint, TypeScript e os testes de validação/SEO. Também estão disponíveis `npm run lint`, `npm run typecheck` e `npm test` separadamente. O download inicial das fontes pelo `next/font/google` ocorre durante o build e requer acesso à rede.

Copie `.env.example` para `.env.local` quando precisar configurar a origem do site:

```dotenv
NEXT_PUBLIC_SITE_URL=https://advocacia.example
NEXT_PUBLIC_SITE_INDEXABLE=false
```

O domínio `.example` é um placeholder. A configuração atual mantém `siteConfig.isDemo: true` e a indexação desativada.

## Stack e instalação do shadcn/ui

| Parte | Configuração |
| --- | --- |
| Framework | Next.js 15.5.25, App Router e React 19.2.8 |
| Linguagem | TypeScript 5.9, modo estrito, alias `@/*` |
| Estilos | Tailwind CSS 4.3, plugin `@tailwindcss/postcss` |
| Componentes | shadcn/ui, base Radix, estilo `radix-nova` |
| Movimento | Framer Motion, `LazyMotion` e `MotionConfig` |
| Ícones | Lucide React, imports nomeados em `lib/icons.ts` |
| Formulário | Zod v4; sem serviço de envio nesta etapa |
| Fontes | Manrope e Cormorant Garamond via `next/font` |

O shadcn/ui foi inicializado pela CLI, e seus arquivos estão presentes em `components/ui`:

```sh
npx shadcn@latest init --defaults --base radix --yes
npx shadcn@latest add button card accordion carousel input label select textarea avatar sheet --yes
```

Esses comandos documentam a geração inicial. Em um clone do projeto, `npm ci` basta; não é necessário inicializar novamente. Os dez componentes estão disponíveis para a implementação posterior das seções. Consulte a [CLI oficial do shadcn/ui](https://ui.shadcn.com/docs/cli).

O `package.json` fixa a dependência transitiva `next.postcss` em `8.5.28` por meio de `overrides`, preservando Next.js 15.5.25. A auditoria da instalação desta entrega retornou zero vulnerabilidades.

## Estrutura de arquivos

```text
.
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── opengraph-image.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── layout/
│   │   └── skip-link.tsx
│   ├── providers/
│   │   ├── app-providers.tsx
│   │   └── motion-features.ts
│   ├── sections/
│   │   ├── header.tsx
│   │   ├── hero.tsx
│   │   ├── practice-areas.tsx
│   │   ├── why-choose.tsx
│   │   ├── results.tsx
│   │   ├── testimonials.tsx
│   │   ├── faq.tsx
│   │   ├── contact.tsx
│   │   └── footer.tsx
│   ├── seo/
│   │   └── json-ld.tsx
│   └── ui/
│       ├── accordion.tsx
│       ├── avatar.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── carousel.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── select.tsx
│       ├── sheet.tsx
│       └── textarea.tsx
├── lib/
│   ├── constants.ts
│   ├── data.ts
│   ├── fonts.ts
│   ├── icons.ts
│   ├── seo.ts
│   ├── site-env.ts
│   ├── utils.ts
│   └── validations/
│       └── contact.ts
├── public/
│   └── images/
│       ├── attorney-placeholder.svg
│       ├── avatar-placeholder.svg
│       └── office-placeholder.svg
├── tests/
│   ├── contact.test.ts
│   └── seo.test.ts
├── types/
│   └── index.ts
├── .env.example
├── .gitignore
├── components.json
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

`node_modules`, `.next` e caches gerados ficam fora dessa árvore. `next-env.d.ts` é mantido pelo Next.js.

## Composição e contratos das seções

`app/layout.tsx` aplica metadata, idioma `pt-BR`, variáveis das fontes, skip link e providers. `app/page.tsx` importa as nove seções na ordem solicitada e entrega os dados tipados. Os componentes de seção permanecem Server Components; a fronteira Client atual fica no provider de movimento e nos primitivos que precisam dela.

| Componente | Dados / props | Conteúdo previsto para a próxima etapa |
| --- | --- | --- |
| `Header` | `headerData` / `HeaderProps` | Logo, navegação, menu mobile e CTA “Agendar Consulta Gratuita”; contêiner fixo com blur já preparado |
| `Hero` | `heroData` / `HeroProps` | Headline, subheadline, retrato com dimensões, três indicadores e dois CTAs |
| `PracticeAreas` | `practiceAreas` / `PracticeAreasProps` | Grid de seis áreas, com ícone, título e descrição |
| `WhyChoose` | `differentiators` / `WhyChooseProps` | Três diferenciais com imagem alternada à esquerda/direita |
| `Results` | `statistics` / `ResultsProps` | Quatro números, valor final legível e configuração de contagem |
| `Testimonials` | `testimonials` / `TestimonialsProps` | Carrossel com avatar, nome fictício, caso, citação e nota |
| `FAQ` | `faqItems` / `FAQProps` | Accordion e conteúdo correspondente ao schema FAQPage |
| `Contact` | `contactData` / `ContactProps` | Nome, e-mail, telefone, área e mensagem, com erros associados aos campos |
| `Footer` | `footerData` / `FooterProps` | OAB, endereço, telefone, e-mail e redes sociais |

`types/index.ts` centraliza os contratos de domínio, imagens, CTAs, props e tipos do JSON-LD. `IconName` é uma união de strings serializáveis; `lib/icons.ts` resolve cada nome para um componente Lucide. `lib/utils.ts` exporta `cn`, combinando `clsx` com `tailwind-merge`.

`lib/data.ts` já contém o nome, telefone e Instagram informados para Alan Tavares Advocacia. OAB, e-mail, endereço, estatísticas e depoimentos permanecem pendentes de confirmação. Os placeholders SVG são locais e incluem dimensões conhecidas. A rota `/opengraph-image` gera um PNG provisório de 1200 × 630 com `ImageResponse`.

Menu mobile, contador, carrossel, accordion e formulário ainda serão conectados às seções. Isole essas interações em pequenos componentes Client, mantendo a composição e o conteúdo estático no servidor. Para animações, o provider carrega `domAnimation` separadamente e permite usar `m` com `LazyMotion`; as folhas deverão respeitar redução de movimento, inclusive ao decidir se iniciam uma contagem.

## Tokens de design

| Token | Valor | Papel previsto |
| --- | --- | --- |
| `brand.navy` | `#1A1A2E` | Deep Navy para texto, contraste e autoridade |
| `brand.gold` | `#C9A227` | Ouro Antigo para destaque e proximidade |
| `brand.coral` | `#E94560` | Coral para acentos pontuais |
| `brand.paper` | `#FBF8F3` | Fundo claro de leitura |

`app/globals.css` guarda os valores primitivos, os tokens semânticos do shadcn e as variáveis de layout. `tailwind.config.ts` referencia essas variáveis e define tipografia, espaçamento, breakpoints, raios e durações. O Tailwind v4 carrega explicitamente esse arquivo por `@config "../tailwind.config.ts"`; os utilitários semânticos também usam `@theme inline`, conforme a [documentação de configuração do Tailwind v4](https://tailwindcss.com/docs/upgrade-guide#using-a-javascript-config-file).

Manrope atende ao corpo; Cormorant Garamond, aos títulos. Ambas usam pesos 400/600, `display: "swap"` e entrega local pelo Next.js. A escala de espaço segue 4/8/16/24/32/48/64/96 px, com margens e seções fluidas via `clamp`. Variantes mais escuras de ouro e coral estão disponíveis para texto. Ouro usa texto navy; coral usa `--neutral-ink` (`#12121F`) para atingir contraste AA em texto normal. Use os pares semânticos `secondary`/`secondary-foreground` e `accent`/`accent-foreground`.

## Validação de contato

`lib/validations/contact.ts` exporta `contactSchema`, `ContactInput` e `ContactOutput`. O schema valida:

- `nome`: 2–100 caracteres, com letras; remove espaços externos.
- `email`: formato válido, até 254 caracteres; remove espaços externos.
- `telefone`: fixo ou celular brasileiro com DDD, com ou sem `+55`; normaliza para `+55` seguido de dígitos, preservando números cujo DDD é 55.
- `area`: um dos IDs de `practiceAreaIds`, definidos em `lib/constants.ts` e reutilizados pelos dados.
- `mensagem`: 10–2.000 caracteres; remove espaços externos.

As mensagens de erro estão em português. `contactData.submissionMode` é `preview-only`: existe a base de validação para o futuro formulário no frontend, mas não há formulário renderizado, envio, armazenamento ou agendamento implementado. Uma integração futura deverá repetir a validação no servidor e apresentar seu resultado com texto acessível.

## SEO e dados estruturados

`buildMetadata` prepara título, descrição, canonical, Open Graph, Twitter Card e regras de robôs. `getSiteUrl` valida a origem configurada, e metadata e schemas usam a mesma URL base. `robots.ts` bloqueia rastreamento e `sitemap.ts` retorna uma lista vazia enquanto o site não for indexável.

A indexação exige as três condições: conteúdo real com `siteConfig.isDemo: false`, `NEXT_PUBLIC_SITE_INDEXABLE=true` e origem pública HTTPS que não seja localhost ou domínio reservado. Troque os mocks antes dessa alteração.

`getAttorneySchema` constrói um grafo com `LocalBusiness` e `Attorney`; `getFaqSchema` prepara `FAQPage`. O componente `JsonLd` serializa os dados escapando `<`, seguindo a [orientação de JSON-LD do Next.js 15](https://nextjs.org/docs/15/app/guides/json-ld).

**Os schemas ainda não são emitidos na página:** as seções estão vazias, e os dados correspondentes precisam estar visíveis para o visitante. Após implementar as seções e substituir os mocks, a integração pode seguir este exemplo:

```tsx
import { JsonLd } from "@/components/seo/json-ld";
import { faqItems, siteConfig } from "@/lib/data";
import { getAttorneySchema, getFaqSchema } from "@/lib/seo";

// Inserir na composição apenas após exibir os mesmos dados e respostas na página.
export function VisibleContentStructuredData() {
  if (siteConfig.isDemo) return null;

  return (
    <>
      <JsonLd id="attorney-schema" data={getAttorneySchema(siteConfig)} />
      <JsonLd id="faq-schema" data={getFaqSchema(faqItems)} />
    </>
  );
}
```

Markup válido não garante exibição de rich snippets. Nenhuma avaliação agregada é gerada a partir dos depoimentos fictícios.

## Acessibilidade, responsividade e desempenho

Já estão preparados `lang="pt-BR"`, landmarks com nomes ARIA, skip link para `main#conteudo`, alvo de foco no conteúdo, `:focus-visible`, compensação de âncoras para o header fixo e viewport sem bloqueio de zoom. O CSS trata `prefers-reduced-motion`, e `MotionConfig` utiliza a preferência do usuário. Rótulos dos campos, associação dos erros, teclado do carrossel e navegação mobile serão implementados junto das respectivas interações.

A base usa largura mínima de 320 px, tokens fluidos, contêiner limitado a 80 rem e breakpoints que incluem 1440 px. Grids, imagens e navegação ainda precisam ser implementados e verificados em 320, 375, 768, 1024 e 1440 px ou mais.

As metas são **LCP < 2,5 s** e **CLS < 0,1**, ainda não medidas. Uma página sem conteúdo visual não valida o desempenho final. A arquitetura favorece Server Components, importação seletiva de ícones, fontes locais e carregamento separado de movimento. Na etapa visual, use `next/image` com `width`/`height` e `sizes` corretos, priorize a imagem que de fato compuser o LCP e reserve espaço para números e imagens. Meça a versão de produção com o conteúdo final e acompanhe as métricas de campo após a publicação.

Os testes presentes cobrem os contratos que já têm comportamento: validação/normalização do contato, origem canônica, bloqueio de indexação dos mocks e serialização segura dos schemas.
