// constants/index.js

import Html from "@public/assets/Skills/html.png";
import Css from "@public/assets/Skills/css.png";
import Javascript from "@public/assets/Skills/javascript.png";
import ReactImg from "@public/assets/Skills/react.png";
import Tailwind from "@public/assets/Skills/tailwind.png";
import Github from "@public/assets/Skills/github1.png";
import NextJS from "@public/assets/Skills/nextjs.png";
import nextauth from "@public/assets/Skills/nextauth.png";
import python from "@public/assets/Skills/python.png"
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";


// Skills
export const skillsData = [
  {
    imgSrc: Tailwind,
    alt: "Tailwind",
    title: "Tailwind",
  },
  {
    imgSrc: Github,
    alt: "Github",
    title: "Github",
  },
  {
    imgSrc: NextJS,
    alt: "Next",
    title: "Next",
  },
  {
    imgSrc: nextauth,
    alt: "Next-Auth",
    title: "Next-Auth",
  },
  {
    imgSrc: Html,
    alt: "HTML",
    title: "HTML",
  },
  {
    imgSrc: Css,
    alt: "CSS",
    title: "CSS",
  },
  {
    imgSrc: Javascript,
    alt: "JS",
    title: "JS",
  },
  {
    imgSrc: ReactImg,
    alt: "React",
    title: "React",
  },
  {
    imgSrc: python,
    alt: "python",
    title: "python",
  },
];

//   Projects
export const ProjectCardList = [
  {
    title: "Skate Monkey",
    imgSrc:
      "https://github.com/AbdullahSaeed1211/Skate-Monkey/assets/85762594/4f217db1-a88b-49cf-a258-6b2863adfc6f",
    description:
      "Skate Monkey is a modern e-commerce landing page developed, catering to skateboard enthusiasts. Built with React, Next.js, and Tailwind CSS, the platform offers a seamless, responsive landing page that showcases skateboards, accessories, and apparel. Users can explore a dynamic catalog, read reviews.",
    projectLink: "https://skate-monkey.vercel.app/",
    projectLinkGithub: "https://github.com/AbdullahSaeed1211/Skate-Monkey",
  },
  {
    title: "Prompt Verse",
    imgSrc:
      "https://github.com/AbdullahSaeed1211/Portfolio/assets/85762594/53aaedc2-258d-45a0-b673-e4e72f3cc1a8",
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
    projectLink: "https://crypto-pedia-puce.vercel.app/",
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
    title: "Drum Kit Site",
    imgSrc:
      // <a href="https://storyset.com/music">Music illustrations by Storyset</a>
      "/assets/images/Drumkit.svg",
    description:
      "Drum kit website made using DOM manipulation, user can use their keyboard to play sounds corresponding to the instrument on screen",
    projectLink: "https://abdullahsaeed1211.github.io/Drum-Kit-Site/",
    projectLinkGithub: "https://github.com/AbdullahSaeed1211/Drum-Kit-Site",
  },
];

// Navbar
export const navLinks = [
  {
    href: "/",
    text: "Home",
    rel :"",
    target :""
  },
  {
    href: "#About",
    text: "About",
    rel :"",
    target :""
  },
  {
    href: "#Projects",
    text: "Projects",
    rel :"",
    target :""
  },
  {
    href: "#Skills",
    text: "Skills",
    rel :"",
    target :""
  },
  
  {
    href: "https://drive.google.com/file/d/1PHoRJidU0dbNBT2zbJSNI-PtSVWkr2vi/view",
    text: "Resume",
    rel :"noopener noreferrer",
    target :"_blank"
  },
  {
    href: "#Footer",
    text: "Contact",
    rel :"",
    target :""
  },
];

export const mobileNavIcons = [
  {
    href: "https://www.linkedin.com/in/abdullah-saeed1211/",
    icon: <FaLinkedinIn />,
  },
  {
    href: "https://github.com/AbdullahSaeed1211",
    icon: <FaGithub />,
  },
  {
    href: "/#Footer",
    icon: <AiOutlineMail />,
  },
  {
    href: "https://drive.google.com/file/d/1PHoRJidU0dbNBT2zbJSNI-PtSVWkr2vi/view",
    icon: <BsFillPersonLinesFill />,
  },
]

// Footer
export const footerLinks = [
  {
    href: "https://github.com/AbdullahSaeed1211",
    icon: <FaGithub />,
  },
  {
    href: "https://www.linkedin.com/in/abdullah-saeed1211/",
    icon: <FaLinkedinIn />,
  },
  {
    href: "#Footer",
    icon: <AiOutlineMail />,
  },
  {
    href: "https://drive.google.com/file/d/1PHoRJidU0dbNBT2zbJSNI-PtSVWkr2vi/view",
    icon: <BsFillPersonLinesFill />,
  },
];
