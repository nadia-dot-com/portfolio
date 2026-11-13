import type { GlobalStyleObject } from "@chakra-ui/react";
import { button, gradientText, sectionBase } from "@/components/shared.styles";

export const styles = {
  root: {
    height: "92dvh",
    ...sectionBase,
    justifyContent: "space-between",
    clipPath: "inset(0 -100vh 0 -100vw)",
  },
  imageBox: {
    position: "relative",
    alignSelf: "flex-end",
    right: 0,
    bottom: 0,
    alignItems: "flex-end",
    isolation: "isolate",
    _before: {
      content: '""',
      position: "absolute",
      zIndex: -1,
      pointerEvents: "none",
      width: "600px",
      height: "600px",
      background:
        "radial-gradient(circle, color-mix(in srgb, var(--accent-blue-color) 15%, transparent) 0%, transparent 65%)",
    },
    _after: {
      content: '""',
      position: "absolute",
      zIndex: -1,
      pointerEvents: "none",
      width: "600px",
      height: "600px",
      right: "20%",
      bottom: "-200px",
      background:
        "radial-gradient(circle, color-mix(in srgb, var(--accent-pink-color) 15%, transparent) 0%, transparent 70%)",
    },
  },
  image: {
    width: "500px",
    height: "auto",
  },
  content: {
    flexDir: "column",
    alignSelf: { base: "center", sm: "flex-start" },
    alignItems: { base: "center", sm: "flex-start" },
    textAlign: { base: "center", sm: "left" },
    justifyContent: "flex-start",
    gap: { base: 6, md: 8 },
    maxWidth: "580px",
    paddingY: { base: 10, md: 16 },
    overflow: "hidden",
    position: "relative",
    zIndex: 1,
  },
  title: {
    ...gradientText,
    fontSize: { base: "4xl", md: "5xl" },
  },
  text: {
    fontSize: { base: "md", md: "xl" },
    lineHeight: "1.5",
    fontWeight: 600,
  },
  actions: {
    flexWrap: "wrap",
    gap: 6,
  },
  button,
} as const satisfies GlobalStyleObject;
