export const dubbbyProject = {
  id: "dubbby",
  title: "Dubbby",
  description: "A SaaS platform for AI-powered video dubbing and translation. It helps content creators, businesses, and educators reach global audiences by automatically translating and dubbing videos into multiple languages.",
  imgSrc: "/assets/images/projects/dubbby.webp",
  tags: ["Next.js", "TypeScript", "Tailwind", "SaaS", "AI", "Video Processing"],
  projectLink: "https://dubbby.com/",
  projectLinkGithub: "https://github.com/AbdullahSaeed1211/Dubbby",
  
  // Detailed case study content
  caseStudy: {
    hero: {
      title: "Dubbby",
      subtitle: "AI-powered video translation and dubbing platform for global content reach.",
      industry: "SaaS, Video Processing, Content Localization",
      timeline: "6 Weeks",
      website: "dubbby.com"
    },
    
    overview: "Dubbby is a cutting-edge SaaS platform that leverages artificial intelligence to automate the video translation and dubbing process. It enables content creators, businesses, and educational institutions to break language barriers and expand their reach to global audiences without the high costs and time investments typically associated with professional dubbing services.",
    
    challenge: [
      "Traditional dubbing is prohibitively expensive ($75-$100 per finished minute)",
      "Professional dubbing takes 15-30 days for completion",
      "Low-quality automated solutions create unnatural voice results",
      "Complex technical process requiring multiple specialized tools",
      "Limited language support in most existing solutions"
    ],
    
    solution: [
      "AI-powered voice cloning for natural-sounding translations",
      "Automatic subtitle extraction and translation into 75+ languages",
      "Voice-matched dubbing with emotional tone preservation",
      "Browser-based solution requiring no technical expertise",
      "Per-minute pricing at less than 10% of traditional dubbing costs"
    ],
    
    results: {
      metrics: [
        { label: "Cost Reduction", value: "94%" },
        { label: "Time Savings", value: "26× faster" },
        { label: "Language Support", value: "75+ languages" },
        { label: "User Rating", value: "4.8/5" }
      ],
      qualitative: "Dubbby has democratized professional-quality video dubbing, making it accessible to individual creators, small businesses, and educational institutions who previously couldn't afford localization. This has allowed content to reach new markets and audiences, significantly improving engagement metrics for users."
    },
    
    sections: [
      {
        title: "Market Problem",
        content: "Video is the most engaging content format, but language barriers severely limit reach. Traditional dubbing services are prohibitively expensive at $75-$100 per finished minute and take weeks to complete, putting them out of reach for most creators and small businesses. Low-cost alternatives typically produce robotic voices that reduce viewer engagement and retention."
      },
      {
        title: "Our Approach",
        content: "Dubbby combines several AI technologies including voice cloning, natural language processing, and speech synthesis to create a streamlined, user-friendly dubbing solution. Users simply upload their video, select target languages, and Dubbby handles the entire process automatically: extracting audio, transcribing speech, translating content, and generating natural-sounding dubbed audio that matches the original speaker's voice characteristics."
      },
      {
        title: "Technical Innovation",
        content: "The platform's core innovation is its voice-matching algorithm, which analyzes the original speaker's vocal patterns and recreates them in the target language while preserving emotional inflections. This results in dubbed content that sounds natural and authentic, rather than robotic or disconnected from the visual content."
      },
      {
        title: "Business Model",
        content: "Dubbby operates on a simple pay-per-minute model with tiered subscription options for regular users. At just $6 per finished minute of content (with volume discounts available), it offers a 94% cost reduction compared to traditional dubbing services while delivering results in hours instead of weeks."
      }
    ],
    
    technicalHighlights: [
      "Next.js 14 framework with server components for optimal performance",
      "FFmpeg integration for professional video/audio processing",
      "Custom-built AI pipeline combining multiple machine learning models",
      "Serverless architecture on AWS for scalable processing",
      "Shadow DOM for frame-accurate subtitle synchronization",
      "Stripe integration for subscription and usage-based billing",
      "Progressive processing with real-time status updates"
    ],
    
    
    
    colorScheme: {
      primary: "#8B5CF6", // Purple
      secondary: "#F3F4F6", // Light gray
      accent: "#10B981", // Green
      background: "#FFFFFF" // White
    }
  },
  
  // Full detailed description for project detail page
  detailedDescription: `Dubbby is a cutting-edge SaaS platform that leverages artificial intelligence to automate the video translation and dubbing process. It enables content creators, businesses, and educational institutions to break language barriers and expand their reach to global audiences without the high costs and time investments typically associated with professional dubbing services.

The platform addresses a significant market need: while video is the most engaging content format, language barriers severely limit reach. Traditional dubbing services are prohibitively expensive at $75-$100 per finished minute and take weeks to complete, putting them out of reach for most creators and small businesses. Low-cost alternatives typically produce robotic voices that reduce viewer engagement and retention.

Dubbby combines several AI technologies including voice cloning, natural language processing, and speech synthesis to create a streamlined, user-friendly dubbing solution. Users simply upload their video, select target languages, and Dubbby handles the entire process automatically: extracting audio, transcribing speech, translating content, and generating natural-sounding dubbed audio that matches the original speaker's voice characteristics.

The platform's core innovation is its voice-matching algorithm, which analyzes the original speaker's vocal patterns and recreates them in the target language while preserving emotional inflections. This results in dubbed content that sounds natural and authentic, rather than robotic or disconnected from the visual content.

Dubbby operates on a simple pay-per-minute model with tiered subscription options for regular users. At just $6 per finished minute of content (with volume discounts available), it offers a 94% cost reduction compared to traditional dubbing services while delivering results in hours instead of weeks.

The technology has democratized professional-quality video dubbing, making it accessible to individual creators, small businesses, and educational institutions who previously couldn't afford localization. This has allowed content to reach new markets and audiences, significantly improving engagement metrics for users.`,
  
  // Technical stack details
  techStack: [
    {
      name: "Next.js 14",
      description: "React framework with server components for optimal performance"
    },
    {
      name: "TypeScript",
      description: "Type-safe codebase for reduced errors and improved maintainability"
    },
    {
      name: "Node.js",
      description: "Backend processing for video and audio handling"
    },
    {
      name: "AWS Lambda",
      description: "Serverless functions for scalable AI processing"
    },
    {
      name: "FFmpeg",
      description: "Professional media processing framework integrated as a service"
    },
    {
      name: "Python",
      description: "AI model integration and custom processing pipelines"
    },
    {
      name: "MongoDB",
      description: "Document database for flexible content storage"
    },
    {
      name: "Stripe",
      description: "Payment processing and subscription management"
    },
    {
      name: "ElasticSearch",
      description: "Efficient search for translated content and user projects"
    },
    {
      name: "Redis",
      description: "Caching layer for improved performance and rate limiting"
    }
  ],
  
  // Key features 
  keyFeatures: [
    {
      name: "Voice Cloning",
      description: "AI-powered technology that preserves the original speaker's voice characteristics",
      icon: "Mic"
    },
    {
      name: "Multi-language Support",
      description: "Support for 75+ languages with natural-sounding synthesis",
      icon: "Globe"
    },
    {
      name: "Emotional Preservation",
      description: "Maintains the emotional tone and emphasis of the original speaking",
      icon: "Heart"
    },
    {
      name: "Browser-based Processing",
      description: "Complete dubbing process handled in the cloud with no software installation",
      icon: "Cloud"
    },
    {
      name: "Subtitle Generation",
      description: "Automatically creates and synchronizes subtitles in all target languages",
      icon: "FileText"
    },
    {
      name: "Video Export Options",
      description: "Multiple export formats optimized for different platforms",
      icon: "Share2"
    },
    {
      name: "Translation Editing",
      description: "Ability to review and edit automated translations for accuracy",
      icon: "Edit2"
    }
  ],
  
  // Problem-solution section
  problemSolution: {
    problem: "Traditional video dubbing is prohibitively expensive ($75-$100 per minute) and time-consuming (15-30 days), while existing automated solutions produce unnatural results that reduce viewer engagement.",
    solution: "An AI-powered platform that automatically translates and dubs videos into 75+ languages with natural-sounding voices at a fraction of the cost and time, while preserving the original speaker's voice characteristics."
  },
  
  // Additional metadata
  metadata: {
    completionDate: "February 2025",
    category: "SaaS, AI, Video Processing",
    duration: "6 weeks",
    purpose: "To democratize video translation and dubbing, making it accessible to all content creators regardless of budget"
  }
}; 