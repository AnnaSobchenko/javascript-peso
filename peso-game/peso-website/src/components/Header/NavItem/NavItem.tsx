import Link from "next/link";
import ThreeHorizDots from "../../UI/ThreeHorizDots/ThreeHorizDots";
import { FC } from "react";
import { NavItemFCComponentsProps } from "@/interfaces/Props.interface";

const NavItem: FC<NavItemFCComponentsProps> = ({
  text,
  setIsOpen,
  href,
  pathName,
}) => {
  return (
    <li
      className={
        pathName == href
          ? " flex flex-col justify-center items-center h-12 lg:h-full bg-accent-background group hover:text-accent-color w-full lg:w-28 mb-2 lg:mb-0 transition-all duration-300 "
          : " flex flex-col justify-center items-center h-12 lg:h-full bg-accent-background lg:bg-main-background hover:bg-accent-background focus:bg-accent-background group hover:text-accent-color w-full lg:w-28 mb-2 lg:mb-0 transition-all duration-300 "
      }
    >
      <Link
        onClick={() => setIsOpen(false)}
        href={href}
        className=" flex items-center justify-center flex-col h-full pt-8 pr-6 pb-8 pl-6"
      >
        <span
          className={
            pathName == href
              ? "active text-accent-color group-hover:text-accent-color group-hover:scale-110 mb-1  transition-all duration-300"
              : " group-hover:text-accent-color group-hover:scale-110 mb-1  transition-all duration-300"
          }
        >
          {text}
        </span>
        <div>
          <ThreeHorizDots />
        </div>
      </Link>
    </li>
  );
};

export default NavItem;
