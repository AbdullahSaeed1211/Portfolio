"use client";
import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";

const testimonials = [
  {
    text: "Abdullah's AI integration expertise helped us reach international markets we never thought possible. His video dubbing solution increased our engagement by 2.7X in the first month.",
    author: "Sara Chen",
    position: "Content Director",
    company: "GlobalReach Media",
    avatar: "/assets/images/avatar1.png"
  },
  {
    text: "What impressed me most was how Abdullah translated our complex health requirements into an elegant application that delivered exactly what our users needed. The UI is beautiful and the backend is rock-solid.",
    author: "Dr. Rajan Patel",
    position: "Head of Digital Health",
    company: "MindTech Solutions",
    avatar: "/assets/images/avatar2.png"
  },
  {
    text: "Working with Abdullah means getting solutions that not only look good but drive real business results. Our e-commerce conversion rate increased by 34% after implementing his recommendations.",
    author: "Michael Torres",
    position: "E-commerce Director",
    company: "RetailPlus",
    avatar: "/assets/images/avatar3.png"
  }
];

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
  }
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

const SocialProof = () => {
  return (
    <section id="testimonials" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <BlurFade
          className="text-center mb-16"
          direction="up"
          delay={0.1}
        >
          <h2 className="head_text">
            <span className="blue_gradient">Results-Driven Development</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-3xl mx-auto text-lg">
            Don't just take my word for it. Here's what clients and collaborators say about working with me.
          </p>
        </BlurFade>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <BlurFade
              key={index}
              direction="up"
              delay={0.2 + index * 0.1}
              className="h-full"
            >
              <div className="bg-card border border-border rounded-xl shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center mb-6">
                    <div className="text-primary text-2xl mr-4">
                      <Quote />
                    </div>
                    <div className="h-px flex-1 bg-border"></div>
                  </div>
                  
                  <p className="text-muted-foreground italic mb-6 leading-relaxed flex-grow">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center mt-auto pt-4 border-t border-border">
                    <div className="w-12 h-12 bg-muted rounded-full overflow-hidden mr-4 flex-shrink-0">
                      {testimonial.avatar ? (
                        <Image 
                          src={testimonial.avatar} 
                          alt={testimonial.author}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-cyan-500 text-white text-lg font-bold">
                          {testimonial.author.charAt(0)}
                        </div>
                      )}
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.author}</h4>
                      <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                      <div className="text-sm font-medium text-blue-600 dark:text-blue-400">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
        
        {/* Trust Indicators with Marquee */}
        <BlurFade 
          direction="up"
          delay={0.5}
          className="mt-20 pt-12"
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
      </div>
    </section>
  );
};

export default SocialProof; 