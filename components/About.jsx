import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section
      id="About"
      className="w-full flex-center min-h-screen items-center flex-col  md:flex-left md:flex-row mt-10  animate-fade-in-up">
      <h2 className="head_text text-center md:hidden mb-5 md:text-right">
        <span className="red_gradient">About Me</span>
      </h2>
      <div className=" sm:mt-5 md:flex-auto">
        <div className="relative w-[350px] h-[350px]  lg:h-[450px] lg:w-[450px] -z-10">
          <Image
            className="mb-5 object-fit"
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
        <p className="desc text-justify md:text-justified">
          Hey there! 👋 I'm a Computer Science and Engineering student with a deep passion for coding and web development. My goal? To become a Software Development Engineer (SDE) and master algorithms, data structures, and problem-solving.
          <br />
          Using Next.js, Tailwind CSS, MongoDB, React.js, Prisma, and Supabase,
          I create captivating web experiences that merge technical prowess with creative flair.
          <br />
          I'm eager to contribute to software development teams, turning ideas
          into reality through code. Beyond programming, I'm a constant learner
          and advocate for clear documentation.
          <br />
          Outside tech, I believe in holistic growth. Excelling in coding and fitness go hand in hand for me. Let's connect at the crossroads of technology, creativity, and personal growth!
        </p>
      </div>
      <hr />
    </section>
  );
};

export default About;
