import Header from "@/components/Header/Header";
import "./globals.scss";
import { languages } from "./i18n/settings";
import { Roboto_Condensed } from "next/font/google";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
  variable: "--roboto-condensed",
});

export const metadata = {
  title: "One Pirate Peso Game",
  description:
    "The name peso was given to the 8-real silver coin introduced in 1497, minted at 83⁄8 pesos to a Castilian mark. It was minted in large quantities after the discovery of silver in Mexico.",
};
export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: { lng: string };
}) {
  return (
    <html lang={lng} dir="ltr">
      <body className={robotoCondensed.className}>
        {/* <Header lng={lng} /> */}
        {children}
      </body>
    </html>
  );
}
