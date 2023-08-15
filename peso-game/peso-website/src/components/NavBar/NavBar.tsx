"use client";
import Link from "next/link";
import Image from "next/image";
import LogoWiki from "../../assets/icon/logoWiki.svg";
import ButtonMain from "../../components/UI/ButtonMain/ButtonMain";
import NavSection from "../NavSection/NavSection";
import { FC, useState } from "react";
import { LanguageFCComponentsProps } from "@/interfaces/Props.interface";
import { useTranslation } from "@/app/i18n/client";
import { usePathname } from "next/navigation";
import NavItem from "../NavItem/NavItem";

const NavBar: FC<LanguageFCComponentsProps> = ({ lng }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();
  const { t } = useTranslation(lng, "main");

  return (
    <nav className={`layout bg-main-background `}>
      <div className=" h-20 md:h-32 flex items-center justify-between">
        <Link href={`/${lng}`} className=" opacity-60 h-16 w-24">
          <Image src={LogoWiki} alt="LogoWiki" height={68} width={103} />
        </Link>
        {/* <div className={`flex items-center ml-20 lg:hidden `}>
          <div className="flex flex-col justify-center items-center mr-6 hover:bg-accent-background focus:bg-accent-background">
            <Link href={`/${lng}/signin`} className={s.link}>
              <span className={s.text}>{t("headerLogIn")}</span>
              <span>
                <ThreeVertDots />
              </span>
            </Link>
          </div>
          <div className=" inline-block lg:hidden">
            <ButtonMain text="Menu" />
          </div>
        </div> */}
        <button
          onClick={() => setIsOpen(!isOpen)}
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
          <NavSection lng={lng} setIsOpen={setIsOpen} />
        </div>
        <div className=" hidden lg:flex h-full">
          <NavSection lng={lng} setIsOpen={setIsOpen} />
          <div className=" flex items-center">
            <NavItem
              text={t("headerLogIn")}
              setIsOpen={setIsOpen}
              href={`/${lng}/signin`}
              pathName={pathName}
            />
            <ButtonMain text={t("headerPlayNow")} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
