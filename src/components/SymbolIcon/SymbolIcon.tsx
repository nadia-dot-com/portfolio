import type { SVGProps } from "react";

export interface IconData {
  body: string;
  width?: number;
  height?: number;
}

interface SymbolIconProps extends SVGProps<SVGSVGElement> {
  icon: IconData;
}

export function SymbolIcon({ icon, ...props }: SymbolIconProps) {
  const { body, width = 24, height = 24 } = icon;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${width} ${height}`}
      {...props}
      // biome-ignore lint/security/noDangerouslySetInnerHtml: icon markup comes from a bundled icon package, never from user input
      dangerouslySetInnerHTML={{ __html: body }}
    />
  );
}
