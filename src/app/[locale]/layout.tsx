import type { Metadata } from "next";
import { Nunito_Sans, Manrope } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { Flex } from "@chakra-ui/react";
import { Header } from "@/components/Header/Header";
import { Provider } from "@/components/Provider/Provider";
import { routing } from "@/i18n/routing";
import { styles } from "@/app/[locale]/layout.styles";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nadiia Lezhanska Porftolio",
  description: "Junior Frontend Developer",
};

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
