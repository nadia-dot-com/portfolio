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
      sizes: {
        content: { value: "1152px" },
      },
      fonts: {
        body: { value: "var(--text-font-family)" },
        heading: { value: "var(--heading-font-family)" },
      },
    },
    layerStyles: {
      bordered: {
        value: {
          border: "1px solid",
          borderColor: "border-color",
        },
      },
      card: {
        value: {
          border: "1px solid",
          borderColor: "border-color",
          borderRadius: "2xl",
          paddingX: { base: 5, md: 8 },
          paddingY: { base: 5, md: 7 },
          background:
            "linear-gradient(135deg, color-mix(in srgb, var(--accent-blue-color) 6%, transparent), transparent 70%)",
        },
      },
    },
    textStyles: {
      cardTitle: {
        value: {
          fontSize: { base: "xl", md: "2xl" },
          fontWeight: "500",
        },
      },
      bodyText: {
        value: {
          fontSize: "sm",
          fontWeight: "600",
          lineHeight: "1.5",
        },
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
