import React from "react";
import Nav from "@/components/Nav";
import About from "@/components/About";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
// import SocialProof from "@/components/SocialProof";
import ValueProposition from "@/components/ValueProposition";
import StructuredData from "@/components/StructuredData";
import SectionDivider from "@/components/SectionDivider";
import FeaturedQuote from "@/components/FeaturedQuote";

export const metadata = {
  title: "Abdullah Saeed | Fullstack Developer",
  description: "Portfolio of Abdullah Saeed, a developer specializing in AI-enhanced web applications that solve real business problems using Next.js, React, and TypeScript.",
  alternates: {
    canonical: "https://abdullahsaeed.me"
  },
  openGraph: {
    images: [
      {
        url: '/assets/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Abdullah Saeed - Full Stack Developer & AI Specialist'
      }
    ]
  }
};

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <StructuredData />
      <Nav />
      <Hero />
      <SectionDivider variant="dots" />
      <About />
      <SectionDivider variant="waves" />
      <FeaturedQuote />
      <SectionDivider variant="minimal" />
      <Project />
      <SectionDivider variant="dots" />
      <Skills />
      <SectionDivider variant="waves" />
      <ValueProposition />
      <SectionDivider variant="minimal" />
      {/* <SocialProof /> */}
      <SectionDivider variant="dots" />
      <Contact />
      <Footer />
    </div>
  );
}
