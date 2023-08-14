import ThreeVertDots from "../UI/ThreeVertDots/ThreeVertDots";
import { FC } from "react";
import localFont from "next/font/local";
import { LanguageFCComponentsProps } from "@/interfaces/Props.interface";
import { useTranslation } from "@/app/i18n/client";

const myFont = localFont({
  src: "../../../public/MyFont-Regular.otf",
  display: "swap",
});

export const License: FC<LanguageFCComponentsProps> = ({ lng }) => {
  const textAccentFont = myFont.className;
  const { t } = useTranslation(lng, "license");

  return (
    <div className="w-full px-[25px] mt-[75px] mb-[200px]">
      <h1 className={`mb-[50px] text-4xl ${textAccentFont}`}>
        {t("licenseTitlePolicy")}
      </h1>
      <ul className="">
        <li className="flex mb-[10px] py-[16px] px-[45px] bg-accent-background items-center">
          <div className=" mr-4">
            <ThreeVertDots />
          </div>
          <p className={`${textAccentFont} text-lg`}>{t("licenseFirst")}</p>
        </li>
        <li className="flex mb-[10px] py-[16px] px-[45px] bg-accent-background items-center">
          <div className=" mr-4">
            <ThreeVertDots />
          </div>
          <p className={`${textAccentFont} text-lg`}>{t("licenseSecond")}</p>
        </li>
        <li className="flex mb-[10px] py-[16px] px-[45px] bg-accent-background items-center">
          <div className=" mr-4">
            <ThreeVertDots />
          </div>
          <p className={`${textAccentFont} text-lg`}>{t("licenseThird")}</p>
        </li>
        <li className="flex py-[16px] px-[45px] pb-[25px] bg-accent-background items-center">
          <div className=" mr-4">
            <ThreeVertDots />
          </div>
          <p className={`${textAccentFont} text-lg`}>{t("licenseFourth")}</p>
        </li>
      </ul>

      <p className="px-[45px] pb-[60px] mb-[20px] bg-accent-background text-justify text-lg text-opacity-font-2">
        {t("licenseText")}
      </p>
    </div>
  );
};
