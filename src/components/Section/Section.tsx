import { Flex, Heading } from "@chakra-ui/react";
import type { ReactNode } from "react";
import { styles } from "./Section.styles";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export function Section({ id, title, children }: SectionProps) {
  return (
    <Flex as="section" id={id} {...styles.section}>
      <Heading {...styles.title}>{title}</Heading>
      {children}
    </Flex>
  );
}
