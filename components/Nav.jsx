"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { motion, useInView, useAnimation } from "framer-motion";
import { navLinks, mobileNavIcons, footerLinks } from "@app/constants";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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

  const menuVariants = {
    open: { left: 0 },
    closed: { left: "-100%" },
  };

  const itemVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: -20 },
  };

  const fadeInAnimationsVariantsX = {
    initial: { opacity: 0, x: 0 },
    animate: (index) => ({
      opacity: 1,
      x: 1,

      transition: {
        delay: 0.05 * index,
        duration: 0.75,
        type: "spring",
        bounce: 0.25,
      },
    }),
  };

  useEffect(() => {
    if (nav) {
      controls.start("open");
    } else {
      controls.start("closed");
    }
  }, [nav, controls]);

  const animateItems = nav ? "open" : "closed";

  return (
    <motion.nav
      className={`flex-between w-full mb-10 pt-3 z-10 ${
        shadow ? "shadow" : ""
      }`}>
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/icons/HeroRocket.svg"
          alt="logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">Abdullah Saeed</p>
      </Link>

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
          <Image
            src={"/assets/icons/burger.svg"}
            width={37}
            height={37}
            className="rounded-full"
            alt="profile"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed left-0 top-0 w-full h-screen bg-black/70 ${
          nav ? "block" : "hidden"
        }`}
        onClick={handleNav}>
        <motion.div
          className={`fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500 ${
            nav ? "" : "left-[-100%]"
          }`}
          variants={menuVariants}
          initial="closed"
          animate={controls}>
          <div>
            {/* Close Button */}
            <div className="flex justify-between">
              <div>
                <Image
                  src="/assets/icons/HeroRocket.svg"
                  alt="logo"
                  width={30}
                  height={30}
                  className="object-contain"
                />
              </div>
              <div
                onClick={handleNav}
                className="rounded-full shadow-xs shadow-gray-300 p-3 cursor-pointer absolute top-4 right-4">
                <AiOutlineClose size={24} />
              </div>
            </div>

            <ul className="uppercase text-center items-center ">
              {navLinks.map((link, index) => (
                <Link
                  href={link.href}
                  key={index}
                  rel={link.rel}
                  target={link.target}>
                  <motion.li
                    onClick={() => setNav(false)}
                    className="py-4 text-lg hover:opacity-80"
                    variants={itemVariants}
                    initial="closed"
                    animate={animateItems}
                    transition={{ delay: 0.2 * index }}
                    whileHover={{ scale: 1.05 }}>
                    {link.text}
                  </motion.li>
                </Link>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
