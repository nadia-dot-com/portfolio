"use client";

import {
  Box,
  Dialog,
  Icon,
  IconButton,
  Image,
  Portal,
  VisuallyHidden,
} from "@chakra-ui/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import NextImage from "next/image";
import { useTranslations } from "next-intl";
import { type KeyboardEvent, type TouchEvent, useRef } from "react";
import { styles } from "@/sections/Projects/ProjectDialog/ProjectDialog.styles";

const SWIPE_THRESHOLD = 50;

interface ProjectDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  active: number;
  onChange: (index: number) => void;
  video: string;
  poster: string;
  videoLabel: string;
  screens: { key: string; src: string; label: string }[];
}

export function ProjectDialog({
  open,
  onOpenChange,
  active,
  onChange,
  video,
  poster,
  videoLabel,
  screens,
}: ProjectDialogProps) {
  const t = useTranslations("projects.gallery");
  const touchStartX = useRef<number | null>(null);

  const count = screens.length + 1;
  const screen = active > 0 ? screens[active - 1] : null;

  const go = (step: number) => onChange((active + step + count) % count);

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
    <Dialog.Root
      open={open}
      onOpenChange={({ open }) => onOpenChange(open)}
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
              <Dialog.Title>{screen ? screen.label : videoLabel}</Dialog.Title>
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
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}
