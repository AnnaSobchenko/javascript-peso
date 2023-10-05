"use client";
import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";
import LogoWiki from "public/assets/icon/logoWiki.svg";
import NoAvatar from "public/assets/img/home/noavatar-desk-2x.png";
import ButtonMain from "../../UI/ButtonMain/ButtonMain";
import NavSection from "../NavSection/NavSection";
import { FC, useState } from "react";
import { LngTextFCComponentsProps } from "@/interfaces/Props.interface";
import { usePathname } from "next/navigation";
import NavItem from "../NavItem/NavItem";
import ThreeVertDots from "@/components/UI/ThreeVertDots/ThreeVertDots";
const myFont = localFont({
  src: "../../../../public/MyFont-Regular.otf",
  display: "swap",
});
const NavBar: FC<LngTextFCComponentsProps> = ({ textTr, lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  const toggleModal = (prev: boolean) => {
    setIsOpen(!prev);
  };

  return (
    <nav className={`layout bg-main-background `}>
      <div className=" h-20 md:h-32 flex items-center justify-between">
        <Link href={`/${lang}`} className=" opacity-60 h-16 w-24">
          <Image src={LogoWiki} alt="LogoWiki" height={68} width={103} />
        </Link>
        <button
          onClick={() => toggleModal(isOpen)}
          className="block md:hidden relative h-5 w-6 cursor-pointer z-10 "
        >
          <span
            className={
              isOpen
                ? "block md:hidden absolute after:rotate-[-315deg] before:rotate-[315deg]  before:absolute after:absolute w-6 h-[20px] left-0 top-0 before:left-0 transition-all after:transition-all before:transition-all before:top-[45%] after:bottom-[45%] after:left-0 bg-transparent before:bg-accent-element-color after:bg-accent-element-color  before:w-6 before:h-[10%] after:w-6 after:h-[10%]"
                : "block md:hidden absolute before:absolute after:absolute w-6 h-[20px] left-0 top-0 before:left-0 before:top-0 after:bottom-0 after:left-0 bg-transparent before:bg-accent-element-color after:bg-accent-element-color  before:w-6 before:h-[10%] after:w-6 after:h-[10%]"
            }
          >
            <span
              className={
                isOpen
                  ? " hidden"
                  : " w-6 h-[10%] block absolute  left-0 top-[45%] bg-accent-element-color"
              }
            ></span>
          </span>
        </button>

        <div
          className={
            isOpen
              ? "  bg-main-background w-screen h-screen z-10 md:hidden absolute top-32 left-0"
              : "hidden"
          }
        >
          <NavSection lang={lang} setIsOpen={setIsOpen} textTr={textTr} />
        </div>
        <div className=" hidden lg:flex h-full">
          <NavSection lang={lang} setIsOpen={setIsOpen} textTr={textTr} />
          <div className=" flex items-center">
            <div className=" mr-5 h-full">
              <NavItem
                text={textTr.headerLogIn}
                setIsOpen={setIsOpen}
                href={`/${lang}/signin`}
                pathName={pathName}
              />
            </div>
            <ButtonMain text={textTr.headerPlayNow} onClick={() => {}} />
          </div>
        </div>
        <div className="hidden md:flex  lg:hidden">
          <div className="hidden md:flex lg:hidden items-center mr-11">
            <Image
              src={NoAvatar}
              alt="Avatar"
              height={45}
              width={45}
              className="mr-2"
            />
            <p className={`${myFont.className} mr-2`}>User name</p>
            <ThreeVertDots />
          </div>
          {isOpen && (
            <div
              className={
                isOpen
                  ? " hidden md:flex bg-main-background w-screen h-screen z-10 lg:hidden absolute top-44 left-0"
                  : "hidden"
              }
            >
              <NavSection lang={lang} setIsOpen={setIsOpen} textTr={textTr} />
            </div>
          )}
          {isOpen ? (
            <ButtonMain
              text={textTr.headerClose}
              onClick={() => toggleModal(isOpen)}
            />
          ) : (
            <ButtonMain
              text={textTr.headerMenu}
              onClick={() => toggleModal(isOpen)}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
