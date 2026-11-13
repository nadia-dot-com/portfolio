"use client";

import { Box, Button, Flex, Icon, IconButton, Image } from "@chakra-ui/react";
import { Play } from "lucide-react";
import NextImage from "next/image";
import { useRef, useState } from "react";
import { styles } from "@/sections/Projects/ProjectMedia/ProjectMedia.styles";

interface ProjectMediaProps {
  video: string;
  videoLabel: string;
  screens: { key: string; src: string; label: string }[];
}

export function ProjectMedia({
  video,
  videoLabel,
  screens,
}: ProjectMediaProps) {
  const [active, setActive] = useState(0);
  const [started, setStarted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const items = [{ key: "video", label: videoLabel }, ...screens];
  const screen = active > 0 ? screens[active - 1] : null;

  const select = (index: number) => {
    if (index !== 0) videoRef.current?.pause();
    setActive(index);
  };

  return (
    <Flex {...styles.root}>
      <Flex {...styles.stage}>
        <Box asChild {...styles.video}>
          {/* biome-ignore lint/a11y/useMediaCaption: demo screen recording, no captions available */}
          <video
            ref={videoRef}
            src={video}
            controls={started}
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
          <Image asChild {...styles.stageImage}>
            <NextImage
              src={screen.src}
              alt={screen.label}
              fill
              sizes="(min-width: 992px) 700px, 100vw"
            />
          </Image>
        )}
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
            {index === 0 ? (
              <Icon>
                <Play />
              </Icon>
            ) : (
              <Image asChild {...styles.thumbImage}>
                <NextImage
                  src={screens[index - 1].src}
                  alt=""
                  width={176}
                  height={112}
                />
              </Image>
            )}
          </Button>
        ))}
      </Flex>
    </Flex>
  );
}
