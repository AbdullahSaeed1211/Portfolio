"use client";
import React, { useEffect, useRef, useState, useMemo } from "react";
import { ProjectCardList } from "@app/constants";
import { motion, useInView, useAnimation } from "framer-motion";
import ProjectCard from "@/components/ui/project-card";
import FeaturedProjectCard from "@/components/FeaturedProjectCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Animated Counter Component
const AnimatedCounter = ({ from = 0, to, duration = 2, suffix = "", prefix = "" }) => {
  const [count, setCount] = useState(from);
  const nodeRef = useRef();

  useEffect(() => {
    const node = nodeRef.current;
    const controls = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const startTime = Date.now();
            const animate = () => {
              const elapsed = Date.now() - startTime;
              const progress = Math.min(elapsed / (duration * 1000), 1);
              const easeInOutCubic = progress < 0.5
                ? 4 * progress * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 3) / 2;

              setCount(Math.floor(from + (to - from) * easeInOutCubic));

              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };
            animate();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (node) {
      controls.observe(node);
    }

    return () => {
      if (node) {
        controls.unobserve(node);
      }
    };
  }, [from, to, duration]);

  return (
    <span ref={nodeRef}>
      {prefix}{count}{suffix}
    </span>
  );
};

const Project = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(ProjectCardList);
  const [showAllProjects, setShowAllProjects] = useState(false);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Memoize enhancedProjects to prevent infinite loops
  const enhancedProjects = useMemo(() => {
    return filteredProjects.map(project => {
      // Extract tags from project title/description or use default ones
      let tags = [];
      
      if (project.title.includes("Brain Wise") || project.description.toLowerCase().includes("health")) {
        tags.push("Health");
      }
      
      if (project.title.includes("Blog") || project.description.toLowerCase().includes("saas")) {
        tags.push("SaaS");
      }
      
      if (project.title.includes("Simply Mortgage") || project.description.toLowerCase().includes("mortgage")) {
        tags.push("Finance");
      }
      
      // Add tech tags based on description
      if (project.description.toLowerCase().includes("typescript")) {
        tags.push("TypeScript");
      }
      
      // If no tags were found, add a default one
      if (tags.length === 0) {
        tags.push("Web");
      }
      
      // Generate a slug from the title
      const slug = project.title.toLowerCase().replace(/\s+/g, '-');
      
      // Determine if featured based on title (just as an example)
      const featured = ["Dubbby", "Brain Wise", "Blog Squirrel", "Simply Mortgage"].includes(project.title);
      
      // Business challenge the project solved
      let challenge = "";
      
      // Business results achieved
      let results = [];
      
      // Technical approach summarized
      let approach = "";
      
      // Add business context for each project
      if (project.title === "Dubbby") {
        challenge = "Global businesses were losing market share due to language barriers in video content, with traditional dubbing being expensive and time-consuming.";
        approach = "Implemented a React-based front-end with WebGL for real-time preview, connected to a custom AI pipeline for voice synthesis and lip synchronization.";
        results = [
          "30-second processing for videos of any length",
          "15+ language support increased global reach by 215%",
          "2.7X increase in engagement metrics for dubbed content"
        ];
      } 
      else if (project.title === "Brain Wise") {
        challenge = "Healthcare providers lacked accessible tools to detect early cognitive decline, resulting in delayed interventions and poorer patient outcomes.";
        approach = "Created a progressive web app with React and TypeScript that integrates with machine learning models to analyze cognitive test results.";
        results = [
          "87% accuracy in early detection scenarios",
          "43% reduction in assessment time for practitioners",
          "Accessible interface increased patient completion rate by 64%"
        ];
      }
      else if (project.title === "Blog Squirrel") {
        challenge = "Content creators struggled with consistent publishing schedules and audience engagement due to fragmented creation workflows.";
        approach = "Designed a Next.js platform with rich editing capabilities and built-in SEO optimization tools.";
        results = [
          "Publishing workflow efficiency increased by 40%",
          "Average article SEO score improved by 27 points",
          "User retention improved 3.2X compared to previous solutions"
        ];
      }
      else if (project.title === "Simply Mortgage") {
        challenge = "UAE homebuyers faced fragmented information sources and complex mortgage processes, leading to poor financial decisions and delays in property acquisition.";
        approach = "Built a Next.js 15 application with server components and interactive calculators to simplify mortgage comparison and decision-making.";
        results = [
          "98/100 Lighthouse performance score for optimal user experience",
          "500+ consultations booked through the platform",
          "Consultation request conversion rate increased by 35%"
        ];
      }
      else {
        challenge = "Simplified version of the business problem this project addressed.";
        approach = "Technical approach summarized in business terms.";
        results = [
          "Core business improvement metric",
          "User or customer impact statistic",
          "Technical performance gain"
        ];
      }
      
      return {
        ...project,
        tags,
        slug,
        featured,
        challenge,
        approach,
        results,
        imageUrl: project.imgSrc,
        github: project.projectLinkGithub,
        liveUrl: project.projectLink
      };
    });
  }, [filteredProjects]);

  // Calculate displayed projects using useMemo
  const displayedProjects = useMemo(() => {
    if (showAllProjects) {
      return enhancedProjects;
    } else {
      return enhancedProjects.slice(0, 9);
    }
  }, [enhancedProjects, showAllProjects]);

  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredProjects(ProjectCardList);
    } else {
      const filtered = ProjectCardList.filter(project => 
        project.title.includes(activeFilter) || 
        project.description.toLowerCase().includes(activeFilter.toLowerCase())
      );
      setFilteredProjects(filtered);
    }
  }, [activeFilter]);

  // Reset showAllProjects when filter changes
  useEffect(() => {
    setShowAllProjects(false);
  }, [activeFilter]);

  const categories = ["All", "SaaS", "Health", "Finance", "Web"];
  const hasMoreProjects = enhancedProjects.length > 9;

  return (
    <section ref={ref} id="Projects" className="w-full py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        

       

        {/* Featured Project - Brainwise.pro */}
        <div className="mb-12">
          <motion.div
            variants={{
              hidden: {opacity: 0, y: -30},
              visible: {opacity: 1, y: 0},
            }}
            initial="hidden"
            animate={controls}
            transition={{duration: 0.6, delay: 0.6}}
            className="mb-8"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-black mb-6 tracking-tight text-center">
              <span className="text-black dark:text-white">
                🏆 Featured {` `}
              </span>
              <span className="italic text-yellow-500 dark:text-yellow-400">
                Project
              </span>
            </h2>
            
          </motion.div>
          <motion.div
          variants={{
            hidden: {opacity: 0, y: 20},
            visible: {opacity: 1, y: 0},
          }}
          initial="hidden"
          animate={controls}
          transition={{duration: 0.3, delay: 0.4}}
          className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category, index) => {
            // Define which variant to use based on category
            let buttonVariant = "outline";
            if (activeFilter === category) {
              if (category === "SaaS") buttonVariant = "saasGradient";
              else if (category === "Finance") buttonVariant = "financeGradient";
              else if (category === "Health") buttonVariant = "healthGradient";
              else if (category === "Web") buttonVariant = "webGradient";
              else if (category === "All") buttonVariant = "gradient";
              else buttonVariant = "gradient";
            }
            
            return (
              <Button
                key={index}
                onClick={() => setActiveFilter(category)}
                variant={buttonVariant}
                size="sm"
                className="rounded-full text-xs py-1 px-3 h-auto"
              >
                {category}
              </Button>
            );
          })}
        </motion.div>
          {displayedProjects
            .filter(project => project.title === "BrainWise.pro" || project.title === "Brain Wise")
            .slice(0, 1)
            .map((project, index) => (
              <FeaturedProjectCard key={`featured-${index}`} project={project} />
            ))}
        </div>

        {/* Other Projects Grid */}
        <motion.div
          variants={{
            hidden: {opacity: 0, y: 20},
            visible: {opacity: 1, y: 0},
          }}
          initial="hidden"
          animate={controls}
          transition={{duration: 0.4, delay: 0.8}}
        >
          <h3 className="text-xl font-semibold text-center text-foreground mb-6">
            Other Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
            {displayedProjects
              .filter(project => project.title !== "BrainWise.pro" && project.title !== "Brain Wise")
              .map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
          </div>
        </motion.div>

        {/* View More Button */}
        {hasMoreProjects && (
          <motion.div
            variants={{
              hidden: {opacity: 0, y: 20},
              visible: {opacity: 1, y: 0},
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{duration: 0.3}}
            className="text-center mt-8">
            <Button
              onClick={() => setShowAllProjects(!showAllProjects)}
              variant="outline"
              size="lg"
              className="rounded-full px-8 py-2 border-2 hover:border-red-500 transition-all duration-300">
              {showAllProjects ? (
                <>
                  Show Less
                  <svg className="w-4 h-4 ml-2 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </>
              ) : (
                <>
                  View All Projects ({enhancedProjects.length - 9} more)
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </>
              )}
            </Button>
          </motion.div>
        )}
        
{/* Engineering Excellence Section - Complete Redesign */}
<motion.div
  variants={{
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  }}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  transition={{ duration: 1, ease: "easeOut" }}
  className="w-full max-w-7xl mx-auto py-10"
>
  {/* Main Hero Section */}
  <div className="relative overflow-hidden">
    {/* Animated Background */}
   

    <div className="relative z-10 p-8 sm:p-12 lg:p-16">
      {/* Header Section */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/80 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-8 backdrop-blur-sm border border-blue-200/50 dark:border-blue-800/50">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          Engineering Excellence
        </div>

        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 tracking-tight">
          <span className="text-black dark:text-white">
            Building the
          </span>
          <br />
          <span className="italic text-purple-500 dark:text-purple-400">
            Future
          </span>
        </h2>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-black dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-light"
        >
          Transforming ideas into production-ready solutions with
          <span className="font-semibold text-blue-600 dark:text-blue-400"> cutting-edge technology</span> and
          <span className="font-semibold text-purple-600 dark:text-purple-400"> unparalleled craftsmanship</span>
        </motion.p>
      </motion.div>

      {/* Interactive Stats Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 max-w-6xl mx-auto">
        {/* Stat 1 - Production Scale */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50, scale: 0.8 },
            visible: { opacity: 1, y: 0, scale: 1 },
          }}
          transition={{
            delay: 0.6,
            duration: 0.8,
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          className="group relative"
        >
          <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-3 sm:p-4 md:p-6 lg:p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-white/20 dark:border-gray-700/50 overflow-hidden">
            {/* Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>

              <div className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
                15+
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Production Applications
              </h3>

              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                Enterprise-grade solutions deployed across multiple industries, serving millions of users with
                <span className="font-semibold text-blue-600 dark:text-blue-400"> 99.9% uptime</span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Stat 2 - Performance */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50, scale: 0.8 },
            visible: { opacity: 1, y: 0, scale: 1 },
          }}
          transition={{
            delay: 0.7,
            duration: 0.8,
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          className="group relative"
        >
          <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-3 sm:p-4 md:p-6 lg:p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-white/20 dark:border-gray-700/50 overflow-hidden">
            {/* Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>

              <div className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-400 dark:to-purple-600 bg-clip-text text-transparent">
                2.7x
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Performance Boost
              </h3>

              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                Optimized systems delivering
                <span className="font-semibold text-purple-600 dark:text-purple-400"> 2.7x better performance</span>
                than industry benchmarks, reducing latency by 60%
              </p>
            </div>
          </div>
        </motion.div>

        {/* Stat 3 - Speed */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50, scale: 0.8 },
            visible: { opacity: 1, y: 0, scale: 1 },
          }}
          transition={{
            delay: 0.8,
            duration: 0.8,
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          className="group relative"
        >
          <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-3 sm:p-4 md:p-6 lg:p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-white/20 dark:border-gray-700/50 overflow-hidden">
            {/* Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>

              <div className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-emerald-600 to-emerald-800 dark:from-emerald-400 dark:to-emerald-600 bg-clip-text text-transparent">
                5x
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Rapid Deployment
              </h3>

              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">5x faster</span>
                than industry standards, from concept to production in weeks, not months
              </p>
            </div>
          </div>
        </motion.div>
      </div>

     
        
       
    </div>
  </div>
</motion.div>

        
      </div>
    </section>
  );
};

export default Project;
