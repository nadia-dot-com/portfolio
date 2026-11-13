import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import NextImage from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { NextLink } from "@/components/NextLink/NextLink";
import { styles } from "./Hero.styles";

export async function Hero() {
  const t = await getTranslations();
  const locale = await getLocale();
  const cvFile = `Nadiia_Lezhanska_CV_${locale}.pdf`;

  return (
    <Flex as="section" id="hero" {...styles.root}>
      <Flex {...styles.content}>
        <Heading as="h1" {...styles.title}>
          {t("hero.role")}
        </Heading>
        <Text {...styles.text}>{t("hero.intro")}</Text>
        <Flex {...styles.actions}>
          <Button {...styles.button}>
            <NextLink href="#contact">{t("hero.cta")}</NextLink>
          </Button>
          <Button asChild {...styles.button}>
            <NextLink href={`/cv/${cvFile}`} download={cvFile}>
              {t("hero.cv")}
            </NextLink>
          </Button>
        </Flex>
      </Flex>
      <Flex {...styles.imageBox}>
        <Flex>
          <Image asChild {...styles.image}>
            <NextImage
              src="/images/hero.png"
              alt=""
              width={450}
              height={500}
              priority
            />
          </Image>
        </Flex>
      </Flex>
    </Flex>
  );
}
