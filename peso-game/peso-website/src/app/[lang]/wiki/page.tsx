import { WikiComponent } from "@/components/WikiPage/WikiComponent";
import { getDictionary } from "../dictionaries";

export default async function Wiki({
  params: { lang, id },
}: {
  params: { lang: string; id: string };
}) {
  const dict = await getDictionary(lang);
  return <WikiComponent lang={lang} id={id} />;
}
