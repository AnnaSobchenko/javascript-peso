import HomeHeroContent from "../../components/hero/Hero";
import { CountdownTimer } from "@/components/CountdownTimer/CountdownTimer";
import BorderScreen from "@/components/UI/BorderScreen/BorderScreen";
import { Wiki } from "@/components/Wiki/Wiki";
import { MessageForm } from "@/components/MessageForm/MessageForm";

export default function Main({ params: { lng } }: { params: { lng: string } }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
           <HomeHeroContent lng={lng}/>
          <Wiki lng={lng} />
      <CountdownTimer lng={lng} />
      <MessageForm lng={lng} />
      <div className="hidden lg:inline-block fixed top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <BorderScreen />
      </div>
    </main>
  );
}
