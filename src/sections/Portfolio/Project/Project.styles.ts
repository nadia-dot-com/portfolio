import type { GlobalStyleObject } from "@chakra-ui/react";
import { accentIcon, button, list } from "@/components/shared.styles";

export const styles = {
  project: {
    flexDir: { base: "column", lg: "row" },
    alignItems: { base: "stretch", lg: "center" },
    gap: { base: 8, md: 10 },
  },
  frame: {
    background: "surface-color",
    flexDir: "column",
    gap: 3,
    flex: "1 1 0",
    minWidth: 0,
    padding: { base: 3, md: 4 },
    layerStyle: "glass",
    borderRadius: "2xl",
  },
  dots: {
    gap: 2,
    paddingX: 1,
  },
  dot: {
    boxSize: 2.5,
    borderRadius: "full",
    background: "dot-color",
  },
  info: {
    flexDir: "column",
    gap: 5,
    flex: "1 1 0",
    minWidth: 0,
  },
  label: {
    textAlign: { base: "center", lg: "left" },
    fontSize: "xs",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "text-muted-color",
  },
  projectTitle: {
    textAlign: { base: "center", lg: "left" },
    fontSize: { base: "3xl", md: "4xl" },
    fontWeight: "500",
    lineHeight: "1.1",
  },
  text: {
    textAlign: { base: "center", lg: "left" },
    textStyle: "bodyText",
    color: "text-soft-color",
  },
  list: {
    ...list,
    flexDir: "column",
    gap: 3,
  },
  itemsContainer: {
    flexDir: "column",
    gap: 4,
  },
  listItem: {
    display: "flex",
    alignItems: "center",
    gap: 3,
    textStyle: "bodyText",
  },
  itemIcon: {
    ...accentIcon,
    boxSize: 5,
    color: "accent-pink-color",
    filter: "none",
  },
  tags: {
    ...list,
    flexDir: "row",
    flexWrap: "wrap",
    justifyContent: { base: "center", lg: "flex-start" },
    gap: 2,
  },
  tag: {
    paddingX: 3,
    paddingY: 1,
    fontSize: "xs",
    layerStyle: "bordered",
    width: "fit-content",
    borderRadius: "full",
    background: "surface-color",
  },
  actions: {
    paddingTop: 2,
    flexWrap: "wrap",
    gap: 3,
    justifyContent: { base: "center", lg: "flex-start" },
  },
  button,
  secondaryButton: {
    ...button,
    paddingX: 6,
  },
} as const satisfies GlobalStyleObject;
