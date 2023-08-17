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
    <div className="w-full px-6 mt-20 mb-48">
      <h1 className={`mb-12 text-4xl ${textAccentFont}`}>
        {t("licenseTitlePolicy")}
      </h1>
      <ul className="">
        <li className="flex mb-2.5 py-4 px-11 bg-accent-background items-center">
          <div className=" mr-4">
            <ThreeVertDots />
          </div>
          <p className={`${textAccentFont} text-lg`}>{t("licenseFirst")}</p>
        </li>
        <li className="flex mb-2.5 py-4 px-11 bg-accent-background items-center">
          <div className=" mr-4">
            <ThreeVertDots />
          </div>
          <p className={`${textAccentFont} text-lg`}>{t("licenseSecond")}</p>
        </li>
        <li className="flex mb-2.5 py-4 px-11 bg-accent-background items-center">
          <div className=" mr-4">
            <ThreeVertDots />
          </div>
          <p className={`${textAccentFont} text-lg`}>{t("licenseThird")}</p>
        </li>
        <li className="flex py-4 px-11 pb-6 bg-accent-background items-center">
          <div className=" mr-4">
            <ThreeVertDots />
          </div>
          <p className={`${textAccentFont} text-lg`}>{t("licenseFourth")}</p>
        </li>
      </ul>

      <p className="px-11 pb-14 mb-5 bg-accent-background text-justify text-lg text-opacity-font-2">
        {t("licenseText")}
      </p>
    </div>
  );
};
