export const testimonialNudgerProject = {
  id: "testimonial-nudger",
  title: "TestimonialNudger",
  description: "A comprehensive platform that automates testimonial collection, management, and display for businesses. It helps businesses gather, curate, and showcase client testimonials on their websites with minimal effort, enhancing social proof and credibility.",
  imgSrc: "/assets/images/projects/testimonialnudger.webp",
  tags: ["Next.js", "React", "TypeScript", "MongoDB", "Clerk", "Tailwind CSS", "ShadcnUI"],
  projectLink: "https://testimonial-nudger.vercel.app",
  projectLinkGithub: "https://github.com/AbdullahSaeed1211/TestimonialNudger",
  
  // Detailed case study content
  caseStudy: {
    hero: {
      title: "TestimonialNudger",
      subtitle: "A platform that automates testimonial collection, management, and display for businesses of all sizes.",
      industry: "SaaS, Web App, Testimonial Platform",
      timeline: "2 Weeks",
      website: "testimonial-nudger.vercel.app"
    },
    
    overview: "TestimonialNudger is a comprehensive platform that automates testimonial collection, management, and display for businesses of all sizes. The platform addresses a critical challenge faced by businesses: collecting and showcasing authentic client testimonials efficiently.",
    
    challenge: [
      "Businesses miss out on 90% of potential testimonials due to ineffective collection methods",
      "Follow-up emails often go unanswered",
      "Clients forget to provide feedback despite promising to do so",
      "Business owners often feel uncomfortable directly asking for praise",
      "Risk of receiving negative feedback publicly"
    ],
    
    solution: [
      "Automated system for sending personalized, AI-generated testimonial requests",
      "Pre-written copy optimized for conversion",
      "Sentiment analysis system to filter out negative feedback",
      "Rich media testimonial collection (video, images)",
      "Professional showcase page for displaying approved testimonials"
    ],
    
    results: {
      metrics: [
        { label: "Response Rate", value: "3× higher" },
        { label: "Time Saved", value: "5+ hrs/wk" },
        { label: "Setup Time", value: "<10 min" },
        { label: "GDPR Compliant", value: "100%" }
      ],
      qualitative: "TestimonialNudger has transformed how businesses collect and showcase client feedback, making the process effortless while significantly increasing the number of quality testimonials available for marketing purposes."
    },
    
    sections: [
      {
        title: "The Problem",
        content: "Most businesses recognize the value of testimonials but struggle with the collection process. Follow-up emails often go unanswered, clients forget to provide feedback despite promising to do so, and business owners often feel uncomfortable directly asking for praise. Additionally, there's the fear of potentially receiving negative feedback publicly."
      },
      {
        title: "The Solution",
        content: "TestimonialNudger solves these problems with an automated system that sends personalized, AI-generated testimonial requests at the perfect moment - right after service completion when client satisfaction is highest. The platform features pre-written copy optimized for conversion, a sentiment analysis system that filters out negative feedback, and options to collect rich media testimonials including video and images."
      },
      {
        title: "Key Differentiators",
        content: "What sets TestimonialNudger apart is its seamless integration with payment systems like Stripe, allowing for automatic triggering of testimonial requests post-payment. The platform also includes a professional showcase page where businesses can display approved testimonials, embedding options for any website, and a secure token-based collection system."
      },
      {
        title: "User Experience",
        content: "Designed with both businesses and their clients in mind, TestimonialNudger makes providing feedback simple and frictionless while giving businesses complete control over which testimonials to approve and display."
      }
    ],
    
    technicalHighlights: [
      "Next.js 15 App Router for server-rendered experience with optimal performance",
      "React 18 with Suspense and concurrent rendering",
      "TypeScript for comprehensive type safety",
      "MongoDB & Mongoose for flexible document storage",
      "Clerk Authentication for secure user management",
      "Claude AI API for personalized request generation",
      "Resend & React Email for modern email delivery"
    ],
    
    colorScheme: {
      primary: "#6366f1",
      secondary: "#f8f9fa",
      accent: "#10b981",
      background: "#ffffff"
    }
  },
  
  // Full detailed description for project detail page
  detailedDescription: `TestimonialNudger is a comprehensive platform that automates testimonial collection, management, and display for businesses of all sizes. The platform addresses a critical challenge faced by businesses: collecting and showcasing authentic client testimonials efficiently.

Most businesses recognize the value of testimonials but struggle with the collection process. Follow-up emails often go unanswered, clients forget to provide feedback despite promising to do so, and business owners often feel uncomfortable directly asking for praise. Additionally, there's the fear of potentially receiving negative feedback publicly.

TestimonialNudger solves these problems with an automated system that sends personalized, AI-generated testimonial requests at the perfect moment - right after service completion when client satisfaction is highest. The platform features pre-written copy optimized for conversion, a sentiment analysis system that filters out negative feedback, and options to collect rich media testimonials including video and images.

What sets TestimonialNudger apart is its seamless integration with payment systems like Stripe, allowing for automatic triggering of testimonial requests post-payment. The platform also includes a professional showcase page where businesses can display approved testimonials, embedding options for any website, and a secure token-based collection system.

Designed with both businesses and their clients in mind, TestimonialNudger makes providing feedback simple and frictionless while giving businesses complete control over which testimonials to approve and display.`,
  
  // Technical stack details
  techStack: [
    {
      name: "Next.js 15",
      description: "App Router for server-rendered experience with optimal performance"
    },
    {
      name: "React 18",
      description: "Component-based UI with Suspense and concurrent rendering"
    },
    {
      name: "TypeScript",
      description: "Type safety throughout the application codebase"
    },
    {
      name: "MongoDB & Mongoose",
      description: "NoSQL database for storing testimonials, user data, and settings"
    },
    {
      name: "Clerk Authentication",
      description: "Secure user authentication and access control"
    },
    {
      name: "Tailwind CSS",
      description: "Utility-first styling framework for responsive design"
    },
    {
      name: "Shadcn UI",
      description: "Accessible component library built on Radix UI primitives"
    },
    {
      name: "Claude AI API",
      description: "AI-powered testimonial request generation and personalization"
    },
    {
      name: "Resend & React Email",
      description: "Modern email delivery with React-based templates"
    }
  ],
  
  // Key features 
  keyFeatures: [
    {
      name: "Automated Testimonial Requests",
      description: "Automatically sends personalized emails after service completion for maximum response rate",
      icon: "Send"
    },
    {
      name: "AI-Generated Copy",
      description: "Personalized, conversion-optimized email content created by Claude AI",
      icon: "Bot"
    },
    {
      name: "Sentiment Filtering",
      description: "Analyses feedback to identify and filter out negative sentiment",
      icon: "Filter"
    },
    {
      name: "Media Collection",
      description: "Supports text, image, and video testimonials for richer social proof",
      icon: "Camera"
    },
    {
      name: "Testimonial Showcase",
      description: "Beautiful public display page with customization options",
      icon: "Layout"
    },
    {
      name: "Embed System",
      description: "Custom embed codes to display testimonials on any website",
      icon: "Code"
    },
    {
      name: "Analytics Dashboard",
      description: "Track request conversions and testimonial performance",
      icon: "BarChart"
    }
  ],
  
  // Problem-solution section
  problemSolution: {
    problem: "Businesses miss out on 90% of potential testimonials due to ineffective collection methods, awkward follow-ups, and lack of automation, ultimately reducing social proof and credibility.",
    solution: "An automated platform that sends AI-written testimonial requests at the optimal moment, provides elegant collection forms, and offers professional display options — all with minimal effort from the business owner."
  },
  
  // Additional metadata
  metadata: {
    completionDate: "May 2025",
    category: "SaaS, Web App, Testimonial Platform",
    duration: "1 week",
    purpose: "To automate the testimonial collection process for businesses and freelancers with an elegant, user-friendly platform"
  }
}; 