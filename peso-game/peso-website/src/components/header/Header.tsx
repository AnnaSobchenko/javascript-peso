"use client";
import UpperHeader from "../UpperHeader/UpperHeader";
import { FC, useEffect } from "react";
import { LanguageFCComponentsProps } from "../../interfaces/Props.interface";
import NavBar from "../NavBar/NavBar";

const Header: FC<LanguageFCComponentsProps> = ({ lng }) => {
  // const Header = ({ lng }: IHeaderProps) => {
  useEffect(() => {
    Boolean(localStorage.getItem("lng")) || localStorage.setItem("lng", lng);
  }, []);
  return (
    <div className="bg-main-background">
      <UpperHeader lng={lng} />
      <NavBar lng={lng} />
    </div>
  );
};

export default Header;
