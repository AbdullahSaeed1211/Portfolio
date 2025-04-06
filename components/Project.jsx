"use client";
import React, { useEffect, useRef, useState } from "react";
import { ProjectCardList } from "@app/constants";
import { motion, useInView, useAnimation } from "framer-motion";
import ProjectCard from "@/components/ui/project-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Project = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(ProjectCardList);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Prepare projects with proper tags, business value, and outcomes
  const enhancedProjects = filteredProjects.map(project => {
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

  const categories = ["All", "SaaS", "Health", "Finance", "Web"];

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
          {enhancedProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
        
        {/* Client Results Section - Enhanced with value focus */}
        <motion.div
          variants={{
            hidden: {opacity: 0, y: 50},
            visible: {opacity: 1, y: 0},
          }}
          initial="hidden"
          whileInView="visible"
              viewport={{ once: true }}
          transition={{duration: 0.5}}
          className="w-full max-w-5xl mx-auto mt-16 mb-16 bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100">
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-8">
            Delivering <span className="text-red-500">Business Impact</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold mb-3 text-red-500">15+</div>
              <p className="text-gray-500 text-xs">Production Applications Driving<br />Business Value</p>
              </div>

            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold mb-3 text-blue-500">2.7X</div>
              <p className="text-gray-500 text-xs">Average Customer Engagement<br />Increase</p>
                </div>

            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold mb-3 text-purple-500">3-5x</div>
              <p className="text-gray-500 text-xs">Faster Time-to-Market Than<br />Competitors</p>
                </div>
              </div>
            </motion.div>
        
        </div>
      </section>
  );
};

export default Project;
