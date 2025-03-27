"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Nav from "@/components/Nav";
import FooterSimple from "@/components/ui/footer-simple";
import { motion } from "framer-motion";
import BlurFade from "@/components/animations/BlurFade";
import { 
  ChevronLeft, Github, ExternalLink, Calendar, Tag, Code, Lightbulb, CheckCircle,
  Brain, HeartPulse, Dumbbell, Microscope, LineChart, Shield, Key, FileEdit, Type,
  CreditCard, Palette, Mic, Languages, Speaker, FileText,
  Eye, Clipboard, Smartphone, Package, ShoppingCart, RefreshCw, Camera, Layout,
  Clock, Music, Share, BarChart, Linkedin, Mail
} from "lucide-react";

// Helper function to get the icon component
const getIconComponent = (iconName) => {
  const icons = {
    Brain, HeartPulse, Dumbbell, Microscope, LineChart, Shield, Key, FileEdit, Type,
    CreditCard, Palette, Mic, Languages, Speaker, FileText,
    Eye, Clipboard, Smartphone, Package, ShoppingCart, RefreshCw, Camera, Layout,
    Clock, Music, Share, BarChart, Code, CheckCircle, Lightbulb
  };
  
  return icons[iconName] || Code;
};

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

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { 
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  },
  hover: { 
    y: -5,
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
    transition: { duration: 0.3 }
  }
};

export default function ProjectDetailContent({ project, slug, detailedData }) {
  // References for scroll animations
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const imageRef = useRef(null);
  
  // Extract or use detailed tags
  const extractTags = () => {
    if (detailedData) {
      return detailedData.category.split(',').map(tag => tag.trim());
    }
    
    return project.tags || extractTagsFromDescription();
  };
  
  // Fallback tag extraction from description if needed
  const extractTagsFromDescription = () => {
    const tags = [];
    
    if (project.title.includes("Dubbby") || project.description.toLowerCase().includes("ai")) {
      tags.push("AI");
    }
    
    if (project.title.includes("Brain Wise") || project.description.toLowerCase().includes("health")) {
      tags.push("Health");
    }
    
    if (project.title.includes("Blog") || project.description.toLowerCase().includes("saas")) {
      tags.push("SaaS");
    }
    
    if (project.description.toLowerCase().includes("next.js") || project.description.toLowerCase().includes("nextjs")) {
      tags.push("Next.js");
    }
    
    if (project.description.toLowerCase().includes("react")) {
      tags.push("React");
    }
    
    if (project.description.toLowerCase().includes("typescript")) {
      tags.push("TypeScript");
    }
    
    if (tags.length === 0) {
      tags.push("Web");
    }
    
    return tags;
  };

  // Extract or use detailed highlights
  const extractHighlights = () => {
    if (detailedData && detailedData.keyFeatures) {
      return detailedData.keyFeatures.map(feature => feature.description);
    }
    
    if (project.title === "Dubbby") {
      return [
        "AI-powered dubbing with perfect lip-sync in 15+ languages",
        "30-second processing time for any video length",
        "2.7X increase in audience engagement",
        "Secure authentication via Clerk",
        "Media handling through Uploadcare and Cloudinary"
      ];
    } else if (project.title === "Brain Wise") {
      return [
        "Evidence-based cognitive assessment platform",
        "Combines ML with neuroscience for accurate insights",
        "Comprehensive approach to brain health monitoring",
        "Personalized stroke risk assessments",
        "Educational brain health library"
      ];
    } else {
      // Generate generic highlights from description
      const sentences = project.description.split(/\.\s+/);
      const highlights = [];
      sentences.forEach(sentence => {
        if (sentence && sentence.length > 20 && sentence.length < 100) {
          highlights.push(sentence + (sentence.endsWith('.') ? '' : '.'));
        }
      });
      return highlights.slice(0, 5);
    }
  };

  // Extract problem-solution box if applicable
  const getProblemSolution = () => {
    if (detailedData && detailedData.problemSolution) {
      return detailedData.problemSolution;
    }
    
    if (project.title === "Dubbby") {
      return {
        problem: "Content creators lose 73% of international viewers due to language barriers.",
        solution: "30-second AI dubbing with perfect lip sync in 15+ languages, leading to 2.7X engagement increase."
      };
    } else if (project.title === "Brain Wise") {
      return {
        problem: "Traditional brain health apps lack scientific validation and comprehensive approach.",
        solution: "Evidence-based cognitive assessment and training platform combining ML with neuroscience."
      };
    } else if (project.title === "Blog Squirrel") {
      return {
        problem: "Setting up a professional blog requires technical expertise and is time-consuming.",
        solution: "SaaS platform that allows users to set up a professional blog in minutes with seamless user authentication and payment management."
      };
    }
    return null;
  };

  // Extract tech stack
  const getTechStack = () => {
    if (detailedData && detailedData.techStack) {
      return detailedData.techStack.map(tech => tech.name);
    }
    
    const techStack = [];
    
    if (project.tags) {
      return project.tags.filter(tag => 
        !["SaaS", "AI", "PWA", "E-commerce", "Landing Page", "UI/UX", "Game", "Weather", "Crypto", "Charts"].includes(tag)
      );
    }
    
    if (project.description.toLowerCase().includes("next.js") || project.description.toLowerCase().includes("nextjs")) {
      techStack.push("Next.js");
    }
    
    if (project.description.toLowerCase().includes("react")) {
      techStack.push("React");
    }
    
    if (project.description.toLowerCase().includes("typescript")) {
      techStack.push("TypeScript");
    }
    
    if (project.description.toLowerCase().includes("tailwind")) {
      techStack.push("Tailwind CSS");
    }
    
    if (project.description.toLowerCase().includes("firebase")) {
      techStack.push("Firebase");
    }
    
    if (project.description.toLowerCase().includes("clerk")) {
      techStack.push("Clerk");
    }
    
    if (project.description.toLowerCase().includes("stripe")) {
      techStack.push("Stripe");
    }

    // Add more default tech if needed
    if (techStack.length === 0) {
      techStack.push("HTML", "CSS", "JavaScript");
    }
    
    return techStack;
  };
  
  // Get detailed tech stack with descriptions if available
  const getDetailedTechStack = () => {
    if (detailedData && detailedData.techStack) {
      return detailedData.techStack;
    }
    
    return getTechStack().map(tech => ({
      name: tech,
      description: `Used for ${tech.toLowerCase().includes('css') ? 'styling' : 'development'}`
    }));
  };
  
  // Get key features with icons if available
  const getKeyFeatures = () => {
    if (detailedData && detailedData.keyFeatures) {
      return detailedData.keyFeatures;
    }
    
    // Generate default key features from highlights
    return extractHighlights().slice(0, 4).map((highlight, index) => {
      const defaultIcons = ["Code", "Lightbulb", "CheckCircle", "Shield"];
      return {
        name: highlight.split(':')[0] || `Feature ${index + 1}`,
        description: highlight,
        icon: defaultIcons[index] || "Code"
      };
    });
  };
  
  // Get metrics if available
  const getMetrics = () => {
    if (detailedData && detailedData.metrics) {
      return detailedData.metrics;
    }
    
    return null;
  };
  
  // Get color scheme for UI elements
  const getColorScheme = () => {
    if (detailedData && detailedData.colorScheme) {
      return detailedData.colorScheme;
    }
    
    return {
      primary: "#3b82f6",
      accent: "#ec4899",
      success: "#22c55e",
      warning: "#f59e0b"
    };
  };

  const tags = extractTags();
  const highlights = extractHighlights();
  const problemSolution = getProblemSolution();
  const techStack = getTechStack();
  const detailedTechStack = getDetailedTechStack();
  const keyFeatures = getKeyFeatures();
  const metrics = getMetrics();
  const colorScheme = getColorScheme();
  
  // Get completion date if available
  const completionDate = detailedData?.completionDate || "2023";
  const duration = detailedData?.duration || "N/A";
  const purpose = detailedData?.purpose || "Personal Project";
  
  // Get detailed description or fallback to regular description
  const detailedDescription = detailedData?.detailedDescription || project.description;
  
  // Get related projects (excluding current one)
  const relatedProjects = [];

  return (
    <>
      <Nav />
      <motion.div 
        ref={containerRef}
        className="relative pt-24 pb-16 w-full"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button and Breadcrumbs */}
          <motion.div variants={itemVariants} className="flex items-center mb-8">
            <Button variant="outline" size="sm" asChild className="mr-4 group transition-all duration-300">
              <Link href="/#Projects">
                <ChevronLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform duration-300" />
                Back to Projects
              </Link>
            </Button>
            
            <nav className="text-sm text-muted-foreground">
              <ol className="flex items-center space-x-2">
                <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                <li>/</li>
                <li><Link href="/#Projects" className="hover:text-primary transition-colors">Projects</Link></li>
                <li>/</li>
                <li className="text-foreground font-medium">{project.title}</li>
              </ol>
            </nav>
          </motion.div>
          
          {/* Project Header */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
            <div className="lg:col-span-2">
              <BlurFade direction="up" delay={0.1}>
                <h1 ref={headingRef} className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="blue_gradient">{project.title}</span>
                </h1>
              </BlurFade>
              
              <BlurFade direction="up" delay={0.2}>
                <div className="flex flex-wrap gap-2 mb-4">
                  {tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="bg-accent/50 text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </BlurFade>
              
              <BlurFade direction="up" delay={0.3}>
                <div className="flex flex-wrap items-center text-sm text-muted-foreground mb-6 gap-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1.5" />
                    <span>Completed: {completionDate}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1.5" />
                    <span>Duration: {duration}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Tag className="h-4 w-4 mr-1.5" />
                    <span>{purpose}</span>
                  </div>
                </div>
              </BlurFade>
              
              <BlurFade direction="up" delay={0.4}>
                <div className="prose prose-slate dark:prose-invert max-w-none">
                  <p className="text-lg mb-4">
                    {detailedDescription.split('\n\n')[0]}
                  </p>
                </div>
              </BlurFade>
              
              <BlurFade direction="up" delay={0.5} className="flex flex-wrap gap-4 mt-6">
                {project.projectLink && (
                  <Button asChild className="gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:shadow-lg border-transparent text-white shadow-blue-500/25 hover:shadow-blue-500/50 transition-all">
                    <Link href={project.projectLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      View Live Project
                    </Link>
                  </Button>
                )}
                
                {project.projectLinkGithub && (
                  <Button variant="outline" asChild className="gap-2 hover:bg-accent/50 group">
                    <Link href={project.projectLinkGithub} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                      View Source Code
                    </Link>
                  </Button>
                )}
              </BlurFade>
            </div>
            
            <BlurFade direction="left" delay={0.4} className="relative">
              <div ref={imageRef} className="aspect-video overflow-hidden rounded-lg shadow-lg border border-border">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-cyan-500/10 mix-blend-overlay"></div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                  className="w-full h-full"
                >
                  <Image 
                    src={project.imgSrc} 
                    alt={project.title}
                    width={1000}
                    height={563}
                    className="object-cover object-center w-full h-full"
                  />
                </motion.div>
              </div>
              
              {/* Display metrics if available */}
              {metrics && (
                <div className="grid grid-cols-2 gap-4 mt-6 text-center">
                  {metrics.map((metric, index) => (
                    <motion.div 
                      key={index} 
                      className="p-4 rounded-lg border bg-card hover:border-blue-500/50 transition-colors"
                      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-2xl font-bold blue_gradient">{metric.value}</p>
                      <p className="text-sm text-muted-foreground">{metric.label}</p>
                    </motion.div>
                  ))}
                </div>
              )}
            </BlurFade>
          </div>
          
          {/* Problem Solution Box */}
          {problemSolution && (
            <BlurFade direction="up" delay={0.2}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 bg-muted rounded-lg p-6 border border-border">
                <motion.div 
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-red-100 dark:bg-red-950">
                      <span className="text-red-600 dark:text-red-400">❌</span>
                    </span>
                    <span className="red_gradient">The Problem</span>
                  </h3>
                  <p>{problemSolution.problem}</p>
                </motion.div>
                
                <motion.div 
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-green-100 dark:bg-green-950">
                      <span className="text-green-600 dark:text-green-400">✓</span>
                    </span>
                    <span className="green_gradient">The Solution</span>
                  </h3>
                  <p>{problemSolution.solution}</p>
                </motion.div>
              </div>
            </BlurFade>
          )}
          
          {/* Call to Action */}
          <BlurFade direction="up" delay={0.6} className="mt-16">
            <motion.div 
              className="p-8 rounded-lg bg-gradient-to-br from-blue-600/10 via-cyan-600/5 to-purple-600/10 text-center border border-blue-200/20 backdrop-blur-sm shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <h2 className="text-xl sm:text-2xl font-bold mb-2 blue_gradient">Ready to bring your idea to life?</h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-4 text-sm sm:text-base">
                Let's collaborate on creating something amazing together. I'm available for projects and consultations.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  asChild 
                  size="default" 
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:shadow-lg border-transparent text-white shadow-blue-500/25 hover:shadow-blue-500/50 transition-all"
                >
                  <Link href="/#Contact">
                    Start a Conversation
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="default"
                  className="hover:bg-blue-50 dark:hover:bg-blue-950/30"
                >
                  <Link href="/#Projects">
                    View More Projects
                  </Link>
                </Button>
              </div>
            </motion.div>
          </BlurFade>
        </div>
      </motion.div>
      {/* Simplified Footer */}
      <footer className="bg-background/80 backdrop-blur-md border-t border-border py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
            <div className="flex items-center gap-2">
              <Image
                src="/assets/icons/HeroRocket.svg"
                alt="logo"
                width={20}
                height={20}
                className="object-contain"
              />
              <span className="text-sm font-medium">Abdullah Saeed</span>
            </div>
            
            <div className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} All rights reserved.
            </div>
            
            <div className="flex gap-3">
              <a 
                href="https://github.com/AbdullahSaeed1211" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href="https://www.linkedin.com/in/abdullah-saeed1211/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="mailto:contact@abdullahsaeed.dev" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
} 