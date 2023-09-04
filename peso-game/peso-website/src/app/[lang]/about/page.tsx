import { AboutComponent } from "@/components/About/About";

export default async function About({
  params: { lang },
}: {
  params: { lang: string };
}) {
  return <AboutComponent lang={lang} />;
}
