import type { GlobalStyleObject } from "@chakra-ui/react";
import { accentIcon, card } from "@/components/shared.styles";

export const styles = {
  list: {
    flexDir: "column",
    alignItems: { base: "stretch", md: "flex-start" },
  },
  card: {
    ...card,
    width: { base: "100%", md: "64%" },
  },
  cardRight: {
    alignSelf: { base: "stretch", md: "flex-end" },
  },
  header: {
    alignItems: "center",
    gap: 4,
  },
  icon: accentIcon,
  connector: {
    width: "1px",
    height: { base: 8, md: "60px" },
    marginLeft: { base: "50%", md: "calc(36% + 30px)" },
    background: "border-color",
  },
} as const satisfies GlobalStyleObject;
