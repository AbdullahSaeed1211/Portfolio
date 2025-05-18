import { getProjectById } from "@/app/constants/projects";
import { notFound } from "next/navigation";
import ProjectStructuredData from "@/components/ProjectStructuredData";
import ProjectDetailContent from "./ProjectDetailContent.jsx";

// Generate metadata for the page
export async function generateMetadata({ params }) {
  // Get the slug parameter - properly await it first
  const { slug } = await params;
  
  if (!slug) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    };
  }
  
  // Get project using our new structure
  const project = getProjectById(slug);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    };
  }

  const description = project.detailedDescription?.slice(0, 155) + "..." || project.description.slice(0, 155) + "...";
  const tags = project.tags || ["Web Development"];

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
    description: description,
    keywords: [...tags, "case study", "portfolio", "web development", "Abdullah Saeed"],
    openGraph: {
      title: `${project.title} - Web Development Case Study`,
      description: description,
      type: 'article',
      url: `https://abdullahsaeed.me/projects/${slug}`,
      images: projectImages,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} - Case Study`,
      description: description,
      images: projectImages,
    },
    alternates: {
      canonical: `https://abdullahsaeed.me/projects/${slug}`,
    }
  };
}

// Make the component async to properly handle async params
export default async function ProjectPage({ params }) {
  // Extract the slug parameter properly by awaiting params first
  const { slug } = await params;
  
  if (!slug) {
    notFound();
  }
  
  return (
    <>
      {/* Pass slug directly */}
      <ProjectStructuredData slug={slug} />
      
      {/* Pass the slug to ProjectDetailContent */}
      <ProjectDetailContent slug={slug} />
    </>
  );
}