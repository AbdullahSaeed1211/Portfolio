import React from "react";
import Image from "next/image";
import { ScrollToTop } from "@components/ScrollTopTop";
import About from "@components/About";
import Project from "@components/Project";
import Skills from "@components/Skills";
import Footer from "@components/Footer";

const Home = ({}) => {
  return (
    <>
      <ScrollToTop />
      <section className="w-full flex-center flex-col  md:flex-left md:flex-row">
        <div className="flex-col md:flex-auto ">
          <h2 className="head_text text-center md:text-left">
            Hello, My name is
            <br className="max-lg:hidden" />
            <span className="cyan_gradient"> Abdullah Saeed</span>
          </h2>
          <p className="desc text-center md:text-left">
            Software & Web-Developer
          </p>
        </div>
        <div className=" sm:mt-5">
          <div className="relative w-[270px] h-[270px] sm:h-[300px] sm:w-[300px] lg:h-[600px] lg:w-[600px] -z-10">
            {/* <a href="https://storyset.com/rocket">Rocket illustrations by Storyset</a> */}
            <Image
              className="mt-5 object-cover"
              src={"/assets/images/logo2.svg"}
              alt={"Hero pic"}
              fill
            />
          </div>
        </div>
        <hr />
      </section>
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
