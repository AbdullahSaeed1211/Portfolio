import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ProjectCardList } from "@app/constants";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Nav from "@/components/Nav";
import FooterSimple from "@/components/ui/footer-simple";
import { ChevronLeft, Github, ExternalLink, Calendar, Tag, Code, Lightbulb, CheckCircle } from "lucide-react";
import ProjectStructuredData from "@/components/ProjectStructuredData";

// Generate metadata for the page
export async function generateMetadata({ params }) {
  // Await the params object to fix the dynamic API error
  const { slug } = await params;
  
  const project = ProjectCardList.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, "-") === slug
  );

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    };
  }

  const tags = project.description.toLowerCase().includes("ai") ? ["AI"] : 
               project.description.toLowerCase().includes("health") ? ["Health"] : 
               project.description.toLowerCase().includes("saas") ? ["SaaS"] : ["Web"];

  const projectImages = [
    {
      url: `https://abdullahsaeed.me${project.imgSrc}`,
      width: 1200,
      height: 675,
      alt: project.title
    }
  ];

  return {
    title: `${project.title} - Case Study | Abdullah Saeed Portfolio`,
    description: project.description.slice(0, 155) + "...",
    keywords: [...tags, "case study", "portfolio", "web development", "Abdullah Saeed"],
    openGraph: {
      title: `${project.title} - Web Development Case Study`,
      description: project.description.slice(0, 155) + "...",
      type: 'article',
      url: `https://abdullahsaeed.me/projects/${slug}`,
      images: projectImages,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} - Case Study`,
      description: project.description.slice(0, 155) + "...",
      images: projectImages,
    },
    alternates: {
      canonical: `https://abdullahsaeed.me/projects/${slug}`,
    }
  };
}

export default async function ProjectPage({ params }) {
  // Await the params object to fix the dynamic API error
  const { slug } = await params;
  
  // Find the project by slug
  const project = ProjectCardList.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, "-") === slug
  );

  // If project not found, return 404
  if (!project) {
    notFound();
  }

  // Extract or generate tags
  const extractTags = () => {
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

  // Extract or generate highlights
  const extractHighlights = () => {
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
    const techStack = [];
    
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

  const tags = extractTags();
  const highlights = extractHighlights();
  const problemSolution = getProblemSolution();
  const techStack = getTechStack();
  
  // Dummy date for presentation purposes
  const completionDate = "2023";
  
  // Get related projects (excluding current one)
  const relatedProjects = ProjectCardList
    .filter(p => p.title !== project.title)
    .filter(p => {
      // If this is an AI project, show other AI projects
      if (tags.includes("AI")) {
        return p.description.toLowerCase().includes("ai");
      }
      // If this is a health project, show other health projects
      if (tags.includes("Health")) {
        return p.description.toLowerCase().includes("health");
      }
      // Default to showing any project with similar tech
      return techStack.some(tech => 
        p.description.toLowerCase().includes(tech.toLowerCase())
      );
    })
    .slice(0, 2); // Show only 2 related projects

  return (
    <>
      <ProjectStructuredData 
        project={project}
        slug={slug}
        tags={tags}
        techStack={techStack}
        completionDate={completionDate}
      />
      <Nav />
      <div className="relative pt-24 pb-16 w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <Button variant="outline" size="sm" asChild className="mr-4">
              <Link href="/#Projects">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, i) => (
                <Badge key={i} variant={tag.toLowerCase() === "ai" ? "ai" : 
                               tag.toLowerCase() === "saas" ? "saas" : 
                               tag.toLowerCase() === "health" ? "health" : 
                               tag.toLowerCase() === "tech" ? "tech" : "default"}>
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8">
              {/* Hero Image */}
              <div className="relative aspect-video rounded-xl overflow-hidden border border-border">
                <Image 
                  src={project.imgSrc}
                  alt={project.title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
              
              {/* Project Description */}
              <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
                <h2 className="text-2xl font-semibold mb-4">Overview</h2>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {project.description}
                </p>
              </div>
              
              {/* Problem-Solution Box */}
              {problemSolution && (
                <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
                  <h2 className="text-2xl font-semibold mb-4">Business Challenge & Solution</h2>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 flex items-center justify-center">
                        <Lightbulb className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-2">The Problem</h3>
                        <p className="text-muted-foreground">{problemSolution.problem}</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 flex items-center justify-center">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-2">The Solution</h3>
                        <p className="text-muted-foreground">{problemSolution.solution}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Key Features/Highlights */}
              <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
                <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
                <ul className="space-y-3">
                  {highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mt-0.5">
                        <CheckCircle className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-muted-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Related Projects Section */}
              {relatedProjects.length > 0 && (
                <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
                  <h2 className="text-2xl font-semibold mb-4">Related Projects</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {relatedProjects.map((relatedProject, i) => (
                      <Link 
                        href={`/projects/${relatedProject.title.toLowerCase().replace(/\s+/g, "-")}`}
                        key={i}
                        className="flex items-center p-3 rounded-lg border border-border hover:bg-accent/30 transition-colors"
                      >
                        <div className="relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0 mr-3">
                          <Image 
                            src={relatedProject.imgSrc}
                            alt={relatedProject.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-medium line-clamp-1">{relatedProject.title}</h3>
                          <p className="text-sm text-muted-foreground line-clamp-1">
                            {relatedProject.description.substring(0, 60)}...
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Sidebar */}
            <div className="space-y-6">
              {/* Project Links */}
              <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Project Links</h3>
                <div className="space-y-3">
                  {project.projectLink && (
                    <Button variant="default" size="lg" className="w-full" asChild>
                      <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Live Demo
                      </a>
                    </Button>
                  )}
                  
                  {project.projectLinkGithub && (
                    <Button variant="outline" size="lg" className="w-full" asChild>
                      <a href={project.projectLinkGithub} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View Source Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
              
              {/* Project Info */}
              <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Project Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Calendar className="w-5 h-5 mr-3 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">Completion Date</p>
                      <p className="text-sm text-muted-foreground">{completionDate}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Tag className="w-5 h-5 mr-3 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">Category</p>
                      <p className="text-sm text-muted-foreground">{tags.join(', ')}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Tech Stack */}
              <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Technology Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, i) => (
                    <div key={i} className="flex items-center px-3 py-1.5 rounded-lg bg-accent/50 text-sm">
                      <Code className="w-3.5 h-3.5 mr-1.5" />
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterSimple />
    </>
  );
} 