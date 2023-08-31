import News from "@/components/News/News";
import { getDictionary } from "../dictionaries";

export default async function New({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(lang);
  return <News lang={lang} />;
}
