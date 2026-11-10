import { styles } from "@/app/[locale]/page.styles";
import { Box, Button, Flex, Heading, Icon, Image, Link, List, Text } from "@chakra-ui/react";
import angular from "@iconify-icons/logos/angular-icon";
import githubOutline from "@iconify-icons/tabler/brand-github";
import linkedinOutline from "@iconify-icons/tabler/brand-linkedin";
import mail from "@iconify-icons/tabler/mail";
import mapPin from "@iconify-icons/tabler/map-pin";
import phone from "@iconify-icons/tabler/phone";
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
import { CodeXml, FlaskConical, Smartphone } from "lucide-react";
import NextImage from "next/image";
import { getTranslations } from "next-intl/server";
import { Fragment } from "react";
import { Icon as IconifyIcon } from "@iconify/react/offline";

const services = [
  { key: "frontend", icon: CodeXml },
  { key: "responsive", icon: Smartphone },
  { key: "testing", icon: FlaskConical },
];

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

const contactData = [
  { key: "phone", icon: phone, href: (value: string) => `tel:${value.replaceAll(" ", "")}` },
  { key: "email", icon: mail, href: (value: string) => `mailto:${value}` },
  { key: "location", icon: mapPin },
];

const socialMedia = [
  { key: "github", name: "GitHub", icon: githubOutline },
  { key: "linkedin", name: "LinkedIn", icon: linkedinOutline },
];

export default async function Home() {
  const t = await getTranslations();

  return (
    <>
      <Flex as="section" {...styles.heroSection}>
        <Flex {...styles.content}>
          <Heading {...styles.heroTitle}>
            {t("hero.role")}
          </Heading>
          <Text {...styles.heroText}>
            {t("hero.intro")}
          </Text>
          <Flex {...styles.actions}>
            <Button {...styles.button}>{t("hero.cta")}</Button>
            <Button {...styles.button}>{t("hero.cv")}</Button>
          </Flex>
        </Flex>
        <Flex {...styles.imageBox}>
          <Flex>
            <Image asChild {...styles.image}>
              <NextImage src="/hero.png" alt="" width={450} height={500} priority />
            </Image>
          </Flex>
        </Flex>
      </Flex>
      <Flex as="section" {...styles.section}>
        <Heading {...styles.sectionTitle}>
          {t("services.title")}
        </Heading>
        <Flex {...styles.servicesList}>
          {services.map(({ key, icon: ServiceIcon }, index) => (
            <Fragment key={key}>
              {index > 0 && <Box {...styles.serviceConnector} />}
              <Flex
                {...styles.card}
                {...styles.serviceCard}
                {...(index % 2 === 1 && styles.serviceCardRight)}
              >
                <Flex {...styles.serviceHeader}>
                  <Icon {...styles.accentIcon}>
                    <ServiceIcon />
                  </Icon>
                  <Heading as="h3" textStyle="cardTitle">
                    {t(`services.${key}.title`)}
                  </Heading>
                </Flex>
                <Text textStyle="bodyText">
                  {t(`services.${key}.text`)}
                </Text>
              </Flex>
            </Fragment>
          ))}
        </Flex>
      </Flex>
      <Flex as="section" {...styles.section}>
        <Heading {...styles.sectionTitle}>
          {t("skills.title")}
        </Heading>
        <Flex {...styles.skillContent}>
          <Text {...styles.introText}>
            {t("skills.text")}
          </Text>
          <List.Root aria-label={t("skills.title")} {...styles.skillList}>
            {skills.map(({ name, icon, invert }) => (
              <List.Item key={name}>
                <Icon
                  role="img"
                  aria-hidden={false}
                  aria-label={name}
                  {...styles.skillIcon}
                  filter={invert ? "invert(1)" : undefined}
                >
                  <IconifyIcon icon={icon} />
                </Icon>
              </List.Item>
            ))}
          </List.Root>
        </Flex>
      </Flex>
      <Flex as="section" {...styles.section}>
        <Heading {...styles.sectionTitle}>
          {t("contact.title")}
        </Heading>
        <Flex {...styles.contactBoxes}>
          <Flex {...styles.card} {...styles.contactBox}>
            <Heading as="h3" textStyle="cardTitle">
              {t("contact.contactDataTitle")}
            </Heading>
            <List.Root {...styles.contactList}>
              {contactData.map(({ key, icon, href }) => {
                const value = t(`contact.contactData.${key}`);

                return (
                  <List.Item key={key} {...styles.contactItem}>
                    <Icon {...styles.contactIcon}>
                      <IconifyIcon icon={icon} />
                    </Icon>
                    {href ? (
                      <Link href={href(value)} {...styles.link}>
                        {value}
                      </Link>
                    ) : (
                      value
                    )}
                  </List.Item>
                );
              })}
            </List.Root>
          </Flex>
          <Flex {...styles.card} {...styles.contactBox}>
            <Heading as="h3" textStyle="cardTitle">
              {t("contact.socialMediaTitle")}
            </Heading>
            <List.Root {...styles.socialList}>
              {socialMedia.map(({ key, name, icon }) => (
                <List.Item key={key}>
                  <Link
                    href={t(`contact.socialMedia.${key}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    {...styles.socialLink}
                  >
                    <Icon {...styles.socialIcon}>
                      <IconifyIcon icon={icon} />
                    </Icon>
                  </Link>
                </List.Item>
              ))}
            </List.Root>
          </Flex>
        </Flex>
      </Flex>
      <Text {...styles.copyright}>© 2026 {t("logoTitle")}</Text>
    </>
  );
}
