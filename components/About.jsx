"use client";
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Skills2 from "./skills2";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { BlurFade } from "@/components/magicui/blur-fade";

const About = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);
  const socialContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.5 },
    },
  };
  const child = {
    hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94], // Custom easing for smoother feel
      },
    },
  };
  const socialChild = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200,
      },
    },
  };

  const socials = [
    {
      href: "https://github.com/AbdullahSaeed1211",
      label: "GitHub",
      icon: Github,
    },
    {
      href: "https://linkedin.com/in/abdullah-saeed1211",
      label: "LinkedIn",
      icon: Linkedin,
    },
    {
      href: "mailto:abdullah.saeed1724@gmail.com",
      label: "Email",
      icon: Mail,
    },
  ];
  return (
    <section
      ref={ref}
      id="About"
      className="w-full mx-auto md:px-4 sm:px-6 md:py-5 pt-5"
    >
      {/* Content */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="space-y-6 text-left mx-auto"
      >
        {/* Professional Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p className="text-base sm:text-lg md:text-3xl lg:text-4xl text-black dark:text-white leading-relaxed font-normal">
            I am a{" "}
            <span className="italic underline font-semibold font-serif-italic">
              Software Engineer
            </span>{" "}
            <br /> with hands-on experience building products across <br />{" "}
            <span className="italic font-semibold underline font-serif-italic">
              Web, ML, and Fullstack systems
            </span>
            .
          </p>

          <p className="text-sm sm:text-base md:text-lg text-black dark:text-white leading-relaxed font-light mt-3">
            I design and ship fullstack, ML-driven applications and SaaS
            platforms <br />
            — engineered for performance, scalability, and real-world impact.
            <br />
            <span className="block mt-2">
              Currently building at{" "}
              <span className="font-semibold">kiiro.cx</span> and pursuing{" "}
              <span className="font-semibold">CS Grad 2025</span>.
            </span>
          </p>
        </motion.div>
        {/* Action Buttons with enhanced animations */}
        <motion.div variants={child} className="flex justify-start">
          <BlurFade
            delay={0.7}
            direction="up"
            className="flex flex-col md:flex-row gap-3 sm:gap-4 mt-6"
          >
            <motion.div
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ y: 0, scale: 0.98 }}
              transition={{ type: "spring", damping: 15, stiffness: 200 }}
            >
              <InteractiveHoverButton
                onClick={() =>
                  document
                    .getElementById("Projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="w-full sm:w-auto mx-auto sm:mx-0 text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:shadow-lg border-transparent py-2.5 sm:py-2.5 text-sm font-medium transition-all duration-300"
              >
                See What I've Built
              </InteractiveHoverButton>
            </motion.div>

            <motion.a
              href="#value"
              className="w-full sm:w-auto mx-auto sm:mx-0 flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-2.5 rounded-full bg-background border border-border text-foreground font-medium text-sm hover:bg-accent/50 transition-all duration-300 group"
              whileHover={{
                y: -3,
                scale: 1.02,
                boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)",
              }}
              whileTap={{ y: 0, scale: 0.98 }}
              transition={{ type: "spring", damping: 15, stiffness: 200 }}
            >
              About My Journey
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>
          </BlurFade>
        </motion.div>
      </motion.div>
      {/* Skills Marquee below hero image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.8 }}
        className="mt-2"
      >
        <Skills2 />
      </motion.div>
      <motion.div
        variants={socialContainer}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap justify-center gap-5 sm:gap-6 my-6 sm:my-8"
      >
        {socials.map(({ href, label, icon: Icon }, index) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="p-3 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 shadow hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 dark:focus:ring-gray-600 hover:scale-110 hover:-translate-y-1 transform"
          >
            <Icon className="w-5 h-5" />
          </a>
        ))}
      </motion.div>
    </section>
  );
};

export default About;
