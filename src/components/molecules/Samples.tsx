import React from "react";
import {
  SampleImage01,
  SampleImage02,
  SampleImage03,
} from "../../../public/assets";
import Image from "next/image";
import classNames from "classnames";

export default function Samples() {
  const sampleItems = [
    {
      icon: SampleImage01,
      title: "Retail OM",
      subtitle: "strip centers, street retail, vehicle related, and more.",
    },
    {
      icon: SampleImage02,
      title: "Multi-Family OM",
      subtitle: "garden, low-rise, mid-rise, high-rise.",
    },
    {
      icon: SampleImage03,
      title: "Office OM",
      subtitle: "all classes of office buildings, loft/creative, medical.",
    },
  ];
  return (
    <div className="bg-[#7261FF] px-[50px] py-[40px]">
      <div className="flex flex-col items-center border rounded-[5px] sm:rounded-[10px] bg-white">
        <h1 className=" text-[24px] sm:text-[36px] font-semibold text-center sm:text-start">
          Sample OMs created with our platform
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-[50px] gap-y-[8px] sm:gap-x-[40px] sm:gap-y-[80px] pt-[40px] px-[10px] sm:px-[40px] py-[20px] ">
          {sampleItems.map((sampleItem, index) => (
            <div key={index} className=" flex flex-col gap-y-2 rounded-[9px]  ">
              <Image src={sampleItem.icon} alt={`${sampleItem.subtitle}`} />
              <div className="p-[20px] flex-1">
                <p className="text-start text-[20px] font-semibold  ">
                  {sampleItem.title}
                </p>
                <p className="text-start py-[10px] text-[14px] font-medium  ">
                  {sampleItem.subtitle}
                </p>
              </div>
              <button
                className={classNames(
                  "self-center text-center border border-[#7261FF] rounded-[8px] w-full py-[5px] font-semibold ",
                  { "bg-[#7261FF] text-white ": index == 0 },
                  { "text-[#7261FF] ": index != 0 }
                )}
              >
                View Sample Template
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
