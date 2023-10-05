import { LanguageFCComponentsProps } from "@/interfaces/Props.interface";
import { FC } from "react";
import localFont from "next/font/local";
import dataNews from "../../../public/data/dataNews.json";
import Image from "next/image";

const myFont = localFont({
  src: "../../../public/MyFont-Regular.otf",
  display: "swap",
});

const News: FC<LanguageFCComponentsProps> = async ({ lang }) => {
  const textAccentFont = myFont.className;
  return (
    <div className="layout  pb-10 ">
      <ul className=" p-5 pt-10 bg bg-accent-background">
        {dataNews.map(({ id, nameEn, nameUa, textEn, textUa, img }) => (
          <li key={id} className="pb-8 last:pb-14">
            <h2
              className={`text-center mb-5 text-xl md:text-2xl ${textAccentFont}`}
            >
              {lang === "en" ? nameEn : nameUa}
            </h2>
            <div className="md:flex gap-4 justify-center">
              <Image
                src={img}
                alt="logo-news"
                width={450}
                height={250}
                className="w-full h-full md:w-[450px] md:h-[250px] sm:mb-4"
              />
              <p className="text-sm text-opacity-font-2 text-sans text-justify mb-6 lg:text-lg">
                {lang === "en" ? textEn : textUa}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;
