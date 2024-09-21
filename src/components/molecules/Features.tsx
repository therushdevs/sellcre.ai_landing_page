import React from "react";
import {
  Feature01,
  Feature02,
  Feature03,
  Feature04,
  Feature05,
  Feature06,
} from "../../../public/assets";
import Image from "next/image";

export default function Features() {
  const gridItems = [
    { icon: Feature01, subtitle: "Retail" },
    { icon: Feature02, subtitle: "Multi-Family" },
    { icon: Feature03, subtitle: "Office" },
    { icon: Feature04, subtitle: "Industrial" },
    { icon: Feature05, subtitle: "Hotel" },
    { icon: Feature06, subtitle: "Land" },
  ];
  return (
    <div className="flex flex-col items-center pb-[40px] sm:pb-[80px] px-[16px]">
      <p className="text-[#7261FF] text-[15px] font-semibold">
        Create OMs and Ads For
      </p>
      <h1 className=" text-[30px] sm:text-[42px] font-bold text-center sm:text-start ">
        Various Real Estate Property Types
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-[50px] gap-y-[8px] sm:gap-x-[200px] sm:gap-y-[80px] pt-[40px] ">
        {gridItems.map((gridItem, index) => (
          <div
            key={index}
            className=" flex flex-col items-center gap-y-2 bg-[#9E9E9E1F] p-[20px] sm:p-[32px] rounded-[9px] "
          >
            <Image src={gridItem.icon} alt={`${gridItem.subtitle}`} />
            <p className="text-center text-[14px] sm:text-[18px] font-semibold ">
              {gridItem.subtitle}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
