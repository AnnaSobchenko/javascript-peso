import "../../../globals.scss";
import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import { getDictionary } from "./dictionaries";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
  variable: "--roboto-condensed",
});

export const metadata: Metadata = {
  title: "One Pirate Peso Game",
  description:
    "The name peso was given to the 8-real silver coin introduced in 1497, minted at 83⁄8 pesos to a Castilian mark. It was minted in large quantities after the discovery of silver in Mexico.",
};

export default async function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const dict = await getDictionary(lang);
  return (
    <html lang={lang}>
      <head />
      <body className={robotoCondensed.className}>
        <Header lang={lang} textTr={dict.main} />
        {children}
        <Footer lang={lang} />
      </body>
    </html>
  );
}
