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
    name: "Shadcn/UI",
    logo: "/assets/Skills/shadcn.jpeg"
  },
  {
    name: "Vercel",
    logo: "/assets/Skills/vercel.png"
  },
  {
    name: "AWS",
    logo: "/assets/Skills/aws.png"
  },
 {
  name: 'Figma',
  logo: "/assets/Skills/figma.png"
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
  
  
];


const TechLogo = ({ tech }) => (
  <div className="mx-6 flex items-center justify-center group relative">
    <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
      <Image
        src={tech.logo}
        alt={tech.name}
        width={48}
        height={48}
        className="object-contain w-full h-full transition-all duration-300 group-hover:scale-110"
      />
    </div>
    <div className="absolute -bottom-5 whitespace-nowrap text-xs text-muted-foreground opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
      {tech.name}
    </div>
  </div>
);

const Skills2 = () => {
  return (
    <div className="w-full mt-8">
      {/* Compact Skills Marquee with inline label */}
      <BlurFade
        direction="up"
        delay={0.5}
        className="pr-4"
      >
        <div className="flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-4 mb-4">
          <h4 className="text-sm sm:text-base font-semibold text-foreground whitespace-nowrap">
            Tech Stack:
          </h4>
          <div className="flex-1 relative py-3">
            {/* Minimal gradient fades */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r dark:from-background to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l  dark:from-background to-transparent z-10"></div>

            {/* Compact Marquee */}
            <Marquee className="py-1" pauseOnHover={true} speed={25}>
              {technologies.map((tech, index) => (
                <TechLogo key={index} tech={tech} />
              ))}
            </Marquee>
          </div>
        </div>
      </BlurFade>
    </div>
  );
};

export default Skills2; 