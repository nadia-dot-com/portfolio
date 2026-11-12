import { Flex, Icon, List, Text } from "@chakra-ui/react";
import angular from "@iconify-icons/logos/angular-icon";
import bitbucket from "@iconify-icons/logos/bitbucket";
import css from "@iconify-icons/logos/css-3";
import cypress from "@iconify-icons/logos/cypress-icon";
import figma from "@iconify-icons/logos/figma";
import framer from "@iconify-icons/logos/framer";
import git from "@iconify-icons/logos/git-icon";
import github from "@iconify-icons/logos/github-icon";
import html from "@iconify-icons/logos/html-5";
import javascript from "@iconify-icons/logos/javascript";
import jotai from "@iconify-icons/logos/jotai";
import nextjs from "@iconify-icons/logos/nextjs-icon";
import prettier from "@iconify-icons/logos/prettier";
import react from "@iconify-icons/logos/react";
import reactQuery from "@iconify-icons/logos/react-query";
import redux from "@iconify-icons/logos/redux";
import sanity from "@iconify-icons/logos/sanity";
import sass from "@iconify-icons/logos/sass";
import storybook from "@iconify-icons/logos/storybook-icon";
import tailwind from "@iconify-icons/logos/tailwindcss-icon";
import testingLibrary from "@iconify-icons/logos/testing-library";
import typescript from "@iconify-icons/logos/typescript-icon";
import vitest from "@iconify-icons/logos/vitest";
import { getTranslations } from "next-intl/server";
import { Section } from "@/components/Section/Section";
import { SymbolIcon } from "@/components/SymbolIcon/SymbolIcon";
import { styles } from "./Skills.styles";

const skills = [
  { name: "TypeScript", icon: typescript },
  { name: "JavaScript", icon: javascript },
  { name: "HTML", icon: html },
  { name: "CSS / SCSS", icon: css },
  { name: "Sass", icon: sass },
  { name: "Tailwind", icon: tailwind },
  { name: "React.js", icon: react },
  { name: "Next.js", icon: nextjs },
  { name: "Angular", icon: angular },
  { name: "Redux Toolkit", icon: redux },
  { name: "Jotai", icon: jotai, invert: true },
  { name: "TanStack Query", icon: reactQuery },
  { name: "Framer Motion", icon: framer, invert: true },
  { name: "Figma", icon: figma },
  { name: "Sanity (CMS)", icon: sanity },
  { name: "Cypress (e2e)", icon: cypress },
  { name: "Vitest", icon: vitest },
  { name: "React Testing Library", icon: testingLibrary },
  { name: "Storybook", icon: storybook },
  { name: "Git", icon: git },
  { name: "GitHub", icon: github, invert: true },
  { name: "Bitbucket", icon: bitbucket },
  { name: "Prettier", icon: prettier },
];

export async function Skills() {
  const t = await getTranslations();

  return (
    <Section title={t("skills.title")} id="skills">
      <Flex {...styles.content}>
        <Text {...styles.intro}>{t("skills.text")}</Text>
        <List.Root aria-label={t("skills.title")} {...styles.list}>
          {skills.map(({ name, icon, invert }) => (
            <List.Item key={name}>
              <Icon
                role="img"
                aria-hidden={false}
                aria-label={name}
                {...styles.icon}
                filter={invert ? "invert(1)" : undefined}
              >
                <SymbolIcon icon={icon} />
              </Icon>
            </List.Item>
          ))}
        </List.Root>
      </Flex>
    </Section>
  );
}
