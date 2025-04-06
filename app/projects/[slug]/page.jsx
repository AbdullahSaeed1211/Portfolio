import { ProjectCardList } from "@/app/constants";
import { projectDetails } from "@app/constants/project-details";
import { notFound } from "next/navigation";
import ProjectStructuredData from "@/components/ProjectStructuredData";
import ProjectDetailContent from "./ProjectDetailContent.jsx";

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

  // Check if we have detailed data for this project
  const detailedData = projectDetails[slug];
  const description = detailedData?.detailedDescription?.slice(0, 155) + "..." || project.description.slice(0, 155) + "...";
  const tags = detailedData ? detailedData.category.split(',').map(tag => tag.trim()) : 
               project.tags || ["Web Development"];

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

export default async function ProjectPage({ params }) {
  // Get the slug parameter - with await
  const { slug } = await params;
  
  // Find the project by slug
  const project = ProjectCardList.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, "-") === slug
  );

  // If project not found, return 404
  if (!project) {
    notFound();
  }

  // Check if we have detailed data for this project
  const detailedData = projectDetails[slug];
  
  return (
    <>
      <ProjectStructuredData 
        project={project}
        slug={slug}
        tags={project.tags || []}
        techStack={detailedData?.techStack?.map(tech => tech.name) || []}
        completionDate={detailedData?.completionDate || "2023"}
      />
      <ProjectDetailContent 
        project={project}
        slug={slug}
        detailedData={detailedData}
      />
    </>
  );
}