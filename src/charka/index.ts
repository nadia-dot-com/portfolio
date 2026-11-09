import { createSystem, defaultConfig } from "@chakra-ui/react";

export const system = createSystem(defaultConfig, {
  theme: {
    breakpoints: {
      xs: "384px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1152px",
      xxl: "1440px",
    },
    tokens: {
      fonts: {
        body: { value: "var(--text-font-family)" },
        heading: { value: "var(--heading-font-family)" },
      },
    },
    semanticTokens: {
      colors: {
        "background-color": { value: "var(--background-color)" },
        "foreground-color": { value: "var(--background-color)" },
        "accent-pink-color": { value: "var(--accent-pink-color)" },
        "accent-blue-color": { value: "var(--accent-blue-color)" },
        "border-color": { value: "var(--border-color)" },
        "header-background-color": { value: "var(--header-background-color)" },
      },
    },
  },
});
