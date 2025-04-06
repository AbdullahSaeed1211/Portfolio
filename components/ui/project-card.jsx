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

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex flex-col h-full"
    >
      <Card className="h-full flex flex-col overflow-hidden border-border bg-card hover:shadow-lg transition-all duration-300 group">
        <div className="relative overflow-hidden aspect-video">
          <Image
            src={project.imageUrl}
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
              .filter(tag => !["AI", "Next.js", "React"].includes(tag)) // Filter out AI, Next.js, and React tags
              .map((tag, i) => {
              // Map tag to appropriate variant
              let badgeVariant = "default";
              const tagLower = tag.toLowerCase();
              
              if (tagLower === "saas") badgeVariant = "saas";
              else if (tagLower === "health") badgeVariant = "health";
              else if (tagLower === "finance") badgeVariant = "finance";
              else if (tagLower === "web") badgeVariant = "web";
              else if (["typescript", "node.js", "mongodb"].includes(tagLower)) badgeVariant = "tech";
              
              return (
                <Badge key={i} variant={badgeVariant}>
                  {tag}
                </Badge>
              );
            })}
          </div>
          <CardTitle className="text-xl">{project.title}</CardTitle>
          <CardDescription className="line-clamp-2 text-muted-foreground">
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
          {project.slug && (
            <TrackEvent 
              eventName="project_details_click" 
              properties={{ 
                project_name: project.title,
                project_id: project.slug 
              }}
            >
              <Button variant="default" size="sm" asChild>
                <Link href={`/projects/${project.slug}`}>
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