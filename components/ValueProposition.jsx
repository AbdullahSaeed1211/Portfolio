"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  BrainCircuit,
  Zap,
  Globe,
  Layers,
  TrendingUp,
  Code2,
  Target,
  Rocket,
} from "lucide-react";

const ValueProposition = () => {
  const values = [
    {
      title: "AI That Actually Works",
      description: "I cut through the AI hype and build solutions that solve real problems. No buzzwords, just results.",
      icon: <BrainCircuit className="h-6 w-6" />,
    },
    {
      title: "Revenue-Focused Code",
      description: "Every feature I build has one job: make your business more money. Simple as that.",
      icon: <TrendingUp className="h-6 w-6" />,
    },
    {
      title: "Full-Stack Development",
      description: "Frontend, backend, databases, APIs. I handle the entire stack so you don't have to juggle multiple developers.",
      icon: <Globe className="h-6 w-6" />,
    },
    {
      title: "Built to Scale",
      description: "Clean architecture that grows with your business. No technical debt, no surprise rewrites.",
      icon: <Layers className="h-6 w-6" />,
    },
    {
      title: "Performance Obsessed",
      description: "Lightning-fast applications that keep users engaged. 90+ PageSpeed scores and sub-second load times.",
      icon: <Zap className="h-6 w-6" />,
    },
    {
      title: "Modern Tech Stack",
      description: "Next.js, React, TypeScript, and the latest tools. Future-proof solutions that won't need rewrites.",
      icon: <Code2 className="h-6 w-6" />,
    },
    {
      title: "Business Impact Focus",
      description: "Every technical decision is measured against business outcomes. Code that drives real results.",
      icon: <Target className="h-6 w-6" />,
    },
    {
      title: "Fast Delivery",
      description: "Most projects completed in weeks, not months. I move fast without breaking things.",
      icon: <Rocket className="h-6 w-6" />,
    },
  ];

  return (
    <section id="value" className="w-full py-16 px-4 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-black mb-6 tracking-tight">
            <span className="text-black dark:text-white">
              Why Work With
            </span>
            <br />
            <span className="italic text-purple-500 dark:text-purple-400">
              Me?
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            I'm a full-stack developer focused on helping businesses achieve measurable growth through
            strategic development and AI integration.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 w-full">
          {values.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Feature = ({
  title,
  description,
  icon,
  index,
}) => {
  return (
    <motion.div
      className={cn(
        "flex flex-col lg:border-r py-5 relative group/feature border-border",
        (index === 0 || index === 4) && "lg:border-l border-border",
        index < 4 && "lg:border-b border-border"
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Hover Background Effects */}
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-300 absolute inset-0 h-full w-full bg-gradient-to-t from-blue-500/5 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-300 absolute inset-0 h-full w-full bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none" />
      )}
      
      {/* Icon */}
      <div className="mb-4 relative z-10 px-4 sm:px-6 lg:px-10 text-muted-foreground group-hover/feature:text-blue-500 dark:group-hover/feature:text-blue-400 transition-colors duration-300">
        {icon}
      </div>

      {/* Title with animated border */}
      <div className="text-lg font-bold mb-2 relative z-10 px-4 sm:px-6 lg:px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-border group-hover/feature:bg-blue-500 dark:group-hover/feature:bg-blue-400 transition-all duration-300 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-300 inline-block text-foreground">
          {title}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground max-w-xs relative z-10 px-4 sm:px-6 lg:px-10 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

export default ValueProposition;
