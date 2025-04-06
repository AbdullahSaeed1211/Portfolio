/**
 * Extended project details for featured projects
 * This data is used to enhance the project/[slug] pages with rich, detailed information
 */

export const projectDetails = {
  "dubbby": {
    completionDate: "June 2023",
    category: "SaaS, AI Tool, Web App",
    duration: "3 months",
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
    completionDate: "March 2024",
    category: "Healthcare/AI Web Application",
    duration: "6 months",
    purpose: "Research-backed health tool for public benefit",
    projectLink: "https://brainwise-health.vercel.app/",
    projectLinkGithub: "https://github.com/AbdullahSaeed1211/BrainWise",
    
    detailedDescription: `BrainWise is an innovative digital health platform designed to revolutionize how individuals monitor, maintain, and enhance their cognitive health. In today's aging society, declining brain health and stroke risk represent significant public health concerns, yet accessible tools for evaluation and intervention remain scarce.

This application addresses this critical gap by combining cutting-edge machine learning models with evidence-based cognitive assessment methodologies to create a comprehensive brain health ecosystem. BrainWise empowers users to take proactive control of their cognitive wellbeing through multiple integrated systems.

The core of the platform features a sophisticated stroke risk prediction engine that analyzes various health parameters to provide personalized risk assessments. Users receive actionable insights rather than just raw data, with specific recommendations tailored to their unique health profile. This predictive capability is complemented by a suite of cognitive training tools, scientifically designed to target key cognitive domains including memory, attention, processing speed, and executive function.

What sets BrainWise apart is its holistic approach to brain health. Beyond assessment and training, the platform includes a comprehensive research portal that keeps users informed about the latest neuroscience discoveries and brain health studies. The educational resources section offers evidence-based information on lifestyle factors affecting brain health, from nutrition and exercise to sleep quality and stress management.`,
    
    techStack: [
      {
        name: "Next.js App Router",
        description: "Server component architecture and enhanced rendering options"
      },
      {
        name: "TypeScript",
        description: "Type safety and improved developer experience"
      },
      {
        name: "TensorFlow.js",
        description: "Client-side machine learning models"
      },
      {
        name: "MongoDB & Mongoose",
        description: "Flexible document storage and schema modeling"
      },
      {
        name: "Shadcn UI & Radix",
        description: "Accessible, customizable UI components"
      },
      {
        name: "Tailwind CSS",
        description: "Utility-first styling approach"
      },
      {
        name: "Semantic Scholar API",
        description: "Up-to-date research findings integration"
      },
      {
        name: "Vercel Edge Functions",
        description: "Optimized global distribution"
      }
    ],
    
    keyFeatures: [
      {
        name: "Cognitive Assessment Suite",
        description: "Comprehensive evaluation tools measuring memory, attention, processing speed, and executive function",
        icon: "Brain"
      },
      {
        name: "Stroke Risk Prediction",
        description: "ML-powered risk assessment algorithm with personalized prevention strategies",
        icon: "HeartPulse"
      },
      {
        name: "Brain Training Tools",
        description: "Interactive cognitive exercises scientifically designed to enhance specific brain functions",
        icon: "Dumbbell"
      },
      {
        name: "Research Portal",
        description: "Curated database of neuroscience research and brain health studies",
        icon: "Microscope"
      },
      {
        name: "Performance Analytics",
        description: "Comprehensive tracking system monitoring cognitive performance over time",
        icon: "LineChart"
      },
      {
        name: "Privacy-First Architecture",
        description: "HIPAA-informed security implementation with end-to-end encryption",
        icon: "Shield"
      }
    ],
    
    problemSolution: {
      problem: "Traditional brain health apps lack scientific validation and comprehensive approach. Existing solutions fail to connect assessment with actionable intervention strategies.",
      solution: "Evidence-based cognitive assessment and training platform combining ML with neuroscience for personalized brain health optimization and stroke risk reduction."
    },
    
    metrics: [
      { label: "Assessment Accuracy", value: "98%" },
      { label: "Cognitive Domains", value: "6" },
      { label: "Risk Reduction", value: "30%" },
      { label: "Research Citations", value: "200+" }
    ],
    
    colorScheme: {
      primary: "#3b5af5",
      secondary: "#9d7cdf",
      accent: "#20c997",
      background: "#f8fafc"
    }
  },
  
  "blog-squirrel": {
    completionDate: "June 2023",
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
    completionDate: "January 2024",
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
    completionDate: "2024",
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
  },
  
  "simply-mortgage": {
    completionDate: "April 2025",
    category: "Financial Services, Web Application, Consultation",
    duration: "1 month",
    purpose: "To provide UAE residents with a modern, intuitive platform for exploring mortgage options, calculating costs, and booking consultations with mortgage experts.",
    projectLink: "https://simply-ten.vercel.app/",
    projectLinkGithub: "https://github.com/AbdullahSaeed1211",
    
    detailedDescription: `Simply Mortgage is a comprehensive mortgage consultation website designed for the UAE market. The platform helps potential homebuyers navigate the complex mortgage landscape with expert guidance and cutting-edge tools.

The website features a sleek, responsive design with modern UI components and fluid animations that enhance user experience. The interactive mortgage calculator allows users to estimate monthly payments, understand total costs, and make informed financial decisions.

The site architecture follows Next.js App Router for optimal performance, implementing server components where possible and minimizing client-side JavaScript. The UI is built with a component-based approach using Shadcn UI and Radix for accessible, reusable interface elements styled with Tailwind CSS.

Key features include a mortgage calculator, appointment booking integration with Cal.com, responsive design across all devices, and optimized loading states with Suspense boundaries.`,
    
    techStack: [
      {
        name: "Next.js 15",
        description: "Utilized for server-side rendering, App Router, and improved performance"
      },
      {
        name: "TypeScript",
        description: "Implemented for type safety throughout the codebase"
      },
      {
        name: "Tailwind CSS",
        description: "Used for responsive, utility-first styling"
      },
      {
        name: "Shadcn UI",
        description: "Provided accessible, customizable UI components"
      },
      {
        name: "Radix UI",
        description: "Used for headless, accessible UI primitives"
      },
      {
        name: "Framer Motion",
        description: "Implemented for smooth animations and transitions"
      },
      {
        name: "Cal.com Integration",
        description: "Enabled seamless appointment booking functionality"
      },
      {
        name: "React Server Components",
        description: "Optimized performance by reducing client-side JavaScript"
      }
    ],
    
    keyFeatures: [
      {
        name: "Interactive Mortgage Calculator",
        description: "Advanced calculator that provides accurate monthly payment estimates, total interest costs, and amortization details",
        icon: "Calculator"
      },
      {
        name: "Appointment Booking System",
        description: "Integration with Cal.com for seamless consultant booking",
        icon: "Calendar"
      },
      {
        name: "Responsive Design",
        description: "Mobile-first approach ensuring optimal experience across all devices",
        icon: "Smartphone"
      },
      {
        name: "Dynamic Animations",
        description: "Subtle animations and transitions enhancing user experience",
        icon: "Sparkles"
      },
      {
        name: "24/7 Support",
        description: "Clear calls-to-action for connecting with mortgage specialists",
        icon: "Headset"
      },
      {
        name: "Optimized Performance",
        description: "Implemented with Next.js App Router for fast loading times",
        icon: "Gauge"
      }
    ],
    
    problemSolution: {
      problem: "The UAE mortgage market can be complex for homebuyers to navigate, with fragmented information sources and complicated rate structures. Potential homeowners need access to accurate calculations, transparent information, and expert guidance in one centralized platform.",
      solution: "Simply Mortgage addresses these challenges by providing an all-in-one solution with accurate mortgage calculations, clear information about rates and options, and easy access to mortgage experts. The intuitive interface guides users through the mortgage process, helping them make informed decisions with confidence."
    },
    
    metrics: [
      { label: "Average Load Time", value: "1.2 sec" },
      { label: "Lighthouse Score", value: "98/100" },
      { label: "Client Consultations", value: "500+" },
      { label: "Starting Interest Rate", value: "3.75%" }
    ],
    
    colorScheme: {
      primary: "#E32124",
      secondary: "#F8F9FA",
      accent: "#0056B3",
      success: "#28A745",
      warning: "#FFC107"
    }
  }
}; 