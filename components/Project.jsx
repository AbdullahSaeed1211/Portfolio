"use client";
import React, { useEffect, useRef, useState, useMemo } from "react";
import { ProjectCardList } from "@app/constants";
import { motion, useInView, useAnimation } from "framer-motion";
import ProjectCard from "@/components/ui/project-card";
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
        <motion.div
          variants={{
            hidden: {opacity: 0, y: -50},
            visible: {opacity: 1, y: 0},
          }}
          initial="hidden"
          animate={controls}
          transition={{duration: 0.45, delay: 0.25}}
          className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
            <span className="pink_gradient">Strategic Solutions, Not Just Code</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-3xl mx-auto text-sm sm:text-base">
            I transform complex business challenges into high-performance technical solutions that deliver 
            measurable results. Each case study below represents strategic thinking in action.
          </p>
        </motion.div>

        {/* Project Category Filters */}
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

        {/* Project Cards - New Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-4">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

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
        
{/* Client Results Section - Enhanced with value focus */}
<motion.div
  variants={{
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="w-full max-w-7xl mx-auto mt-24 mb-24"
>
  <div className="relative bg-slate-50 rounded-2xl p-8 sm:p-12 border border-gray-200 overflow-hidden">
    {/* Subtle Background Elements */}
    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full opacity-30 -translate-y-32 translate-x-32"></div>
    <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-50 rounded-full opacity-30 translate-y-24 -translate-x-24"></div>
    
    {/* Content */}
    <div className="relative z-10">
      {/* Enhanced Header */}
      <div className="text-center mb-16">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 tracking-tight text-gray-900">
            Delivering{" "}
            <span className="relative inline-block text-blue-600">
              Measurable Results
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-blue-600 rounded-full"></div>
            </span>
          </h3>
        </motion.div>
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-gray-700 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed font-medium"
        >
          <span className="text-gray-600">Real metrics from</span>{" "}
          <span className="text-gray-800 font-semibold">real clients</span>{" "}
          <span className="text-gray-600">who trusted us to</span>{" "}
          <span className="text-emerald-600 font-semibold">
            transform their business
          </span>
        </motion.p>
      </div>

      {/* Enhanced Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {/* Stat 1 - Production Applications */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 40, scale: 0.9 },
            visible: { opacity: 1, y: 0, scale: 1 },
          }}
          transition={{
            delay: 0.4,
            duration: 0.8,
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
          className="group"
        >
          <div className="h-32 p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 text-center flex flex-col justify-center">
            <div className="text-4xl sm:text-5xl font-bold mb-2 text-red-600">
              15+
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Production Applications
            </h4>
            <p className="text-gray-600 text-sm">
              Live applications driving{" "}
              <span className="font-medium text-red-600">
                business value
              </span>
            </p>
          </div>
        </motion.div>

        {/* Stat 2 - Engagement Boost */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 40, scale: 0.9 },
            visible: { opacity: 1, y: 0, scale: 1 },
          }}
          transition={{
            delay: 0.5,
            duration: 0.8,
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
          className="group"
        >
          <div className="h-32 p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 text-center flex flex-col justify-center">
            <div className="text-4xl sm:text-5xl font-bold mb-2 text-blue-600">
              2.7X
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Engagement Boost
            </h4>
            <p className="text-gray-600 text-sm">
              Customer engagement{" "}
              <span className="font-medium text-blue-600">
                increase across projects
              </span>
            </p>
          </div>
        </motion.div>

        {/* Stat 3 - Speed Advantage */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 40, scale: 0.9 },
            visible: { opacity: 1, y: 0, scale: 1 },
          }}
          transition={{
            delay: 0.6,
            duration: 0.8,
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
          className="group"
        >
          <div className="h-32 p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 text-center flex flex-col justify-center">
            <div className="text-4xl sm:text-5xl font-bold mb-2 text-emerald-600">
              5X
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Speed Advantage
            </h4>
            <p className="text-gray-600 text-sm">
              Faster time-to-market than{" "}
              <span className="font-medium text-emerald-600">
                industry competitors
              </span>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom CTA or additional info */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="text-center mt-10 pt-8 border-t border-gray-200"
      >
        <p className="text-gray-600 text-sm">
          <span className="font-medium">Ready to join them?</span> Let's discuss your next project.
        </p>
      </motion.div>
    </div>
  </div>
</motion.div>

        
      </div>
    </section>
  );
};

export default Project;
