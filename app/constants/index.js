// constants/index.js

import Html from "@public/assets/Skills/html.png";
import Css from "@public/assets/Skills/css.png";
import Javascript from "@public/assets/Skills/javascript.png";
import ReactImg from "@public/assets/Skills/react.png";
import Tailwind from "@public/assets/Skills/tailwind.png";
import Github from "@public/assets/Skills/github1.png";
import NextJS from "@public/assets/Skills/nextjs.png";
import nextauth from "@public/assets/Skills/nextauth.png";
import python from "@public/assets/Skills/python.png";
import astro from "@public/assets/Skills/astro.png";
import typescript from "@public/assets/Skills/typescript.svg";
import mongodb from "@public/assets/Skills/mongodb.svg";
import nodejs from "@public/assets/Skills/nodejs.svg";
import firebase from "@public/assets/Skills/firebase.svg";
import docker from "@public/assets/Skills/docker.svg";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import {
  Home,
  Wrench,
  Contact,
  UserRound,
  PenLine,
  FileText,
} from "lucide-react";

// Import all projects from the projects directory
import { allProjects } from './projects';

// Skills
export const skillsData = [
  {
    imgSrc: NextJS,
    alt: "Next.js",
    title: "Next.js",
  },
  {
    imgSrc: ReactImg,
    alt: "React",
    title: "React",
  },
  {
    imgSrc: typescript,
    alt: "TypeScript",
    title: "TypeScript",
  },
  {
    imgSrc: python,
    alt: "Python",
    title: "Python",
  },
  {
    imgSrc: nodejs,
    alt: "Node.js",
    title: "Node.js",
  },
  {
    imgSrc: mongodb,
    alt: "MongoDB",
    title: "MongoDB",
  },
  {
    imgSrc: firebase,
    alt: "Firebase",
    title: "Firebase",
  },
  {
    imgSrc: docker,
    alt: "Docker",
    title: "Docker",
  },
  {
    imgSrc: Tailwind,
    alt: "Tailwind CSS",
    title: "Tailwind CSS",
  },
  {
    imgSrc: Javascript,
    alt: "JavaScript",
    title: "JavaScript",
  },
  {
    imgSrc: nextauth,
    alt: "Authentication",
    title: "Auth Systems",
  },
  {
    imgSrc: Github,
    alt: "GitHub",
    title: "GitHub",
  },
  {
    imgSrc: Html,
    alt: "HTML5",
    title: "HTML5",
  },
  {
    imgSrc: Css,
    alt: "CSS3",
    title: "CSS3",
  },
  {
    imgSrc: astro,
    alt: "Astro",
    title: "Astro",
  },
];

// Projects - now imported from the projects directory
export const ProjectCardList = [
  // All projects from the unified project structure
  ...allProjects,
  {
    title: "StrikeMMA",
    imgSrc: "https://github.com/user-attachments/assets/81e21ea3-912d-4220-9f35-7888a7b67fbc",
    description: "We formed a last-minute 2-person hackathon team and built a product website to engage user responses. Our website features a modern landing page, an FAQ section, pricing cards, and features an AI chatbot, designed to gather user insights and interests for our future app/product.",
    tags: ["Next.js", "Tailwind", "AI Chatbot", "Landing Page"],
    projectLink: "https://strike-mma.vercel.app/",
    projectLinkGithub: "https://github.com/AbdullahSaeed1211/StrikeMMA-Demo",
  },
  {
    title: "Media Compass",
    imgSrc: "https://github.com/AbdullahSaeed1211/Media-Compass/assets/85762594/8a83bf61-721f-409d-bcb2-381821ff869b",
    description: "Frontend Demo for a SaaS Page",
    tags: ["React", "Tailwind", "Landing Page", "UI/UX"],
    projectLink: "https://media-compass.vercel.app/",
    projectLinkGithub: "https://github.com/AbdullahSaeed1211/Media-Compass",
  },
  {
    title: "Aroma & Craft Co.",
    imgSrc: "https://github.com/AbdullahSaeed1211/Portfolio/assets/85762594/5f972ff7-fb6b-4265-b8e6-4ba9d286d7ce",
    description: "Aroma & Craft Co. is a sophisticated and visually appealing e-commerce website that specializes in offering curated coffee products. Built using the Astro web framework and enhanced with Tailwind CSS for a sleek and modern user interface, the platform is designed to provide users with a seamless and enjoyable shopping experience.",
    tags: ["Astro", "Tailwind", "E-commerce", "UI/UX"],
    projectLink: "https://aromacraftco.vercel.app/",
    projectLinkGithub: "https://github.com/AbdullahSaeed1211/AromaCraftCo",
  },
  {
    title: "Bento Dashboard",
    imgSrc: "https://github.com/AbdullahSaeed1211/Portfolio/assets/85762594/9376e261-2c5b-408c-9252-4f28bbc85c90",
    description: "Bento Dashboard is a modern, responsive, and visually appealing dashboard that provides users with a comprehensive overview of their graphical data in form of Pie, Line and Calendar Charts along with Tables. Built using React, Next.js, and Tailwind CSS, the platform offers a seamless user experience, showcasing spending, account balances, and financial goals.",
    tags: ["React", "Next.js", "Tailwind", "Charts"],
    projectLink: "https://bento-dashboard.vercel.app/",
    projectLinkGithub: "https://github.com/AbdullahSaeed1211/Bento-Dashboard",
  },
  {
    title: "Skate Monkey",
    imgSrc: "https://github.com/AbdullahSaeed1211/Portfolio/assets/85762594/40db8982-d06b-4875-afce-252aadc16b19",
    description: "Skate Monkey is a modern e-commerce landing page developed, catering to skateboard enthusiasts. Built with React, Next.js, and Tailwind CSS, the platform offers a seamless, responsive landing page that showcases skateboards, accessories, and apparel. Users can explore a dynamic catalog, read reviews.",
    tags: ["React", "Next.js", "Tailwind", "E-commerce"],
    projectLink: "https://skate-monkey.vercel.app/",
    projectLinkGithub: "https://github.com/AbdullahSaeed1211/Skate-Monkey",
  },
  {
    title: "Prompt Verse",
    imgSrc: "https://github.com/AbdullahSaeed1211/Portfolio/assets/85762594/d66472ed-1f43-422e-9e8c-d7a3f13bad3b",
    description: "PromptVerse is a completely responsive fullstack open-source AI prompting tool complete with next-auth for modern world to discover, create and share creative prompts",
    tags: ["Next.js", "NextAuth", "MongoDB", "AI"],
    projectLink: "https://prompt-verse-project-g9bookrjm-abdullahsaeed1211.vercel.app/",
    projectLinkGithub: "https://github.com/AbdullahSaeed1211/PromptVerse",
  },
  {
    title: "Crypto Pedia",
    imgSrc: "https://github.com/AbdullahSaeed1211/Portfolio/assets/85762594/464cb0fe-4541-4b78-845b-7a0fa3693377",
    description: "A responsive website that uses Next js 13's new SearchParams function to allow the user to view and search among the current top 50 cryptocurrencies  from the coinranking API from rapidAPI",
    tags: ["Next.js", "API", "Tailwind", "Crypto"],
    projectLink: "https://crypto-pedia-puce.vercel.app/",
    projectLinkGithub: "https://github.com/AbdullahSaeed1211/CryptoPedia",
  },
  {
    title: "Simon Game",
    imgSrc: "https://github.com/AbdullahSaeed1211/Portfolio/assets/85762594/cec24b02-c056-4792-89c3-befd30ac6517",
    description: "Simon game made using jQuery, Bootstrap 5, JavaScript, jQuery,HTML, CSS",
    tags: ["JavaScript", "jQuery", "Bootstrap", "Game"],
    projectLink: "https://abdullahsaeed1211.github.io/Simon-Game/",
    projectLinkGithub: "https://github.com/AbdullahSaeed1211/Simon-Game",
  },
  {
    title: "Weather App",
    imgSrc: "/assets/images/Weather.svg",
    description: "Website that displays weather information for the city entered by the user. Was made to revise my concepts of Bootstrap 5, Js, jQuery,HTML, CSS, and learn how to handle and manage API Request",
    tags: ["JavaScript", "Bootstrap", "API", "Weather"],
    projectLink: "https://abdullahsaeed1211.github.io/Weather-App/",
    projectLinkGithub: "https://github.com/AbdullahSaeed1211/Weather-App",
  },
  {
    title: "Drum Kit Site",
    imgSrc: "/assets/images/Drumkit.svg",
    description: "Drum kit website made using DOM manipulation, user can use their keyboard to play sounds corresponding to the instrument on screen",
    tags: ["JavaScript", "DOM", "HTML", "CSS"],
    projectLink: "https://abdullahsaeed1211.github.io/Drum-Kit-Site/",
    projectLinkGithub: "https://github.com/AbdullahSaeed1211/Drum-Kit-Site",
  },
];

// Navbar
export const navLinks = [
  {
    href: "/",
    text: "Home",
    rel: "",
    target: "",
    icon: <Home />,
  },
  {
    href: "#About",
    text: "About",
    rel: "",
    target: "",
    icon: <UserRound />,
  },
  {
    href: "#Projects",
    text: "Projects",
    rel: "",
    target: "",
    icon: <Wrench />,
  },
  {
    href: "#Skills",
    text: "Skills",
    rel: "",
    target: "",
    icon: <PenLine />,
  },

  {
    href: "https://drive.google.com/file/d/1PHoRJidU0dbNBT2zbJSNI-PtSVWkr2vi/view",
    text: "Resume",
    rel: "noopener noreferrer",
    target: "_blank",
    icon: <FileText />,
  },
  {
    href: "mailto:abdullah.saeed1724@gmail.com",
    text: "Contact",
    rel: "",
    target: "",
    icon: <Contact />,
  },
];

export const mobileNavIcons = [
  {
    href: "https://linkedin.com/in/abdullahsaeed1724",
    icon: <FaLinkedinIn />,
  },
  {
    href: "https://github.com/abdullahsaeed1724",
    icon: <FaGithub />,
  },
  {
    href: "mailto:abdullah.saeed1724@gmail.com",
    icon: <AiOutlineMail />,
  },
  {
    href: "https://drive.google.com/file/d/1PHoRJidU0dbNBT2zbJSNI-PtSVWkr2vi/view",
    icon: <BsFillPersonLinesFill />,
  },
];

// Footer
export const footerLinks = [
  {
    href: "https://github.com/abdullahsaeed1724",
    icon: <FaGithub />,
  },
  {
    href: "https://linkedin.com/in/abdullahsaeed1724",
    icon: <FaLinkedinIn />,
  },
  {
    href: "mailto:abdullah.saeed1724@gmail.com",
    icon: <AiOutlineMail />,
  },
  {
    href: "https://drive.google.com/file/d/1PHoRJidU0dbNBT2zbJSNI-PtSVWkr2vi/view",
    icon: <BsFillPersonLinesFill />,
  },
];
