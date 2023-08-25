"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ProjectCardList } from "@app/constants";
import { FaGithub } from "react-icons/fa";
import { AiOutlineLink } from "react-icons/ai";

const Project = () => {
  const projectsPerPage = 3;
  const totalProjects = ProjectCardList.length;
  const totalPages = Math.ceil(totalProjects / projectsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = Math.min(startIndex + projectsPerPage, totalProjects);
  const visibleProjects = ProjectCardList.slice(startIndex, endIndex);

  return (
    <>
      <section id="Projects" className=" flex-center w-full flex-col ">
        <div className="flex-col md:flex-auto">
          <h2 className="head_text text-center md:text-left">
            <br className="max-lg:hidden" />
            <span className="gray_gradient">Personal Projects</span>
          </h2>
        </div>
        <br className="hidden md:block" />
        <hr />

        <div className="mx-auto w-full py-6">
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              className="w-full md:flex space-y-4 md:space-y-2 relative rounded-xl md:h-fit hover:opacity-90 hover:cursor-pointer shadow-md mb-4 border-2">
              <div className="w-full md:w-1/2">
                <img
                  src={project.imgSrc}
                  alt={project.title}
                  className="z-5 h-full w-full object-fit sm:object-fit"
                />
              </div>

              <div className="w-full md:w-1/2 p-4 md:border-l md:border-gray-900/10 flex flex-col justify-between">
                <div>
                  <h1 className="text-2xl font-semibold text-black">
                    {project.title}
                  </h1>
                  <p className="my-2  text-gray-600 text-sm md:text-md lg:text-xl">
                    {project.description}
                  </p>
                </div>

                <div className="mt-auto flex flex-between justify-between">
                  <Link
                    href={project.projectLink}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="black_btn">
                    <div className="mr-2">
                      <AiOutlineLink />
                    </div>
                    Visit Now
                  </Link>
                  <Link
                    href={project.projectLinkGithub}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="black_btn">
                    <div className="mr-2">
                      <FaGithub />
                    </div>
                    View on Github
                  </Link>
                </div>
              </div>
            </div>
          ))}

          <div className="flex justify-center mt-4">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={`mx-2 px-3 py-2 rounded-md ${
                  currentPage === index + 1
                    ? "bg-red-600 text-white"
                    : "bg-white text-primary-orange-dark hover:bg-primary-orange-dark"
                }`}
                onClick={() => handlePageChange(index + 1)}>
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
