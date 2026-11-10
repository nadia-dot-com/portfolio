import { Flex, Heading, Icon, Link, List } from "@chakra-ui/react";
import githubOutline from "@iconify-icons/tabler/brand-github";
import linkedinOutline from "@iconify-icons/tabler/brand-linkedin";
import mail from "@iconify-icons/tabler/mail";
import mapPin from "@iconify-icons/tabler/map-pin";
import phone from "@iconify-icons/tabler/phone";
import { Icon as IconifyIcon } from "@iconify/react/offline";
import { getTranslations } from "next-intl/server";
import { styles } from "./Contact.styles";
import { Section } from "@/components/Section/Section";

const contactData = [
  { key: "phone", icon: phone, href: (value: string) => `tel:${value.replaceAll(" ", "")}` },
  { key: "email", icon: mail, href: (value: string) => `mailto:${value}` },
  { key: "location", icon: mapPin },
];

const socialMedia = [
  { key: "github", name: "GitHub", icon: githubOutline },
  { key: "linkedin", name: "LinkedIn", icon: linkedinOutline },
];

export async function Contact() {
  const t = await getTranslations();

  return (
    <Section title={t("contact.title")}>
      <Flex {...styles.boxes}>
        <Flex {...styles.box}>
          <Heading as="h3" textStyle="cardTitle">
            {t("contact.contactDataTitle")}
          </Heading>
          <List.Root {...styles.dataList}>
            {contactData.map(({ key, icon, href }) => {
              const value = t(`contact.contactData.${key}`);

              return (
                <List.Item key={key} {...styles.dataItem}>
                  <Icon {...styles.dataIcon}>
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
        <Flex {...styles.box}>
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
    </Section>
  );
}
