import "@styles/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Poppins, Inter, Bangers } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import Script from "next/script";


export const metadata = {
  metadataBase: new URL('https://abdullahsaeed.me'),
  title: {
    default: "Abdullah Saeed | AI Engineer & Full-Stack Developer",
    template: "%s | Abdullah Saeed"
  },
  description: "Portfolio of Abdullah Saeed. AI Engineer & Full-Stack Developer building scalable Next.js & ML systems. Published IEEE Researcher. MS CS at Georgia Tech. (Not the actor).",
  keywords: [
    "Abdullah Saeed",
    "Abdullah Sayed",
    "Abdallah Saeed",
    "Abdullah Sayeed",
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
    title: "Abdullah Saeed | AI Engineer & Full-Stack Developer",
    description: "Building intelligent digital experiences that drive business growth with Next.js, React, and cutting-edge AI integrations. Portfolio showcasing enterprise applications and innovative solutions.",
    siteName: "Abdullah Saeed Portfolio",
    images: [{
      url: "/assets/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Abdullah Saeed - AI Engineer & Full-Stack Developer"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdullah Saeed | AI Engineer & Full-Stack Developer",
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
    icon: "/favicon.ico",
    apple: "/assets/images/favi.png",
    shortcut: "/favicon.ico"
  },
  manifest: "/manifest.json",
  verification: {
    // google: "google-site-verification-code", 
    // bing: "bing-site-verification-code", 
  },
  alternates: {
    canonical: "https://abdullahsaeed.me",
  },
  other: {
    "msapplication-TileColor": "#ffffff",
    "msapplication-config": "/browserconfig.xml",
  }
};

export const viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Abdullah Saeed",
              "url": "https://abdullahsaeed.me",
              "image": "https://abdullahsaeed.me/assets/og-image.jpg",
              "sameAs": [
                "https://github.com/abdullahsaeed1724",
                "https://linkedin.com/in/abdullahsaeed1724",
                "https://twitter.com/abdullahsaeed_"
              ],
              "jobTitle": "AI Engineer & Full-Stack Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Kiiro.cx"
              },
              "description": "AI Research Engineer & Full-Stack Developer building scalable Next.js & ML systems."
            })
          }}
        />
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
