import {
  Gavel,
  HeartHandshake,
  Camera,
  BriefcaseBusiness,
  Landmark,
  LockKeyhole,
  Mail,
  MessagesSquare,
  Phone,
  Scale,
  ScrollText,
  Search,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

import type { IconName } from "@/types";

/** Static named imports; the serializable data layer only stores IconName. */
export const iconMap = {
  scale: Scale,
  "shield-check": ShieldCheck,
  search: Search,
  gavel: Gavel,
  "scroll-text": ScrollText,
  landmark: Landmark,
  "messages-square": MessagesSquare,
  "lock-keyhole": LockKeyhole,
  "heart-handshake": HeartHandshake,
  phone: Phone,
  mail: Mail,
  // Lucide's current release uses generic symbols instead of brand logos.
  instagram: Camera,
  linkedin: BriefcaseBusiness,
} satisfies Record<IconName, LucideIcon>;
