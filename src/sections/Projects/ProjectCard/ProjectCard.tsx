import { Button, Flex, Heading, Icon, List, Text } from "@chakra-ui/react";
import githubOutline from "@iconify-icons/tabler/brand-github";
import { ArrowUpRight, type LucideIcon } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { NextLink } from "@/components/NextLink/NextLink";
import { SymbolIcon } from "@/components/SymbolIcon/SymbolIcon";
import { ProjectMedia } from "../ProjectMedia/ProjectMedia";
import { styles } from "./ProjectCard.styles";

export interface ProjectData {
  id: "salesAssistant" | "houseStaff";
  video: string;
  poster: string;
  screens?: { key: string; src: string }[];
  items: { key: string; icon: LucideIcon }[];
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export async function ProjectCard({
  id,
  video,
  poster,
  screens = [],
  items,
  tags,
  liveUrl,
  githubUrl,
}: ProjectData) {
  const t = await getTranslations();

  return (
    <Flex as="article" {...styles.card}>
      <ProjectMedia
        video={video}
        poster={poster}
        videoLabel={t("projects.video")}
        screens={screens.map(({ key, src }) => ({
          key,
          src,
          label: t(`projects.${id}.screens.${key}`),
        }))}
      />

      <Flex {...styles.info}>
        <Heading as="h3" {...styles.title}>
          {t(`projects.${id}.title`)}
        </Heading>
        <Text {...styles.text}>{t(`projects.${id}.text`)}</Text>
        <List.Root {...styles.list}>
          {items.map(({ key, icon: ItemIcon }) => (
            <List.Item key={key} {...styles.listItem}>
              <Icon {...styles.itemIcon}>
                <ItemIcon />
              </Icon>
              {t(`projects.${id}.items.${key}`)}
            </List.Item>
          ))}
        </List.Root>
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
                  {t("projects.live")}
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
