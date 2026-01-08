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

  // const fadeInAnimationsVariants = {
  //   initial: { opacity: 0, y: 100 },
  //   animate: (index) => ({
  //     opacity: 1,
  //     y: 0,

  //     transition: {
  //       delay: 0.05 * index,
  //       duration: 0.5,
  //       type: "spring",
  //       bounce: 0.25,
  //     },
  //   }),
  // };

  // const fadeInAnimationsVariantsX = {
  //   initial: { opacity: 0, x: 0 },
  //   animate: (index) => ({
  //     opacity: 1,
  //     x: 1,

  //     transition: {
  //       delay: 0.05 * index,
  //       duration: 0.75,
  //       type: "spring",
  //       bounce: 0.25,
  //     },
  //   }),
  // };

  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-left">
            <h2 className="text-lg font-semibold mb-1">Abdullah Saeed</h2>
            <p className="text-xs">Software & Web Developer</p>
          </div>
          <div>
            <span className="text-sm flex font-semibold mb-3">Quick Links</span>
            <ul>
              {navLinks.map((link, index) => (
                // <motion.li
                //   key={index}
                //   variants={fadeInAnimationsVariants}
                //   initial="initial"
                //   whileInView="animate"
                //   ref={ref}
                //   animate={controls}
                //   viewport={{ once: true }}
                //   custom={index}
                //   className="mb-2">
                //   <Link href={link.href}>
                //     <span className="text-sm">{link.text}</span>
                //   </Link>
                // </motion.li>
                <li
                  key={index}

                  className="mb-1.5">
                  <Link href={link.href}>
                    <span className="text-xs">{link.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden md:block">
            <span className="text-sm flex font-semibold mb-3">Recent Projects</span>
            <ul>
              {ProjectCardList.slice(0, 5).map((link, index) => (
                // <motion.li
                //   key={index}
                //   variants={fadeInAnimationsVariants}
                //   initial="initial"
                //   whileInView="animate"
                //   ref={ref}
                //   animate={controls}
                //   viewport={{ once: true }}
                //   custom={index}
                //   className="mb-2">
                //   <Link href={link.projectLink}>
                //     <span className="text-sm">{link.title}</span>
                //   </Link>
                // </motion.li>
                <li
                  key={index}
                  className="mb-1.5">
                  <Link href={link.projectLink}>
                    <span className="text-xs">{link.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col">
            <span className="text-sm flex font-semibold mb-3 md:justify-end">
              Connect with me
            </span>
            <div className="flex justify-start md:justify-end gap-5 mt-1">
              {footerLinks.map((link, index) => (
                // <motion.a
                //   key={index}
                //   variants={fadeInAnimationsVariantsX}
                //   initial="initial"
                //   whileInView="animate"
                //   ref={ref}
                //   animate={controls}
                //   viewport={{ once: true }}
                //   custom={index}
                //   href={link.href}
                //   target="_blank"
                //   rel="noopener noreferrer"
                //   className="text-sm">
                //   {link.icon}
                // </motion.a>
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-xs">
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground mb-3 md:mb-0">
            &copy; {new Date().getFullYear()} Abdullah Saeed. All rights reserved.
          </p>

          <div className="flex items-center space-x-3">
            {/* ... existing social links ... */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
