"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Github, Linkedin, Mail, MapPin, Code2, BrainCircuit, Cpu } from "lucide-react";
import About from "./About";


const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, staggerChildren: 0.2 },
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
      ease: [0.25, 0.46, 0.45, 0.94] // Custom easing for smoother feel
    }
  },
};

// Enhanced image animation
const imageVariants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    y: 50,
    filter: "blur(10px)"
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: [0.25, 0.46, 0.45, 0.94],
      scale: {
        type: "spring",
        damping: 20,
        stiffness: 100
      }
    }
  },
};

// Floating animation for the badge
const floatingVariants = {
  hidden: { opacity: 0, y: -20, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      type: "spring",
      damping: 15,
      stiffness: 120
    }
  },
  float: {
    y: [0, -8, 0],
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
    }
  }
};

// Social icons with staggered entrance


const Hero = () => {
  /* Mouse Move Parallax Logic */
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      setMousePosition({
        x: (clientX - centerX) / 25,
        y: (clientY - centerY) / 25,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="w-full min-h-screen pt-20 pb-6 sm:pb-2 relative overflow-hidden">
      {/* Subtle background animation - only for light mode */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Location Badge with floating animation */}
          <motion.div
            variants={floatingVariants}
            animate={["visible", "float"]}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs sm:text-sm font-medium mb-6 sm:mb-8 backdrop-blur-sm"
              aria-label="Location and Availability"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 25px rgba(59, 130, 246, 0.15)",
              }}
              transition={{ type: "spring", damping: 15, stiffness: 200 }}
            >
              <span className="flex items-center gap-1">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <MapPin className="w-4 h-4" aria-hidden="true" />
                </motion.div>
                Available Globally
              </span>
              <span className="w-1 h-1 bg-blue-400 rounded-full" aria-hidden="true" />
              <span>Full Stack Developer</span>
            </motion.div>
          </motion.div>

          {/* Heading with enhanced animation */}
          <motion.div variants={child}>
            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
            >
              Abdullah Saeed | AI & Full-Stack Engineer{" "}
              <motion.span
                className="inline-block"
                animate={{
                  rotate: [0, 20, -10, 20, 0],
                  scale: [1, 1.1, 1, 1.1, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 4,
                  ease: "easeInOut"
                }}
              >
                👋
              </motion.span>
            </motion.h1>
            <motion.p
              className="mt-2 text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              I build AI-Powered Web Solutions with Impact.
              <br />
              {/* <span className="text-xs text-muted-foreground mt-1 block">
                (Not the actor/comedian — I engineer software, not jokes)
              </span> */}
            </motion.p>
          </motion.div>

          {/* Hero Image with Floating Skill Cards & Parallax */}
          <motion.div
            variants={imageVariants}
            className="max-w-7xl mx-auto mt-6 sm:mt-8 relative"
            style={{
              perspective: 1000,
              x: mousePosition.x * -1, // Opposite direction for depth
              y: mousePosition.y * -1
            }}
          >
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden relative"
              whileHover={{
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.1)",
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="relative w-full aspect-video"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Image
                  src="/heroimgtry.png"
                  alt="Portfolio cover artwork showing mountains and night sky"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
                />
              </motion.div>
            </motion.div>

            {/* Floating Glassmorphic Skill Cards with Magnetic Parallax */}
            {/* Full-Stack Card - Top Left */}
            <motion.div
              initial={{ opacity: 0, x: -50, y: -30 }}
              animate={{
                opacity: 1,
                x: mousePosition.x * 1.2,
                y: mousePosition.y * 1.2,
                z: 20
              }}
              transition={{ delay: 0.2, duration: 0.8, type: "spring", damping: 15, stiffness: 100 }}
              className="absolute top-[10%] left-[2%] bg-white/20 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-white/30 max-w-[280px] hidden lg:block z-30"
              style={{
                backdropFilter: 'blur(20px) saturate(180%)',
                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                background: 'rgba(255, 255, 255, 0.15)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.4)'
              }}
              whileHover={{
                scale: 1.05,
                y: -8,
                background: 'rgba(255, 255, 255, 0.25)',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.5)'
              }}
            >
              <div className="flex items-start gap-3">
                <motion.div
                  className="bg-blue-500/20 backdrop-blur-sm p-2 rounded-xl border border-blue-300/30"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Code2 className="w-5 h-5 text-blue-100" />
                </motion.div>
                <div>
                  <h3 className="font-semibold text-white text-sm drop-shadow-sm">Full-Stack Development</h3>
                  <p className="text-xs text-white/80 mt-1 drop-shadow-sm">Next.js, React, Node.js - building complete web applications</p>
                </div>
              </div>
            </motion.div>

            {/* Machine Learning Card - Top Right */}
            <motion.div
              initial={{ opacity: 0, x: 50, y: -30 }}
              animate={{
                opacity: 1,
                x: mousePosition.x * -2.5,
                y: mousePosition.y * 1.5,
                z: 80
              }}
              transition={{ delay: 0.4, duration: 0.8, type: "spring", damping: 15, stiffness: 100 }}
              className="absolute top-[25%] right-[2%] bg-white/20 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-white/30 max-w-[280px] hidden lg:block z-40"
              style={{
                backdropFilter: 'blur(20px) saturate(180%)',
                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                background: 'rgba(255, 255, 255, 0.15)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.4)'
              }}
              whileHover={{
                scale: 1.05,
                y: -8,
                background: 'rgba(255, 255, 255, 0.25)',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.5)'
              }}
            >
              <div className="flex items-start gap-3">
                <motion.div
                  className="bg-green-500/20 backdrop-blur-sm p-2 rounded-xl border border-green-300/30"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <BrainCircuit className="w-5 h-5 text-green-100" />
                </motion.div>
                <div>
                  <h3 className="font-semibold text-white text-sm drop-shadow-sm">Machine Learning</h3>
                  <p className="text-xs text-white/80 mt-1 drop-shadow-sm">AI applications and research projects in healthcare</p>
                </div>
              </div>
            </motion.div>

            {/* System Design Card - Bottom Left */}
            <motion.div
              initial={{ opacity: 0, x: -50, y: 30 }}
              animate={{
                opacity: 1,
                x: mousePosition.x * 1.8,
                y: mousePosition.y * -1.2,
                z: 30
              }}
              transition={{ delay: 0.6, duration: 0.8, type: "spring", damping: 15, stiffness: 100 }}
              className="absolute bottom-[10%] left-[15%] bg-white/20 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-white/30 max-w-[280px] hidden lg:block z-30"
              style={{
                backdropFilter: 'blur(20px) saturate(180%)',
                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                background: 'rgba(255, 255, 255, 0.15)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.4)'
              }}
              whileHover={{
                scale: 1.05,
                y: -8,
                background: 'rgba(255, 255, 255, 0.25)',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.5)'
              }}
            >
              <div className="flex items-start gap-3">
                <motion.div
                  className="bg-purple-500/20 backdrop-blur-sm p-2 rounded-xl border border-purple-300/30"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Cpu className="w-5 h-5 text-purple-100" />
                </motion.div>
                <div>
                  <h3 className="font-semibold text-white text-sm drop-shadow-sm">System Design</h3>
                  <p className="text-xs text-white/80 mt-1 drop-shadow-sm">Creating scalable applications that can handle real users</p>
                </div>
              </div>
            </motion.div>



          </motion.div>
        </motion.div>
      </div>
      <About />
    </section >
  );
};

export default Hero;