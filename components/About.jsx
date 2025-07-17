"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView, useAnimation } from "framer-motion";
import { CheckCircle2, BrainCircuit, Code2, Github, Cpu, Database } from "lucide-react";

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
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Building & Learning</h3>
            <p className="text-gray-700 text-xs leading-relaxed">
              Today, I'm building full-stack applications, exploring machine learning, and occasionally contributing to research when interesting problems arise. Whether it's developing a Next.js app or investigating AI applications, I approach each project with the same systematic curiosity that started with those redstone circuits – always asking how things work and how they can work better.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
