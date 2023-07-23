"use client";
import s from "./CountdownTimer.module.scss";
import React, { useEffect, useState } from "react";
import ThreeVertDots from "../UI/ThreeVertDots/ThreeVertDots";

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

  const updateDate = Date.parse("Aug 24, 2023");

  const updateTimer = () => {
    setInterval(() => {
      const today: number = Number(new Date());
      let todayString = String(new Date());
      const todayDate = Date.parse(todayString);
      let timer = updateDate - todayDate;
      const { days, hours, minutes, seconds } = convertMs(timer);

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
          <h2 className={s.newupdate__title}>News preview</h2>
          <p className={s.newupdate__text}>
            The video shows one guild attacking another guild. Enjoy the
            gameplay right now.
          </p>
        </div>
        <div className={s.bgshadow}>
          <div className={`layout default ${s.newupdate__timer}`}>
            <h3 className={s.newupdate__title_large}>Until the next update:</h3>
          </div>
        </div>
        <div className={`layout default ${s.newupdate__timer__all}`}>
          <div className={s.newupdate__timer__field}>
            <span className={s.newupdate__timer__value} data-days>
              {difference.days}
            </span>
            <span className={s.newupdate__timer__label}>Days</span>
          </div>
          <div className=" flex items-center mb-4 mr-2 ml-1">
            <ThreeVertDots />
          </div>
          <div className={s.newupdate__timer__field}>
            <span className={s.newupdate__timer__value} data-hours>
              {difference.hours}
            </span>
            <span className={s.newupdate__timer__label}>Hours</span>
          </div>
          <div className=" flex items-center mb-4 mr-2 ml-1">
            <ThreeVertDots />
          </div>
          <div className={s.newupdate__timer__field}>
            <span className={s.newupdate__timer__value} data-minutes>
              {difference.minutes}
            </span>
            <span className={s.newupdate__timer__label}>Minutes</span>
          </div>
          <div className=" flex items-center mb-4 mr-2 ml-1">
            <ThreeVertDots />
          </div>
          <div className={s.newupdate__timer__field}>
            <span className={s.newupdate__timer__value} data-seconds>
              {difference.seconds}
            </span>
            <span className={s.newupdate__timer__label}>Seconds</span>
          </div>
        </div>
        <a href="#" className={`layout default ${s.newupdate__link}`}>
          View the latest update here
        </a>
      </div>
    </div>
  );
};
