"use client";
import { useState } from "react";

import { CountdownTimer } from "@/components/CountdownTimer/CountdownTimer";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

export default function Main({ params: { lng } }: { params: { lng: string } }) {
  const [activeModal, setActiveModal] = useState(false);

  const handleToggleModal = () => {
    setActiveModal((prev: boolean) => !prev);
  };

  return (
    <main className="flex flex-col min-h-screen items-center justify-between">
      <Header active={activeModal} lng={lng} onClick={handleToggleModal} />
      <CountdownTimer lng={lng} />
      <Footer lng={lng} />
      {/* <p className=" mt-[900px]">ghgbf</p> */}
    </main>
  );
}
