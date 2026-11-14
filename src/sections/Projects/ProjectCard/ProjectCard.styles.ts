import type { GlobalStyleObject } from "@chakra-ui/react";
import { accentIcon, button, list } from "@/components/shared.styles";

export const styles = {
  card: {
    display: "grid",
    gridTemplateColumns: { base: "minmax(0, 1fr)", lg: "minmax(0, 1fr) 400px" },
    overflow: "hidden",
    layerStyle: "bordered",
    borderRadius: "2xl",
    background: "surface-color",
  },
  info: {
    flexDir: "column",
    gap: 4,
    padding: { base: 5, md: 8 },
  },
  title: {
    fontSize: { base: "2xl", md: "3xl" },
    fontWeight: "500",
    lineHeight: "1.1",
  },
  text: {
    textStyle: "bodyText",
    color: "text-soft-color",
  },
  list: {
    ...list,
    flexDir: "column",
    gap: 3,
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
    flexWrap: "wrap",
    gap: 3,
    paddingTop: 2,
  },
  link: {
    alignSelf: "flex-start",
    alignItems: "center",
    gap: 1,
    textStyle: "bodyText",
    color: "text-soft-color",
    _hover: { color: "foreground-color", textDecoration: "none" },
  },
  button,
  secondaryButton: {
    ...button,
    paddingX: 6,
  },
} as const satisfies GlobalStyleObject;
