import type { GlobalStyleObject } from "@chakra-ui/react";
import { list } from "@/components/shared.styles";

export const styles = {
  content: {
    flexDir: "column",
    alignItems: "center",
    gap: { base: 8, md: 10 },
  },
  intro: {
    fontSize: { base: "lg", md: "2xl" },
    fontWeight: "600",
    textAlign: "center",
  },
  list: {
    ...list,
    flexDir: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 2,
  },
  item: {
    display: "flex",
    flexDir: "column",
    alignItems: "center",
    gap: 2,
    width: { base: "88px", md: "112px" },
    padding: 3,
    borderRadius: "xl",
    outline: "none",
    position: "relative",
    isolation: "isolate",
    _hover:{ opacity: 1 },
    _focusVisible: { opacity: 1 },
  },
  label: {
    fontSize: "xs",
    lineHeight: "1",
    textAlign: "center",
    fontWeight: 600,
    opacity: 0,
    transition: "opacity 0.2s",
    _groupHover: { opacity: 1 },
    _groupFocusVisible: { opacity: 1 },
  },
  icon: {
    boxSize: { base: "40px", md: "56px" },
  },
} as const satisfies GlobalStyleObject;
