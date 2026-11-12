import type { GlobalStyleObject } from "@chakra-ui/react";

export const styles = {
  list: {
    flexDir: "column",
    gap: { base: 16, md: "100px" },
  },
} as const satisfies GlobalStyleObject;
