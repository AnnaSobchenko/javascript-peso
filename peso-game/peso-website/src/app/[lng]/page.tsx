import { useTranslation } from "@/app/i18n";
// import ButtonMain from "@/components/UI/ButtonMain/ButtonMain";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
export default async function Main({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t } = await useTranslation(lng, "main");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header lng={lng} setActivePriv={false} setActiveLogIn={false} />
      <Footer lng={lng} />
      {/* <p>{t("example")}</p> */}
      {/* <ButtonMain text={t("mainTitle")} /> */}
    </main>
  );
}
