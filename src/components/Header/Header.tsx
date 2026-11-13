"use client";

import { Button, Flex, Grid, Icon, List, Text } from "@chakra-ui/react";
import { Menu } from "lucide-react";
import { useTranslations } from "next-intl";
import { useId, useState } from "react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher/LanguageSwitcher";
import { NextLink } from "@/components/NextLink/NextLink";
import { styles } from "./Header.styles";

export function Header() {
  const t = useTranslations();
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();

  const links = [
    { id: "projects", label: t("projects.title") },
    { id: "skills", label: t("tools.title") },
    { id: "contact", label: t("nav.contact") },
  ];

  return (
    <Grid as="header" {...styles.root}>
      <NextLink href="#hero">
        <Text {...styles.logo}>{t("logoTitle")}</Text>
      </NextLink>
      <Flex as="nav" {...styles.nav}>
        <List.Root {...styles.list}>
          {links.map((link) => (
            <List.Item key={link.id}>
              <NextLink href={`#${link.id}`} {...styles.link}>
                {link.label}
              </NextLink>
            </List.Item>
          ))}
        </List.Root>
      </Flex>
      <LanguageSwitcher />
      <Flex {...styles.mobileMenu}>
        <Button
          variant="plain"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={t("nav.menu")}
          aria-expanded={isOpen}
          aria-controls={menuId}
        >
          <Icon {...styles.icon}>
            <Menu />
          </Icon>
        </Button>
        <List.Root
          id={menuId}
          {...styles.mobileList}
          data-open={isOpen || undefined}
        >
          {links.map((link) => (
            <List.Item key={link.id}>
              <NextLink href={`#${link.id}`} {...styles.mobileLink}>
                {link.label}
              </NextLink>
            </List.Item>
          ))}
        </List.Root>
      </Flex>
    </Grid>
  );
}
