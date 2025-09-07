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
import Skills2 from "@/components/skills2";


export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <StructuredData />
      <Nav />
      <Hero />
      
      <SectionDivider variant="dots" />
      <About />

      <SectionDivider variant="minimal" />
      <Project />

      <SectionDivider variant="dots" />
      <Skills2 />

      <SectionDivider variant="waves" />
      <ValueProposition />

      <SectionDivider variant="minimal" />
      <FeaturedQuote />

      <SectionDivider variant="dots" />
      <Contact />
      <Footer />
    </div>
  );
}
