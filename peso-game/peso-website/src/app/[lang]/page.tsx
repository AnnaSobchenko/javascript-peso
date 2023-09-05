import { CountdownTimer } from "@/components/Home/CountdownTimer/CountdownTimer";
import { getDictionary } from "./dictionaries";
import { Wiki } from "@/components/Home/Wiki/Wiki";
import { MessageForm } from "@/components/Home/MessageForm/MessageForm";
export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(lang);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-main-background">
      <Wiki textTr={dict.main} />
      <CountdownTimer lang={lang} textTr={dict.main} />
      <MessageForm textTr={dict.main} />
    </main>
  );
}
