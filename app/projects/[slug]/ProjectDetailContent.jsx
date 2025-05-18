"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from 'next/navigation';
import { getProjectById } from '@/app/constants/projects';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import BlurFade from "@/components/animations/BlurFade";
import { motion } from "framer-motion";
import { allProjects } from '@/app/constants/projects';
import ProjectCard from "@/components/ui/project-card";
import { 
  Github, 
  ExternalLink, 
  Calendar, 
  Tag, 
  Code, 
  Lightbulb,
  LineChart
} from "lucide-react";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      duration: 0.5
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

export default function ProjectDetailContent({ slug }) {
  // Get project by ID from our new project structure
  const project = getProjectById(slug);

  if (!project) {
    notFound();
  }

  // Helper function to format the detailed description with paragraphs
  const formatDescription = (text) => {
    return text.split('\n\n').map((paragraph, index) => (
      <p key={index} className="py-2 text-slate-700 dark:text-slate-200">
        {paragraph}
      </p>
    ));
  };
  
  // Get similar projects based on tags
  const getSimilarProjects = () => {
    const currentTags = project.tags || [];
    
    // Filter projects that share at least one tag with the current project
    return allProjects
      .filter(p => 
        p.id !== project.id && // Don't include the current project
        p.tags && 
        p.tags.some(tag => currentTags.includes(tag))
      )
      .slice(0, 3); // Get at most 3 similar projects
  };
  
  const similarProjects = getSimilarProjects();

  return (
    <BlurFade>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        <div className="mb-6">
          <Link href="/#Projects" className="flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
            <span className="mr-2">←</span> Back to Projects
          </Link>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">{project.title}</h1>
            
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="px-3 py-1 text-sm bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-100 border-blue-200 dark:border-blue-800">
                  {tag}
                </Badge>
              ))}
            </div>
          </motion.div>

          {/* Project image */}
          <motion.div 
            variants={itemVariants}
            className="relative aspect-video w-full rounded-xl overflow-hidden border border-gray-200 dark:border-blue-800/50 shadow-lg"
          >
            <Image
              src={project.imgSrc}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </motion.div>

          {/* Links */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <Button asChild className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700">
              <Link href={project.projectLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={16} />
                Live Demo
              </Link>
            </Button>
            <Button asChild variant="outline" className="flex items-center gap-2 border-blue-200 dark:border-blue-800">
              <Link href={project.projectLinkGithub} target="_blank" rel="noopener noreferrer">
                <Github size={16} />
                GitHub Repository
              </Link>
            </Button>
          </motion.div>

          {/* Metadata */}
          {project.metadata && (
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
            >
              <div className="flex flex-col p-4 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800/30 shadow">
                <span className="text-indigo-600 dark:text-indigo-300 text-sm font-medium flex items-center gap-2">
                  <Calendar size={14} /> Completion Date
                </span>
                <span className="font-medium text-gray-900 dark:text-white mt-1">{project.metadata.completionDate}</span>
              </div>
              
              <div className="flex flex-col p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/30 shadow">
                <span className="text-blue-600 dark:text-blue-300 text-sm font-medium flex items-center gap-2">
                  <Tag size={14} /> Category
                </span>
                <span className="font-medium text-gray-900 dark:text-white mt-1">{project.metadata.category}</span>
              </div>
              
              <div className="flex flex-col p-4 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-100 dark:border-purple-800/30 shadow">
                <span className="text-purple-600 dark:text-purple-300 text-sm font-medium flex items-center gap-2">
                  <Code size={14} /> Duration
                </span>
                <span className="font-medium text-gray-900 dark:text-white mt-1">{project.metadata.duration}</span>
              </div>
              
              <div className="flex flex-col p-4 rounded-lg bg-sky-50 dark:bg-sky-900/20 border border-sky-100 dark:border-sky-800/30 shadow">
                <span className="text-sky-600 dark:text-sky-300 text-sm font-medium flex items-center gap-2">
                  <Lightbulb size={14} /> Purpose
                </span>
                <span className="font-medium text-gray-900 dark:text-white mt-1">{project.metadata.purpose}</span>
              </div>
            </motion.div>
          )}

          {/* Problem/Solution */}
          {project.problemSolution && (
            <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-4">
              <div className="flex flex-col p-6 rounded-lg bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-700/20 shadow">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">The Problem</h3>
                <p className="text-gray-700 dark:text-slate-200">{project.problemSolution.problem}</p>
              </div>
              
              <div className="flex flex-col p-6 rounded-lg bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-700/20 shadow">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">The Solution</h3>
                <p className="text-gray-700 dark:text-slate-200">{project.problemSolution.solution}</p>
              </div>
            </motion.div>
          )}

          {/* Description */}
          <motion.div variants={itemVariants} className="prose prose-blue max-w-none dark:prose-invert">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Project Overview</h2>
            <div className="bg-white dark:bg-gray-800/20 p-6 rounded-lg border border-gray-200 dark:border-blue-800/20 shadow">
              {formatDescription(project.detailedDescription)}
            </div>
          </motion.div>

          {/* Tech Stack */}
          {project.techStack && (
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Technical Stack</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.techStack.map((tech, index) => (
                  <div 
                    key={index} 
                    className="flex flex-col p-4 rounded-lg bg-white dark:bg-gray-800/20 border border-gray-200 dark:border-blue-800/20 shadow"
                  >
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">{tech.name}</h3>
                    <p className="text-gray-700 dark:text-slate-200 mt-1">{tech.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Key Features */}
          {project.keyFeatures && (
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.keyFeatures.map((feature, index) => (
                  <div 
                    key={index} 
                    className="flex flex-col p-4 rounded-lg bg-white dark:bg-gray-800/20 border border-gray-200 dark:border-blue-800/20 shadow"
                  >
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">{feature.name}</h3>
                    <p className="text-gray-700 dark:text-slate-200 mt-1">{feature.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Results Metrics */}
          {project.caseStudy?.results?.metrics && (
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Results</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {project.caseStudy.results.metrics.map((metric, index) => (
                  <div 
                    key={index} 
                    className="flex flex-col items-center justify-center p-4 rounded-lg bg-white dark:bg-gray-800/20 border border-gray-200 dark:border-blue-800/20 shadow"
                  >
                    <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600">
                      {metric.value}
                    </span>
                    <span className="text-gray-700 dark:text-slate-200 text-sm mt-2 text-center">{metric.label}</span>
                  </div>
                ))}
              </div>
              {project.caseStudy.results.qualitative && (
                <p className="mt-6 text-gray-700 dark:text-slate-200">{project.caseStudy.results.qualitative}</p>
              )}
            </motion.div>
          )}
          
          {/* Similar Projects Section */}
          {similarProjects.length > 0 && (
            <motion.div 
              variants={itemVariants}
              className="mt-16"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Similar Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {similarProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </BlurFade>
  );
} 