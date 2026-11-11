import type { Metadata } from "next";
import { Nunito_Sans, Manrope } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { Flex } from "@chakra-ui/react";
import { Header } from "@/components/Header/Header";
import { Provider } from "@/components/Provider/Provider";
import { routing } from "@/i18n/routing";
import { styles } from "@/app/[locale]/layout.styles";
import { getTranslations } from "next-intl/server";

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
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3001"),
    title: t("meta.title"),
    description: t("meta.description"),

    openGraph: {
      title: t("meta.title"),
      description: t("meta.description"),
      siteName: t("logoTitle"),
      images: [
        {
          url: "/og-image.png"
        }
      ],
      type: "website"
    },

    twitter: {
      card: "summary_large_image",
      title: t("meta.title"),
      description: t("meta.description"),
      images: ["/og-image.png"]
    }
  }
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default function RootLayout({ children }: LayoutProps<"/[locale]">) {
  return (
    <html lang="en" className={`${nunitoSans.variable} ${manrope.variable}`}>
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
