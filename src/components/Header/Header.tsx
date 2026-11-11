"use client"

import { Flex, Grid, Text, List, Button, Icon, } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { NextLink } from "@/components/NextLink/NextLink";
import { LanguageSwitcher } from "@/components/LanguageSwitcher/LanguageSwitcher";
import { styles } from "./Header.styles";
import { Menu } from "lucide-react";
import { useState } from "react";

export function Header() {
    const t = useTranslations();
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { id: "services", label: t("nav.services") },
        { id: "portfolio", label: t("nav.portfolio") },
        { id: "skills", label: t("nav.skillsAndTools") },
        { id: "contact", label: t("nav.contact") },
    ];

    return (
        <Grid as="header" {...styles.root}>
          < NextLink href="#hero"><Text {...styles.logo}>{t("logoTitle")}</Text></NextLink>
            <Flex as="nav" {...styles.nav}>
                <List.Root {...styles.list}>
                    {links.map(link => (
                        <List.Item key={link.id}>
                            <NextLink href={`#${link.id}`} {...styles.link}>{link.label}</NextLink>
                        </List.Item>
                    )
                    )}
                </List.Root>
            </Flex>
            <LanguageSwitcher />
            <Flex {...styles.mobileMenu}>
                <Button onClick={() => setIsOpen((prev) => !prev)} aria-expanded={isOpen}>
                    <Icon {...styles.icon}>
                        <Menu />
                    </Icon>
                </Button>
                <List.Root {...styles.mobileList} data-open={isOpen || undefined}>
                    {links.map(link => (
                        <List.Item key={link.id}>
                            <NextLink href={`#${link.id}`} {...styles.mobileLink}>{link.label}</NextLink>
                        </List.Item>
                    )
                    )}
                </List.Root>
            </Flex>
        </Grid>
    )
}