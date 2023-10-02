import React from "react";
import Image from "next/image";
import Logo from "../../../../public/assets/img/hero/logo-2x.png";
import Sea from "../../../../public/assets/icon/sea.png";
import SliderSwiper from "./SliderSwiper";
import { FC } from "react";
import localFont from "next/font/local";
import { LngTextFCComponentsProps } from "@/interfaces/Props.interface";
import PhotoSlider from "./PhotoSlider";

const myFont = localFont({
  src: "../../../../public/MyFont-Regular.otf",
  display: "swap",
});

const HomeHeroContent: FC<LngTextFCComponentsProps> = ({ textTr }) => {
  return (
    <div className="relative w-screen">
      <div className="relative shadow-inner-shadow h-[714px] pt-[150px] md:h-[1067px] md:pt-[200px] lg:h-[1037px] lg:pt-52 bg-cover bg-center bg-no-repeat bg-mobile-hero-bg-top md:bg-tablet-hero-bg-top lg:bg-desktop-hero-bg-top">
        <div className="flex flex-col items-center justify-center text-center m-auto w-60 md:w-96">
          <Image
            src={Logo}
            width={352}
            height={232}
            alt="Logo"
            className="w-[136.48px] h-90px mb-3.5 md:w-[352px] md:h-[232px] md:mb-6"
          />
          <p className="font-normal text-sm text-white md:text-base lg:text-lg opacity-50">
            {textTr.heroDescription}
          </p>
        </div>
        <div className="relative w-[285px] text-center m-auto mt-32 mb-4 md:w-96 md:mt-56 md:mb-6 lg:w-[576px] lg:mt-[267px] lg:mb-6">
          <h2
            className={`${myFont.className} text-lg mb-1 md:text-2xl lg:mb-2.5`}
          >
            {textTr.heroGameProcess}
          </h2>
          <p className="font-normal text-sm leading-[1.3rem] text-white md:text-base lg:text-lg opacity-50">
            {textTr.heroVideoDescription}
          </p>
        </div>
        <SliderSwiper/> 
      </div>
      <div className="relative shadow-inner-shadow-hero bg-cover bg-center bg-no-repeat inset-0 h-[705px] pt-28 bg-mobile-hero-bg-bottom md:h-[876.33px] md:pt-[300px] md:bg-tablet-hero-bg-bottom lg:h-[876px] lg:pt-[441.33px] lg:bg-desktop-hero-bg-bottom">
        <div>
          <ul className="w-[280px] text-center justify-center mx-auto mb-20 md:w-[500px] md:mb-24 lg:flex lg:w-[1080px] lg:mb-36">
            <li className="w-[280px] mb-9 last:mb-0 md:w-[500px] md:mb-11 md:last:mb-0 lg:w-80 lg:mb-0 lg:mr-16 lg:last:mr-0">
              <Image
                src={Sea}
                width={75}
                height={75}
                alt="Sea"
                className="hidden lg:block lg:mx-auto lg:mb-6 lg:w-[75px] lg:h-[75px]"
              />
              <h2
                className={`${myFont.className} text-3xl mb-2 md:text-4xl md:mb-4`}
              >
                {textTr.heroTitle}
              </h2>
              <p className="font-normal text-xs leading-[1.4rem] md:text-base md:leading-[1.35rem]">
                {textTr.heroText}
              </p>
            </li>
            <li className="w-[280px] mb-9 last:mb-0 md:w-[500px] md:mb-11 md:last:mb-0 lg:w-80 lg:mb-0 lg:mr-16 lg:last:mr-0">
              <Image
                src={Sea}
                width={75}
                height={75}
                alt="Sea"
                className="hidden lg:block lg:mx-auto lg:mb-6 lg:w-[75px] lg:h-[75px]"
              />
              <h2
                className={`${myFont.className} text-3xl mb-2 md:text-4xl md:mb-4`}
              >
                {textTr.heroTitle}
              </h2>
              <p className="font-normal text-xs leading-[1.4rem] md:text-base md:leading-[1.35rem]">
                {textTr.heroText}
              </p>
            </li>
            <li className="w-[280px] mb-9 last:mb-0 md:w-[500px] md:mb-11 md:last:mb-0 lg:w-80 lg:mb-0 lg:mr-16 lg:last:mr-0">
              <Image
                src={Sea}
                width={75}
                height={75}
                alt="Sea"
                className="hidden lg:block lg:mx-auto lg:mb-6 lg:w-[75px] lg:h-[75px]"
              />
              <h2
                className={`${myFont.className} text-3xl mb-2 md:text-4xl md:mb-4`}
              >
                {textTr.heroTitle}
              </h2>
              <p className="font-normal text-xs leading-[1.4rem] md:text-base md:leading-[1.35rem]">
                {textTr.heroText}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomeHeroContent;
