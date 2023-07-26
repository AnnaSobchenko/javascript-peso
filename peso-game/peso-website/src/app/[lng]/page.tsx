"use client";
import { useState } from "react";
import Header from "@/components/Header/Header";
import { CountdownTimer } from "@/components/CountdownTimer/CountdownTimer";

export default function Main({ params: { lng } }: { params: { lng: string } }) {
  const [activeModal, setActiveModal] = useState(false);

  const handleToggleModal = () => {
    setActiveModal((prev: boolean) => !prev);
  };

  return (
    <main className="flex flex-col min-h-screen items-center justify-between overflow-scroll overflow-y-hidden">
      <Header active={activeModal} lng={lng} onClick={handleToggleModal} />
      <CountdownTimer lng={lng} />
    </main>
  );
}
