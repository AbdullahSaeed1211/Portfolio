"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Code, Rocket } from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { AnimatedBeam } from "@/components/magicui/animated-beam";


const Hero = () => {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const imageRef = useRef(null);

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="w-full min-h-screen pt-28 sm:pt-32 pb-8 lg:pt-24 lg:pb-0 flex flex-col lg:flex-row items-center justify-center relative"
    >
      {/* Animated beam connecting headline to image - only visible on desktop */}
      <div className="hidden lg:block">
        <AnimatedBeam 
          containerRef={containerRef} 
          fromRef={headingRef} 
          toRef={imageRef}
          gradientStartColor="#3b82f6"
          gradientStopColor="#06b6d4"
          curvature={100}
          duration={3}
          pathWidth={1.5}
        />
      </div>
      
      {/* Left Content */}
      <motion.div
        className="w-full lg:w-1/2 lg:pr-12 z-10 px-4"
      variants={containerVariants}
      initial="hidden"
        animate="visible"
      >
        <BlurFade 
          direction="left" 
          delay={0.1} 
          className="space-y-2"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950 border border-blue-100 dark:border-blue-900 text-blue-700 dark:text-blue-400 text-xs sm:text-sm font-medium mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Developer & Problem Solver
          </div>
        </BlurFade>
        
        <BlurFade delay={0.3} direction="up">
          <h1
            ref={headingRef}
            className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6"
          >
            Building <span className="cyan_gradient">Digital Solutions</span> That <span className="blue_gradient">Actually Work</span>
          </h1>
        </BlurFade>

        <BlurFade delay={0.5} direction="up">
          <p className="text-base sm:text-lg md:text-lg mb-6 sm:mb-8 max-w-2xl text-muted-foreground">
            I specialize in building AI-powered web applications that solve real business challenges. Combining cutting-edge technology with strategic thinking to deliver solutions that transform ideas into measurable results.
          </p>
        </BlurFade>

        <BlurFade delay={0.7} direction="up" className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <InteractiveHoverButton
            onClick={() => document.getElementById('Projects')?.scrollIntoView({ behavior: 'smooth' })} 
            className="w-full sm:w-auto mx-auto sm:mx-0 text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:shadow-lg border-transparent py-2.5 sm:py-2.5 text-sm font-medium transition-all duration-300"
          >
            See What I've Built
          </InteractiveHoverButton>
          
          <motion.a
            href="#value"
            className="w-full sm:w-auto mx-auto sm:mx-0 flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-2.5 rounded-full bg-background border border-border text-foreground font-medium text-sm hover:bg-accent/50 transition-all duration-300 group"
            whileHover={{ y: -3 }}
            whileTap={{ y: 0 }}
          >
            About My Journey
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.a>
        </BlurFade>

        {/* Key Value Propositions - show only two items per row on mobile */}
        <BlurFade delay={0.9} direction="up" className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs">
          <div className="flex items-start gap-3 p-3 rounded-lg bg-background border border-border hover:shadow-md transition-all">
            <div className="flex-shrink-0 p-2 rounded-md bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400">
              <Code className="w-3.5 h-3.5" />
            </div>
            <div>
              <h3 className="font-medium mb-1 text-xs">Full-Stack Development</h3>
              <p className="text-muted-foreground text-[10px]">Next.js, React, Node.js - building complete web applications</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 p-3 rounded-lg bg-background border border-border hover:shadow-md transition-all">
            <div className="flex-shrink-0 p-2 rounded-md bg-green-100 dark:bg-green-950 text-green-600 dark:text-green-400">
              <Sparkles className="w-3.5 h-3.5" />
            </div>
            <div>
              <h3 className="font-medium mb-1 text-xs">Machine Learning</h3>
              <p className="text-muted-foreground text-[10px]">AI applications and research projects in healthcare</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 p-3 rounded-lg bg-background border border-border hover:shadow-md transition-all">
            <div className="flex-shrink-0 p-2 rounded-md bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-400">
              <Zap className="w-3.5 h-3.5" />
            </div>
            <div>
              <h3 className="font-medium mb-1 text-xs">System Design</h3>
              <p className="text-muted-foreground text-[10px]">Creating scalable applications that can handle real users</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 p-3 rounded-lg bg-background border border-border hover:shadow-md transition-all">
            <div className="flex-shrink-0 p-2 rounded-md bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400">
              <Rocket className="w-3.5 h-3.5" />
            </div>
            <div>
              <h3 className="font-medium mb-1 text-xs">Continuous Learning</h3>
              <p className="text-muted-foreground text-[10px]">Always exploring new technologies and better ways to solve problems</p>
            </div>
          </div>
        </BlurFade>
      </motion.div>

      {/* Right Content - Image */}
      <motion.div
        className="w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-center relative z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ 
          duration: 0.6, 
          delay: 0.3,
          type: "spring",
          stiffness: 100
        }}
      >
        <div className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px]">
          {/* Animated gradient background */}
          <div className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 opacity-30 blur-xl animate-pulse"></div>
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl" ref={imageRef}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 mix-blend-overlay"></div>
            <Image
              src="/assets/images/logo2.svg"
              alt="Hero illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
           
          {/* Floating badges */}
          <motion.div 
            className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-full shadow-lg p-3 border border-gray-100 dark:border-gray-700"
            animate={{ 
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <Image 
              src="/assets/Skills/nextjs.png" 
              alt="Next.js" 
              width={30} 
              height={30} 
            />
          </motion.div>
          
          <motion.div 
            className="absolute bottom-12 -left-6 bg-white dark:bg-gray-800 rounded-full shadow-lg p-3 border border-gray-100 dark:border-gray-700"
            animate={{ 
              y: [0, 10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1
            }}
          >
            <Image 
              src="/assets/Skills/react.png" 
              alt="React" 
              width={30} 
              height={30} 
            />
          </motion.div>
          
          <motion.div 
            className="absolute bottom-4 right-10 bg-white dark:bg-gray-800 rounded-full shadow-lg p-3 border border-gray-100 dark:border-gray-700"
            animate={{ 
              y: [0, 8, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 0.5
            }}
          >
            <Image 
              src="/assets/Skills/tailwind.png" 
              alt="Tailwind" 
              width={30} 
              height={30} 
            />
        </motion.div>
      </div>
      </motion.div>
    </section>
  );
};

export default Hero;
