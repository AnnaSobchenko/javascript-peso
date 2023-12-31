import { CountdownTimer } from "@/components/Home/CountdownTimer/CountdownTimer";
import { getDictionary } from "./dictionaries";
import { Wiki } from "@/components/Home/Wiki/Wiki";
import { MessageForm } from "@/components/Home/MessageForm/MessageForm";
import HomeHeroContent from "@/components/Home/Hero/Hero";

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(lang);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-main-background">
      <HomeHeroContent lang={lang} textTr={dict.main} />
      <Wiki textTr={dict.main} lang={lang} />
      <CountdownTimer lang={lang} textTr={dict.main} />
      <MessageForm textTr={dict.main} />
    </main>
  );
}
