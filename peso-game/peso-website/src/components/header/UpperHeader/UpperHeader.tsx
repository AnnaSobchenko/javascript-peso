import { FC } from "react";
import Link from "next/link";
import LanguageSection from "../LanguageSection/LanguageSection";
import { LngTextFCComponentsProps } from "@/interfaces/Props.interface";

const UpperHeader: FC<LngTextFCComponentsProps> = async ({ lang, textTr }) => {
  return (
    <header className="w-screen bg-accent-background">
      <div className="layout">
        <div className=" flex justify-between items-center h-12">
          <div className="flex items-center  justify-between  w-full md:justify-normal md:w-auto">
            <LanguageSection lang={lang} />
            <div className=" flex justify-between ml-6">
              <Link
                href={`/${lang}/privacy`}
                className="hidden md:inline-block text-xs md:text-sm bg-transparent pt-4 pb-4 hover:scale-125 mr-6"
              >
                {textTr.headerPrivacy}
              </Link>
              <Link
                href={`/${lang}/#form`}
                className=" text-xs md:text-sm bg-transparent pt-4 pb-4 hover:scale-125"
              >
                {textTr.headerContact}
              </Link>
            </div>
          </div>
          <Link
            href=""
            className=" hidden md:inline-block text-xs md:text-sm bg-transparent pt-4 pb-4 hover:scale-125"
          >
            {textTr.headerDonate}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default UpperHeader;
