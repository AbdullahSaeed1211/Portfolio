'use client'
import React from "react";
import Image from "next/image";
import { skillsData } from "@app/constants";

const repeatedSkillsData = [...skillsData, ...skillsData];

const Skills = () => {
  return (
    <section id="Skills" className="w-full flex-col flex-center mt-10 items-center">
      <div className="max-w-7xl">
        <h3 className="head_text text-align text-center mb-8">
          <span className="green_gradient">My Skills</span>
        </h3>
      </div>

      <div
        id="skills-container"
        className="overflow-x-scroll my-3 whitespace-nowrap rounded-md shadow-sm"
        style={{ maxWidth: "100%" }}
      >
        {repeatedSkillsData.map((skill, index) => (
          <div
            key={index}
            className="p-3 shadow-md rounded-md ease-in inline-block"
          >
            <div className="grid grid-cols-2 gap-1 justify-center items-center">
              <div className="items-center">
                <Image
                  src={skill.imgSrc}
                  width={100}
                  height={100}
                  alt={skill.alt}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>{skill.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;