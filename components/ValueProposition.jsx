"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { BrainCircuit, Zap, Globe, ArrowUpRight, Layers, Code2 } from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";

const ValueProposition = () => {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const values = [
    {
      icon: BrainCircuit,
      name: "AI Integration Specialist",
      description:
        "I turn complex AI capabilities into practical, user-friendly solutions that solve real business problems. From speech recognition to machine learning, I make AI accessible and valuable.",
      cta: "Learn More",
      href: "#Projects",
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100/60 to-indigo-100/30 dark:from-purple-950/20 dark:to-indigo-950/10 opacity-70" />
      ),
    },
    {
      icon: Zap,
      name: "Business-First Development",
      description:
        "Every line of code I write focuses on driving measurable business outcomes. I don't just build features; I create solutions that increase engagement, conversion, and revenue.",
      cta: "See Projects",
      href: "#Projects",
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100/60 to-orange-100/30 dark:from-amber-950/20 dark:to-orange-950/10 opacity-70" />
      ),
    },
    {
      icon: Globe,
      name: "Full Stack Expertise",
      description:
        "With deep knowledge of both frontend (Next.js, React, Tailwind) and backend (Node.js, MongoDB), I build cohesive systems that deliver excellent user experiences and robust functionality.",
      cta: "Learn More",
      href: "#Skills",
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/60 to-cyan-100/30 dark:from-blue-950/20 dark:to-cyan-950/10 opacity-70" />
      ),
    },
    {
      icon: Layers,
      name: "Performance Optimization",
      description:
        "I build applications that aren't just functional, but blazing fast. Through advanced techniques like React Server Components and dynamic loading, your users get a smooth experience every time.",
      cta: "See Benefits",
      href: "#Projects",
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-green-100/60 to-emerald-100/30 dark:from-green-950/20 dark:to-emerald-950/10 opacity-70" />
      ),
    },
    {
      icon: Code2,
      name: "Scalable Architecture",
      description:
        "My solutions are built to grow with your business. I create flexible, maintainable codebases that can evolve as your needs change, saving you time and resources in the long run.",
      cta: "View Work",
      href: "#Projects",
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100/60 to-rose-100/30 dark:from-pink-950/20 dark:to-rose-950/10 opacity-70" />
      ),
    },
  ];

  return (
    <section id="value" className="w-full py-16 sm:py-20">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          <span className="purple_gradient">Why Work With Me</span>
        </h2>
        <p className="text-muted-foreground text-xs sm:text-sm md:text-base mt-3 max-w-3xl mx-auto px-4">
          I bring a unique combination of technical expertise and business acumen to every project.
          Here's what sets my approach apart:
        </p>
      </div>

      <div className="relative mt-6 max-w-6xl mx-auto px-4 md:px-0">
        {/* Main feature */}
        <motion.div 
          className="relative rounded-2xl overflow-hidden shadow-md border border-border mb-6 md:mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 opacity-20">
            {values[0].background}
          </div>
          <div className="relative z-10 p-6 md:p-8 lg:p-10">
            <div className="md:flex items-start gap-8">
              <div className="mb-6 md:mb-0 md:w-1/3">
                <div className="p-4 w-16 h-16 rounded-full bg-white/90 dark:bg-gray-800/90 flex items-center justify-center mb-4">
                  {React.createElement(values[0].icon, { className: "w-8 h-8 text-purple-600 dark:text-purple-400" })}
                </div>
                <h3 className="text-2xl font-bold mb-2">{values[0].name}</h3>
                <a
                  href={values[0].href}
                  className="inline-flex items-center gap-1 text-purple-600 dark:text-purple-400 font-medium text-sm hover:underline"
                >
                  {values[0].cta}
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
              
              <div className="md:w-2/3">
                <p className="text-muted-foreground leading-relaxed">
                  {values[0].description}
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-6">
                  {['Fast', 'Efficient', 'Intelligent'].map((tag, idx) => (
                    <div key={idx} className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-3 text-center">
                      <span className="text-xs font-semibold text-purple-700 dark:text-purple-300">{tag}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Secondary features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {values.slice(1).map((value, idx) => {
            const index = idx + 1; // Adjust for the slice
            return (
              <motion.div
                key={index}
                className="relative rounded-xl border border-border p-5 h-[220px] overflow-hidden"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={`absolute inset-0 transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-30' : 'opacity-10'}`}>
                  {value.background}
                </div>
                
                <div className="relative z-10 h-full flex flex-col">
                  <div className="p-2 w-10 h-10 rounded-full bg-white/90 dark:bg-gray-800/90 flex items-center justify-center mb-3">
                    {React.createElement(value.icon, { className: "w-5 h-5 text-purple-600 dark:text-purple-400" })}
                  </div>
                  
                  <h3 className="font-bold text-base mb-2">{value.name}</h3>
                  
                  <p className={`text-xs text-muted-foreground flex-grow transition-all duration-300 ${
                    hoveredIndex === index ? 'line-clamp-none' : 'line-clamp-3'
                  }`}>
                    {value.description}
                  </p>
                  
                  <a
                    href={value.href}
                    className="mt-3 inline-flex items-center gap-1 text-purple-600 dark:text-purple-400 text-xs font-medium hover:underline"
                  >
                    {value.cta}
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* My Development Philosophy */}
      <BlurFade
        direction="up"
        delay={0.5}
        className="mt-16 rounded-2xl bg-card border border-border p-6 md:p-10"
      >
        <div className="md:flex items-start gap-10">
          <div className="md:w-2/3">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">My Development Philosophy</h3>
            <div className="space-y-3 text-muted-foreground text-sm">
              <p>
                <strong className="text-purple-700 dark:text-purple-400">Results over features.</strong> My approach is centered on creating solutions that deliver tangible business outcomes. I measure success not by features implemented, but by the impact on your bottom line.
              </p>
              <p>
                <strong className="text-purple-700 dark:text-purple-400">Users first, always.</strong> Every technical decision I make is guided by how it affects the end user experience. This user-centric focus ensures your product doesn't just work—it delights.
              </p>
              <p>
                <strong className="text-purple-700 dark:text-purple-400">Pragmatic innovation.</strong> I balance cutting-edge technologies with proven solutions. This means you get innovative features without the risk of unstable experimental approaches.
              </p>
            </div>
            
            <div className="mt-6">
              <a 
                href="#Projects" 
                className="inline-flex items-center gap-2 text-purple-700 dark:text-purple-400 font-medium hover:text-purple-900 dark:hover:text-purple-300 transition-colors text-sm"
              >
                See my work in action
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
          
          <div className="hidden md:block md:w-1/3 mt-8 md:mt-0">
            <motion.div 
              className="relative"
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-500 opacity-30 blur"></div>
              <div className="relative rounded-lg bg-background p-6 shadow-sm border border-border">
                <div className="space-y-4">
                  <div className="h-2 w-3/4 rounded bg-purple-100 dark:bg-purple-900/50"></div>
                  <div className="h-2 w-full rounded bg-purple-100 dark:bg-purple-900/50"></div>
                  <div className="h-2 w-2/3 rounded bg-purple-100 dark:bg-purple-900/50"></div>
                  <div className="mt-6 flex justify-between">
                    <div className="h-6 w-20 rounded bg-purple-100 dark:bg-purple-900/50"></div>
                    <div className="h-6 w-20 rounded bg-indigo-100 dark:bg-indigo-900/50"></div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative mt-4"
              animate={{ 
                y: [0, 8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 1
              }}
            >
              <div className="rounded-lg bg-background p-6 shadow-sm border border-border">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="h-4 w-1/3 rounded bg-green-100 dark:bg-green-900/50"></div>
                    <div className="h-4 w-12 rounded-full bg-green-100 dark:bg-green-900/50"></div>
                  </div>
                  <div className="h-24 w-full rounded bg-accent flex items-center justify-center">
                    <svg className="w-8 h-8 text-muted-foreground/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </BlurFade>
    </section>
  );
};

export default ValueProposition; 