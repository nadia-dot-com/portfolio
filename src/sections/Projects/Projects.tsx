import { Flex } from "@chakra-ui/react";
import {
  CreditCard,
  Heart,
  Languages,
  LogIn,
  MessageCircle,
  Mic,
  Package,
  ShoppingCart,
  Workflow,
} from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Section } from "@/components/Section/Section";
import { Project, type ProjectData } from "./Project/Project";
import { styles } from "./Projects.styles";

const projects: ProjectData[] = [
  {
    id: "salesAssistant",
    video: "/salesAssistant/as-video.mp4",
    screens: [
      { key: "voice", src: "/salesAssistant/listening.png" },
      { key: "chat", src: "/salesAssistant/chat.png" },
      { key: "product", src: "/salesAssistant/pdp.png" },
      { key: "popover", src: "/salesAssistant/popover.png" },
      { key: "cart", src: "/salesAssistant/cart.png" },
      { key: "checkout", src: "/salesAssistant/checkout.png" },
    ],
    items: [
      { key: "voice", icon: Mic },
      { key: "chat", icon: MessageCircle },
      { key: "pdp", icon: Package },
      { key: "cart", icon: ShoppingCart },
      { key: "i18n", icon: Languages },
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
      { key: "checkout", icon: CreditCard },
      { key: "auth", icon: LogIn },
      { key: "state", icon: Workflow },
    ],
    tags: [
      "Frontend",
      "React",
      "React Router DOM",
      "React Testing Library",
      "SCSS",
      "Storybook",
      "TanStack Query",
      "TypeScript",
      "Vite",
      "Vitest",
    ],
    liveUrl: "https://house-staff.onrender.com",
    githubUrl: "https://github.com/nadia-dot-com/house-staff",
  },
];

export async function Projects() {
  const t = await getTranslations();

  return (
    <Section title={t("projects.title")} id="projects">
      <Flex {...styles.list}>
        {projects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </Flex>
    </Section>
  );
}
