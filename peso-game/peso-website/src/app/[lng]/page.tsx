// "use client";
import { CountdownTimer } from "@/components/CountdownTimer/CountdownTimer";
import BorderScreen from "@/components/UI/BorderScreen/BorderScreen";
import Footer from "@/components/footer/Footer";
import Header from "@/components/Header/Header";
import { Wiki } from "@/components/Wiki/Wiki";
import { MessageForm } from "@/components/Form/MessageForm";

export default function Main({ params: { lng } }: { params: { lng: string } }) {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between">
      <Header lng={lng} />
      <Wiki lng={lng} />
      <CountdownTimer lng={lng} />
      <MessageForm lng={lng} />
      <Footer lng={lng} />{" "}
      <div className="hidden lg:inline-block fixed top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <BorderScreen />
      </div>
      {/* <p className=" mt-[900px]">ghgbf</p> */}
    </main>
  );
}
