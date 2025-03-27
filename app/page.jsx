import React from "react";
import Nav from "@/components/Nav";
import { ScrollToTop } from "@/components/ScrollTopTop";
import About from "@/components/About";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import SocialProof from "@/components/SocialProof";
import ValueProposition from "@/components/ValueProposition";
import StructuredData from "@/components/StructuredData";

export const metadata = {
  title: "Abdullah Saeed | AI-Powered Web Developer",
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
      <ScrollToTop />
      <Nav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <Hero />
        <ValueProposition />
        <About />
        {/* <SocialProof /> */}
        <Project />
        <Skills />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
