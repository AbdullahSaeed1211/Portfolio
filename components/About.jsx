"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView, useAnimation } from "framer-motion";
import { CheckCircle2, BrainCircuit, Code2, Github } from "lucide-react";

const About = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const skills = [
    { name: "AI Integration", icon: <BrainCircuit className="w-4 h-4" /> },
    { name: "Next.js & React", icon: <Code2 className="w-4 h-4" /> },
    { name: "TypeScript", icon: <Code2 className="w-4 h-4" /> },
    { name: "Database Architecture", icon: <Code2 className="w-4 h-4" /> },
    { name: "Open Source Contribution", icon: <Github className="w-4 h-4" /> },
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
          <div className="relative w-full h-[400px] overflow-hidden rounded-xl">
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
              <div className="text-2xl font-bold text-gray-900">3+</div>
              <div className="text-xs text-gray-600">Years of Development</div>
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
            <h4 className="text-red-600 font-medium text-sm mb-2">ABOUT ME</h4>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              <span className="red_gradient">Transforming Ideas into Digital Reality</span>
            </h2>
            
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              I'm a results-focused developer specializing in AI-enhanced web applications that solve real business challenges. With a Computer Science and Engineering background, I combine technical expertise with business acumen to create solutions that drive measurable results.
            </p>
            
            <p className="text-gray-700 text-sm leading-relaxed">
              My development approach centers on three core principles: <span className="font-semibold">user-centric design</span>, <span className="font-semibold">performance optimization</span>, and <span className="font-semibold">business impact</span>. Every project I undertake is measured not just by code quality, but by how effectively it solves the underlying business problem.
            </p>
          </div>
          
          {/* Skills */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Core Competencies</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="text-red-600">
                    {skill.icon}
                  </div>
                  <span className="text-gray-700 text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Personal Journey */}
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-2">My Journey</h3>
            <p className="text-gray-700 text-xs leading-relaxed">
              I started as a coding enthusiast solving algorithm puzzles, which evolved into building real-world applications that address specific business challenges. Today, I specialize in creating scalable, AI-enhanced web solutions that help businesses reach broader audiences and achieve tangible growth. My mission is to bridge the gap between cutting-edge technology and practical business applications.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
