import type { practiceAreaIds } from "@/lib/constants";
import type { Graph, Thing, WithContext } from "schema-dts";

export type { ContactInput, ContactOutput } from "@/lib/validations/contact";

/** Data passed to server/client boundaries contains no component references. */
export type IconName =
  | "scale"
  | "shield-check"
  | "search"
  | "gavel"
  | "scroll-text"
  | "landmark"
  | "messages-square"
  | "lock-keyhole"
  | "heart-handshake"
  | "phone"
  | "mail"
  | "instagram"
  | "linkedin";

export type PracticeAreaId = (typeof practiceAreaIds)[number];

export type SectionId =
  | "inicio"
  | "areas-de-atuacao"
  | "diferenciais"
  | "resultados"
  | "depoimentos"
  | "perguntas-frequentes"
  | "contato";

export interface ImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Address {
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: Extract<IconName, "instagram" | "linkedin">;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  locale: "pt_BR";
  language: "pt-BR";
  isDemo: boolean;
  mockNotice: string;
  attorney: {
    name: string;
    oab: string;
    specialty: string;
  };
  contact: {
    phone: string;
    email: string;
    address: Address;
  };
  socialLinks: readonly SocialLink[];
  ogImage: ImageAsset;
}

export interface NavigationItem {
  label: string;
  href: `#${SectionId}`;
}

export interface CallToAction {
  label: string;
  href: string;
  variant: "primary" | "secondary";
  ariaLabel?: string;
}

export interface Statistic {
  id: string;
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  decimals: number;
  /** Final value is available without animation and with reduced motion. */
  displayValue: string;
  countDurationMs: number;
  isMock: boolean;
}

export interface HeaderData {
  brand: {
    name: string;
    subtitle: string;
    href: "#inicio";
  };
  navigation: readonly NavigationItem[];
  cta: CallToAction;
  mobileMenuLabel: string;
}

export interface HeroData {
  eyebrow: string;
  headline: string;
  subheadline: string;
  portrait: ImageAsset;
  stats: readonly Statistic[];
  ctas: readonly [CallToAction, CallToAction];
  mockNotice: string;
}

export interface PracticeArea {
  id: PracticeAreaId;
  category: "Direito do Consumidor" | "Direito Criminal";
  title: string;
  description: string;
  icon: IconName;
}

export interface Differentiator {
  id: string;
  title: string;
  description: string;
  icon: IconName;
  image: ImageAsset;
  imageSide: "left" | "right";
}

export interface Testimonial {
  id: string;
  name: string;
  case: string;
  quote: string;
  photo: ImageAsset;
  rating: 1 | 2 | 3 | 4 | 5;
  isMock: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export type ContactFieldName = "nome" | "email" | "telefone" | "area" | "mensagem";

export interface ContactField {
  name: ContactFieldName;
  label: string;
  placeholder: string;
  required: boolean;
  type: "text" | "email" | "tel" | "select" | "textarea";
  autoComplete?: "name" | "email" | "tel";
  minLength?: number;
  maxLength?: number;
}

export interface ContactAreaOption {
  value: PracticeAreaId;
  label: string;
}

export interface ContactData {
  title: string;
  description: string;
  fields: readonly ContactField[];
  areas: readonly ContactAreaOption[];
  submitLabel: string;
  submissionMode: "whatsapp";
  previewMessage: string;
}

export interface FooterData {
  brandName: string;
  attorneyName: string;
  oab: string;
  address: Address;
  phone: string;
  email: string;
  socialLinks: readonly SocialLink[];
  copyright: string;
  mockNotice: string;
}

export interface SectionBaseProps {
  className?: string;
}

export interface JsonLdProps<T extends Thing> {
  id: string;
  data: WithContext<T> | Graph;
  nonce?: string;
}

export interface HeaderProps extends SectionBaseProps {
  data: HeaderData;
}

export interface HeroProps extends SectionBaseProps {
  data: HeroData;
}

export interface PracticeAreasProps extends SectionBaseProps {
  items: readonly PracticeArea[];
}

export interface WhyChooseProps extends SectionBaseProps {
  items: readonly Differentiator[];
}

export interface ResultsProps extends SectionBaseProps {
  items: readonly Statistic[];
}

export interface TestimonialsProps extends SectionBaseProps {
  items: readonly Testimonial[];
}

export interface FAQProps extends SectionBaseProps {
  items: readonly FAQItem[];
}

export interface ContactProps extends SectionBaseProps {
  data: ContactData;
}

export interface FooterProps extends SectionBaseProps {
  data: FooterData;
}
