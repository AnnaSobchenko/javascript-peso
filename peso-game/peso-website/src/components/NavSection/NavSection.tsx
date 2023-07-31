import Link from "next/link";
import { useTranslation } from "@/app/i18n";
import ThreeHorizDots from "../UI/ThreeHorizDots/ThreeHorizDots";
import s from "./NavSection.module.scss";
import { FC } from "react";
import { LanguageFCComponentsProps } from "@/interfaces/Props.interface";

const NavSection: FC<LanguageFCComponentsProps> = async ({ lng }) => {
  const { t } = await useTranslation(lng, "main");
  return (
    <ul className="flex">
      <li className=" flex flex-col justify-center items-center h-[130px] hover:bg-accent-background focus:bg-accent-background group ">
        <Link
          href={`/${lng}`}
          className=" flex items-center flex-col min-w-[100px]"
        >
          <span className=" group-hover:text-accent-color group-hover:scale-110 mb-1">
            {t("headerNavHome")}
          </span>
          <span>
            <ThreeHorizDots />
          </span>
        </Link>
      </li>
      <li className={s.item}>
        <div className={s.container}>
          <Link href={`/${lng}/forum`} className={s.link}>
            <span className={s.text}>{t("headerNavForum")}</span>
            <span>
              <ThreeHorizDots />
            </span>
          </Link>
        </div>
      </li>
      <li className={s.item}>
        <div className={s.container}>
          <Link href={`/${lng}/new`} className={s.link}>
            <span className={s.text}>{t("headerNavNew")}</span>
            <span>
              <ThreeHorizDots />
            </span>
          </Link>
        </div>
      </li>
      <li className={s.item}>
        <div className={s.container}>
          <Link href={`/${lng}/wiki`} className={s.link}>
            <span className={s.text}>{t("headerNavWiki")}</span>
            <span>
              <ThreeHorizDots />
            </span>
          </Link>
        </div>
      </li>
      <li className={s.item}>
        <div className={s.container}>
          <Link href={`/${lng}/about`} className={s.link}>
            <span className={s.text}>{t("headerNavAbout")}</span>
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
