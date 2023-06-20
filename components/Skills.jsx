import Image from "next/image";
import React from "react";
import Html from "../public/assets/skills/html.png";
import Css from "../public/assets/skills/css.png";
import Javascript from "../public/assets/skills/javascript.png";
import ReactImg from "../public/assets/skills/react.png";
import Tailwind from "../public/assets/skills/tailwind.png";
import Github from "../public/assets/skills/github1.png";
import NextJS from "../public/assets/skills/nextjs.png";
import nextauth from "../public/assets/skills/nextauth.png";

const Skills = () => {
  return (
    <section id="Skills" className=" w-full flex-col flex-center items-center ">
      <div className=" max-w-7xl px-2 lg:px-8 ">
        
          <h3 className="head_text text-align text-center">
            
            <span className="green_gradient">My Skills</span>
          </h3>
        
      </div>

      <div className="grid glassmorphism mt-5 grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="p-5 shadow-md rounded-xl hover:scale-105 ease-in duration-300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image src={Tailwind} width="64px" height="64px" alt="/" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3>Tailwind</h3>
            </div>
          </div>
        </div>

        <div className="p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image src={Github} width="64px" height="64px" alt="/" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3>Github</h3>
            </div>
          </div>
        </div>
        <div className="p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image src={NextJS} width="64px" height="64px" alt="/" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3>Next</h3>
            </div>
          </div>
        </div>
        <div className="p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image src={nextauth} width="64px" height="64px" alt="/" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3>Next-Auth</h3>
            </div>
          </div>
        </div>
        <div className="p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image src={Html} width="64px" height="64px" alt="/" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3>HTML</h3>
            </div>
          </div>
        </div>
        <div className="p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image src={Css} width="64px" height="64px" alt="/" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3>CSS</h3>
            </div>
          </div>
        </div>
        <div className="p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image src={Javascript} width="64px" height="64px" alt="/" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3>JS</h3>
            </div>
          </div>
        </div>
        <div className="p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image src={ReactImg} width="64px" height="64px" alt="/" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3>React</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
