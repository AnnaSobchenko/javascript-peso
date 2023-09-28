import { FC } from "react";
import { NavBarFCComponentsProps } from "@/interfaces/Props.interface";
import { usePathname } from "next/navigation";
import NavItem from "../NavItem/NavItem";

const NavSection: FC<NavBarFCComponentsProps> = ({
  lang,
  setIsOpen,
  textTr,
}) => {
  const pathName = usePathname();

  return (
    <div className="flex flex-col lg:flex-row w-full lg:w-auto">
      <ul className="flex flex-col lg:flex-row w-auto">
        <NavItem
          text={textTr.headerNavHome}
          setIsOpen={setIsOpen}
          href={`/${lang}`}
          pathName={pathName}
        />

        <NavItem
          text={textTr.headerNavFAQ}
          setIsOpen={setIsOpen}
          href={`/${lang}/faq`}
          pathName={pathName}
        />
        <NavItem
          text={textTr.headerNavNew}
          setIsOpen={setIsOpen}
          href={`/${lang}/new`}
          pathName={pathName}
        />

        <NavItem
          text={textTr.headerNavWiki}
          setIsOpen={setIsOpen}
          href={`/${lang}/wiki`}
          pathName={pathName}
        />
        <NavItem
          text={textTr.headerNavAbout}
          setIsOpen={setIsOpen}
          href={`/${lang}/about`}
          pathName={pathName}
        />
      </ul>
      <div className="flex md:hidden">
        <NavItem
          text={textTr.headerLogIn}
          setIsOpen={setIsOpen}
          href={`/${lang}/signin`}
          pathName={pathName}
        />
      </div>
    </div>
  );
};

export default NavSection;
