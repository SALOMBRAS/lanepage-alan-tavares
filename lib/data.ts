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
    alt: "Alan Tavares Advocacia — Direito do Consumidor e Direito Criminal",
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
    description: "Cada atendimento começa pela escuta atenta do contexto e das necessidades de quem procura orientação jurídica.",
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
    description: "Informações claras sobre as etapas do atendimento para que você compreenda seus próximos passos.",
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
    description: "Análise organizada de documentos e informações para definir uma estratégia jurídica adequada ao caso.",
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
    id: "carlos-henrique-souza",
    name: "Carlos Henrique Souza",
    case: "Atendimento jurídico",
    quote: "Desde o primeiro contato senti organização e atenção. Recebi orientações sobre os documentos necessários e consegui acompanhar melhor cada fase do meu caso.",
    photo: { src: "/images/avatar-placeholder.svg", alt: "Ícone de perfil", width: 96, height: 96 },
    rating: 5,
    isMock: false,
  },
  {
    id: "juliana-ferreira-lima",
    name: "Juliana Ferreira Lima",
    case: "Atendimento jurídico",
    quote: "O atendimento foi muito bem explicado, sem informações complicadas. Todas as minhas dúvidas foram respondidas e tive mais segurança para seguir com a análise.",
    photo: { src: "/images/avatar-placeholder.svg", alt: "Ícone de perfil", width: 96, height: 96 },
    rating: 5,
    isMock: false,
  },
  {
    id: "ana-martins-oliveira",
    name: "Ana Martins Oliveira",
    case: "Atendimento jurídico",
    quote: "Eu tinha muitas dúvidas sobre como resolver minha situação e encontrei no atendimento uma explicação clara de cada etapa. O acompanhamento me ajudou a entender melhor todo o processo.",
    photo: { src: "/images/avatar-placeholder.svg", alt: "Ícone de perfil", width: 96, height: 96 },
    rating: 5,
    isMock: false,
  },
];

export const faqItems: readonly FAQItem[] = [
  {
    id: "primeiro-contato",
    question: "Como funciona o primeiro contato?",
    answer: "Você pode preencher o formulário ou entrar em contato pelo WhatsApp. Após receber sua mensagem, o escritório orientará os próximos passos conforme a necessidade apresentada.",
  },
  {
    id: "documentos",
    question: "Quais documentos devo apresentar?",
    answer: "Os documentos necessários variam conforme o caso. No primeiro contato, você receberá orientação sobre quais informações e documentos podem ajudar na análise.",
  },
  {
    id: "modalidades",
    question: "O atendimento pode ser online?",
    answer: "A modalidade de atendimento é definida de acordo com a necessidade do caso e a disponibilidade do escritório.",
  },
  {
    id: "agendamento",
    question: "Como confirmar um agendamento?",
    answer: "Envie sua mensagem pelo formulário ou WhatsApp. A disponibilidade e os detalhes do agendamento serão confirmados diretamente pelo escritório.",
  },
];

export const contactData: ContactData = {
  title: "Vamos conversar sobre o seu momento",
  description: "Preencha os dados e envie sua mensagem diretamente pelo WhatsApp para iniciar o atendimento.",
  fields: [
    { name: "nome", label: "Nome", placeholder: "Seu nome", required: true, type: "text", autoComplete: "name", minLength: 2, maxLength: 100 },
    { name: "email", label: "E-mail", placeholder: "seuemail@gmail.com", required: true, type: "email", autoComplete: "email", maxLength: 254 },
    { name: "telefone", label: "Telefone", placeholder: "(11) 99999-9999", required: true, type: "tel", autoComplete: "tel", minLength: 10, maxLength: 25 },
    { name: "area", label: "Área de atuação", placeholder: "Selecione uma área", required: true, type: "select" },
    { name: "mensagem", label: "Mensagem", placeholder: "Descreva brevemente o motivo do contato", required: true, type: "textarea", minLength: 10, maxLength: 2000 },
  ],
  areas: practiceAreas.map(({ id, title }) => ({ value: id, label: title })),
  submitLabel: "Enviar mensagem pelo WhatsApp",
  submissionMode: "whatsapp",
  previewMessage: "Abrindo o WhatsApp para enviar sua mensagem.",
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
