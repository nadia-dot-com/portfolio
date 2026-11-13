import { Text } from "@chakra-ui/react";
import { getTranslations } from "next-intl/server";
import { styles } from "@/app/[locale]/page.styles";
import { Contact } from "@/sections/Contact/Contact";
import { Hero } from "@/sections/Hero/Hero";
import { Projects } from "@/sections/Projects/Projects";
import { Skills } from "@/sections/Skills/Skills";

export default async function Home() {
  const t = await getTranslations();

  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Text {...styles.copyright}>© 2026 {t("logoTitle")}</Text>
    </>
  );
}
