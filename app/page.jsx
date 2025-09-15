import React from "react";
import Nav from "@/components/Nav";
import About from "@/components/About";
import Project from "@/components/Project";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
// import SocialProof from "@/components/SocialProof";

import ValueProposition from "@/components/ValueProposition";
import StructuredData from "@/components/StructuredData";
import SectionDivider from "@/components/SectionDivider";
import FeaturedQuote from "@/components/FeaturedQuote";
import ResumeExperience from "@/components/ResumeExperience";


export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <StructuredData />
      <Nav />
      <Hero />

      <ResumeExperience />

      <SectionDivider variant="dots" />

      <Project />
      <SectionDivider variant="dots" />


      <ValueProposition />

      <SectionDivider variant="minimal" />
      <FeaturedQuote />

      <SectionDivider variant="dots" />
      <Contact />
      <Footer />
    </div>
  );
}
