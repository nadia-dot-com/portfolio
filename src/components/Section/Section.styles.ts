import type { GlobalStyleObject } from "@chakra-ui/react";
import { gradientText, sectionBase } from "../shared.styles";

export const styles = {
  section: {
    ...sectionBase,
    paddingY: { base: 12, md: 20 },
    gap: { base: 10, md: 20 },
  },
  title: {
    ...gradientText,
    width: "fit-content",
    fontSize: { base: "3xl", md: "4xl" },
    alignSelf: { base: "center", sm: "flex-start" },
    textAlign: { base: "center", sm: "left" },
  },
} as const satisfies GlobalStyleObject;
