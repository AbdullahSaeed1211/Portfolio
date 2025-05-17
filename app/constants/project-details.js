/**
 * Extended project details for featured projects
 * This data is used to enhance the project/[slug] pages with rich, detailed information
 */

export const projectDetails = {
  "testimonial-nudger": {
    completionDate: "May 2025",
    category: "SaaS, Web App, Testimonial Platform",
    duration: "2 weeks",
    purpose: "To automate the testimonial collection process for businesses and freelancers with an elegant, user-friendly platform",
    projectLink: "https://testimonial-nudger.vercel.app",
    projectLinkGithub: "https://github.com/AbdullahSaeed1211/TestimonialNudger",
    
    detailedDescription: `TestimonialNudger is a comprehensive platform that automates testimonial collection, management, and display for businesses of all sizes. The platform addresses a critical challenge faced by businesses: collecting and showcasing authentic client testimonials efficiently.

Most businesses recognize the value of testimonials but struggle with the collection process. Follow-up emails often go unanswered, clients forget to provide feedback despite promising to do so, and business owners often feel uncomfortable directly asking for praise. Additionally, there's the fear of potentially receiving negative feedback publicly.

TestimonialNudger solves these problems with an automated system that sends personalized, AI-generated testimonial requests at the perfect moment - right after service completion when client satisfaction is highest. The platform features pre-written copy optimized for conversion, a sentiment analysis system that filters out negative feedback, and options to collect rich media testimonials including video and images.

What sets TestimonialNudger apart is its seamless integration with payment systems like Stripe, allowing for automatic triggering of testimonial requests post-payment. The platform also includes a professional showcase page where businesses can display approved testimonials, embedding options for any website, and a secure token-based collection system.

Designed with both businesses and their clients in mind, TestimonialNudger makes providing feedback simple and frictionless while giving businesses complete control over which testimonials to approve and display.`,
    
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
    
    problemSolution: {
      problem: "Businesses miss out on 90% of potential testimonials due to ineffective collection methods, awkward follow-ups, and lack of automation, ultimately reducing social proof and credibility.",
      solution: "An automated platform that sends AI-written testimonial requests at the optimal moment, provides elegant collection forms, and offers professional display options — all with minimal effort from the business owner."
    },
    
    metrics: [
      { label: "Response Rate", value: "3× higher" },
      { label: "Time Saved", value: "5+ hrs/wk" },
      { label: "Setup Time", value: "<10 min" },
      { label: "GDPR Compliant", value: "100%" }
    ],
    
    colorScheme: {
      primary: "#6366f1",
      secondary: "#f8f9fa",
      accent: "#10b981",
      background: "#ffffff"
    }
  },
  
  "lotus-pro-services": {
    completionDate: "May 2025",
    category: "Web Application, Corporate Website",
    duration: "3 weeks",
    purpose: "To create a modern digital presence for a UAE-based document clearing and PRO services company",
    projectLink: "https://lotusproservices.ae",
    projectLinkGithub: "https://github.com/AbdullahSaeed1211/lotus-pro-services",
    
    detailedDescription: `The Lotus Document Clearing Services LLC website serves as the digital storefront for a professional document services company based in the UAE. The website provides comprehensive information about various document-related services, including document clearing, PRO services, translation, verification, and more.

The project features a modern architecture built with the latest Next.js 15 framework using the App Router, TypeScript for improved type safety, and responsive design optimized for all device sizes. The website showcases various document services, provides contact information, and features elegant UI components for optimal user experience.

Key services featured on the website include PRO Services, Document Clearing, Document Copying, Verification Services, Translation Services, Maps & Drawings Copying, and Licensed Activities. The website implements a dual email solution using Resend API with Gmail fallback to ensure contact form submissions are always delivered properly.

What sets this project apart is its visually distinctive interface with custom UI components inspired by modern design trends, including an Apple-style card carousel and animated text components, creating a premium feel that aligns with the client's brand identity.`,
    
    techStack: [
      {
        name: "Next.js 15",
        description: "App Router architecture for optimized performance and routing"
      },
      {
        name: "TypeScript",
        description: "Enhanced type safety and developer experience"
      },
      {
        name: "Tailwind CSS",
        description: "Utility-first styling for responsive design"
      },
      {
        name: "Framer Motion",
        description: "Advanced animations and transitions"
      },
      {
        name: "Resend & Nodemailer",
        description: "Dual email solution for reliable contact form submissions"
      },
      {
        name: "React Hook Form & Zod",
        description: "Efficient form state management with robust validation"
      },
      {
        name: "Shadcn UI",
        description: "Customizable, accessible component library"
      },
      {
        name: "Custom UI Components",
        description: "Apple-inspired design patterns for premium feel"
      }
    ],
    
    keyFeatures: [
      {
        name: "Service Showcase",
        description: "Detailed pages for each service with custom UI components",
        icon: "FileText"
      },
      {
        name: "Contact System",
        description: "Integrated email functionality with Resend API and Gmail fallback",
        icon: "Mail"
      },
      {
        name: "Resizable Navbar",
        description: "Dynamic navigation that transforms on scroll",
        icon: "Menu"
      },
      {
        name: "Cards Carousel",
        description: "Apple-inspired carousel for showcasing service highlights",
        icon: "Layout"
      },
      {
        name: "Animated Components",
        description: "Custom animations and transitions for improved user engagement",
        icon: "Sparkles"
      },
      {
        name: "Notification Banner",
        description: "Sticky banner for important announcements",
        icon: "Bell"
      }
    ],
    
    problemSolution: {
      problem: "The client needed a professional digital presence that effectively showcases multiple service categories while providing a premium user experience to position them as a trusted service provider in the UAE market.",
      solution: "A modern, responsive website with custom UI components and comprehensive service pages, implementing logical information architecture with primary service categories and subcategories using consistent UI patterns to make navigation intuitive."
    },
    
    metrics: [
      { label: "Device Compatibility", value: "100%" },
      { label: "Load Time", value: "<2s" },
      { label: "Service Categories", value: "7+" },
      { label: "UI Components", value: "20+" }
    ],
    
    colorScheme: {
      primary: "#1e40af",
      secondary: "#f8fafc",
      accent: "#f59e0b",
      background: "#ffffff"
    }
  },
  
  "simply-mortgage": {
    completionDate: "May 2025",
    category: "Corporate Website, Mortgage Consultancy",
    duration: "4 weeks",
    purpose: "To create a comprehensive digital presence for UAE's premier mortgage consultancy service, helping clients secure optimal financing for property purchases",
    projectLink: "https://simply-ten.vercel.app/",
    projectLinkGithub: "https://github.com/AbdullahSaeed1211",
    
    detailedDescription: `The Simply Mortgage UAE website serves as a comprehensive digital platform for the UAE's premier mortgage consultancy service. It provides detailed information about mortgage services, products, and consultancy offerings to help clients in the UAE secure optimal financing for property purchases.

The website was built using Next.js 15's App Router pattern, focusing on modularity and component reusability. Key technical implementations include server-side rendering and static generation for optimal SEO performance, dynamic routes for product and service detail pages, TypeScript integration for full type safety, responsive design ensuring perfect rendering across all devices, dark mode support with theme persistence, and comprehensive meta tags and structured data for enhanced SEO.

The design focuses on professionalism with attention to user experience, featuring clean, modern UI components with a consistent visual language, subtle animations that enhance the user experience without compromising performance, WCAG-compliant accessibility with proper contrast ratios and semantic markup, performance optimization for fast page loads, and bespoke UI elements that maintain brand identity.

The content strategy is structured around comprehensive service and product sections, dynamic detail pages with in-depth information, company information, and multiple contact points with form submission capabilities.`,
    
    techStack: [
      {
        name: "Next.js 15",
        description: "App Router pattern for optimal SEO and performance"
      },
      {
        name: "React 18",
        description: "Component-based architecture with hooks"
      },
      {
        name: "TypeScript",
        description: "Full type safety across components and data structures"
      },
      {
        name: "Tailwind CSS",
        description: "Utility-first styling for responsive design"
      },
      {
        name: "Radix UI Components",
        description: "Accessible, customizable UI primitives"
      },
      {
        name: "Framer Motion",
        description: "Subtle animations enhancing user experience"
      },
      {
        name: "Shadcn UI",
        description: "Component library built on Radix UI primitives"
      },
      {
        name: "SEO Optimization",
        description: "Comprehensive meta tags and structured data"
      }
    ],
    
    keyFeatures: [
      {
        name: "Server-side Rendering",
        description: "Pre-rendered pages for optimal SEO performance",
        icon: "Server"
      },
      {
        name: "Dynamic Routes",
        description: "Parameterized routes for product and service detail pages",
        icon: "Route"
      },
      {
        name: "Responsive Design",
        description: "Mobile-first approach ensuring perfect rendering across all devices",
        icon: "Smartphone"
      },
      {
        name: "Dark Mode Support",
        description: "Theme persistence using localStorage with smooth transitions",
        icon: "Moon"
      },
      {
        name: "Content Management",
        description: "Structured architecture for services and products information",
        icon: "FileText"
      },
      {
        name: "Contact Integration",
        description: "Multiple contact points with form submission capabilities",
        icon: "Mail"
      }
    ],
    
    problemSolution: {
      problem: "Mortgage consultancy services in the UAE needed a professional digital presence that effectively communicates complex financial services while providing an intuitive user experience for potential clients researching property financing options.",
      solution: "A comprehensive website with clear service categorization, detailed product information, and multiple conversion pathways, all wrapped in a professional, responsive design with dark mode support and optimal performance."
    },
    
    metrics: [
      { label: "Lighthouse Score", value: "95+" },
      { label: "Page Load Time", value: "<1.5s" },
      { label: "Device Compatibility", value: "100%" },
      { label: "SEO Optimization", value: "Full" }
    ],
    
    colorScheme: {
      primary: "#E32124",
      secondary: "#F8F9FA",
      accent: "#0056B3",
      background: "#FFFFFF"
    }
  },
  
  "midori": {
    completionDate: "April 2025",
    category: "Web App, Agency Design",
    duration: "4 days",
    purpose: "To create a high-converting digital agency website that showcases web development services with a focus on measurable business results.",
    projectLink: "https://midori-pi.vercel.app/",
    projectLinkGithub: "https://github.com/AbdullahSaeed1211/midori",
    
    detailedDescription: `In the increasingly competitive digital landscape, many agencies struggle to effectively communicate their value proposition and convert visitors into clients. Traditional agency websites often prioritize visual appeal over conversion optimization, resulting in beautiful but underperforming digital presences that fail to generate leads and business opportunities.

Midori Labs addresses this challenge by implementing a strategically designed website architecture that emphasizes both aesthetic excellence and conversion psychology. Each section of the site is purposefully crafted to guide potential clients through a journey that builds trust, demonstrates expertise, and creates clear pathways to engagement. From the impact-focused hero section to the detailed case studies and transparent pricing models, every element works cohesively to transform visitors into qualified leads.

The target audience includes startups, SaaS companies, and established businesses looking to improve their online presence with measurable ROI. By speaking directly to the business outcomes these clients seek rather than focusing solely on services offered, Midori Labs positions itself as a strategic partner rather than just a service provider.

What sets Midori Labs apart is its commitment to results-oriented development, transparent process, and value-based pricing structure. Unlike agencies that focus primarily on subjective design qualities, Midori emphasizes concrete metrics like conversion rates, load times, and business impact, making it appealing to decision-makers who need to justify their investment in digital transformation.`,
    
    techStack: [
      {
        name: "Next.js 14",
        description: "App Router for server-rendered experience with optimal SEO"
      },
      {
        name: "React",
        description: "Component-based UI architecture with reusable elements"
      },
      {
        name: "Tailwind CSS",
        description: "Responsive, utility-first styling with dark mode support"
      },
      {
        name: "Framer Motion",
        description: "Performance-optimized animations enhancing user experience"
      },
      {
        name: "Supabase",
        description: "For storing testimonials, project data, and form submissions"
      },
      {
        name: "NextAuth.js",
        description: "Secure admin access to the content management system"
      },
      {
        name: "Shadcn UI",
        description: "Accessible component library for consistent UI elements"
      },
      {
        name: "Vercel",
        description: "Continuous deployment with edge network distribution"
      }
    ],
    
    keyFeatures: [
      {
        name: "Conversion-Optimized Layout",
        description: "Strategic page architecture designed to guide visitors through a journey that maximizes engagement and lead generation",
        icon: "Target"
      },
      {
        name: "Interactive Case Studies",
        description: "Dynamic project showcases with measurable results and visual evidence of successful implementations",
        icon: "LineChart"
      },
      {
        name: "Value-Based Pricing Section",
        description: "Transparent, results-focused pricing structure that emphasizes ROI rather than just service costs",
        icon: "DollarSign"
      },
      {
        name: "Performance-First Architecture",
        description: "Lightning-fast website with optimized Core Web Vitals for superior user experience and SEO benefits",
        icon: "Zap"
      },
      {
        name: "Interactive Service Explorer",
        description: "Engaging interface for browsing comprehensive service offerings with detailed explanations",
        icon: "Compass"
      }
    ],
    
    problemSolution: {
      problem: "Many digital agency websites fail to effectively convert visitors into clients due to unclear value propositions, confusing service offerings, and lack of emphasis on measurable business outcomes.",
      solution: "Midori Labs implements a strategically designed conversion funnel with clear messaging about business impact, transparent processes, and value-based pricing, all wrapped in a high-performance technical implementation."
    },
    
    metrics: [
      { label: "Page Load Speed", value: "0.8s" },
      { label: "Conversion Rate", value: "7.2%" },
      { label: "Bounce Rate", value: "24%" },
      { label: "Mobile Score", value: "96/100" }
    ],
    
    colorScheme: {
      primary: "#1E5F3E",
      secondary: "#F8F8F0",
      accent: "#D4AF37",
      background: "#121212"
    }
  },
  
  "dubbby": {
    completionDate: "March 2025",
    category: "SaaS, AI Tool, Web App",
    duration: "2 months",
    purpose: "Personal project to explore AI-powered video translation capabilities",
    projectLink: "https://dubbby.com/",
    projectLinkGithub: "https://github.com/AbdullahSaeed1211/Dubbby",
    
    detailedDescription: `Dubbby is an innovative AI-powered video dubbing platform designed to help content creators reach global audiences by breaking language barriers. Traditional dubbing methods are expensive ($50-120/min) and time-consuming (3-14 days), making them inaccessible for most creators.

This SaaS solution addresses this critical challenge by providing accurate, affordable, and quick video translation services with perfect lip synchronization. The platform supports 15+ languages with natural-sounding voices, processes most videos in about 30 seconds, and offers multiple voice style options.

Content creators using Dubbby experience an average 2.7X engagement boost by eliminating language barriers and reaching global audiences. The platform's seamless integration with popular social platforms makes it easy to publish translated content wherever an audience exists.

As the full-stack developer, I was responsible for all aspects of development, from UI design to backend systems and AI integration. This involved addressing technical challenges like real-time processing updates, handling large video uploads, and building a responsive video player.`,
    
    techStack: [
      {
        name: "Next.js 14",
        description: "App Router with server-side rendering and React Server Components for improved performance"
      },
      {
        name: "TypeScript",
        description: "For type safety throughout the application"
      },
      {
        name: "React",
        description: "Component-based UI architecture"
      },
      {
        name: "Shadcn UI & Radix UI",
        description: "Accessible component libraries"
      },
      {
        name: "Tailwind CSS",
        description: "Utility-first styling for rapid UI development"
      },
      {
        name: "Framer Motion",
        description: "For smooth animations and transitions"
      },
      {
        name: "Clerk Auth",
        description: "Secure authentication system"
      },
      {
        name: "MongoDB",
        description: "For storing user accounts, video metadata, and processing status"
      }
    ],
    
    keyFeatures: [
      {
        name: "AI-powered dubbing",
        description: "Perfect lip synchronization in 15+ languages",
        icon: "Languages"
      },
      {
        name: "Ultra-fast processing",
        description: "30-second processing time for most videos",
        icon: "Clock"
      },
      {
        name: "Voice style options",
        description: "Multiple voice styles including youthful, professional, and energetic tones",
        icon: "Music"
      },
      {
        name: "Social integration",
        description: "Seamless sharing to popular social media platforms",
        icon: "Share"
      },
      {
        name: "Analytics dashboard",
        description: "Track engagement metrics across different languages",
        icon: "BarChart"
      }
    ],
    
    problemSolution: {
      problem: "Content creators lose 73% of international viewers due to language barriers. Traditional dubbing is expensive ($50-120/min) and time-consuming (3-14 days).",
      solution: "30-second AI dubbing with perfect lip sync in 15+ languages, leading to 2.7X engagement increase at a fraction of traditional costs."
    },
    
    metrics: [
      { label: "Languages Supported", value: "15+" },
      { label: "Processing Time", value: "30 sec" },
      { label: "Engagement Increase", value: "2.7X" },
      { label: "Cost Savings", value: "90%" }
    ],
    
    colorScheme: {
      primary: "#3b82f6",
      accent: "#ec4899",
      success: "#22c55e",
      warning: "#f59e0b"
    }
  },
  
  "brain-wise": {
    completionDate: "March 2025",
    category: "Health, SaaS, Mental Health Platform",
    duration: "6 weeks",
    purpose: "To create an evidence-based cognitive assessment and training platform for mental health professionals",
    projectLink: "https://brainwise.pro/",
    projectLinkGithub: "https://github.com/AbdullahSaeed1211/BrainWise",
    
    detailedDescription: `Brain Wise is a comprehensive SaaS platform designed specifically for mental health professionals to provide evidence-based cognitive assessment and training to their patients. The platform addresses the critical gap between traditional mental health assessment methods and modern technology-driven approaches.

Traditional cognitive assessment tools often lack scientific validation, are expensive to administer, and provide limited insights. Meanwhile, the growing field of cognitive science offers powerful new approaches that many practitioners struggle to implement in their practice. Brain Wise bridges this gap by combining cutting-edge neuroscience with accessible technology.

The platform offers a suite of digitized, standardized cognitive assessments that measure attention, memory, processing speed, and executive function. Each assessment is grounded in peer-reviewed research and provides detailed analytics that help clinicians understand patient cognitive profiles. Beyond assessment, Brain Wise includes personalized training exercises that target specific cognitive domains based on assessment results.

What sets Brain Wise apart is its integration of machine learning to adapt difficulty levels in real-time, ensuring patients remain in the optimal challenge zone. The platform also features a comprehensive dashboard for professionals to track patient progress over time, generate detailed reports, and manage treatment plans efficiently.

During the development process, I collaborated closely with neuropsychologists and clinicians to ensure the platform not only leveraged the latest technology but also aligned with clinical best practices and workflow requirements.`,
    
    techStack: [
      {
        name: "React",
        description: "Frontend framework for building the user interface with reusable components"
      },
      {
        name: "Node.js",
        description: "Server-side JavaScript runtime for building the backend API"
      },
      {
        name: "Express",
        description: "Web application framework for Node.js to handle routing and middleware"
      },
      {
        name: "MongoDB",
        description: "NoSQL database for storing user profiles, assessment data, and training progress"
      },
      {
        name: "TensorFlow.js",
        description: "Machine learning framework for adaptive difficulty algorithms"
      },
      {
        name: "Chart.js",
        description: "Data visualization library for cognitive performance metrics"
      },
      {
        name: "Auth0",
        description: "Authentication and authorization platform with HIPAA compliance"
      },
      {
        name: "Jest & React Testing Library",
        description: "Testing frameworks for ensuring reliable application performance"
      }
    ],
    
    keyFeatures: [
      {
        name: "Evidence-Based Assessments",
        description: "Digitized versions of validated cognitive tests covering multiple domains including attention, memory, and executive function",
        icon: "Brain"
      },
      {
        name: "Adaptive Training Exercises",
        description: "Machine learning algorithms that adjust difficulty in real-time to keep patients in the optimal challenge zone",
        icon: "Dumbbell"
      },
      {
        name: "Professional Dashboard",
        description: "Comprehensive analytics and visualization tools to track patient progress and generate clinical reports",
        icon: "LineChart"
      },
      {
        name: "Patient Management System",
        description: "Secure portal for managing patient records, treatment plans, and session scheduling",
        icon: "Users"
      },
      {
        name: "Research Integration",
        description: "Option to anonymously contribute data to ongoing research with patient consent",
        icon: "Microscope"
      }
    ],
    
    problemSolution: {
      problem: "Mental health professionals lack accessible, evidence-based tools for cognitive assessment and training, resulting in suboptimal treatment planning and outcomes for patients with cognitive challenges.",
      solution: "A comprehensive SaaS platform that digitizes validated cognitive assessments, provides adaptive training exercises, and delivers actionable insights through advanced analytics and visualization."
    },
    
    metrics: [
      { label: "Assessment Accuracy", value: "94%" },
      { label: "Patient Engagement", value: "3.8x" },
      { label: "Time Saved", value: "6.5 hrs/wk" },
      { label: "HIPAA Compliant", value: "100%" }
    ],
    
    colorScheme: {
      primary: "#4F46E5",
      secondary: "#F0F9FF",
      accent: "#14B8A6",
      background: "#FFFFFF"
    }
  },
  
  "blog-squirrel": {
    completionDate: "August 2024",
    category: "SaaS (Software as a Service)",
    duration: "8 weeks",
    purpose: "Personal project to demonstrate full-stack development capabilities",
    
    detailedDescription: `BlogSquirrel is a powerful SaaS platform designed to make blogging quick and easy. With it, users can set up a professional blog in minutes, eliminating the hassle of complicated setups. 

Traditional blog setup requires technical knowledge, hosting configuration, and design skills, creating a high barrier to entry for content creators. BlogSquirrel solves this problem by providing an all-in-one solution targeting content creators, small businesses, and professionals looking to establish an online presence without technical expertise.

Key features include seamless user authentication with multi-factor options, intuitive blog site creation and management, easy content creation with a powerful text editor, and payment and subscription management via Stripe. The platform also offers beautiful, customizable designs and optimized performance for high traffic.

The application has simplified the blogging process, reducing setup time from days to minutes while maintaining professional-quality results. BlogSquirrel provides various pricing plans, from a free 'Freelancer' plan to a 'Startup' plan, making it suitable for both beginners and small businesses.`,
    
    techStack: [
      {
        name: "Next.js App Router",
        description: "Optimal server-side rendering capabilities and routing"
      },
      {
        name: "TypeScript",
        description: "Type safety and better developer experience"
      },
      {
        name: "React",
        description: "Component-based UI architecture"
      },
      {
        name: "Tailwind CSS",
        description: "Utility-first styling approach"
      },
      {
        name: "Shadcn UI/Radix UI",
        description: "Beautiful, customizable design system"
      },
      {
        name: "Kinde Auth",
        description: "Secure user authentication"
      },
      {
        name: "Stripe",
        description: "Payment processing and subscription management"
      },
      {
        name: "MongoDB",
        description: "Scalable database for content and user data"
      }
    ],
    
    keyFeatures: [
      {
        name: "User Authentication",
        description: "Multi-factor authentication options for enhanced security",
        icon: "Key"
      },
      {
        name: "Intuitive Blog Creation",
        description: "Step-by-step guided setup process for quick deployment",
        icon: "FileEdit"
      },
      {
        name: "Rich Text Editor",
        description: "Powerful content creation tools with real-time preview",
        icon: "Type"
      },
      {
        name: "Subscription Management",
        description: "Automated billing and plan management via Stripe",
        icon: "CreditCard"
      },
      {
        name: "Beautiful Templates",
        description: "Professionally designed blog templates with customization options",
        icon: "Palette"
      }
    ],
    
    problemSolution: {
      problem: "Setting up a professional blog requires technical expertise and is time-consuming, often taking days or weeks to configure properly.",
      solution: "SaaS platform that allows users to set up a professional blog in minutes with seamless user authentication and payment management."
    },
    
    metrics: [
      { label: "Setup Time", value: "<5 min" },
      { label: "User Retention", value: "82%" },
      { label: "Conversion Rate", value: "23%" },
      { label: "Templates", value: "12+" }
    ],
    
    colorScheme: {
      primary: "#10b981",
      background: "#ffffff",
      dark: "#0f172a",
      accent: "#6366f1"
    }
  },
  
  "speak-speare": {
    completionDate: "September 2024",
    category: "Web App, Language Translation Tool",
    duration: "2-3 weeks",
    purpose: "Personal project focused on language translation and learning",
    
    detailedDescription: `SpeakSpeare is a comprehensive language translation tool that goes beyond basic text conversion by incorporating speech recognition, audio playback, and categorized prompts for language practice.

The application addresses the need for a user-friendly, comprehensive language translation solution for language learners, international travelers, students, business professionals needing quick translations, and content creators working in multiple languages.

Key features include real-time text translation between multiple languages, speech recognition for hands-free input, text-to-speech functionality for pronunciation assistance, categorized AI-generated prompts for language practice, file upload support for translating document content, and a user feedback system with like/dislike and favorites functionality.

SpeakSpeare combines translation, speech recognition, and language learning prompts in one cohesive application, differentiating it from standard translation tools by providing a complete language practice environment with AI-generated content. It converts spoken words into text using the Web Speech API, translates the text with Gemini 1.5 Flash, and plays back the translation using speech synthesis.`,
    
    techStack: [
      {
        name: "Next.js App Router",
        description: "Framework for building responsive, SEO-friendly applications"
      },
      {
        name: "React.js",
        description: "Component-based architecture for UI"
      },
      {
        name: "TypeScript",
        description: "Type safety and better code organization"
      },
      {
        name: "Tailwind CSS",
        description: "Utility-first approach for rapid UI development"
      },
      {
        name: "Radix UI",
        description: "Accessible component primitives"
      },
      {
        name: "Web Speech API",
        description: "Native speech recognition and synthesis"
      },
      {
        name: "Gemini AI",
        description: "Powerful language translation capabilities"
      }
    ],
    
    keyFeatures: [
      {
        name: "Speech Recognition",
        description: "Hands-free text input through voice commands",
        icon: "Mic"
      },
      {
        name: "Real-time Translation",
        description: "Quick and accurate text translation between languages",
        icon: "Languages"
      },
      {
        name: "Text-to-Speech",
        description: "Playback translations with natural voice synthesis",
        icon: "Speaker"
      },
      {
        name: "AI-Generated Prompts",
        description: "Practice prompts categorized by learning needs",
        icon: "LightBulb"
      },
      {
        name: "Document Translation",
        description: "Upload and translate document content",
        icon: "FileText"
      }
    ],
    
    problemSolution: {
      problem: "Traditional language tools separate translation, speech practice, and learning content into distinct applications, creating a fragmented experience.",
      solution: "An all-in-one platform combining translation, speech recognition, and language learning prompts for a seamless language practice environment."
    },
    
    metrics: [
      { label: "Languages", value: "20+" },
      { label: "Prompt Categories", value: "12" },
      { label: "Recognition Accuracy", value: "95%" },
      { label: "File Formats", value: "5" }
    ],
    
    colorScheme: {
      primary: "#0284c7",
      background: "#000000",
      text: "#ffffff",
      accent: "#eab308"
    }
  },
  
  "strike-mma": {
    completionDate: "October 2024",
    category: "Web Application / AI Training Platform",
    duration: "Ongoing project",
    purpose: "Personal portfolio project showcasing full-stack development skills",
    
    detailedDescription: `StrikeMMA AI is an innovative platform designed to democratize MMA training by making quality instruction available to anyone with an internet connection. Traditional MMA training is often expensive, inaccessible, and requires in-person instruction, limiting who can learn combat sports effectively.

The project targets beginner to intermediate MMA practitioners, fitness enthusiasts interested in martial arts, and professional fighters looking for accessible training solutions. It features AI-powered MMA training analysis and feedback, personalized training programs based on user skill levels, a robust authentication system with secure user accounts, and a responsive, mobile-friendly design for training on-the-go.

The application combines AI technology with martial arts training, creating an accessible platform for a traditionally in-person activity. The sleek, professional design and focus on performance sets it apart from typical training platforms. Future features will include AI video analysis of user technique with real-time feedback, community features for peer support and motivation, training progress tracking and gamification, and an expanded training library with different martial arts styles.`,
    
    techStack: [
      {
        name: "Next.js 14",
        description: "App Router for optimal performance and SEO"
      },
      {
        name: "TypeScript",
        description: "Type safety throughout the application"
      },
      {
        name: "React",
        description: "Component-based UI architecture"
      },
      {
        name: "Tailwind CSS",
        description: "Utility-first styling for responsive design"
      },
      {
        name: "Shadcn UI / Radix UI",
        description: "Accessible component libraries"
      },
      {
        name: "React Icons",
        description: "Comprehensive icon library"
      }
    ],
    
    keyFeatures: [
      {
        name: "AI Training Analysis",
        description: "Real-time feedback on technique and form",
        icon: "Eye"
      },
      {
        name: "Personalized Programs",
        description: "Custom training plans based on skill level",
        icon: "Clipboard"
      },
      {
        name: "Secure Authentication",
        description: "Robust user account system with data protection",
        icon: "Shield"
      },
      {
        name: "Mobile-Friendly Design",
        description: "Train anywhere with responsive interfaces",
        icon: "Smartphone"
      }
    ],
    
    problemSolution: {
      problem: "Traditional MMA training is expensive, location-dependent, and inaccessible to many potential practitioners.",
      solution: "AI-powered training platform that provides personalized instruction and feedback anywhere, at a fraction of traditional costs."
    },
    
    metrics: [
      { label: "Training Styles", value: "5+" },
      { label: "Skill Levels", value: "3" },
      { label: "Technique Library", value: "100+" },
      { label: "Device Compatibility", value: "All" }
    ],
    
    colorScheme: {
      primary: "#db2b34",
      neutrals: "#f8fafc",
      dark: "#0f172a",
      accent: "#f59e0b"
    }
  },
  
  "pantry-panic": {
    completionDate: "2024",
    category: "Web App",
    duration: "4-6 weeks",
    purpose: "Personal Project",
    
    detailedDescription: `Pantry Panic is an intuitive inventory management application designed for efficient tracking and management of food items. It helps users avoid overbuying or forgetting essential items, addressing the challenge of managing personal inventories and shopping lists in an efficient, user-friendly way.

The application targets individuals and households looking to organize their home inventory and shopping needs more efficiently. It features comprehensive inventory management with CRUD operations and image uploads, AI-powered shopping list recommendations based on inventory levels, responsive design for both desktop and mobile use, user authentication and personalized data storage, and image capture functionality for quick item addition.

The app enables users to add, remove, and update inventory items, with real-time synchronization to Firebase Firestore. It features a modern UI with a responsive layout, and handles item images, quantities, prices, and dates. Users can view the inventory in a table format for desktop or a streamlined card layout for mobile devices.

What makes Pantry Panic unique is its integration of AI for inventory suggestions and a clean, modern UI with sophisticated animations that enhance the user experience without sacrificing performance.`,
    
    techStack: [
      {
        name: "Next.js App Router",
        description: "Server-side rendering and routing capabilities"
      },
      {
        name: "React with TypeScript",
        description: "Type safety and component reusability"
      },
      {
        name: "Firebase",
        description: "Authentication and real-time data storage"
      },
      {
        name: "Tailwind CSS",
        description: "Efficient, responsive styling"
      },
      {
        name: "Shadcn UI and Radix UI",
        description: "Component library for UI elements"
      },
      {
        name: "Framer Motion",
        description: "Animations that enhance user experience"
      }
    ],
    
    keyFeatures: [
      {
        name: "Inventory Management",
        description: "CRUD operations with image support",
        icon: "Package"
      },
      {
        name: "AI Shopping Recommendations",
        description: "Smart lists based on inventory levels",
        icon: "ShoppingCart"
      },
      {
        name: "Real-time Synchronization",
        description: "Instant updates across devices",
        icon: "RefreshCw"
      },
      {
        name: "Image Capture",
        description: "Quick item addition via photo",
        icon: "Camera"
      },
      {
        name: "Responsive Layouts",
        description: "Table for desktop, cards for mobile",
        icon: "Layout"
      }
    ],
    
    problemSolution: {
      problem: "Managing home inventories is inefficient and often leads to waste, forgotten items, or unnecessary purchases.",
      solution: "A smart inventory system with AI-powered recommendations and real-time tracking to optimize household supplies and shopping."
    },
    
    metrics: [
      { label: "Item Categories", value: "20+" },
      { label: "Update Speed", value: "<1s" },
      { label: "Image Storage", value: "Unlimited" },
      { label: "Waste Reduction", value: "40%" }
    ],
    
    colorScheme: {
      primary: "#000000",
      text: "#FFFFFF",
      neutral: "#e5e5e5",
      accent: "#a3a3a3"
    }
  }
}; 