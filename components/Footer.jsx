"use client";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Footer = () => {
  return (
    <section id="Footer" className="pt-30">
        <hr />
      <br />
      <p className="tracking-widest text-[#5651e5] purple_gradient px-10 py-10">
        Abdullah Saeed @ 2023, All Rights Reserved
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
        <Link href="/resume">
          <div
            onClick={() => setNav(!nav)}
            className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
            <BsFillPersonLinesFill />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Footer;
