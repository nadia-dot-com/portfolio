import { Grid, Flex, Text, List, } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { NextLink } from "@/components/NextLink";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { styles } from "./Header.styles";

export function Header() {
    const t = useTranslations();

    const links = [
        { id: "about", label: t("nav.about") },
        { id: "portfolio", label: t("nav.portfolio") },
        { id: "contact", label: t("nav.contact") },
    ];

    return (
        <Grid as="header" {...styles.root}>
            <Text {...styles.logo}>{t("logoTitle")}</Text>
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
        </Grid>
    )
}