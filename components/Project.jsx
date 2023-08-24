import React from "react";
import Link from "next/link";
import { ProjectCardList } from "@app/constants";
const Project = () => {
  return (
    <>
      <section id="Projects" className="w-full flex-center flex-col  md:flex-left md:flex-row">
        <div className="flex-col md:flex-auto ">
          <h2 className="head_text text-center md:text-left">
            <br className="max-lg:hidden" />
            <span className="gray_gradient">Personal Projects</span>
          </h2>
        </div>
        <br className="hidden md:block" />
        <hr />
      </section>

      <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-2">
  {ProjectCardList.map((project) => (
    <div className="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[400px] hover:opacity-80 hover:cursor-pointer">
      <img
        src={project.imgSrc}
        alt={project.title}
        className="z-5 h-full w-full rounded-md object-cover md:object-contain"
      />

      <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-500 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">
          {project.title}
        </h1>
        <p className="mt-2 text-sm text-gray-300 hidden description">
          {project.description}
        </p>
        <div className="flex flex-wrap">
          <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white flex-auto">
            <Link
              href={project.projectLink}
              rel="noopener noreferrer"
              target="_blank"
              className="outline_btn">
              Visit Now &rarr;
            </Link>
          </button>
          <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
            <Link
              href={project.projectLinkGithub}
              rel="noopener noreferrer"
              target="_blank"
              className="outline_btn">
              View on Github &rarr;
            </Link>
          </button>
        </div>
      </div>
    </div>
  ))}
</div>



    </>
  );
};

export default Project;
