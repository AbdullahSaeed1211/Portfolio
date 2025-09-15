import "@styles/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Poppins, Inter, Bangers } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";

export const metadata = {
  metadataBase: new URL('https://abdullahsaeed.me'),
  title: {
    default: "Abdullah Saeed | Full-Stack Developer & AI Specialist",
    template: "%s | Abdullah Saeed"
  },
  description: "Experienced full-stack developer specializing in AI-enhanced web applications that solve real business problems. Expert in Next.js, React, TypeScript, and cutting-edge AI integrations.",
  keywords: [
    "AI developer",
    "Next.js developer",
    "React developer",
    "full-stack engineer",
    "TypeScript expert",
    "web application development",
    "AI specialist",
    "JavaScript developer",
    "Node.js developer",
    "SaaS development",
    "medical AI",
    "educational technology",
    "business automation"
  ],
  creator: "Abdullah Saeed",
  publisher: "Abdullah Saeed",
  authors: [{ name: "Abdullah Saeed", url: "https://abdullahsaeed.me" }],
  category: "Technology",
  classification: "Portfolio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abdullahsaeed.me",
    title: "Abdullah Saeed | Full-Stack Developer & AI Specialist",
    description: "Building intelligent digital experiences that drive business growth with Next.js, React, and cutting-edge AI integrations. Portfolio showcasing enterprise applications and innovative solutions.",
    siteName: "Abdullah Saeed Portfolio",
    images: [{
      url: "/assets/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Abdullah Saeed - Full Stack Developer & AI Specialist"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdullah Saeed | Full-Stack Developer & AI Specialist",
    description: "Building intelligent digital experiences that drive business growth with Next.js, React, and cutting-edge AI integrations.",
    images: ["/assets/og-image.jpg"],
    creator: "@abdullahsaeed_"
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
    bingBot: {
      index: true,
      follow: true,
    }
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        href: "/favicon.ico",
      }
    ],
    apple: [
      { url: "/apple-icon.png" }
    ],
    shortcut: "/favicon.ico"
  },
  manifest: "/manifest.json",
  verification: {
    google: "google-site-verification-code", // Add your verification code when you have it
    bing: "bing-site-verification-code", // Add your verification code when you have it
  },
  alternates: {
    canonical: "https://abdullahsaeed.me",
    types: {
      "application/rss+xml": [
        { title: "Abdullah Saeed Blog", url: "/rss.xml" }
      ]
    }
  },
  other: {
    "msapplication-TileColor": "#ffffff",
    "msapplication-config": "/browserconfig.xml",
    "theme-color": "#ffffff",
  }
};

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100','200','300','400','500','600','700','800','900'],
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const bangers = Bangers({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bangers',
  weight: '400',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth ${poppins.variable} ${inter.variable} ${bangers.variable}`} suppressHydrationWarning>
      <head>
        <GoogleAnalytics />
        <link rel="canonical" href="https://abdullahsaeed.me" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased overflow-x-hidden">
        <ThemeProvider>
          <div className="main fixed inset-0">
            <div className="floating-shape-1"></div>
            <div className="floating-shape-2"></div>
            <div className="floating-shape-3"></div>
            <div className="floating-shape-4"></div>
            <div className="floating-shape-5"></div>
          </div>
          <main className="app relative">
            {children}
          </main>
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
