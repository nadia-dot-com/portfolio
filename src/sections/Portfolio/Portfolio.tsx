import {
  AspectRatio,
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  List,
  Text,
} from "@chakra-ui/react";
import githubOutline from "@iconify-icons/tabler/brand-github";
import {
  ArrowUpRight,
  MessageCircle,
  Mic,
  Package,
  PanelBottom,
  ShoppingCart,
} from "lucide-react";
import { getTranslations } from "next-intl/server";
import { NextLink } from "@/components/NextLink/NextLink";
import { Section } from "@/components/Section/Section";
import { SymbolIcon } from "@/components/SymbolIcon/SymbolIcon";
import { styles } from "./Portfolio.styles";
import { ScreenGallery } from "./ScreenGallery/ScreenGallery";

const items = [
  { key: "voice", icon: Mic },
  { key: "chat", icon: MessageCircle },
  { key: "pdp", icon: Package },
  { key: "cart", icon: ShoppingCart },
  { key: "footer", icon: PanelBottom },
];

const screens = [
  { key: "voice", src: "/listening.png" },
  { key: "chat", src: "/chat.png" },
  { key: "product", src: "/pdp.png" },
];

const tags = [
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
];

const liveUrl = "https://sales-assistant.click";
const githubUrl = "https://github.com/nadia-dot-com/sales-assistant";

export async function Portfolio() {
  const t = await getTranslations();

  return (
    <Section title={t("portfolio.title")} id="portfolio">
      <Flex {...styles.project}>
        <Flex {...styles.frame}>
          <Flex {...styles.dots} aria-hidden>
            <Box {...styles.dot} />
            <Box {...styles.dot} />
            <Box {...styles.dot} />
          </Flex>
          <AspectRatio ratio={16 / 9}>
            <iframe
              title={t("portfolio.video")}
              src="/video/as-video.mp4"
              allowFullScreen
            />
          </AspectRatio>
          <ScreenGallery
            screens={screens.map(({ key, src }) => ({
              key,
              src,
              label: t(`portfolio.salesAssistant.screens.${key}`),
            }))}
          />
        </Flex>

        <Flex {...styles.info}>
          <Heading as="h3" {...styles.projectTitle}>
            {t("portfolio.salesAssistant.title")}
          </Heading>
          <Text {...styles.text}>{t("portfolio.salesAssistant.text")}</Text>
          <Flex {...styles.itemsContainer}>
            <Text {...styles.label}>{t("portfolio.builtTitle")}</Text>
            <List.Root {...styles.list}>
              {items.map(({ key, icon: ItemIcon }) => (
                <List.Item key={key} {...styles.listItem}>
                  <Icon {...styles.itemIcon}>
                    <ItemIcon />
                  </Icon>
                  {t(`portfolio.salesAssistant.items.${key}`)}
                </List.Item>
              ))}
            </List.Root>
          </Flex>
          <List.Root {...styles.tags}>
            {tags.map((tag) => (
              <List.Item key={tag} {...styles.tag}>
                {tag}
              </List.Item>
            ))}
          </List.Root>
          <Flex {...styles.actions}>
            <Button asChild {...styles.button}>
              <NextLink href={liveUrl}>
                {t("portfolio.live")}
                <Icon>
                  <ArrowUpRight />
                </Icon>
              </NextLink>
            </Button>
            <Button asChild {...styles.secondaryButton}>
              <NextLink href={githubUrl}>
                GitHub
                <Icon>
                  <SymbolIcon icon={githubOutline} />
                </Icon>
              </NextLink>
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Section>
  );
}
