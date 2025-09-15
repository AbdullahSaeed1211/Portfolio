"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ChevronRight } from "lucide-react";
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
      <Card className="h-full flex flex-col overflow-hidden border-border bg-card hover:shadow-lg transition-all duration-300 group">
        <div className="relative overflow-hidden aspect-video">
          <Image
            src={project.imageUrl || project.imgSrc || "/assets/images/placeholder-project.jpg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {project.featured && (
            <Badge variant="featured" className="absolute top-3 right-3">
              Featured
            </Badge>
          )}
        </div>
        <CardHeader className="pb-2">
          <div className="flex gap-2 flex-wrap mb-2">
            {project.tags
              .filter(tag => tag && tag.trim() !== '') // Filter out empty tags
              .slice(0, 4) // Limit to 4 tags max
              .map((tag, i) => {
              // Enhanced tag categorization
              let badgeVariant = "skill"; // Default to skill
              const tagLower = tag.toLowerCase().trim();

              // Industry/CATEGORY tags
              if (["saas", "platform", "software", "application"].includes(tagLower)) badgeVariant = "saas";
              else if (["health", "medical", "healthcare", "wellness"].includes(tagLower)) badgeVariant = "health";
              else if (["finance", "fintech", "mortgage", "banking", "financial"].includes(tagLower)) badgeVariant = "finance";
              else if (["web", "website", "landing page", "web app"].includes(tagLower)) badgeVariant = "web";
              else if (["ai", "artificial intelligence", "machine learning", "ml"].includes(tagLower)) badgeVariant = "ai";

              // Technology/TOOL tags
              else if (["typescript", "javascript", "python", "node.js", "react", "next.js", "vue", "angular", "svelte"].includes(tagLower)) badgeVariant = "tech";
              else if (["mongodb", "postgresql", "mysql", "firebase", "supabase", "prisma"].includes(tagLower)) badgeVariant = "tech";
              else if (["tailwind", "css", "scss", "styled-components"].includes(tagLower)) badgeVariant = "tool";
              else if (["aws", "vercel", "netlify", "docker", "kubernetes"].includes(tagLower)) badgeVariant = "tool";

              return (
                <Badge key={i} variant={badgeVariant} className="text-xs">
                  {tag}
                </Badge>
              );
            })}
          </div>
          <CardTitle className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">{project.title}</CardTitle>
          <CardDescription className="line-clamp-2 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            {project.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <ul className="space-y-1 text-sm text-muted-foreground">
            {project.highlights?.slice(0, 3).map((highlight, i) => (
              <li key={i} className="flex items-start gap-2">
                <ChevronRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="flex justify-between pt-4 border-t">
          <div className="flex gap-2">
            {project.github && (
              <Button variant="outline" size="icon" asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
            )}
            {project.liveUrl && (
              <Button variant="outline" size="icon" asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
          {/* Show the View Details button for all projects using the ID or generated slug */}
          {projectId && (
            <TrackEvent 
              eventName="project_details_click" 
              properties={{ 
                project_name: project.title,
                project_id: projectId 
              }}
            >
              <Button variant="default" size="sm" asChild>
                <Link href={`/projects/${projectId}`}>
                  View Details
                </Link>
              </Button>
            </TrackEvent>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard; 