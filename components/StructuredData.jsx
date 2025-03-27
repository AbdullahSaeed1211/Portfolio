"use client";

export default function StructuredData() {
  const structuredData = {
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
    "jobTitle": "Full Stack Developer & AI Specialist",
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "description": "Experienced full-stack developer specializing in AI-enhanced web applications that solve real business challenges using Next.js, React, and TypeScript.",
    "knowsAbout": [
      "AI Integration",
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Full Stack Development",
      "Web Development"
    ],
    "knowsLanguage": [
      "English",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS"
    ]
  };

  // Add the organization data
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Abdullah Saeed - Web Development",
    "url": "https://abdullahsaeed.me",
    "logo": "https://abdullahsaeed.me/assets/images/logo.svg",
    "description": "Professional web development services specializing in AI-powered applications and modern web technologies.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "email": "contact@abdullahsaeed.me",
    "priceRange": "$$",
    "openingHours": "Mo,Tu,We,Th,Fr 09:00-17:00",
    "telephone": "+91-XXXXXXXXXX", // Replace with actual phone when available
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 20.5937,
        "longitude": 78.9629
      },
      "geoRadius": "10000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Integration"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Next.js Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Full Stack Development"
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
    </>
  );
} 