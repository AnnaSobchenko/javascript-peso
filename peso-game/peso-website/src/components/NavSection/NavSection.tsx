import Link from "next/link";
import { useTranslation } from "@/app/i18n";
import ThreeHorizDots from "../UI/ThreeHorizDots/ThreeHorizDots";
import s from "./NavSection.module.scss";
import { FC } from "react";
import localFont from "next/font/local";
import { LanguageFCComponentsProps } from "@/interfaces/Props.interface";

const myFont = localFont({
  src: "../../../public/MyFont-Regular.otf",
  display: "swap",
});
const NavSection: FC<LanguageFCComponentsProps> = async ({ lng }) => {
  const { t } = await useTranslation(lng, "main");
  return (
    <ul
      className={`${myFont.className} flex sm:flex-col lg:flex-row w-full lg:w-auto`}
    >
      <li className=" flex flex-col justify-center items-center h-12 lg:h-[130px] bg-accent-background lg:bg-main-background hover:bg-accent-background focus:bg-accent-background group hover:text-accent-color w-full lg:w-28 mb-2 lg:mb-0 ">
        <Link
          href={`/${lng}`}
          className=" flex items-center flex-col min-w-[100px]"
        >
          <span className=" group-hover:text-accent-color group-hover:scale-110 mb-1">
            {t("headerNavHome")}
          </span>
          <div>
            <ThreeHorizDots />
          </div>
        </Link>
      </li>
      <li className=" flex flex-col justify-center items-center h-12 lg:h-[130px] bg-accent-background lg:bg-main-background hover:bg-accent-background focus:bg-accent-background group hover:text-accent-color w-full lg:w-28 mb-2 lg:mb-0 ">
        <div className={s.container}>
          <Link
            href={`/${lng}/forum`}
            className=" flex items-center flex-col min-w-[100px]"
          >
            <span className=" group-hover:text-accent-color group-hover:scale-110 mb-1">
              {t("headerNavForum")}
            </span>
            <span>
              <ThreeHorizDots />
            </span>
          </Link>
        </div>
      </li>
      <li className=" flex flex-col justify-center items-center h-12 lg:h-[130px] bg-accent-background lg:bg-main-background hover:bg-accent-background focus:bg-accent-background group hover:text-accent-color w-full lg:w-28 mb-2 lg:mb-0 ">
        <div className={s.container}>
          <Link href={`/${lng}/new`} className={s.link}>
            <span className=" group-hover:text-accent-color group-hover:scale-110 mb-1">
              {t("headerNavNew")}
            </span>
            <span>
              <ThreeHorizDots />
            </span>
          </Link>
        </div>
      </li>
      <li className=" flex flex-col justify-center items-center h-12 lg:h-[130px] bg-accent-background lg:bg-main-background hover:bg-accent-background focus:bg-accent-background group hover:text-accent-color w-full lg:w-28 mb-2 lg:mb-0 ">
        <div className={s.container}>
          <Link
            href={`/${lng}/wiki`}
            className=" flex items-center flex-col min-w-[100px]"
          >
            <span className=" group-hover:text-accent-color group-hover:scale-110 mb-1">
              {t("headerNavWiki")}
            </span>
            <span>
              <ThreeHorizDots />
            </span>
          </Link>
        </div>
      </li>
      <li className=" flex flex-col justify-center items-center h-12 lg:h-[130px] bg-accent-background lg:bg-main-background hover:bg-accent-background focus:bg-accent-background group hover:text-accent-color w-full lg:w-28 mb-2 lg:mb-0 ">
        <div className={s.container}>
          <Link
            href={`/${lng}/about`}
            className=" flex items-center flex-col min-w-[100px]"
          >
            <span className=" group-hover:text-accent-color group-hover:scale-110 mb-1">
              {t("headerNavAbout")}
            </span>
            <span>
              <ThreeHorizDots />
            </span>
          </Link>
        </div>
      </li>
    </ul>
  );
};

export default NavSection;
