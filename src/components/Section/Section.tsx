import { Flex, Heading } from "@chakra-ui/react";
import type { ReactNode } from "react";
import { styles } from "./Section.styles";

interface SectionProps {
  title: string;
  children: ReactNode;
}

export function Section({ title, children }: SectionProps) {
  return (
    <Flex as="section" {...styles.section}>
      <Heading {...styles.title}>{title}</Heading>
      {children}
    </Flex>
  );
}
