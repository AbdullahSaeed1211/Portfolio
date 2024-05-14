"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 50, // Start from 50px below
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35,
        when: "beforeChildren",
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <motion.section
      className="w-full min-h-screen flex-center flex-col  md:flex-left md:flex-row"
      variants={containerVariants}
      initial="hidden"
      animate="visible">
      <div className="flex-col md:flex-auto">
        <motion.h2
          className="head_text text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}>
          Hello, My name is
          <br className="max-lg:hidden" />
          <span className="cyan_gradient"> Abdullah Saeed</span>
        </motion.h2>
        <motion.p
          className="desc text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}>
          Software & Web-Developer
        </motion.p>
      </div>
      <div className="sm:mt-5">
        <motion.div variants={imageVariants} initial="hidden" animate="visible">
           <div className="relative items-center w-[375px] h-[375px] sm:h-[300px] sm:w-[300px] lg:h-[600px] lg:w-[600px] -z-10">
            <Image
              className="mt-5 object-cover"
              src={"/assets/images/logo2.svg"}
              alt={"Hero pic"}
              fill
            />
          </div>
           
        </motion.div>
      </div>
      <hr />
    </motion.section>
  );
};

export default Hero;
