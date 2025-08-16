"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, MapPin, Code2, BrainCircuit, Cpu } from "lucide-react";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { BlurFade } from "@/components/magicui/blur-fade";

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
const socialContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.5 }
  }
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
      stiffness: 200
    }
  }
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

const Hero = () => (
  <section className="w-full min-h-screen pt-20 pb-12 relative overflow-hidden">
    {/* Subtle background animation */}
    <motion.div 
      className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-cyan-50/30"
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
              Based in India
            </span>
            <span className="w-1 h-1 bg-blue-400 rounded-full" aria-hidden="true" />
            <span>Full Stack Developer</span>
          </motion.div>
        </motion.div>

        {/* Heading with enhanced animation */}
        <motion.div variants={child}>
          <motion.h1 
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
          >
            Hey, I&apos;m Abdullah Saeed{" "}
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
            className="mt-2 text-gray-600 text-sm sm:text-base max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            I build AI-Powered Web Solutions with Impact
          </motion.p>
        </motion.div>

        {/* Hero Image with Floating Skill Cards */}
        <motion.div 
          variants={imageVariants} 
          className="max-w-7xl mx-auto mt-6 sm:mt-8 relative"
          whileHover={{ 
            scale: 1.01,
          }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          style={{ perspective: 1000 }}
        >
          <motion.div 
            className="bg-white rounded-xl shadow-lg overflow-hidden relative"
            whileHover={{ 
              boxShadow: "0 25px 50px rgba(0, 0, 0, 0.1)",
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              src="/heroimgtry.png"
              className="w-full aspect-video object-cover"
              alt="Portfolio cover artwork showing mountains and night sky"
              loading="lazy"
              draggable={false}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
            
            {/* Floating Glassmorphic Skill Cards */}
            {/* Full-Stack Card - Top Left */}
            <motion.div
              initial={{ opacity: 0, x: -50, y: -30 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8, type: "spring", damping: 15, stiffness: 100 }}
              className="absolute top-4 left-4 bg-white/20 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-white/30 max-w-[280px] hidden lg:block"
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
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8, type: "spring", damping: 15, stiffness: 100 }}
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-white/30 max-w-[280px] hidden lg:block"
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
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 1.6, duration: 0.8, type: "spring", damping: 15, stiffness: 100 }}
              className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-white/30 max-w-[280px] hidden lg:block"
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
            
            {/* Continuous Learning Card - Bottom Right */}
            <motion.div
              initial={{ opacity: 0, x: 50, y: 30 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8, type: "spring", damping: 15, stiffness: 100 }}
              className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-white/30 max-w-[280px] hidden lg:block"
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
                  className="bg-orange-500/20 backdrop-blur-sm p-2 rounded-xl border border-orange-300/30"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Github className="w-5 h-5 text-orange-100" />
                </motion.div>
                <div>
                  <h3 className="font-semibold text-white text-sm drop-shadow-sm">Continuous Learning</h3>
                  <p className="text-xs text-white/80 mt-1 drop-shadow-sm">Always exploring new technologies and better ways to solve problems</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Action Buttons with enhanced animations */}
        <motion.div variants={child} className="flex justify-center">
          <BlurFade delay={0.7} direction="up" className="flex flex-col md:flex-row gap-3 sm:gap-4 mt-6">
            <motion.div
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ y: 0, scale: 0.98 }}
              transition={{ type: "spring", damping: 15, stiffness: 200 }}
            >
              <InteractiveHoverButton
                onClick={() => document.getElementById('Projects')?.scrollIntoView({ behavior: 'smooth' })} 
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
                boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)"
              }}
              whileTap={{ y: 0, scale: 0.98 }}
              transition={{ type: "spring", damping: 15, stiffness: 200 }}
            >
              About My Journey
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>
          </BlurFade>
        </motion.div>

        {/* Enhanced Social Links */}
        <motion.div
          variants={socialContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center gap-5 sm:gap-6 my-6 sm:my-8"
        >
          {socials.map(({ href, label, icon: Icon }, index) => (
            <motion.a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              variants={socialChild}
              className="p-3 rounded-full bg-white border border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-300 transition shadow hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
              whileHover={{ 
                scale: 1.15,
                y: -5,
                rotate: [0, -5, 5, 0],
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)"
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ 
                type: "spring", 
                damping: 12, 
                stiffness: 200,
                rotate: { duration: 0.3 }
              }}
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>


        </motion.div>
    </div>
  </section>
);

export default Hero;