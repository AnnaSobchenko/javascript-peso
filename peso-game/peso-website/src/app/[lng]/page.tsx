"use client";
import { useState } from "react";
import Header from "@/components/Header/Header";
import { CountdownTimer } from "@/components/CountdownTimer/CountdownTimer";
import BorderScreen from "@/components/UI/BorderScreen/BorderScreen";

export default function Main({ params: { lng } }: { params: { lng: string } }) {
  const [activeModal, setActiveModal] = useState(false);

  const handleToggleModal = () => {
    setActiveModal((prev: boolean) => !prev);
  };

  return (
    <main className="flex flex-col min-h-screen items-center justify-between relative">
      <div className=" relative top-0 left-0">
        <Header active={activeModal} lng={lng} onClick={handleToggleModal} />
        <CountdownTimer lng={lng} />
        <div className="hidden lg:inline-block fixed top-0 left-0 w-full h-full opacity-50 pointer-events-none">
          <BorderScreen />
        </div>
      </div>
    </main>
  );
}
