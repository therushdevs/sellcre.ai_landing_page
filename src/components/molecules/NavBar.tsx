"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { MenuIcon, NavLogo } from "../../../public/assets/index";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuIconRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        menuIconRef.current &&
        !menuIconRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="flex flex-row items-center justify-between px-[16px] sm:px-[150px] py-[20px] ">
      <button>
        <Image src={NavLogo} alt="nav logo" />
      </button>
      <button
        ref={menuIconRef}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <Image className=" visible sm:hidden" src={MenuIcon} alt="nav logo" />
      </button>

      <div
        ref={dropdownRef}
        className={`absolute top-16 right-4 bg-white shadow-lg rounded-lg ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="py-2">
          <li
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Features
          </li>
          <li
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Pricing
          </li>
          <li
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Login
          </li>
        </ul>
      </div>
      <ul className=" flex-row items-center justify-between gap-x-4 hidden sm:flex sm:visible ">
        <li>
          <button>Features</button>
        </li>
        <li>
          <button>Pricing</button>
        </li>
        <li>
          <button>Login</button>
        </li>
        <li>
          <button className="bg-[#7261FF] text-white flex flex-row gap-x-2 p-[10px] border rounded-[5px] ">
            Try For Free
          </button>
        </li>
      </ul>
    </div>
  );
}
