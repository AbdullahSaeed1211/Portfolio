"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ProjectCardList } from "@app/constants";
import { FaGithub } from "react-icons/fa";
import { AiOutlineLink } from "react-icons/ai";
import { motion, useInView, useAnimation } from "framer-motion";

// const staggerVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: (custom) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.5,
//       delay: custom * 0.2, // Adjust the delay timing as needed
//     },
//   }),
// };

const Project = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView]);

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

  return (
    <>
      <section ref={ref} id="Projects" className="flex-center w-full flex-col">
        <motion.div
          variants={{
            hidden: {opacity: 0, x: -100},
            visible: {opacity: 1, x: 0},
          }}
          initial="hidden"
          animate={controls}
          transition={{duration: 0.45, delay: 0.25}}
      
          className="flex-col md:flex-auto">
          <h2 className="head_text text-center md:text-left">
            <br className="max-lg:hidden" />
            <span className="pink_gradient">Highlighted Projects</span>
          </h2>
        </motion.div>
        <br className="hidden md:block" />
        <hr />

        <div className="mx-auto w-full py-6">
          {ProjectCardList.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeInAnimationsVariants}
              initial="initial"
              whileInView="animate"
              ref={ref}
              animate={controls}
              viewport={{ once: true }}
              custom={index}
              className={`w-full md:flex ${
                index % 2 === 0 ? "" : "md:flex-row-reverse"
              } space-y-4 md:space-y-2 relative rounded-xl md:h-fit hover:opacity-90 hover:cursor-pointer shadow-md mb-4 border-2`}>
              <div className="w-full md:w-1/2">
                <img
                  src={project.imgSrc}
                  alt={project.title}
                  className="z-5 h-full w-full object-fit sm:object-fit"
                />
              </div>

              <div className="w-full md:w-1/2 p-4 md:border-l md:border-gray-900/10 flex flex-col justify-between">
                <div>
                  <h1 className="text-2xl font-semibold text-black">
                    {project.title}
                  </h1>
                  <p className="my-2  text-gray-600 text-sm md:text-md lg:text-xl">
                    {project.description}
                  </p>
                </div>

                <div className="mt-auto flex flex-between justify-between">
                  <Link
                    href={project.projectLink}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="black_btn">
                    <div className="mr-2">
                      <AiOutlineLink />
                    </div>
                    Visit Now
                  </Link>
                  <Link
                    href={project.projectLinkGithub}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="black_btn">
                    <div className="mr-2">
                      <FaGithub />
                    </div>
                    View on Github
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Project;
