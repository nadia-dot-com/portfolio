"use client";

import { Box, Button, Flex, Icon, IconButton, Image } from "@chakra-ui/react";
import { Maximize2, Play } from "lucide-react";
import NextImage from "next/image";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import { ProjectDialog } from "@/sections/Projects/ProjectDialog/ProjectDialog";
import { styles } from "@/sections/Projects/ProjectMedia/ProjectMedia.styles";

interface ProjectMediaProps {
  video: string;
  poster: string;
  videoLabel: string;
  screens: { key: string; src: string; label: string }[];
}

export function ProjectMedia({
  video,
  poster,
  videoLabel,
  screens,
}: ProjectMediaProps) {
  const t = useTranslations("projects.gallery");
  const [active, setActive] = useState(0);
  const [started, setStarted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const items = [{ key: "video", label: videoLabel }, ...screens];
  const screen = active > 0 ? screens[active - 1] : null;

  const select = (index: number) => {
    if (index !== 0) videoRef.current?.pause();
    setActive(index);
  };

  const openDialog = () => {
    videoRef.current?.pause();
    setIsOpen(true);
  };

  return (
    <Flex {...styles.root}>
      <Flex {...styles.stage}>
        <Box asChild {...styles.video}>
          {/* biome-ignore lint/a11y/useMediaCaption: demo screen recording, no captions available */}
          <video
            ref={videoRef}
            src={video}
            poster={poster}
            controls={started}
            controlsList="nofullscreen"
            preload="metadata"
            playsInline
            hidden={screen !== null}
            aria-label={videoLabel}
            onPlay={() => setStarted(true)}
          />
        </Box>
        {!screen && !started && (
          <IconButton
            aria-label={videoLabel}
            onClick={() => videoRef.current?.play()}
            {...styles.play}
          >
            <Icon {...styles.playIcon}>
              <Play />
            </Icon>
          </IconButton>
        )}
        {screen && (
          <Button
            variant="plain"
            tabIndex={-1}
            aria-hidden
            onClick={openDialog}
            {...styles.expand}
          >
            <Image asChild {...styles.stageImage}>
              <NextImage
                src={screen.src}
                alt={screen.label}
                fill
                sizes="(min-width: 992px) 700px, 100vw"
              />
            </Image>
          </Button>
        )}
        <IconButton
          aria-label={t("expand")}
          aria-haspopup="dialog"
          onClick={openDialog}
          {...styles.expandButton}
        >
          <Icon {...styles.expandGlyph}>
            <Maximize2 />
          </Icon>
        </IconButton>
      </Flex>

      <Flex {...styles.thumbs}>
        {items.map(({ key, label }, index) => (
          <Button
            key={key}
            variant="plain"
            aria-label={label}
            aria-pressed={index === active}
            onClick={() => select(index)}
            {...styles.thumb}
          >
            <Image asChild {...styles.thumbImage}>
              <NextImage
                src={index === 0 ? poster : screens[index - 1].src}
                alt=""
                width={176}
                height={112}
                sizes="80px"
              />
            </Image>
            {index === 0 && (
              <Icon {...styles.thumbBadge}>
                <Play />
              </Icon>
            )}
          </Button>
        ))}
      </Flex>

      <ProjectDialog
        open={isOpen}
        onOpenChange={setIsOpen}
        active={active}
        onChange={setActive}
        video={video}
        poster={poster}
        videoLabel={videoLabel}
        screens={screens}
      />
    </Flex>
  );
}
