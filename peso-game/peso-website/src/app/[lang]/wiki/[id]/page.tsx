import { ShipCard } from "@/components/WikiPage/ShipCard";
import { getDictionary } from "../../dictionaries";

export default async function New({
  params: { lang, id },
}: {
  params: { lang: string; id: string };
}) {
  const dict = await getDictionary(lang);
  return <ShipCard lang={lang} id={id} textTr={dict.main} />;
}
