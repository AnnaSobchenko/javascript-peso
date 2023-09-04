import { WikiComponent } from "@/components/WikiPage/WikiComponent";
import { getDictionary } from "../dictionaries";

export default async function New({
  params: { lang, id },
}: {
  params: { lang: string; id: string };
}) {
  return <WikiComponent lang={lang} id={id} />;
}
