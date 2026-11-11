import { Text } from "@chakra-ui/react";
import { getTranslations } from "next-intl/server";
import { styles } from "@/app/[locale]/page.styles";
import { Contact } from "@/sections/Contact/Contact";
import { Hero } from "@/sections/Hero/Hero";
import { Portfolio } from "@/sections/Portfolio/Portfolio";
import { Services } from "@/sections/Services/Services";
import { Skills } from "@/sections/Skills/Skills";

export default async function Home() {
  const t = await getTranslations();

  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <Skills />
      <Contact />
      <Text {...styles.copyright}>© 2026 {t("logoTitle")}</Text>
    </>
  );
}
