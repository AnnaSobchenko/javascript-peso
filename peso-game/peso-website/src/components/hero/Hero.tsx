"use client";
import * as s from "./hero.module.scss";
import React from "react";
import Image from "next/image";
import Logo from "./img/desktop/logo-1x.png";
import Sea from "./img/desktop/sea.png";
import Slider from "./slider/Slider";
import { useTranslation } from "@/app/i18n";
import { FC } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

interface HomeHeroContentProps {
  lng: string;
}


const HomeHeroContent: FC<HomeHeroContentProps> = async({ lng }) => {
  const { t } = await useTranslation(lng, "main");
  return <div className={s.container}>
  <div className={s.backgroundImageTop}>
        <div className={s.description}>
        <Image
                  src={Logo}
                  width={352}
                  height={232}
                  alt="Logo"
                  className={s.description__logo}/>
            <p className={s.description__text}> {t("heroDescription")}</p>
              </div>
              <div className={s.slider}>
        <h2 className={s.slider__title}>{t("heroGameProcess")}</h2>
        <p className={s.slider__text}>{t("heroVideoDescription")}</p>
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
            <h2 className={s.featureCard__title}> {t("heroTitle")}</h2>
            <p className={s.featureCard__text}>{t("heroText")}</p>
          </li>
          <li className={s.featureCard}>
          <Image
                  src={Sea}
                  width={75}
                  height={75}
                  alt="Sea"
                  className={s.featureCard__icon}/>
            <h2 className={s.featureCard__title}> {t("heroTitle")}</h2>
            <p className={s.featureCard__text}>{t("heroText")}</p>
          </li>
          <li className={s.featureCard}>
          <Image
                  src={Sea}
                  width={75}
                  height={75}
                  alt="Sea"
                  className={s.featureCard__icon}/>
            <h2 className={s.featureCard__title}> {t("heroTitle")}</h2>
            <p className={s.featureCard__text}>{t("heroText")}</p>
          </li>
         </ul>
        </div> 
      </div> 
      </div>
  }

  export default HomeHeroContent;
  