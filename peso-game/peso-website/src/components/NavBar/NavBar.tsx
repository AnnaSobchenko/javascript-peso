"use client";
import Link from "next/link";
import Image from "next/image";
import LogoWiki from "../../assets/icon/logoWiki.svg";
import ThreeVertDots from "../../components/UI/ThreeHorizDots/ThreeHorizDots";

import s from "./NavBar.module.scss";
import ButtonMain from "../../components/UI/ButtonMain/ButtonMain";
import NavSection from "../NavSection/NavSection";
import { FC, useState } from "react";
import { LanguageFCComponentsProps } from "@/interfaces/Props.interface";
import { useTranslation } from "@/app/i18n/client";

const NavBar: FC<LanguageFCComponentsProps> = ({ lng }) => {
  const [isOpen, setIsOpen] = useState(false);
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
        <div className="block md:hidden relative h-5 w-6 cursor-pointer z-10 ">
          <span className="block absolute before:absolute after:absolute w-6 h-[20px] left-0 top-0 before:left-0 before:top-0 after:bottom-0 after:left-0 bg-transparent before:bg-accent-element-color after:bg-accent-element-color  before:w-6 before:h-[10%] after:w-6 after:h-[10%]">
            <span className=" w-6 h-[10%] block absolute left-0 top-[45%] bg-accent-element-color"></span>
          </span>
        </div>
        <div className=" hidden lg:block">
          <NavSection lng={lng} />
          <div className={s.flex_container}>
            <div className={s.flex_container_login}>
              <Link href={`/${lng}/signin`} className={s.link}>
                <span className={s.text}>{t("headerLogIn")}</span>
                <span>
                  <ThreeVertDots />
                </span>
              </Link>
            </div>
            <ButtonMain text={t("headerPlayNow")} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
