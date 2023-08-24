import React from "react";
import { footerLinks } from "@app/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <section id="Footer" className="w-full">
      <footer className=" mb-16 flex flex-grow justify-between ">
        <div className="mt-6 desc">
          <span className="font-medium">Abdullah Saeed @ 2023</span>
          <p className=" leading-7 font-montserrat mt-2">
            Let's collaborate
          </p>
        </div>
        <div className="flex flex-col mt-6 items-end desc">
          <p>Connect with me</p>
          <div className="flex flex-row gap-10 mt-4">
            {footerLinks.map((link, index) => (
              <Link href={link.href} key={index} className="footer-icon">
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
