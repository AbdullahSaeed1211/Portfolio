"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
// import { useRouter } from 'next/router';

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
    <nav className="flex-between w-full mb-10 pt-3 z-10" >
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
          <Link href="/" className="nav_text">
            Home
          </Link>
          <Link href="#About" className="nav_text">
            About
          </Link>
          <Link href="#Skills" className="nav_text">
            Skills
          </Link>

          <Link href="/#Projects" className="nav_text">
            Projects
          </Link>
          <Link href="https://drive.google.com/file/d/1YKbeOPYqVLUXztEPcH7FFq8MQn_jitSP/view" className="nav_text" target="_blank">
            Resume
          </Link>

          <Link href="/#Footer" className="nav_text">
            Contact
          </Link>
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
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                    <AiOutlineClose />
                  </div>
                </div>
                <div className="border-b border-gray-300 my-4">
                  <p className="w-[85%] md:w-[90%] py-4">
                    Let&#39;s build something legendary together
                  </p>
                </div>
              </div>
              <div className="py-4 flex flex-col">
                <ul className="uppercase">
                  <Link href="/">
                    <li onClick={() => setNav(false)} className="py-4 text-sm">
                      Home
                    </li>
                  </Link>
                  <Link href="/#About">
                    <li onClick={() => setNav(false)} className="py-4 text-sm">
                      About
                    </li>
                  </Link>
                  <Link href="/#Skills">
                    <li onClick={() => setNav(false)} className="py-4 text-sm">
                      Skills
                    </li>
                  </Link>
                  <Link href="/#Projects">
                    <li onClick={() => setNav(false)} className="py-4 text-sm">
                      Projects
                    </li>
                  </Link>
                  <Link href="https://drive.google.com/file/d/1YKbeOPYqVLUXztEPcH7FFq8MQn_jitSP/view" target="_blank">
                    <li onClick={() => setNav(false)} className="py-4 text-sm">
                      Resume
                    </li>
                  </Link>
                  <Link href="/#Footer">
                    <li onClick={() => setNav(false)} className="py-4 text-sm">
                      Contact
                    </li>
                  </Link>
                </ul>
                <div className="pt-35">
                  <p className="uppercase tracking-widest text-[#5651e5]">
                    Let&#39;s Connect
                  </p>
                  <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                    <a
                      href="https://www.linkedin.com/in/abdullah-saeed1211/"
                      target="_blank"
                      rel="noreferrer">
                      <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                        <FaLinkedinIn />
                      </div>
                    </a>
                    <a
                      href="https://github.com/AbdullahSaeed1211"
                      target="_blank"
                      rel="noreferrer">
                      <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                        <FaGithub />
                      </div>
                    </a>
                    <Link href="/#Footer">
                      <div
                        onClick={() => setNav(!nav)}
                        className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                        <AiOutlineMail />
                      </div>
                    </Link>
                    <Link href="https://drive.google.com/file/d/1YKbeOPYqVLUXztEPcH7FFq8MQn_jitSP/view" target="_blank">
                      <div
                        onClick={() => setNav(!nav)}
                        className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                        <BsFillPersonLinesFill />
                      </div>
                    </Link>
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
