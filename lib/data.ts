import { practiceAreaIds } from "@/lib/constants";
import type {
  ContactData,
  Differentiator,
  FAQItem,
  FooterData,
  HeaderData,
  HeroData,
  PracticeArea,
  SiteConfig,
  Statistic,
  Testimonial,
} from "@/types";

const mockNotice =
  "Atendimento jurídico com seriedade, estratégia e proximidade.";

export const siteConfig: SiteConfig = {
  name: "Alan Tavares Advocacia",
  description:
    "Atuação em Direito do Consumidor e Direito Criminal, com orientação clara desde o primeiro contato.",
  url: "https://alan-tavares.vercel.app",
  locale: "pt_BR",
  language: "pt-BR",
  isDemo: true,
  mockNotice,
  attorney: {
    name: "Alan Tavares",
    oab: "OAB/UF [NÚMERO A INFORMAR]",
    specialty: "Direito do Consumidor e Direito Criminal",
  },
  contact: {
    phone: "+55 (85) 99953-5299",
    email: "alantavaresadv@gmail.com",
    address: {
      streetAddress: "[Logradouro, número e sala a informar]",
      addressLocality: "[Cidade a informar]",
      addressRegion: "[UF]",
      postalCode: "[CEP a informar]",
      addressCountry: "BR",
    },
  },
  socialLinks: [
    {
      label: "Instagram de Alan Tavares Advocacia",
      href: "https://www.instagram.com/alantavaresadvocacia/",
      icon: "instagram",
    },
  ],
  ogImage: {
    src: "/opengraph-image",
    alt: "Imagem de compartilhamento provisória — advocacia criminal",
    width: 1200,
    height: 630,
  },
};

export const headerData: HeaderData = {
  brand: {
    name: "Alan Tavares",
    subtitle: "Consumidor e Criminal",
    href: "#inicio",
  },
  navigation: [
    { label: "Atuação", href: "#areas-de-atuacao" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Dúvidas", href: "#perguntas-frequentes" },
    { label: "Contato", href: "#contato" },
  ],
  cta: {
    label: "Agendar Consulta Gratuita",
    href: "#contato",
    variant: "primary",
    ariaLabel: "Ir ao formulário para agendar consulta gratuita",
  },
  mobileMenuLabel: "Abrir menu de navegação",
};

export const statistics: readonly Statistic[] = [
  {
    id: "experiencia",
    value: 5,
    label: "anos de atuação",
    decimals: 0,
    displayValue: "5",
    countDurationMs: 1000,
    isMock: false,
  },
  {
    id: "atendimentos",
    value: 1200,
    suffix: "+",
    label: "atendimentos realizados",
    decimals: 0,
    displayValue: "1.200+",
    countDurationMs: 1400,
    isMock: false,
  },
  {
    id: "areas",
    value: 13,
    label: "frentes de atuação",
    decimals: 0,
    displayValue: "6",
    countDurationMs: 800,
    isMock: false,
  },
];

export const heroData: HeroData = {
  eyebrow: "Direito do Consumidor e Direito Criminal",
  headline: "Estratégia e presença quando seus direitos precisam de resposta.",
  subheadline:
    "Atendimento jurídico para situações que exigem orientação clara, análise cuidadosa e definição de próximos passos.",
  portrait: {
    src: "/images/alan-tavares-office-ai.png",
    alt: "Alan Tavares, advogado, em escritório jurídico",
    width: 1122,
    height: 1402,
  },
  stats: statistics.slice(0, 3),
  ctas: [
    headerData.cta,
    {
      label: "Conhecer Áreas de Atuação",
      href: "#areas-de-atuacao",
      variant: "secondary",
    },
  ],
  mockNotice,
};

export const practiceAreas: readonly PracticeArea[] = [
  {
    id: practiceAreaIds[0],
    category: "Direito do Consumidor",
    title: "Atrasos e Cancelamentos de Voos",
    description: "Orientação para situações de atraso, cancelamento e demais problemas em viagens aéreas.",
    icon: "landmark",
  },
  {
    id: practiceAreaIds[1],
    category: "Direito do Consumidor",
    title: "Cobranças Indevidas",
    description: "Análise de cobranças que não correspondem ao serviço ou produto contratado.",
    icon: "scroll-text",
  },
  {
    id: practiceAreaIds[2],
    category: "Direito do Consumidor",
    title: "Negativação Indevida",
    description: "Acompanhamento em casos de inclusão indevida em cadastros de inadimplência.",
    icon: "shield-check",
  },
  {
    id: practiceAreaIds[3],
    category: "Direito do Consumidor",
    title: "Fraudes e Empréstimos Não Contratados",
    description: "Orientação diante de fraudes, operações ou empréstimos que não foram reconhecidos.",
    icon: "lock-keyhole",
  },
  {
    id: practiceAreaIds[4],
    category: "Direito do Consumidor",
    title: "Problemas Bancários e Cartões",
    description: "Análise de questões relacionadas a bancos, contas, cartões e transações.",
    icon: "landmark",
  },
  {
    id: practiceAreaIds[5],
    category: "Direito do Consumidor",
    title: "Venda Casada",
    description: "Avaliação de práticas que condicionam um produto ou serviço à aquisição de outro.",
    icon: "messages-square",
  },
  {
    id: practiceAreaIds[6],
    category: "Direito do Consumidor",
    title: "Produtos e Serviços com Defeito",
    description: "Orientação para problemas envolvendo defeitos, vícios e falhas na prestação de serviços.",
    icon: "search",
  },
  {
    id: practiceAreaIds[7],
    category: "Direito Criminal",
    title: "Defesa em Inquéritos Policiais",
    description: "Acompanhamento técnico durante a fase de investigação policial.",
    icon: "shield-check",
  },
  {
    id: practiceAreaIds[8],
    category: "Direito Criminal",
    title: "Acompanhamento em Delegacias",
    description: "Orientação e acompanhamento em procedimentos realizados perante a autoridade policial.",
    icon: "messages-square",
  },
  {
    id: practiceAreaIds[9],
    category: "Direito Criminal",
    title: "Prisão em Flagrante",
    description: "Atuação em situações que envolvem prisão em flagrante e seus desdobramentos.",
    icon: "lock-keyhole",
  },
  {
    id: practiceAreaIds[10],
    category: "Direito Criminal",
    title: "Audiência de Custódia",
    description: "Acompanhamento jurídico na apresentação da pessoa presa ao Poder Judiciário.",
    icon: "scale",
  },
  {
    id: practiceAreaIds[11],
    category: "Direito Criminal",
    title: "Habeas Corpus",
    description: "Análise técnica de medidas voltadas à proteção da liberdade de locomoção.",
    icon: "gavel",
  },
  {
    id: practiceAreaIds[12],
    category: "Direito Criminal",
    title: "Defesa em Ações Penais",
    description: "Defesa e acompanhamento em processos criminais perante o Poder Judiciário.",
    icon: "scroll-text",
  },
];

export const differentiators: readonly Differentiator[] = [
  {
    id: "escuta",
    title: "Escuta e atenção individual",
    description: "Texto demonstrativo sobre conhecer o contexto de cada pessoa antes de planejar o atendimento.",
    icon: "heart-handshake",
    image: {
      src: "/images/consultation-room-ai.png",
      alt: "Sala reservada para atendimento jurídico, com mesa e duas poltronas",
      width: 1586,
      height: 992,
    },
    imageSide: "left",
  },
  {
    id: "comunicacao",
    title: "Comunicação clara",
    description: "Texto demonstrativo sobre explicar etapas e manter uma comunicação compreensível ao longo do atendimento.",
    icon: "messages-square",
    image: {
      src: "/images/alan-tavares-office-ai.png",
      alt: "Alan Tavares, advogado, em escritório jurídico",
      width: 1122,
      height: 1402,
    },
    imageSide: "right",
  },
  {
    id: "preparacao",
    title: "Preparação cuidadosa",
    description: "Texto demonstrativo sobre estudo dos documentos e organização das informações de cada caso.",
    icon: "lock-keyhole",
    image: {
      src: "/images/legal-preparation-ai.png",
      alt: "Mesa de trabalho com documentos e materiais de preparação jurídica organizados",
      width: 1586,
      height: 992,
    },
    imageSide: "left",
  },
];

export const testimonials: readonly Testimonial[] = [
  {
    id: "depoimento-1",
    name: "Marina Exemplo · pessoa fictícia",
    case: "Atendimento inicial · caso fictício",
    quote: "Depoimento fictício: pude organizar minhas dúvidas e entender como seria o atendimento.",
    photo: { src: "/images/avatar-placeholder.svg", alt: "Avatar ilustrativo; não representa cliente real", width: 96, height: 96 },
    rating: 5,
    isMock: true,
  },
  {
    id: "depoimento-2",
    name: "Rafael Exemplo · pessoa fictícia",
    case: "Acompanhamento processual · caso fictício",
    quote: "Depoimento fictício: as conversas foram claras e minhas perguntas receberam atenção.",
    photo: { src: "/images/avatar-placeholder.svg", alt: "Avatar ilustrativo; não representa cliente real", width: 96, height: 96 },
    rating: 5,
    isMock: true,
  },
  {
    id: "depoimento-3",
    name: "Clara Exemplo · pessoa fictícia",
    case: "Análise de documentos · caso fictício",
    quote: "Depoimento fictício: encontrei um atendimento organizado desde o primeiro contato.",
    photo: { src: "/images/avatar-placeholder.svg", alt: "Avatar ilustrativo; não representa cliente real", width: 96, height: 96 },
    rating: 5,
    isMock: true,
  },
];

export const faqItems: readonly FAQItem[] = [
  {
    id: "primeiro-contato",
    question: "Como funciona o primeiro contato?",
    answer: "Nesta demonstração, o formulário serve para validar os campos localmente. O fluxo real de atendimento será definido antes da publicação.",
  },
  {
    id: "documentos",
    question: "Quais documentos devo apresentar?",
    answer: "Resposta demonstrativa: a lista de documentos será informada pelo escritório de acordo com o contexto relatado.",
  },
  {
    id: "modalidades",
    question: "O atendimento pode ser online?",
    answer: "Resposta demonstrativa: as modalidades de atendimento e a disponibilidade serão confirmadas pelo escritório.",
  },
  {
    id: "agendamento",
    question: "Como confirmar um agendamento?",
    answer: "Esta versão não agenda consultas nem envia mensagens. A confirmação dependerá da integração futura com o canal de atendimento do escritório.",
  },
];

export const contactData: ContactData = {
  title: "Vamos conversar sobre o seu momento",
  description: "Formulário demonstrativo. Os dados ainda não são enviados ou armazenados.",
  fields: [
    { name: "nome", label: "Nome", placeholder: "Seu nome", required: true, type: "text", autoComplete: "name", minLength: 2, maxLength: 100 },
    { name: "email", label: "E-mail", placeholder: "voce@exemplo.com", required: true, type: "email", autoComplete: "email", maxLength: 254 },
    { name: "telefone", label: "Telefone", placeholder: "(11) 99999-9999", required: true, type: "tel", autoComplete: "tel", minLength: 10, maxLength: 25 },
    { name: "area", label: "Área de atuação", placeholder: "Selecione uma área", required: true, type: "select" },
    { name: "mensagem", label: "Mensagem", placeholder: "Descreva brevemente o motivo do contato", required: true, type: "textarea", minLength: 10, maxLength: 2000 },
  ],
  areas: practiceAreas.map(({ id, title }) => ({ value: id, label: title })),
  submitLabel: "Validar formulário de demonstração",
  submissionMode: "preview-only",
  previewMessage: "Campos validados. Esta demonstração não envia mensagens nem confirma agendamentos.",
};

export const footerData: FooterData = {
  brandName: siteConfig.name,
  attorneyName: siteConfig.attorney.name,
  oab: siteConfig.attorney.oab,
  address: siteConfig.contact.address,
  phone: siteConfig.contact.phone,
  email: siteConfig.contact.email,
  socialLinks: siteConfig.socialLinks,
  copyright: "© [ANO] Alan Tavares Advocacia.",
  mockNotice,
};
