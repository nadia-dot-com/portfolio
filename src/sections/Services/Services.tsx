import { Box, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { CodeXml, FlaskConical, Smartphone } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Fragment } from "react";
import { Section } from "@/components/Section/Section";
import { styles } from "./Services.styles";

const services = [
  { key: "frontend", icon: CodeXml },
  { key: "responsive", icon: Smartphone },
  { key: "testing", icon: FlaskConical },
];

export async function Services() {
  const t = await getTranslations();

  return (
    <Section title={t("services.title")}>
      <Flex {...styles.list}>
        {services.map(({ key, icon: ServiceIcon }, index) => (
          <Fragment key={key}>
            {index > 0 && <Box {...styles.connector} />}
            <Flex
              {...styles.card}
              {...(index % 2 === 1 && styles.cardRight)}
            >
              <Flex {...styles.header}>
                <Icon {...styles.icon}>
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
    </Section>
  );
}
