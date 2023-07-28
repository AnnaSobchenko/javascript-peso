"use client";

import { CountdownTimer } from "@/components/CountdownTimer/CountdownTimer";
import BorderScreen from "@/components/UI/BorderScreen/BorderScreen";

export default function Main({ params: { lng } }: { params: { lng: string } }) {
  return (
    <main className=" w-full flex flex-col min-h-screen items-center justify-between relative">
      <div className=" relative top-0 left-0">
        <CountdownTimer lng={lng} />
        <div className="hidden lg:inline-block fixed top-0 left-0 w-full h-full opacity-30 pointer-events-none">
          <BorderScreen />
        </div>
      </div>
    </main>
  );
}
