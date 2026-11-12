import type { GlobalStyleObject } from "@chakra-ui/react";
import { accentHover } from "@/charka/shared";
import { accentIcon, card, list } from "@/components/shared.styles";

export const styles = {
  boxes: {
    flexDir: { base: "column", md: "row" },
    width: "full",
    gap: { base: 4, md: 6 },
  },
  box: {
    ...card,
    flex: 1,
  },
  dataList: {
    ...list,
    flexDir: "column",
    gap: 3,
  },
  dataItem: {
    display: "flex",
    alignItems: "center",
    gap: 3,
    textStyle: "bodyText",
  },
  dataIcon: {
    ...accentIcon,
    boxSize: 5,
  },
  link: {
    _hover: accentHover,
  },
  socialList: {
    ...list,
    flexDir: "row",
    gap: 5,
  },
  socialLink: {
    color: "accent-blue-color",
    _hover: {
      color: "accent-pink-color",
    },
  },
  socialIcon: {
    boxSize: 7,
    filter: "drop-shadow(0 0 6px currentColor)",
  },
} as const satisfies GlobalStyleObject;
