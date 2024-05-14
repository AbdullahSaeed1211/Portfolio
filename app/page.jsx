import React from "react";
import { ScrollToTop } from "@components/ScrollTopTop";
import About from "@components/About";
import Project from "@components/Project";
import Skills from "@components/Skills";
import Footer from "@components/Footer";
import Hero from "@components/Hero";
import Divider from "@components/Divider";
import Contact from "@components/Contact";
const Home = ({}) => {
  return (
    <>
      <ScrollToTop />
      <Hero />
      <br />
      <About />
      <br />
      <Project />
      <Skills />
      {/* <Contact/> */}
      <br />
      <Divider />
      <Footer />
    </>
  );
};

export default Home;
