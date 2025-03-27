'use client'
import React,{useEffect,useRef} from "react";
import Image from "next/image";
import { skillsData } from "@app/constants";
import { motion, useInView, useAnimation } from "framer-motion";
import { Marquee } from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";

// Add more modern technologies to the skills data
const extendedSkillsData = [
  ...skillsData,
  {
    imgSrc: "/assets/Skills/typescript.svg",
    alt: "TypeScript",
    title: "TypeScript",
    category: "frontend"
  },
  {
    imgSrc: "/assets/Skills/mongodb.svg",
    alt: "MongoDB",
    title: "MongoDB",
    category: "backend"
  },
  {
    imgSrc: "/assets/Skills/firebase.svg",
    alt: "Firebase",
    title: "Firebase",
    category: "backend"
  },
  {
    imgSrc: "/assets/Skills/docker.svg",
    alt: "Docker",
    title: "Docker",
    category: "devops"
  },
  {
    imgSrc: "/assets/Skills/redux.svg",
    alt: "Redux",
    title: "Redux",
    category: "frontend"
  },
  {
    imgSrc: "/assets/Skills/graphql.svg",
    alt: "GraphQL",
    title: "GraphQL",
    category: "backend"
  },
  {
    imgSrc: "/assets/Skills/nodejs.svg",
    alt: "Node.js",
    title: "Node.js",
    category: "backend"
  },
];

// Group skills by category for easier filtering
const categorizedSkills = {
  frontend: extendedSkillsData.filter(skill => skill.category === "frontend" || !skill.category),
  backend: extendedSkillsData.filter(skill => skill.category === "backend"),
  devops: extendedSkillsData.filter(skill => skill.category === "devops"),
  all: extendedSkillsData
};

const SkillCard = ({ skill, index, isInView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 mx-2 w-[100px] md:w-[120px] flex-shrink-0"
    >
      <div className="p-3 flex flex-col items-center justify-center">
        <div className="w-10 h-10 md:w-12 md:h-12 relative mb-2">
          <Image
            src={skill.imgSrc}
            alt={skill.alt}
            fill
            className="object-contain"
          />
        </div>
        <h3 className="text-xs md:text-sm font-medium text-center">{skill.title}</h3>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [activeCategory, setActiveCategory] = React.useState("all");
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Filter skills based on active category
  const filteredSkills = categorizedSkills[activeCategory];

  return (
    <section ref={ref} id="Skills" className="w-full py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.45, delay: 0.25 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
            <span className="green_gradient">My Tech Stack</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-3xl mx-auto text-sm sm:text-base">
            I leverage modern technologies to build responsive, robust, and scalable web applications.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-5">
            {Object.keys(categorizedSkills).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300",
                  activeCategory === category
                    ? "bg-gradient-to-r from-green-500 to-teal-500 text-white shadow-md"
                    : "bg-accent text-muted-foreground hover:text-foreground"
                )}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="w-full overflow-hidden py-6"
        >
          <Marquee className="py-3" pauseOnHover={true} speed={20}>
            {filteredSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} index={index} isInView={isInView} />
            ))}
          </Marquee>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;