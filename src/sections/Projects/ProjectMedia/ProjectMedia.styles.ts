import type { GlobalStyleObject } from "@chakra-ui/react";

export const styles = {
  root: {
    flexDir: "column",
    minWidth: 0,
    background: "background-color",
  },
  stage: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    aspectRatio: { base: "16 / 9", lg: "auto" },
    flex: { base: "none", lg: 1 },
    minHeight: { lg: "340px" },
  },
  video: {
    width: "full",
    height: "full",
    objectFit: "contain",
  },
  stageImage: {
    objectFit: "contain",
  },
  play: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    boxSize: 16,
    borderRadius: "full",
    layerStyle: "bordered",
    background: "surface-color",
    color: "foreground-color",
    _hover: { background: "background-hover-color" },
  },
  playIcon: {
    boxSize: 6,
  },
  thumbs: {
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 3,
    padding: 4,
  },
  thumb: {
    width: "80px",
    height: "52px",
    minWidth: 0,
    padding: 0,
    overflow: "hidden",
    borderRadius: "lg",
    layerStyle: "bordered",
    background: "surface-color",
    color: "foreground-color",
    _pressed: {
      borderColor: "accent-blue-color",
      boxShadow: "0 0 0 1px var(--accent-blue-color)",
    },
  },
  thumbImage: {
    width: "full",
    height: "full",
    objectFit: "cover",
  },
} as const satisfies GlobalStyleObject;
