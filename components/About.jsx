import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section id="About" className="w-full flex-center flex-col  md:flex-left md:flex-row mt-10">
      <h2 className="head_text text-center md:hidden mb-5 md:text-right">
        <span className="red_gradient">About Me</span>
      </h2>
      <div className=" sm:mt-5 md:flex-auto">
        <div className="relative w-[200px] h-[200px] sm:h-[250px] sm:w-[250px] lg:h-[450px] lg:w-[450px] -z-10">
          <Image
            className="mb-5 object-cover"
            src={"/assets/images/AboutMe.png"}
            alt={"about pic"}
            fill
          />
        </div>
      </div>
      <div className="flex-col">
        <h2 className="head_text text-center hidden md:block md:text-right">
          <span className="red_gradient">About Me</span>
        </h2>
        <p className="desc text-justify md:text-right">
          I am a Software Developer who specializes in Web Development, I offer
          dynamic and responsive front-end development using React and NextJs to
          deliver industry-level projects and UI/UX mockups using Figma. I am
          actively expanding my skillset by learning MERN stack development and
          working on my Data Structures and Algorithms skills to offer more
          comprehensive solutions. In my free time, I am an avid reader and
          fitness enthusiast, striving to improve myself both professionally and
          personally.
        </p>
      </div>
      <hr />
    </section>
  );
};

export default About;
