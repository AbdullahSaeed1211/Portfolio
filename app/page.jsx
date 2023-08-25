import React from "react";
import { ScrollToTop } from "@components/ScrollTopTop";
import About from "@components/About";
import Project from "@components/Project";
import Skills from "@components/Skills";
import Footer from "@components/Footer";
import Hero from "@components/Hero"

const Home = ({}) => {
  return (
    <>
      <ScrollToTop />
      <Hero />
      <br />
      <About />
      <br />
      <Project />
      <br />
      <Skills />
      <br />
      <Footer />
    </>
  );
};

export default Home;
