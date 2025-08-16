"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView, useAnimation } from "framer-motion";
import {  BrainCircuit, Code2, Github, Cpu, Database, Zap } from "lucide-react";

const About = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const journey = [
    { name: "Redstone Engineering", icon: <Cpu className="w-4 h-4" /> },
    { name: "Web Development", icon: <Code2 className="w-4 h-4" /> },
    { name: "System Design", icon: <BrainCircuit className="w-4 h-4" /> },
    { name: "Machine Learning", icon: <Database className="w-4 h-4" /> },
    { name: "Research & Papers", icon: <Github className="w-4 h-4" /> },
  ];

  return (
    <section
      ref={ref}
      id="About"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-20">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Image Column */}
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative">
          <div className="absolute -inset-4 bg-gradient-to-tr from-red-200 to-red-100 rounded-xl opacity-60 blur-lg"></div>
          <div className="relative w-full h-[400px] lg:h-[800px] overflow-hidden rounded-xl">
            <Image
              src="/assets/images/AboutMe.png"
              alt="Abdullah Saeed"
              fill
              className="object-contain"
            />
          </div>
          
          {/* Stats Overlay */}
          <div className="absolute -bottom-6 -right-6 bg-white p-3 rounded-lg shadow-xl">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">2</div>
              <div className="text-xs text-gray-600">IEEE Publications</div>
            </div>
          </div>
        </motion.div>
        
        {/* Content Column */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-6">
          
          <div>
            <h4 className="text-red-600 font-medium text-sm mb-2">FROM REDSTONE TO RESEARCH</h4>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              <span className="red_gradient">Where It All Started</span>
            </h2>
            
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              In the pixelated world of Minecraft, my first lines of 'code' were intricate redstone contraptions – automated sorters, complex transportation systems, and self-sustaining farms. What began as childhood play became my earliest lesson in computational thinking, where every circuit and comparator revealed the elegant logic underlying technological innovation.
            </p>
            
            <p className="text-gray-700 text-sm leading-relaxed">
              Little did I know that these virtual engineering experiments would spark a lifelong passion for understanding how systems work and how to build them better. That curiosity evolved into developing real applications, exploring AI research, and creating solutions that solve actual problems.
            </p>
          </div>
          
          {/* Journey */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Evolution of Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {journey.map((step, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="text-red-600">
                    {step.icon}
                  </div>
                  <span className="text-gray-700 text-sm">{step.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Current Focus */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              delay: 1.1, 
              duration: 0.7,
              type: "spring",
              damping: 20,
              stiffness: 100
            }}
            className="relative"
          >
            <motion.div 
              className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200 relative overflow-hidden"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
              }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
            >
              {/* Subtle background animation */}
              <motion.div
                className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-100 to-transparent rounded-full opacity-30"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 180]
                }}
                transition={{ 
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              <motion.h3 
                className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", damping: 20, stiffness: 300 }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Zap className="w-5 h-5 text-red-500" />
                </motion.div>
                Building & Learning
              </motion.h3>
              
              <motion.p 
                className="text-gray-700 text-sm leading-relaxed relative z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3, duration: 0.6 }}
              >
                Today, I'm building full-stack applications, exploring machine learning, and occasionally contributing to research when interesting problems arise. Whether it's developing a Next.js app or investigating AI applications, I approach each project with the same systematic curiosity that started with those redstone circuits – always asking how things work and how they can work better.
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
