import React from "react";
import {
  HeroSectionImage,
  PlayIcon,
  RightArrowIcon,
} from "../../../public/assets";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between px-[16px] sm:px-[150px] py-[40px] sm:py-[80px] ">
      <div>
        <h1 className="text-[30px] sm:text-[54px] text-center sm:text-start">
          <span className="font-bold">Sell CRE</span> Faster with OMS& Ads
          created in <span className="font-bold">minutes</span>
        </h1>
        <p className="py-[24px] text-[16px] sm:text-[20px] text-center sm:text-start ">
          Create beautiful Commercial Real Estate Offering Memorandums, Flyers &
          Ads in minutes with our AI powered platform
        </p>
        <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-start gap-y-3 py-3 sm:gap-x-3 ">
          <button className="bg-[#7261FF] text-white flex flex-row items-center justify-center gap-x-2 p-[10px] border rounded-[5px] w-full sm:w-[200px] ">
            <span className="text-center self-center ">Try for Free</span>{" "}
            <Image src={RightArrowIcon} alt="arrow right" />
          </button>
          <button className="flex flex-row items-center gap-x-[16px] justify-center ">
            <Image src={PlayIcon} alt="play icon" />
            <span className="">Watch Demo</span>
          </button>
        </div>
      </div>
      <Image src={HeroSectionImage} alt="hero sec image" />
    </div>
  );
}
