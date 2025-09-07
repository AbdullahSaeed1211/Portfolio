"use client";

export default function StructuredData() {
  const personData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Abdullah Saeed",
    "url": "https://abdullahsaeed.me",
    "image": "https://abdullahsaeed.me/assets/images/AboutMe.png",
    "sameAs": [
      "https://github.com/AbdullahSaeed1211",
      "https://www.linkedin.com/in/abdullah-saeed1211/",
      "https://twitter.com/abdullahsaeed_"
    ],
    "jobTitle": "Full-Stack Developer & AI Specialist",
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "description": "Experienced full-stack developer specializing in AI-enhanced web applications that solve real business problems using Next.js, React, and TypeScript.",
    "knowsAbout": [
      "AI Integration",
      "Machine Learning",
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Python",
      "Full Stack Development",
      "Web Development",
      "SaaS Development",
      "Medical AI",
      "Educational Technology",
      "Business Automation"
    ],
    "knowsLanguage": [
      "English",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "Python",
      "SQL"
    ],
    "programmingLanguage": [
      "JavaScript",
      "TypeScript",
      "Python",
      "SQL"
    ],
    "expertise": [
      "AI Integration",
      "Web Development",
      "Full Stack Engineering",
      "SaaS Platforms",
      "Medical Technology",
      "Educational Platforms"
    ]
  };

  // Website schema
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Abdullah Saeed Portfolio",
    "url": "https://abdullahsaeed.me",
    "description": "Portfolio of Abdullah Saeed, a full-stack developer specializing in AI-enhanced web applications",
    "author": {
      "@type": "Person",
      "name": "Abdullah Saeed"
    },
    "publisher": {
      "@type": "Person",
      "name": "Abdullah Saeed"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://abdullahsaeed.me/projects/{search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  // Organization data
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Abdullah Saeed - Web Development Services",
    "url": "https://abdullahsaeed.me",
    "logo": "https://abdullahsaeed.me/assets/images/logo.svg",
    "description": "Professional web development services specializing in AI-powered applications, SaaS platforms, and modern web technologies.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "email": "contact@abdullahsaeed.me",
    "priceRange": "$$",
    "openingHours": "Mo,Tu,We,Th,Fr 09:00-17:00",
    "telephone": "+91-XXXXXXXXXX",
    "areaServed": "Worldwide",
    "serviceType": "Web Development",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Integration & Machine Learning",
            "description": "Integration of AI and ML capabilities into web applications"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Next.js & React Development",
            "description": "Modern web application development with Next.js and React"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Full Stack Development",
            "description": "Complete web application development from frontend to backend"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SaaS Platform Development",
            "description": "Scalable SaaS applications with subscription management"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Medical & Educational Technology",
            "description": "Specialized development for healthcare and education sectors"
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
    </>
  );
} 