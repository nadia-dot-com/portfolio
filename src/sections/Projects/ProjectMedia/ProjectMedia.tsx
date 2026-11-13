"use client";

import {
  Box,
  Button,
  Dialog,
  Flex,
  Icon,
  IconButton,
  Image,
  Portal,
  VisuallyHidden,
} from "@chakra-ui/react";
import { ChevronLeft, ChevronRight, Maximize2, Play, X } from "lucide-react";
import NextImage from "next/image";
import { useTranslations } from "next-intl";
import { type KeyboardEvent, type TouchEvent, useRef, useState } from "react";
import { styles } from "@/sections/Projects/ProjectMedia/ProjectMedia.styles";

const SWIPE_THRESHOLD = 50;

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
  const touchStartX = useRef<number | null>(null);

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

  const go = (step: number) =>
    setActive((index) => (index + step + items.length) % items.length);

  const handleKeyDown = (event: KeyboardEvent) => {
    if ((event.target as HTMLElement).tagName === "VIDEO") return;
    if (event.key === "ArrowLeft") go(-1);
    if (event.key === "ArrowRight") go(1);
  };

  const handleTouchStart = (event: TouchEvent) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event: TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(deltaX) > SWIPE_THRESHOLD) go(deltaX > 0 ? -1 : 1);
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

      <Dialog.Root
        open={isOpen}
        onOpenChange={({ open }) => setIsOpen(open)}
        size="full"
        lazyMount
        unmountOnExit
      >
        <Portal>
          <Dialog.Backdrop {...styles.backdrop} />
          <Dialog.Positioner>
            <Dialog.Content
              {...styles.dialog}
              onKeyDown={handleKeyDown}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <VisuallyHidden asChild>
                <Dialog.Title>{items[active].label}</Dialog.Title>
              </VisuallyHidden>
              {screen ? (
                <Image asChild {...styles.fullImage}>
                  <NextImage
                    src={screen.src}
                    alt={screen.label}
                    width={1600}
                    height={1000}
                    sizes="100vw"
                    draggable={false}
                  />
                </Image>
              ) : (
                <Box asChild {...styles.fullVideo}>
                  {/* biome-ignore lint/a11y/useMediaCaption: demo screen recording, no captions available */}
                  <video
                    src={video}
                    poster={poster}
                    controls
                    autoPlay
                    playsInline
                    aria-label={videoLabel}
                  />
                </Box>
              )}
              <Dialog.CloseTrigger asChild>
                <IconButton aria-label={t("close")} {...styles.closeButton}>
                  <Icon>
                    <X />
                  </Icon>
                </IconButton>
              </Dialog.CloseTrigger>
              {items.length > 1 && (
                <>
                  <IconButton
                    aria-label={t("previous")}
                    onClick={() => go(-1)}
                    {...styles.arrowButton}
                    {...styles.arrowLeft}
                  >
                    <Icon>
                      <ChevronLeft />
                    </Icon>
                  </IconButton>
                  <IconButton
                    aria-label={t("next")}
                    onClick={() => go(1)}
                    {...styles.arrowButton}
                    {...styles.arrowRight}
                  >
                    <Icon>
                      <ChevronRight />
                    </Icon>
                  </IconButton>
                </>
              )}
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </Flex>
  );
}
