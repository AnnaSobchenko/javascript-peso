import { LanguageFCComponentsProps } from "@/interfaces/Props.interface";
import { FC } from "react";
import dataTeam from "../../../public/data/dataTeam.json";
import localFont from "next/font/local";
import Image from "next/image";

const myFont = localFont({
  src: "../../../public/MyFont-Regular.otf",
  display: "swap",
});

export const AboutComponent: FC<LanguageFCComponentsProps> = async ({
  lang,
}) => {
  const textAccentFont = myFont.className;
  return (
    <div className="layout pb-10">
      <ul className="md:flex md:flex-wrap gap-4 justify-center pt-10 bg-accent-background">
        {dataTeam.map(({ id, nameEn, nameUa, avatar, linkedin, github }) => (
          <li key={id} className="pb-8 last:pb-14">
            <div className="relative group">
              <div className="group-hover:blur-sm transition-all relative">
                <Image
                  src={avatar}
                  alt="avatar"
                  width={300}
                  height={330}
                  className="w-full h-full md:w-[300px] md:h-[330px] mb-4 hover:rotate-y-180 "
                />
                <div className="bg-shadow-background-about group-hover:bg-shadow-background-hero z-10 w-full h-full absolute top-0 left-0"></div>
              </div>
              <h3
                className={`text-center mb-5 text-xl md:text-2xl ${textAccentFont}`}
              >
                {lang === "en" ? nameEn : nameUa}
              </h3>
              <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]flex flex-col opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="mb-1 bg-accent-background p-4 cursor-pointer ">
                  <a
                    href={linkedin}
                    className={`p-4 align-middle text-center ${textAccentFont} z-[3] `}
                  >
                    LinkedIn
                  </a>
                </div>
                <div className="mb-1 bg-accent-background p-4 cursor-pointer">
                  <a
                    href={github}
                    className={`p-4 align-middle text-center ${textAccentFont} z-[3]`}
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
