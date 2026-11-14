import type { Metadata } from "next";
import { Manrope, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { Flex } from "@chakra-ui/react";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getTranslations } from "next-intl/server";
import { styles } from "@/app/[locale]/layout.styles";
import { Header } from "@/components/Header/Header";
import { Provider } from "@/components/Provider/Provider";
import { BETTER_AUTH_URL } from "@/config";
import { routing } from "@/i18n/routing";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();

  return {
    metadataBase: BETTER_AUTH_URL,
    title: t("meta.title"),
    description: t("meta.description"),

    openGraph: {
      title: t("meta.title"),
      description: t("meta.description"),
      siteName: t("logoTitle"),
      images: [
        {
          url: "/images/og-image.png",
        },
      ],
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: t("meta.title"),
      description: t("meta.description"),
      images: ["/images/og-image.png"],
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
}: LayoutProps<"/[locale]">) {
  const locale = await getLocale();

  return (
    <html
      lang={locale}
      className={`${nunitoSans.variable} ${manrope.variable}`}
    >
      <body>
        <NextIntlClientProvider>
          <Provider>
            <Header />
            <Flex as="main" {...styles.main}>
              {children}
            </Flex>
          </Provider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
