"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Card,
  CardTitle
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, ArrowUpRight } from "lucide-react";
import { TrackEvent } from "@/components/ui/track-event";

const getCardRotation = (index) => {
  const rotations = [-1, 1, -0.5, 0.5, -1.5, 1.5];
  return rotations[index % rotations.length];
};

const ProjectCard = ({ project, index }) => {
  // Create a valid project ID if none exists - use a slug from title
  const projectId = project.id || project.title?.toLowerCase().replace(/\s+/g, '-');
  const rotation = getCardRotation(index);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotate: rotation * 0.3 }}
      whileInView={{ opacity: 1, y: 0, rotate: rotation }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      viewport={{ once: true }}
      whileHover={{
        rotate: rotation * 0.5,
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className="flex flex-col h-full"
    >
      <Card className="h-full flex flex-col md:flex-row overflow-hidden border-border bg-card hover:shadow-lg transition-all duration-300 group">
        {/* Image Section - Full width on mobile, 40% width on desktop */}
        <div className="relative w-full md:w-2/5 h-48 md:h-auto overflow-hidden">
          <Image
            src={project.imageUrl || project.imgSrc || "/assets/images/placeholder-project.jpg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {project.featured && (
            <Badge variant="featured" className="absolute top-2 right-2 text-xs">
              Featured
            </Badge>
          )}
        </div>

        {/* Content Section - Full width on mobile, 60% width on desktop */}
        <div className="flex-1 flex flex-col p-4 md:p-4">
          <div className="flex-grow">
            <div className="flex gap-2 flex-wrap mb-3">
              {project.tags
                .filter(tag => tag && tag.trim() !== '') // Filter out empty tags
                .slice(0, 3) // Limit to 3 tags max for horizontal layout
                .map((tag, i) => {
                  // Enhanced tag categorization
                  let badgeVariant = "skill"; // Default to skill
                  const tagLower = tag.toLowerCase().trim();

                  // Industry/CATEGORY tags
                  if (["saas", "platform", "software", "application"].includes(tagLower)) badgeVariant = "saas";
                  else if (["health", "medical", "healthcare", "wellness", "clinical", "ai medical"].includes(tagLower)) badgeVariant = "health";
                  else if (["finance", "fintech", "mortgage", "banking", "financial"].includes(tagLower)) badgeVariant = "finance";
                  else if (["web", "website", "landing page", "web app"].includes(tagLower)) badgeVariant = "web";
                  else if (["ai", "artificial intelligence", "machine learning", "ml", "neural network", "deep learning", "tensorflow", "pytorch"].includes(tagLower)) badgeVariant = "ai";

                  // Technology/TOOL tags
                  else if (["typescript", "javascript", "python", "node.js", "react", "next.js", "vue", "angular", "svelte"].includes(tagLower)) badgeVariant = "tech";
                  else if (["mongodb", "postgresql", "mysql", "firebase", "supabase", "prisma", "database"].includes(tagLower)) badgeVariant = "tech";
                  else if (["tailwind", "css", "scss", "styled-components", "bootstrap"].includes(tagLower)) badgeVariant = "tool";
                  else if (["aws", "vercel", "netlify", "docker", "kubernetes", "deployment", "cloud"].includes(tagLower)) badgeVariant = "tool";

                  return (
                    <Badge key={i} variant={badgeVariant} className="text-xs">
                      {tag}
                    </Badge>
                  );
                })}
            </div>
            <div className="flex items-center justify-between mb-3">
              <CardTitle className="text-lg font-bold text-gray-800 dark:text-gray-100 leading-tight">{project.title}</CardTitle>
              {projectId && (
                <TrackEvent
                  eventName="project_details_click"
                  properties={{
                    project_name: project.title,
                    project_id: projectId
                  }}
                >
                  <Link href={`/projects/${projectId}`} className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors group/link">
                    <motion.div
                      whileHover={{ x: 2, y: -2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <ArrowUpRight className="h-5 w-5" />
                    </motion.div>
                  </Link>
                </TrackEvent>
              )}
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 leading-relaxed">
              {project.description}
            </p>
          </div>

        </div>
      </Card>
    </motion.div>
  );
};

export default ProjectCard; 