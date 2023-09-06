"use client";
import React, { FC } from "react";
import {
  LngTextFCComponentsProps,
  ShipData,
} from "@/interfaces/Props.interface";
import dataShip from "../../../../public/data/dataShip.json";

import { RandomElement } from "./RandomData";

const data: ShipData[] = dataShip;

export const Wiki: FC<LngTextFCComponentsProps> = ({ textTr, lang }) => {
  return (
    <div className="bg-accent-background w-screen flex justify-center">
      <RandomElement data={data} textTr={textTr} lang={lang} />
    </div>
  );
};
