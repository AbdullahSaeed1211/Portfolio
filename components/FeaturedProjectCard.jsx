"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Star, Zap, Award, ArrowUpRight } from "lucide-react";
import { TrackEvent } from "@/components/ui/track-event";

const FeaturedProjectCard = ({ project }) => {
  const projectId = project.id || project.title?.toLowerCase().replace(/\s+/g, '-');

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 20
      }}
      viewport={{ once: true }}
      className="relative group"
    >
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
        {/* Featured Badge - Responsive */}
        <div className="absolute top-2 left-2 sm:top-4 sm:left-4 z-20">
          <Badge variant="featured" className="bg-orange-500 text-white font-bold px-2 py-1 sm:px-3 sm:py-1 flex items-center gap-1 text-xs sm:text-sm">
            <Star className="w-3 h-3" />
            <span className="hidden sm:inline">Featured ✨</span>
            <span className="sm:hidden">★</span>
          </Badge>
        </div>

        {/* Premium Badge - Responsive */}
        <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-20">
          <Badge className="bg-purple-600 text-white font-bold px-2 py-1 sm:px-3 sm:py-1 flex items-center gap-1 text-xs sm:text-sm">
            <Award className="w-3 h-3" />
            <span className="hidden sm:inline">Premium</span>
            <span className="sm:hidden">★</span>
          </Badge>
        </div>

        {/* Mobile Layout - Same as regular cards */}
        <div className="lg:hidden">
          <div className="relative w-full h-48 overflow-hidden">
            <Image
              src={project.imgSrc || project.imageUrl}
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

          <div className="p-4">
            <div className="flex gap-2 flex-wrap mb-3">
              {project.tags?.slice(0, 3).map((tag, i) => {
                let badgeVariant = "tech";
                const tagLower = tag.toLowerCase();

                if (tagLower.includes("ai") || tagLower.includes("machine learning")) badgeVariant = "ai";
                else if (tagLower.includes("next.js")) badgeVariant = "nextjs";
                else if (tagLower.includes("saas") || tagLower.includes("platform")) badgeVariant = "saas";

                return (
                  <Badge key={i} variant={badgeVariant} className="text-xs">
                    {tag}
                  </Badge>
                );
              })}
            </div>

            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-bold text-foreground leading-tight">{project.title}</h3>
              <TrackEvent
                eventName="featured_project_details_click"
                properties={{
                  project_name: project.title,
                  project_id: projectId
                }}
              >
                <Link href={`/projects/${projectId}`} className="text-muted-foreground hover:text-primary transition-colors">
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </TrackEvent>
            </div>

            <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>

        {/* Desktop Layout - Original featured design */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-0">
          {/* Image Section - Desktop */}
          <div className="relative h-96 overflow-hidden">
            <Image
              src={project.imgSrc || project.imageUrl}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Performance Indicators Overlay */}
            <div className="absolute bottom-4 left-4 right-4 flex gap-2">
              <Badge className="bg-green-500/90 text-white backdrop-blur-sm">
                <Zap className="w-3 h-3 mr-1" />
                95% Accuracy
              </Badge>
              <Badge className="bg-blue-500/90 text-white backdrop-blur-sm">
                Clinical-Grade
              </Badge>
            </div>
          </div>

          {/* Content Section - Desktop */}
          <div className="p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Enhanced Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags?.slice(0, 6).map((tag, i) => {
                  let badgeVariant = "tech";
                  const tagLower = tag.toLowerCase();

                  if (tagLower.includes("ai") || tagLower.includes("machine learning")) badgeVariant = "ai";
                  else if (tagLower.includes("next.js")) badgeVariant = "nextjs";
                  else if (tagLower.includes("saas") || tagLower.includes("platform")) badgeVariant = "saas";

                  return (
                    <Badge key={i} variant={badgeVariant} className="text-xs font-medium px-2 py-1">
                      {tag}
                    </Badge>
                  );
                })}
              </div>

              {/* Key Highlights */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-muted-foreground">Clinical-grade AI models with 95% accuracy</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-muted-foreground">Published research methodology</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-muted-foreground">Secure data management</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                <Button variant="outline" size="sm" asChild className="w-full">
                  <a href={project.projectLinkGithub} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                <Button variant="outline" size="sm" asChild className="w-full">
                  <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              </motion.div>
              <TrackEvent
                eventName="featured_project_details_click"
                properties={{
                  project_name: project.title,
                  project_id: projectId
                }}
                className="flex-1"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="sm" asChild className="w-full">
                    <Link href={`/projects/${projectId}`}>
                      View Details
                    </Link>
                  </Button>
                </motion.div>
              </TrackEvent>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedProjectCard;
