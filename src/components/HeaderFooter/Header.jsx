"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";

import { RiMenu4Line } from "react-icons/ri";
import { VscChromeClose } from "react-icons/vsc";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  // const [show, setShow] = useState("translate-y-0");
  // const [lastScrollY, setLastScrollY] = useState(0);

  // const controlNavBar = () => {
  //   window.scrollY > 200
  //     ? window.scrollY > lastScrollY && !mobileMenu
  //       ? setShow("-translate-y-[80px]")
  //       : setShow("shadow-sm")
  //     : setShow("translate-y-0");
  //   setLastScrollY(window.scrollY);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", controlNavBar);
  //   return () => {
  //     window.removeEventListener("scroll", controlNavBar);
  //   };
  // }, [lastScrollY]);

  return (
    <header
      className={`w-full h-[12svh] bg-white shadow-md flex items-center justify-between z-20 `}
    >
      <div className=" w-full px-8 lg:px-20 flex justify-between items-center">
        <Link href={"/"} className="flex">
          <img src="/logo.png" className="h-[12svh]" alt="" />
          {/* <h1 className="font-[500] text-[30px] font-great-vibes">Logo</h1> */}
        </Link>
        <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} />
        {mobileMenu && (
          <MenuMobile
            showCatMenu={showCatMenu}
            setShowCatMenu={setShowCatMenu}
            setMobileMenu={setMobileMenu}
          />
        )}
        {/* <div>Search</div> */}
        <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex md:hidden justify-center items-center cursor-pointer relative -mr-2">
          {mobileMenu ? (
            <VscChromeClose
              className="text-[16px]"
              onClick={() => setMobileMenu(false)}
            />
          ) : (
            <RiMenu4Line
              className="text-[25px]"
              onClick={() => setMobileMenu(true)}
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
