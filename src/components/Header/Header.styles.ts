import type { GlobalStyleObject } from "@chakra-ui/react";
import { accentHover, gutterX } from "@/charka/shared";

const link = {
  fontSize: "xs",
  textTransform: "uppercase",
  _hover: accentHover,
} as const;

export const styles = {
  root: {
    position: "sticky",
    top: 0,
    zIndex: "modal",
    gridTemplateColumns: { base: "auto 1fr auto", md: "1fr auto 1fr" },
    alignItems: "center",
    width: "100%",
    maxWidth: "content",
    paddingY: "4",
    layerStyle: "glass",
    borderRadius: "2xl",
    paddingX: gutterX,
  },
  logo: {
    fontSize: "md",
    letterSpacing: "0.04em",
    textTransform: "uppercase",
    fontWeight: "600",
  },
  nav: {
    display: { base: "none", md: "flex" },
    alignItems: "center",
  },
  list: {
    display: "flex",
    flexDir: "row",
    alignItems: "center",
    gap: 6,
    listStyle: "none",
    fontWeight: "600",
  },
  link,
  icon: {
    height: "30px",
    width: "30px",
  },
  mobileMenu: {
    display: { base: "flex", md: "none" },
  },
  mobileList: {
    position: "absolute",
    top: "89%",
    right: 0,
    zIndex: "modal",
    display: "flex",
    flexDir: "column",
    alignItems: "flex-start",
    gap: 2,
    listStyle: "none",
    fontWeight: "600",
    width: "140px",
    padding: 1,
    layerStyle: "bordered",
    rounded: "xl",
    borderColor: "border-color",
    backgroundColor: "background-color/90",
    opacity: 0,
    visibility: "hidden",
    pointerEvents: "none",
    transform: "translateY(-8px)",
    transition: "opacity 0.25s ease, transform 0.25s ease, visibility 0.25s",
    _open: {
      opacity: 1,
      visibility: "visible",
      pointerEvents: "auto",
      transform: "translateY(0)",
    },
    _motionReduce: {
      transition: "none",
    },
  },
  mobileLink: {
    ...link,
    paddingX: 2,
  },
} as const satisfies GlobalStyleObject;
