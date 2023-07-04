import React from "react";
// import Image from "next/image";
// import ProjectCard from "@components/ProjectCard";
import Link from "next/link";

const ProjectCardList = [
  {
    title: "Prompt Verse",
    imgSrc:
      "https://user-images.githubusercontent.com/85762594/246801794-e92dc490-f446-4abf-88d2-9396f209c42d.png",
    description:
      "PromptVerse is a completely responsive fullstack open-source AI prompting tool complete with next-auth for modern world to discover, create and share creative prompts",
    projectLink:
      "https://prompt-verse-project-g9bookrjm-abdullahsaeed1211.vercel.app/",
    projectLinkGithub: "https://github.com/AbdullahSaeed1211/PromptVerse",
  },
  {
    title: "Crypto Pedia",
    imgSrc:
      "https://github.com/AbdullahSaeed1211/CryptoPedia/assets/85762594/97acc208-4365-4440-9694-925b06f8a4c2",
    description:
      "A responsive website that uses Next js 13’s new SearchParams function to allow the user to view and search among the current top 50 cryptocurrencies  from the coinranking API from rapidAPI ",
    projectLink:
      "https://crypto-pedia-puce.vercel.app/",
    projectLinkGithub: "https://github.com/AbdullahSaeed1211/CryptoPedia",
  },
  {
    title: "Weather App",
    imgSrc:
      // <a href="https://storyset.com/music">Music illustrations by Storyset</a>
      "/assets/images/Weather.svg",
    description:
      "Website that displays weather information for the city entered by the user. Was made to revise my concepts of Bootstrap 5, Js, jQuery,HTML, CSS, and learn how to handle and manage API Request",
    projectLink: "https://abdullahsaeed1211.github.io/Weather-App/",
    projectLinkGithub: "https://github.com/AbdullahSaeed1211/Weather-App",
  },
  ,
  {
    title: "Simon Game",
    imgSrc:
      // <a href="https://storyset.com/music">Music illustrations by Storyset</a>
      "/assets/images/Simon.svg",
    description:
      "Simon game made using jQuery, Bootstrap 5, JavaScript, jQuery,HTML, CSS ",
    projectLink: "https://abdullahsaeed1211.github.io/Simon-Game/",
    projectLinkGithub: "https://github.com/AbdullahSaeed1211/Simon-Game",
  },
  {
    title: '"Drum Kit Site',
    imgSrc:
      // <a href="https://storyset.com/music">Music illustrations by Storyset</a>
      "/assets/images/Drumkit.svg",
    description: "Drum kit website made using DOM manipulation, user can use their keyboard to play sounds corresponding to the instrument on screen",
    projectLink: "https://abdullahsaeed1211.github.io/Drum-Kit-Site/",
    projectLinkGithub: "https://github.com/AbdullahSaeed1211/Drum-Kit-Site",
  },
];

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
          <div className="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[500px] hover:opacity-80 hover:cursor-pointer">
            <img
              src={project.imgSrc}
              alt={project.title}
              className="z-5 h-full w-full rounded-md object-cover"
            />

            <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-500 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-left">
              <h1 className="text-lg font-semibold text-white">
                {project.title}
              </h1>
              <p className="mt-2 text-sm text-gray-300">
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
