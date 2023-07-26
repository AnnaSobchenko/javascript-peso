import { useTranslation } from "@/app/i18n";
// import ButtonMain from "@/components/UI/ButtonMain/ButtonMain";
import Header from "@/components/header/Header";
import HomeHeroContent from "../../components/hero/Hero";

export default async function Main({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t } = await useTranslation(lng, "main");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header lng={lng} setActivePriv={false} setActiveLogIn={false} />

      {/* <p>{t("example")}</p> */}
      {/* <ButtonMain text={t("mainTitle")} /> */}
      <HomeHeroContent lng={lng}/>
    </main>
  );
}
