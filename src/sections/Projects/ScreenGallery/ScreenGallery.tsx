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
  Text,
  VisuallyHidden,
} from "@chakra-ui/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import NextImage from "next/image";
import { useTranslations } from "next-intl";
import { type KeyboardEvent, type TouchEvent, useRef, useState } from "react";
import { styles } from "./ScreenGallery.styles";

interface Screen {
  key: string;
  src: string;
  label: string;
}

interface ScreenGalleryProps {
  screens: Screen[];
}

const SWIPE_THRESHOLD = 50;

export function ScreenGallery({ screens }: ScreenGalleryProps) {
  const t = useTranslations("projects.gallery");
  const [current, setCurrent] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const go = (step: number) =>
    setCurrent((index) =>
      index === null ? index : (index + step + screens.length) % screens.length,
    );

  const handleKeyDown = (event: KeyboardEvent) => {
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

  const screen = current === null ? null : screens[current];

  return (
    <>
      <Flex {...styles.screens}>
        {screens.map(({ key, src, label }, index) => (
          <Button
            key={key}
            variant="plain"
            aria-haspopup="dialog"
            onClick={() => setCurrent(index)}
            {...styles.screen}
          >
            <Box {...styles.thumb}>
              <Image asChild {...styles.thumbImage}>
                <NextImage src={src} alt="" width={150} height={150} />
              </Image>
            </Box>
            <Text {...styles.caption}>{label}</Text>
          </Button>
        ))}
      </Flex>

      <Dialog.Root
        open={screen !== null}
        onOpenChange={({ open }) => !open && setCurrent(null)}
        size="full"
        lazyMount
        unmountOnExit
      >
        <Portal>
          <Dialog.Backdrop {...styles.backdrop} />
          <Dialog.Positioner>
            <Dialog.Content
              {...styles.content}
              onKeyDown={handleKeyDown}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {screen && (
                <>
                  <VisuallyHidden asChild>
                    <Dialog.Title>{screen.label}</Dialog.Title>
                  </VisuallyHidden>
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
                </>
              )}
              <Dialog.CloseTrigger asChild>
                <IconButton aria-label={t("close")} {...styles.closeButton}>
                  <Icon>
                    <X />
                  </Icon>
                </IconButton>
              </Dialog.CloseTrigger>
              {screens.length > 1 && (
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
    </>
  );
}
