import type { GlobalStyleObject } from "@chakra-ui/react";
import { list } from "@/components/shared.styles";

const hoverStyle = {
  backgroundColor: "background-hover-color",
  borderColor: "accent-blue-color",
} as const;

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
    gap: { base: 2, md: 4 },
  },
  item: {
    display: "flex",
    flexDir: "column",
    alignItems: "center",
    gap: 2,
    width: { base: "88px", md: "112px" },
    padding: 3,
    border: "1px solid transparent",
    borderRadius: "xl",
    outline: "none",
    transition: "background-color 0.2s, border-color 0.2s",
    _hover: hoverStyle,
    _focusVisible: hoverStyle,
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
