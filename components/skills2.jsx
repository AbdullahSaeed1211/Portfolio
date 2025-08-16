"use client";
import React from "react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";



const technologies = [
  {
    name: "Next.js",
    logo: "/assets/Skills/nextjs.png"
  },
  {
    name: "React",
    logo: "/assets/Skills/react.png"
  },
  {
    name: "Tailwind CSS",
    logo: "/assets/Skills/tailwind.png"
  },
  {
    name: "TypeScript",
    logo: "/assets/Skills/typescript.svg"
  },
  {
    name: "Node.js",
    logo: "/assets/Skills/nodejs.svg"
  },
  {
    name: "MongoDB",
    logo: "/assets/Skills/mongodb.svg"
  },
  {
    name: "Firebase",
    logo: "/assets/Skills/firebase.svg"
  },
  {
    name: "Docker",
    logo: "/assets/Skills/docker.svg"
  },
  {
    name: "Python",
    logo: "/assets/Skills/python.png"
  },
  {
    name: "JavaScript",
    logo: "/assets/Skills/javascript.png"
  },
  {
    name: "Auth Systems",
    logo: "/assets/Skills/nextauth.png"
  },
  {
    name: "GitHub",
    logo: "/assets/Skills/github1.png"
  },
  {
    name: "HTML5",
    logo: "/assets/Skills/html.png"
  },
  {
    name: "CSS3",
    logo: "/assets/Skills/css.png"
  },
  {
    name: "Astro",
    logo: "/assets/Skills/astro.png"
  },
];


const TechLogo = ({ tech }) => (
  <div className="mx-6 flex items-center justify-center group relative">
    <div className="relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
      <Image 
        src={tech.logo} 
        alt={tech.name} 
        width={64} 
        height={64} 
        className="object-contain transition-all duration-300 group-hover:scale-110" 
      />
    </div>
    <div className="absolute -bottom-6 whitespace-nowrap text-xs text-muted-foreground opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
      {tech.name}
    </div>
  </div>
);

const skills2 = () => {
  return (
      <section id="skills" className="py-5 bg-accent/30">
        
        {/* Trust Indicators with Marquee */}
        <BlurFade 
          direction="up"
          delay={0.5}
          className="mt-10"
        >
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              <span className="blue_gradient">Preferred Development Ecosystem</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-3xl mx-auto text-sm sm:text-base">
              Tools and frameworks I use to deliver production-ready applications
            </p>
          </div>
          
          <div className="relative py-10">
            {/* Gradient fades on edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-accent/30 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-accent/30 to-transparent z-10"></div>
            
            <Marquee className="py-4" pauseOnHover={true}>
              {technologies.map((tech, index) => (
                <TechLogo key={index} tech={tech} />
              ))}
            </Marquee>
            
            <Marquee className="py-4" pauseOnHover={true} reverse={true}>
              {[...technologies].reverse().map((tech, index) => (
                <TechLogo key={index} tech={tech} />
              ))}
            </Marquee>
          </div>
        </BlurFade>
    </section>
  );
};

export default skills2; 