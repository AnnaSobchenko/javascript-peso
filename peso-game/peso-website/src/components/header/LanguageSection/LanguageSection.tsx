"use client";
import { FC } from "react";
import Link from "next/link";
import localFont from "next/font/local";
import { LanguageFCComponentsProps } from "@/interfaces/Props.interface";
import { usePathname } from "next/navigation";

const myFont = localFont({
  src: "../../../../public/MyFont-Regular.otf",
  display: "swap",
});

const LanguageSection: FC<LanguageFCComponentsProps> = ({ lang }) => {
  const pathName = usePathname();
  const path = pathName.slice(4);
  return (
    <div className={`flex items-center ${myFont.className}`}>
      <Link
        href={`/en/${path}`}
        className={
          lang === "en"
            ? "text-xs  w-3.5 h-3.5 rounded-full hover:scale-125 focus:scale-125 bg-accent-color "
            : "text-xs bg-transparent w-3.5 h-3.5 rounded-full hover:scale-125 focus:scale-125"
        }
        onClick={() => localStorage.setItem("lang", "en")}
      >
        En
      </Link>
      <span className=" text-xs pr-1 pl-1">/</span>
      <Link
        href={`/ua/${path}`}
        className={
          lang === "ua"
            ? "text-xs w-3.5 h-3.5 rounded-full hover:scale-125 focus:scale-125 bg-accent-color "
            : "text-xs bg-transparent w-3.5 h-3.5 rounded-full hover:scale-125 focus:scale-125"
        }
        onClick={() => localStorage.setItem("lang", "ua")}
      >
        Ua
      </Link>
    </div>
  );
};
export default LanguageSection;
