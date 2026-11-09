import type { Metadata } from "next";
import { Nunito_Sans, Manrope } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { Box } from "@chakra-ui/react";
import { Header } from "@/components/Header";
import { Provider } from "@/components/Provider";
import { routing } from "@/i18n/routing";

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
            <Box as="main">
              {children}
            </Box>
          </Provider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
