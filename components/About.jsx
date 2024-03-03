"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView, useAnimation } from "framer-motion";

const About = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView]);

  return (
    <section
      ref={ref}
      id="About"
      className="w-full flex-center min-h-screen items-center flex-col  md:flex-left md:flex-row mt-10 ">
      <h2 className="head_text text-center md:hidden mb-5 md:text-right">
        <span className="red_gradient">About Me</span>
      </h2>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.45, delay: 0.25 }}
        className=" sm:mt-5 md:flex-auto">
        <div className="relative w-[350px] h-[350px]  lg:h-[450px] lg:w-[450px] -z-10">
          <Image
            className="mb-5 object-fit"
            src={"/assets/images/AboutMe.png"}
            alt={"about pic"}
            fill
          />
        </div>
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex-col">
        <h2 className="head_text text-center hidden md:block md:text-right">
          <span className="red_gradient">About Me</span>
        </h2>
        <p className="desc text-justify animate-slide-up-fade sm:ml-3">
          {/* Hey there! 👋 I'm a Computer Science and Engineering student with a
          deep passion for coding and web development. My goal? To become a
          Software Development Engineer (SDE) and master algorithms, data
          structures, and problem-solving.
          <br /> <br />
          Using Next.js, Tailwind CSS, MongoDB, React.js, Prisma, and Supabase,
          I create captivating web experiences that merge technical prowess with
          creative flair.
          <br /> <br />
          I'm eager to contribute to software development teams, turning ideas
          into reality through code. Beyond programming, I'm a constant learner
          and advocate for clear documentation.
          <br /> <br />
          Outside tech, I believe in holistic growth. Excelling in coding and
          fitness go hand in hand for me. Let's connect at the crossroads of
          technology, creativity, and personal growth! */}
          Hey there! 👋 I'm a driven Computer Science and Engineering student with a passion for
          building innovative web applications. Aiming for a Software
          Development Engineer (SDE) role to leverage strong skills in Next.js,
          Tailwind CSS, MongoDB, and React.js. 
          <br /> <br />
          Continuously enhancing
          problem-solving skills through solving data structures and algorithm
          problems. 
          <br /> <br />
          Highly motivated and eager to contribute to a dynamic team.
          Value collaborative work and strive for clear communication, actively
          promoting well-documented code. 
          <br /> <br />
          Open to discussing potential projects
          or collaboration opportunities. Seeking mentorship from experienced
          software development professionals.
          
           If you're willing to share your
          knowledge, I'd love to connect!
        </p>
      </motion.div>
      <hr />
    </section>
  );
};

export default About;
