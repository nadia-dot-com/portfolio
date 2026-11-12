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
    gap: { base: 6, md: 10 },
    maxWidth: "820px",
  },
  icon: {
    boxSize: { base: "40px", md: "56px" },
  },
} as const satisfies GlobalStyleObject;
