"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import CardProgram from "../assets/cardimage3d.png";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-indigo-900 dark:border-white/[0.2] border-black/[0.1] w-[20rem] h-[20rem] rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Front-end Developer
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={CardProgram}
            height="500"
            width="500"
            className="h-30 w-full object-cover rounded-xl "
            alt="thumbnail"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
