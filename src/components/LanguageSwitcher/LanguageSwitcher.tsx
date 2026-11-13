"use client";

import { createListCollection, Portal, Select } from "@chakra-ui/react";
import { useLocale } from "next-intl";
import ReactCountryFlag from "react-country-flag";
import { usePathname, useRouter } from "@/i18n/navigation";
import { flagStyle, positioning, styles } from "./LanguageSwitcher.styles";

const languages = createListCollection({
  items: [
    { value: "en", label: "English", countryCode: "GB" },
    { value: "pl", label: "Polski", countryCode: "PL" },
    { value: "uk", label: "Українська", countryCode: "UA" },
  ],
});

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const selectedLanguage = languages.items.find(
    (language) => language.value === locale,
  );

  return (
    <Select.Root
      collection={languages}
      value={[locale]}
      onValueChange={({ value }) =>
        router.replace(pathname, { locale: value[0], scroll: false })
      }
      positioning={positioning}
      {...styles.select}
    >
      <Select.HiddenSelect />
      <Select.Control>
        <Select.Trigger {...styles.trigger}>
          <Select.ValueText>
            <ReactCountryFlag
              countryCode={selectedLanguage?.countryCode ?? "GB"}
              svg
              alt={selectedLanguage?.label}
              aria-label={selectedLanguage?.label}
              style={flagStyle}
            />
          </Select.ValueText>
        </Select.Trigger>
        <Select.IndicatorGroup {...styles.indicatorGroup}>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content {...styles.content}>
            {languages.items.map((language) => (
              <Select.Item
                item={language}
                key={language.value}
                {...styles.item}
              >
                {language.label}
                <ReactCountryFlag
                  countryCode={language.countryCode}
                  svg
                  alt=""
                  aria-hidden="true"
                  style={flagStyle}
                />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  );
}
