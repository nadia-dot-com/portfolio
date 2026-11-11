import type { GlobalStyleObject } from "@chakra-ui/react";
import type { CSSProperties } from "react";

export const flagStyle: CSSProperties = {
  width: "1.5em",
  height: "1.5em",
  borderRadius: "50%",
  objectFit: "cover",
};

export const positioning = { placement: "bottom-end" } as const;

export const styles = {
  select: {
    width: "4.5em",
    justifySelf: "flex-end"
  },
  trigger: {
    paddingX: 3,
    border: "1px solid",
    borderColor: "border-color",
    rounded: "full",
  },
  indicatorGroup: {
    paddingRight: 2,
  },
  content: {
    width: "140px",
    padding: 1,
    border: "1px solid",
    borderColor: "border-color",
    rounded: "xl",
    backgroundColor: "background-color/90",
  },
  item: {
    justifyContent: "space-between",
    paddingX: 2,
    paddingY: 1,
    gap: 2,
    rounded: "lg",
    transition: "background-color 0.25s ease",
    _highlighted: {
      backgroundColor: "border-color",
    },
    _checked: {
      backgroundColor: "border-color",
    },
  },
} as const satisfies GlobalStyleObject;
