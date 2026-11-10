import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import NextImage from "next/image";
import { getTranslations } from "next-intl/server";
import { styles } from "./Hero.styles";

export async function Hero() {
  const t = await getTranslations();

  return (
    <Flex as="section" {...styles.root}>
      <Flex {...styles.content}>
        <Heading {...styles.title}>
          {t("hero.role")}
        </Heading>
        <Text {...styles.text}>
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
  );
}
