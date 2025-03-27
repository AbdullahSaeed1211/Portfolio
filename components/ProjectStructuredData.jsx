"use client";

export default function ProjectStructuredData({ project, slug, tags, techStack, completionDate }) {
  // Create JSON-LD data for the project
  const projectStructuredData = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": `${project.title} - Case Study`,
    "author": {
      "@type": "Person",
      "name": "Abdullah Saeed",
      "url": "https://abdullahsaeed.me"
    },
    "datePublished": `${completionDate}-01-01`,
    "image": `https://abdullahsaeed.me${project.imgSrc}`,
    "publisher": {
      "@type": "Organization",
      "name": "Abdullah Saeed Portfolio",
      "logo": {
        "@type": "ImageObject",
        "url": "https://abdullahsaeed.me/assets/images/logo.svg"
      }
    },
    "description": project.description,
    "keywords": [...tags, ...techStack, "case study", "web development"],
    "url": `https://abdullahsaeed.me/projects/${slug}`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://abdullahsaeed.me/projects/${slug}`
    },
    "articleSection": "Case Study",
    "articleBody": project.description,
    "about": {
      "@type": "SoftwareApplication",
      "name": project.title,
      "applicationCategory": "WebApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    },
    "proficiencyLevel": "Expert",
    "dependencies": techStack.join(", ")
  };

  // Create JSON-LD data for breadcrumbs
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://abdullahsaeed.me"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Projects",
        "item": "https://abdullahsaeed.me/#Projects"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": project.title,
        "item": `https://abdullahsaeed.me/projects/${slug}`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
    </>
  );
} 