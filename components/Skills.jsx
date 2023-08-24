"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import { skillsData } from "@app/constants";

const repeatedSkillsData = [...skillsData, ...skillsData]; // Clone and concatenate

const Skills = () => {
  useEffect(() => {
    // Function to initiate auto-scrolling
    const scrollContainer = document.getElementById("skills-container");

    const scroll = () => {
      scrollContainer.scrollLeft += 2; // Adjust scroll speed as needed
    };

    const interval = setInterval(scroll, 50); // Adjust scroll interval as needed

    // Cleanup on unmount
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section id="Skills" className="w-full flex-col flex-center items-center">
      <div className="max-w-7xl px-2 lg:px-8">
        <h3 className="head_text text-align text-center">
          <span className="green_gradient">My Skills</span>
        </h3>
      </div>

      <div
        id="skills-container"
        className="overflow-x-scroll mt-5 whitespace-nowrap">
        {repeatedSkillsData.map((skill, index) => (
          <div
            key={index}
            className="p-3 shadow-md rounded-xl ease-in duration-300 inline-block">
            <div className="grid grid-cols-2 gap-2 justify-center items-center">
              <div className=" items-center">
                <Image
                  src={skill.imgSrc}
                  width={50}
                  height={50}
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
