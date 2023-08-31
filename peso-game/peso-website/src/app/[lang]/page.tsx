import { CountdownTimer } from "@/components/Home/CountdownTimer/CountdownTimer";
import { getDictionary } from "./dictionaries";
export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(lang);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-main-background">
      <CountdownTimer textTr={dict.main} />
    </main>
  );
}
