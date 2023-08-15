import ThreeVertDots from "../UI/ThreeVertDots/ThreeVertDots";
import { FC } from "react";
import localFont from "next/font/local";
import { LanguageFCComponentsProps } from "@/interfaces/Props.interface";
import { useTranslation } from "@/app/i18n/client";

const myFont = localFont({
  src: "../../../public/MyFont-Regular.otf",
  display: "swap",
});

export const PrivPolLic: FC<LanguageFCComponentsProps> = ({ lng }) => {
  const textAccentFont = myFont.className;
  const { t } = useTranslation(lng, "privacy");
  const linkElement = (
    <a href="https://en.wikipedia.org/wiki/Bow_(watercraft)">link text</a>
  );

  return (
    <div className="w-full px-6 mt-20 mb-48">
      <h1 className={`mb-12 text-4xl ${textAccentFont}`}>
        {t("privacyTitlePolicy")}
      </h1>
      <ul className="">
        <li className="flex mb-2.5 py-4 px-11 bg-accent-background items-center">
          <div className=" mr-4">
            <ThreeVertDots />
          </div>
          <p className={`${textAccentFont} text-lg`}>{t("privacyFirst")}</p>
        </li>
        <li className="flex mb-2.5 py-4 px-11 bg-accent-background items-center">
          <div className=" mr-4">
            <ThreeVertDots />
          </div>
          <p className={`${textAccentFont} text-lg`}>{t("privacySecond")}</p>
        </li>
        <li className="flex mb-2.5 py-4 px-11 bg-accent-background items-center">
          <div className=" mr-4">
            <ThreeVertDots />
          </div>
          <p className={`${textAccentFont} text-lg`}>{t("privacyThird")}</p>
        </li>
        <li className="flex py-4 px-11 pb-6 bg-accent-background items-center">
          <div className=" mr-4">
            <ThreeVertDots />
          </div>
          <p className={`${textAccentFont} text-lg`}>{t("privacyFourth")}</p>
        </li>
      </ul>

      <p className="px-11 pb-14 mb-5 bg-accent-background text-justify text-lg text-opacity-font-2">
        {t("privacyText")}
      </p>
    </div>
  );
};
