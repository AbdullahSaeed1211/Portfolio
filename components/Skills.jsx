'use client'
import React,{useEffect,useRef} from "react";
import Image from "next/image";
import { skillsData } from "@app/constants";
import { motion, useInView, useAnimation } from "framer-motion";

const repeatedSkillsData = [...skillsData, ...skillsData];

const Skills = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref,{once: true});
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView]);
  return (
    <section ref={ref} id="Skills" className="w-full flex-col flex-center mt-10 items-center">
      <div className="max-w-7xl">
        <h3 className="head_text text-align text-center mb-8">
          <span className="green_gradient">My Skills</span>
        </h3>
      </div>

      <motion.div
      variants={{
        hidden: {opacity: 0, y: 75},
        visible: {opacity: 1, y: 0},
      }}
      initial="hidden"
      animate={controls}
      transition={{duration: 0.25, delay: 0.1}}
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
      </motion.div>
    </section>
  );
};

export default Skills;