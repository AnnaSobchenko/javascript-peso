import  s from "./hero.module.scss"
import React from "react";
import Image from "next/image";
import Logo from "./img/desktop/logo-1x.png";
import Sea from "./img/desktop/sea.png";
import Slider from "./slider/Slider";
import { useTranslation } from "@/app/i18n";
import { FC } from "react";
import localFont from "next/font/local";

const myFont = localFont({
  src: "../../../public/MyFont-Regular.otf",
  display: "swap",
});

interface HomeHeroContentProps {
  lng: string;
}

const HomeHeroContent: FC<HomeHeroContentProps> = async({ lng }) => {
  const { t } = await useTranslation(lng, "main");
  return <div className="relative">  
  <div className={s.backgroundImageTop}>
         <div className="flex flex-col items-center text-center m-auto w-[240px] md:w-[400px]">
        <Image
                  src={Logo}
                  width={352}
                  height={232}
                  alt="Logo"
                  className="w-[136.48px] h-90px mb-[15px] md:w-[352px] md:h-[232px] md:mb-[25px]"/>
            <p className="font-normal text-[14px] leading-[1.4rem] text-white text-opacity-50 md:text-[16px] md:leading-[1.3rem] lg:text-[18px] lg:leading-[1.15rem]"> {t("heroDescription")}</p>
              </div>
              <div className="relative w-[280px] text-center m-auto mt-[125px] mb-[15px] md:w-[400px] md:mt-[227px] md:mb-[25px] lg:w-[590px] lg:mt-[267px] lg:mb-[25px]">
        <h2 className={`${myFont.className} text-[18px] mb-[5px] md:text-[24px] md:mb-[10px]`}>{t("heroGameProcess")}</h2>
        <p className="font-normal text-[14px] leading-[1.3rem] text-white text-opacity-50 md:text-[16px] lg:text-[18px]">{t("heroVideoDescription")}</p>
        </div>
     <Slider/>
        </div>
   <div className={s.backgroundImageBottom}>
      <div className={s.feature}>
      <ul className={s.featureList}>
        <li className={s.featureCard}>
        <Image
                src={Sea}
                width={75}
                height={75}
                alt="Sea"
                className={s.featureCard__icon}/>
                 <h2 className={`${myFont.className} text-[32px] mb-[8px] md:text-[36px] md:mb-[15px]`}> {t("heroTitle")}</h2>
                 <p className="font-normal text-[13px] leading-[1.4rem] md:text-[16px] md:leading-[1.35rem] lg:text-[18px] lg:leading-[1.35rem]">{t("heroText")}</p>
          </li>
          <li className={s.featureCard}>
        <Image
                src={Sea}
                width={75}
                height={75}
                alt="Sea"
                className={s.featureCard__icon}/>
                 <h2 className={`${myFont.className} text-[32px] mb-[8px] md:text-[36px] md:mb-[15px]`}> {t("heroTitle")}</h2>
                 <p className="font-normal text-[13px] leading-[1.4rem] md:text-[16px] md:leading-[1.35rem] lg:text-[18px] lg:leading-[1.35rem]">{t("heroText")}</p>
          </li>
          <li className={s.featureCard}>
        <Image
                src={Sea}
                width={75}
                height={75}
                alt="Sea"
                className={s.featureCard__icon}/>
                 <h2 className={`${myFont.className} text-[32px] mb-[8px] md:text-[36px] md:mb-[15px]`}> {t("heroTitle")}</h2>
                 <p className="font-normal text-[13px] leading-[1.4rem] md:text-[16px] md:leading-[1.35rem] lg:text-[18px] lg:leading-[1.35rem]">{t("heroText")}</p>
          </li>
        </ul>
        </div> 
      </div> 
      </div>
  }

  export default HomeHeroContent;
  