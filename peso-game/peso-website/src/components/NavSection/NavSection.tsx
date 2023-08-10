"use client";
import { useTranslation } from "@/app/i18n/client";
import { FC } from "react";
import localFont from "next/font/local";
import { NavBarFCComponentsProps } from "@/interfaces/Props.interface";
import { usePathname } from "next/navigation";
import NavItem from "../NavItem/NavItem";

const myFont = localFont({
  src: "../../../public/MyFont-Regular.otf",
  display: "swap",
});
const NavSection: FC<NavBarFCComponentsProps> = ({ lng, setIsOpen }) => {
  const { t } = useTranslation(lng, "main");
  const pathName = usePathname();

  return (
    <ul
      className={`${myFont.className} flex sm:flex-col lg:flex-row w-full lg:w-auto`}
    >
      <NavItem
        text={t("headerNavHome")}
        setIsOpen={setIsOpen}
        href={`/${lng}`}
        pathName={pathName}
      />

      <NavItem
        text={t("headerNavForum")}
        setIsOpen={setIsOpen}
        href={`/${lng}/forum`}
        pathName={pathName}
      />
      <NavItem
        text={t("headerNavNew")}
        setIsOpen={setIsOpen}
        href={`/${lng}/new`}
        pathName={pathName}
      />

      <NavItem
        text={t("headerNavWiki")}
        setIsOpen={setIsOpen}
        href={`/${lng}/wiki`}
        pathName={pathName}
      />
      <NavItem
        text={t("headerNavAbout")}
        setIsOpen={setIsOpen}
        href={`/${lng}/about`}
        pathName={pathName}
      />
    </ul>
  );
};

export default NavSection;
