import Link from "next/link";
import Image from "next/image";
import Logo from "../../assets/icon/Logo.svg";
import ThreeVertDots from "../../components/UI/ThreeHorizDots/ThreeHorizDots";

import s from "./NavBar.module.scss";
import ButtonMain from "../../components/UI/ButtonMain/ButtonMain";
import NavSection from "../NavSection/NavSection";
import { FC } from "react";
import { LanguageFCComponentsProps } from "@/interfaces/Props.interface";
import { useTranslation } from "@/app/i18n";

const NavBar: FC<LanguageFCComponentsProps> = async ({ lng }) => {
  const { t } = await useTranslation(lng, "main");
  return (
    <nav className={`layout bg-main-background `}>
      <div className=" h-20 md:h-32 flex items-center justify-between">
        <Link href={`/${lng}`} className=" opacity-60 h-16 w-24">
          <Image src={Logo} alt="Logo" height={68} width={103} />
        </Link>
        <div className={`flex items-center ml-20 lg:hidden `}>
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
        </div>
        <>
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
        </>
      </div>
    </nav>
  );
};

export default NavBar;
