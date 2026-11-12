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
import { ArrowUpRight, type LucideIcon } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { NextLink } from "@/components/NextLink/NextLink";
import { SymbolIcon } from "@/components/SymbolIcon/SymbolIcon";
import { ScreenGallery } from "../ScreenGallery/ScreenGallery";
import { styles } from "./Project.styles";

export interface ProjectData {
  id: "salesAssistant" | "houseStaff";
  video: string;
  screens?: { key: string; src: string }[];
  items: { key: string; icon: LucideIcon }[];
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export async function Project({
  id,
  video,
  screens = [],
  items,
  tags,
  liveUrl,
  githubUrl,
}: ProjectData) {
  const t = await getTranslations();

  return (
    <Flex {...styles.project}>
      <Flex {...styles.frame}>
        <Flex {...styles.dots} aria-hidden>
          <Box {...styles.dot} />
          <Box {...styles.dot} />
          <Box {...styles.dot} />
        </Flex>
        <AspectRatio ratio={16 / 9}>
          <iframe title={t("portfolio.video")} src={video} allowFullScreen />
        </AspectRatio>
        {screens.length > 0 && (
          <ScreenGallery
            screens={screens.map(({ key, src }) => ({
              key,
              src,
              label: t(`portfolio.${id}.screens.${key}`),
            }))}
          />
        )}
      </Flex>

      <Flex {...styles.info}>
        <Heading as="h3" {...styles.projectTitle}>
          {t(`portfolio.${id}.title`)}
        </Heading>
        <Text {...styles.text}>{t(`portfolio.${id}.text`)}</Text>
        <Flex {...styles.itemsContainer}>
          <Text {...styles.label}>{t(`portfolio.${id}.featuresTitle`)}</Text>
          <List.Root {...styles.list}>
            {items.map(({ key, icon: ItemIcon }) => (
              <List.Item key={key} {...styles.listItem}>
                <Icon {...styles.itemIcon}>
                  <ItemIcon />
                </Icon>
                {t(`portfolio.${id}.items.${key}`)}
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
        {(liveUrl || githubUrl) && (
          <Flex {...styles.actions}>
            {liveUrl && (
              <Button asChild {...styles.button}>
                <NextLink href={liveUrl}>
                  {t("portfolio.live")}
                  <Icon>
                    <ArrowUpRight />
                  </Icon>
                </NextLink>
              </Button>
            )}
            {githubUrl && (
              <Button asChild {...styles.secondaryButton}>
                <NextLink href={githubUrl}>
                  GitHub
                  <Icon>
                    <SymbolIcon icon={githubOutline} />
                  </Icon>
                </NextLink>
              </Button>
            )}
          </Flex>
        )}
      </Flex>
    </Flex>
  );
}
