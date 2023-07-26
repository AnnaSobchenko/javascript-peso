"use client";
import s from "./CountdownTimer.module.scss";
import React, { useEffect, useState } from "react";
import ThreeVertDots from "../UI/ThreeVertDots/ThreeVertDots";
import useTranslation from "@/app/i18n/client";
import { FC } from "react";
import { Marcellus_SC, Alegreya_Sans_SC } from "next/font/google";
import localFont from "next/font/local";
import {
  CountdownTimerProps,
  LanguageFCComponentsProps,
} from "@/interfaces/Props.interface";

// Font files can be colocated inside of `app`
const myFont = localFont({
  src: "../../../public/MyFont-Regular.otf",
  display: "swap",
});

const marcellusSC = Marcellus_SC({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});
const alegreyaSC = Alegreya_Sans_SC({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const convertMs = (ms: number) => {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days: string = String(Math.floor(ms / day)).padStart(2, "0");
  // Remaining hours
  const hours: string = String(Math.floor((ms % day) / hour)).padStart(2, "0");
  // Remaining minutes
  const minutes: string = String(
    Math.floor(((ms % day) % hour) / minute)
  ).padStart(2, "0");
  // Remaining seconds
  const seconds = String(
    Math.floor((((ms % day) % hour) % minute) / second)
  ).padStart(2, "0");
  return { days, hours, minutes, seconds };
};

const initialState = {
  days: "00",
  hours: "00",
  minutes: "00",
  seconds: "00",
};

export const CountdownTimer: FC<LanguageFCComponentsProps> = ({ lng }) => {
  const [difference, setDifference] =
    useState<CountdownTimerProps>(initialState);
  const { t } = useTranslation(lng, "main");

  const textAccentFont = myFont.className;
  // lng === "en" ? `${marcellusSC.className}` : `${alegreyaSC.className}`;
  // lng === "en" ? `${marcellusSC.className}` : `${myFont.className}`;

  const updateTimer = () => {
    setInterval(() => {
      const { days, hours, minutes, seconds } = convertMs(
        Date.parse("Aug 24, 2023") - Date.parse(String(new Date()))
      );

      setDifference({ days, hours, minutes, seconds });

      return { days, hours, minutes, seconds };
    }, 1000);
  };

  useEffect(() => {
    updateTimer();
  }, []);

  return (
    <div className=" w-full  overflow-hidden relative">
      <div className=" flex flex-col items-center pb-14 sm:pt-14 md:pt-16 lg:pt-32 ">
        <div
          className={`layout flex flex-col  text-center items-center sm:mb-4 md:mb-6 lg:mb-7  ${s.newupdate__first}`}
        >
          <h2 className={`${textAccentFont} mb-1  md:mb-2 md:text-2xl`}>
            {t("CountdownTimerTitleNews")}
          </h2>
          <p className=" flex text-center  justify-center text-opacity-font-2 text-sm md:text-base lg:text-lg md:w-[400px] lg:w-full">
            {t("CountdownTimerDescribeNews")}
          </p>
        </div>
        <div className=" w-full shadow-inner-shadow sm:h-[300px] md:h-[368px] lg:h-[300px] bg-cover bg-countdown-timer-bg-desk">
          <div
            className={`layout flex flex-col items-center text-center sm:mb-16 sm:pt-24 md:mb-32 md:pt-28 lg:mb-32 lg:pt-32 ${s.newupdate__timer}`}
          >
            <h3
              className={`${textAccentFont} mb-1  md:mb-2 sm:text-3xl md:text-5xl lg:text-7xl`}
            >
              {t("CountdownTimerUntilUpdate")}
            </h3>
          </div>
        </div>
        <div
          className={`layout flex items-center justify-center sm:mt-[-63px] sm:mb-16 md:mt-[-52px] md:mb-28 lg:mt-[-46px] lg:mb-32 `}
        >
          <div className="flex flex-col items-center">
            <span
              className={`sm:text-5xl md:text-8xl text-opacity-font-4 flex mb-1 `}
              data-days
            >
              {difference.days}
            </span>
            <span className={` ${textAccentFont} sm:text-sm md:text-lg `}>
              {t("CountdownTimerDays")}
            </span>
          </div>
          <div className=" flex items-center mb-6 mr-2 ml-2">
            <ThreeVertDots />
          </div>
          <div className="flex flex-col items-center">
            <span
              className={`sm:text-5xl md:text-8xl text-opacity-font-4 flex mb-1 `}
              data-hours
            >
              {difference.hours}
            </span>
            <span className={` ${textAccentFont} sm:text-sm md:text-lg `}>
              {t("CountdownTimerHours")}
            </span>
          </div>
          <div className=" flex items-center mb-6 mr-2 ml-2">
            <ThreeVertDots />
          </div>
          <div className="flex flex-col items-center">
            <span
              className={`sm:text-5xl md:text-8xl text-opacity-font-4 flex mb-1 `}
              data-minutes
            >
              {difference.minutes}
            </span>
            <span className={` ${textAccentFont} sm:text-sm md:text-lg `}>
              {t("CountdownTimerMinutes")}
            </span>
          </div>
          <div className=" flex items-center mb-6 mr-2 ml-2">
            <ThreeVertDots />
          </div>
          <div className="flex flex-col items-center">
            <span
              className={`sm:text-5xl md:text-8xl text-opacity-font-4 flex mb-1 `}
              data-seconds
            >
              {difference.seconds}
            </span>
            <span className={` ${textAccentFont} sm:text-sm md:text-lg `}>
              {t("CountdownTimerSeconds")}
            </span>
          </div>
        </div>
        <a href="#" className={`layout ${textAccentFont} ${s.newupdate__link}`}>
          {t("CountdownTimerUpdateNews")}
        </a>
      </div>
    </div>
  );
};
