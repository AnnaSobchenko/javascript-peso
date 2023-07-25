"use client";
import s from "./CountdownTimer.module.scss";
import React, { useEffect, useState } from "react";
import ThreeVertDots from "../UI/ThreeVertDots/ThreeVertDots";
import useTranslation from "@/app/i18n/client";

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

interface CountdownTimerProps {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

const initialState = {
  days: "0",
  hours: "0",
  minutes: "0",
  seconds: "0",
};

export const CountdownTimer = ({ lng }: { lng: string }) => {
  const [difference, setDifference] =
    useState<CountdownTimerProps>(initialState);
  const { t } = useTranslation(lng, "main");

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
    <div className=" w-full relative">
      <div className={s.newupdate}>
        <div className={`layout default ${s.newupdate__first}`}>
          <h2 className={s.newupdate__title}>{t("CountdownTimerTitleNews")}</h2>
          <p className={s.newupdate__text}>{t("CountdownTimerDescribeNews")}</p>
        </div>
        <div className={s.bgshadow}>
          <div className={`layout default ${s.newupdate__timer}`}>
            <h3 className={s.newupdate__title_large}>
              {t("CountdownTimerUntilUpdate")}
            </h3>
          </div>
        </div>
        <div className={`layout ${s.newupdate__timer__all}`}>
          <div className={s.newupdate__timer__field}>
            <span className={s.newupdate__timer__value} data-days>
              {difference.days}
            </span>
            <span className={s.newupdate__timer__label}>
              {t("CountdownTimerDays")}
            </span>
          </div>
          <div className=" flex items-center mb-4 mr-2 ml-1">
            <ThreeVertDots />
          </div>
          <div className={s.newupdate__timer__field}>
            <span className={s.newupdate__timer__value} data-hours>
              {difference.hours}
            </span>
            <span className={s.newupdate__timer__label}>
              {t("CountdownTimerHours")}
            </span>
          </div>
          <div className=" flex items-center mb-4 mr-2 ml-1">
            <ThreeVertDots />
          </div>
          <div className={s.newupdate__timer__field}>
            <span className={s.newupdate__timer__value} data-minutes>
              {difference.minutes}
            </span>
            <span className={s.newupdate__timer__label}>
              {t("CountdownTimerMinutes")}
            </span>
          </div>
          <div className=" flex items-center mb-4 mr-2 ml-1">
            <ThreeVertDots />
          </div>
          <div className={s.newupdate__timer__field}>
            <span className={s.newupdate__timer__value} data-seconds>
              {difference.seconds}
            </span>
            <span className={s.newupdate__timer__label}>
              {t("CountdownTimerSeconds")}
            </span>
          </div>
        </div>
        <a href="#" className={`layout ${s.newupdate__link}`}>
          {t("CountdownTimerUpdateNews")}
        </a>
      </div>
    </div>
  );
};
