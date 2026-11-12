import {
  BookOpen,
  CreditCard,
  Database,
  FlaskConical,
  Heart,
  LogIn,
  MessageCircle,
  Mic,
  Package,
  PanelBottom,
  ShoppingCart,
  User,
  Workflow,
} from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Section } from "@/components/Section/Section";
import { Project, type ProjectData } from "./Project/Project";

const projects: ProjectData[] = [
  {
    id: "salesAssistant",
    video: "/salesAssistant/as-video.mp4",
    screens: [
      { key: "voice", src: "/salesAssistant/listening.png" },
      { key: "chat", src: "/salesAssistant/chat.png" },
      { key: "product", src: "/salesAssistant/pdp.png" },
    ],
    items: [
      { key: "voice", icon: Mic },
      { key: "chat", icon: MessageCircle },
      { key: "pdp", icon: Package },
      { key: "cart", icon: ShoppingCart },
      { key: "footer", icon: PanelBottom },
    ],
    tags: [
      "Next.js (App Router)",
      "React 19",
      "TypeScript",
      "Chakra UI",
      "next-intl",
      "Sanity CMS",
      "commercetools",
      "Web Speech API",
      "react-hook-form + Zod",
      "Cypress",
      "Biome",
    ],
    liveUrl: "https://sales-assistant.click",
    githubUrl: "https://github.com/nadia-dot-com/sales-assistant",
  },
  {
    id: "houseStaff",
    video: "/house-staff/house-staff.mp4",
    screens: [
      { key: "products", src: "/house-staff/products.png" },
      { key: "collection", src: "/house-staff/collection.png" },
      { key: "wishlist", src: "/house-staff/wishlist.png" },
      { key: "cart", src: "/house-staff/cart.png" },
      { key: "orders", src: "/house-staff/orders.png" },
      { key: "contact", src: "/house-staff/contact.png" },
    ],
    items: [
      { key: "wishlist", icon: Heart },
      { key: "cart", icon: ShoppingCart },
      { key: "checkout", icon: CreditCard },
      { key: "auth", icon: LogIn },
      { key: "account", icon: User },
      { key: "state", icon: Workflow },
      { key: "server", icon: Database },
      { key: "storybook", icon: BookOpen },
      { key: "tests", icon: FlaskConical },
    ],
    tags: ["React", "TanStack Query", "Storybook", "Vitest"],
  },
];

export async function Portfolio() {
  const t = await getTranslations();

  return (
    <Section title={t("portfolio.title")} id="portfolio">
      {projects.map((project) => (
        <Project key={project.id} {...project} />
      ))}
    </Section>
  );
}
