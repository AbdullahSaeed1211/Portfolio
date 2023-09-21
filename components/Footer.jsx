"use client";
import React from "react";
import { ProjectCardList, footerLinks, navLinks } from "@app/constants";
import Link from "next/link";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const Footer = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const fadeInAnimationsVariants = {
    initial: { opacity: 0, y: 100 },
    animate: (index) => ({
      opacity: 1,
      y: 0,

      transition: {
        delay: 0.05 * index,
        duration: 0.5,
        type: "spring",
        bounce: 0.25,
      },
    }),
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

  return (
    <footer className="bg-transparent w-full text-gray-600 py-10">
      <div className="container grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-10">
        <div className="text-left">
          <h2 className="text-xl font-semibold mb-2">Abdullah Saeed</h2>
          <p className="text-sm">Software & Web Developer</p>
        </div>
        <div>
          <span className="text-lg flex font-semibold mb-4">Quick Links</span>
          <ul>
            {navLinks.map((link, index) => (
              <motion.li
                key={index}
                variants={fadeInAnimationsVariants}
                initial="initial"
                whileInView="animate"
                ref={ref}
                animate={controls}
                viewport={{ once: true }}
                custom={index}
                className="mb-2">
                <Link href={link.href}>
                  <span className="text-sm">{link.text}</span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="hidden md:block">
          <span className="text-lg flex font-semibold mb-4">Projects</span>
          <ul>
            {ProjectCardList.map((link, index) => (
              <motion.li
                key={index}
                variants={fadeInAnimationsVariants}
                initial="initial"
                whileInView="animate"
                ref={ref}
                animate={controls}
                viewport={{ once: true }}
                custom={index}
                className="mb-2">
                <Link href={link.projectLink}>
                  <span className="text-sm">{link.title}</span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col">
          <span className="text-lg flex font-semibold mb-4 md:justify-end">
            Connect with me
          </span>
          <div className="flex justify-start md:justify-end gap-6 mt-2">
            {footerLinks.map((link, index) => (
              <motion.a
                key={index}
                variants={fadeInAnimationsVariantsX}
                initial="initial"
                whileInView="animate"
                ref={ref}
                animate={controls}
                viewport={{ once: true }}
                custom={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm">
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
