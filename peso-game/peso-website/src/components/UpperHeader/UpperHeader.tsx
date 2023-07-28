import { FC } from "react";
import Link from "next/link";
import { useTranslation } from "@/app/i18n";
import LanguageSection from "../LanguageSection/LanguageSection";
import { LanguageFCComponentsProps } from "@/interfaces/Props.interface";

const UpperHeader: FC<LanguageFCComponentsProps> = async ({ lng }) => {
  const { t } = await useTranslation(lng, "main");
  return (
    <header className="w-screen bg-accent-background">
      <div className="layout">
        <div className=" flex justify-between items-center h-12">
          <div className="flex items-center  justify-between  w-full md:justify-normal md:w-auto">
            <LanguageSection lng={lng} />
            <div className=" flex justify-between ml-6">
              <Link
                href={`/${lng}/privacy`}
                className="hidden md:inline-block text-xs md:text-sm bg-transparent pt-4 pb-4 hover:scale-125 mr-6"
              >
                {t("headerPrivacy")}
              </Link>
              <Link
                href=""
                className=" text-xs md:text-sm bg-transparent pt-4 pb-4 hover:scale-125"
              >
                {t("headerContact")}
              </Link>
            </div>
          </div>
          <Link
            href=""
            className=" hidden md:inline-block text-xs md:text-sm bg-transparent pt-4 pb-4 hover:scale-125"
          >
            {t("headerDonate")}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default UpperHeader;
