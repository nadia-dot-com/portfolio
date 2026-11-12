export const gradientText = {
  fontWeight: "600",
  lineHeight: "1.1",
  textTransform: "uppercase",
  bgGradient: "to-r",
  gradientFrom: "accent-pink-color",
  gradientTo: "accent-blue-color",
  bgClip: "text",
  color: "transparent",
} as const;

export const accentIcon = {
  boxSize: 6,
  color: "accent-blue-color",
  filter: "drop-shadow(0 0 6px var(--accent-blue-color))",
} as const;

export const list = {
  display: "flex",
  listStyle: "none",
} as const;

export const sectionBase = {
  flexDir: "column",
  width: "full",
  borderBottom: "1px solid",
  borderColor: "border-color",
} as const;

export const button = {
  paddingX: 5,
  borderRadius: "xl",
  fontSize: "sm",
  fontWeight: "600",
  textTransform: "uppercase",
  color: "foreground-color",
  bgGradient: "to-r",
  gradientFrom: "accent-pink-color",
  gradientTo: "accent-blue-color",
  backgroundOrigin: "border-box",
} as const;

export const card = {
  layerStyle: "card",
  flexDir: "column",
  gap: 4,
} as const;
