"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";

import { navLinks, mobileNavIcons } from "@app/constants";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <nav className="flex-between  w-full mb-10 pt-3 z-10">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/icons/HeroRocket.svg"
          alt="logo"
          width={30}
          height={30}
          className=" object-contain"
        />
        <p className="logo_text ">Abdullah Saeed</p>
      </Link>

      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        <div className="flex gap-3 md:gap-5">
          {navLinks.map((link, index) => (
            <Link
              href={link.href}
              key={index}
              rel={link.rel}
              target={link.target}
              className="nav_text">
              {link.text}
            </Link>
          ))}
        </div>
      </div>

      {/* Hamburger Icon */}
      <div className="sm:hidden flex relative flex-center">
        <div className="flex" onClick={handleNav}>
          {/* ... rest of the code ... */}
        </div>
      </div>

      {/* Hamburger Icon */}
      <div className="sm:hidden flex relative flex-center">
        <div className="flex" onClick={handleNav}>
          <Image
            src={"/assets/icons/burger.svg"}
            width={37}
            height={37}
            className="rounded-full"
            alt="profile"
          />

          {/* Mobile Menu */}
          {/* Overlay */}
          <div
            className={
              nav
                ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
                : ""
            }>
            {/* Side Drawer Menu */}
            <div
              className={
                nav
                  ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500 "
                  : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
              }>
              <div>
                <div className="flex w-full items-center justify-between">
                  <Link href="/">
                    <Image
                      src={"assets/icons/HeroRocket.svg"}
                      width="87"
                      height="35"
                      alt="/"
                    />
                  </Link>
                  <div
                    onClick={handleNav}
                    className="rounded-full shadow-sm shadow-gray-300 p-3 cursor-pointer">
                    <AiOutlineClose />
                  </div>
                </div>
                <div className="border-b border-gray-300 my-4">
                  <p className="w-[85%] md:w-[90%] py-4">
                    Let&#39;s Collaborate
                  </p>
                </div>
              </div>
              <div className="py-2 flex flex-col">
                <ul className="uppercase">
                  {navLinks.map((link, index) => (
                    <Link
                      href={link.href}
                      key={index}
                      rel={link.rel}
                      target={link.target}>
                      <li
                        onClick={() => setNav(false)}
                        className="py-4 text-sm hover:opacity-80">
                        {link.text}
                      </li>
                    </Link>
                  ))}
                </ul>
                <div className="pt-35">
                  <p className="uppercase tracking-widest text-[#5651e5]">
                    Connect with me at
                  </p>
                  <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                    {mobileNavIcons.map((item, index) => (
                      <Link
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        key={index}>
                        <div className="rounded-full shadow-md p-3 hover:opacity-80 cursor-pointer hover:scale-105 ease-in duration-300">
                          {item.icon}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
