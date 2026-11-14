import type { IconData } from "@/components/SymbolIcon/SymbolIcon";

export const withLightText = (icon: IconData) => ({
  ...icon,
  body: icon.body.replace(
    "<path d=",
    '<path fill="var(--foreground-color)" d=',
  ),
});
