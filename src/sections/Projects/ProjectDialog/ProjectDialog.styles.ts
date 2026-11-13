import type { GlobalStyleObject } from "@chakra-ui/react";

const iconButton = {
  layerStyle: "bordered",
  borderRadius: "full",
  boxSize: 12,
  color: "foreground-color",
  background: "background-color",
  _hover: { background: "background-hover-color" },
} as const;

export const styles = {
  backdrop: {
    background: "background-color/90",
  },
  dialog: {
    alignItems: "center",
    justifyContent: "center",
    width: "100vw",
    maxWidth: "100vw",
    height: "100dvh",
    margin: 0,
    background: "transparent",
    boxShadow: "none",
    touchAction: "pan-y",
  },
  fullImage: {
    width: "auto",
    height: "auto",
    maxWidth: "92vw",
    maxHeight: "82dvh",
    objectFit: "contain",
    borderRadius: "xl",
    userSelect: "none",
  },
  fullVideo: {
    width: "92vw",
    maxWidth: "calc(82dvh * 16 / 9)",
    aspectRatio: "16 / 9",
    borderRadius: "xl",
    background: "background-color",
  },
  closeButton: {
    ...iconButton,
    position: "absolute",
    top: 4,
    right: 4,
  },
  arrowButton: {
    ...iconButton,
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
  },
  arrowLeft: { left: { base: 2, md: 6 } },
  arrowRight: { right: { base: 2, md: 6 } },
} as const satisfies GlobalStyleObject;
