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
    imgSrc: astro,
    alt: "astro",
    title: "astro",
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
    title: "Inventory Manager",
    imgSrc:
    "https://github.com/user-attachments/assets/95d175ed-3530-4ef1-8c43-0be30128c053",
    description:
      "An inventory management application designed for efficient tracking and management of food items. The app allows users to add, remove, and update inventory items, with real-time synchronization to Firebase Firestore. It features a modern UI with a responsive layout, and handles item images, quantities, prices, and dates. Users can view the inventory in a table format for desktop or a streamlined card layout for mobile devices.",
    projectLink: "https://inventory-ai-sigma.vercel.app/",
    projectLinkGithub: "https://github.com/AbdullahSaeed1211/inventory-ai/tree/main",
    
  },
  {
    title: "Speak Speare",
    imgSrc:
    "https://github.com/user-attachments/assets/a4dd54e4-9495-42e6-9f74-726ea368c4a0",
    description:
      "Advanced voice translation tool that enables users to interact with a range of language processing features. It converts spoken words into text using the Web Speech API, translates the text with Gemini 1.5 Flash, and plays back the translation using speech synthesis. Additionally, it reads and translates text from uploaded files, fetches, supports language selection, and ensures a seamless experience across different devices with its responsive design, and uses a Writing and Speaking Prompt generator based on the category chosen by the user.",
    projectLink: "https://speak-speare.vercel.app/",
    projectLinkGithub: "https://github.com/AbdullahSaeed1211/SpeakSpeare",
    
  },

  {
    title: "StrikeMMA",
    imgSrc:
    "https://github.com/user-attachments/assets/81e21ea3-912d-4220-9f35-7888a7b67fbc",
    description:
      "We formed a last-minute 2-person hackathon team and built a product website to engage user responses. Our website features a modern landing page, an FAQ section, pricing cards, and features an AI chatbot, designed to gather user insights and interests for our future app/product.",
    projectLink: "https://strike-mma.vercel.app/",
    projectLinkGithub: "https://github.com/AbdullahSaeed1211/StrikeMMA-Demo",
    // demoVideo: "https://youtu.be/wGn6Mg0i3aU",
    // userForm: "https://tally.so/r/wL0eJp",
  },
  {
    title: "Media Compass",
    imgSrc:
      "https://github.com/AbdullahSaeed1211/Media-Compass/assets/85762594/8a83bf61-721f-409d-bcb2-381821ff869b",
    description: " Frontend Demo for a SaaS Page",
    projectLink: "https://media-compass.vercel.app/",
    projectLinkGithub: "https://github.com/AbdullahSaeed1211/Media-Compass",
  },
  {
    title: "Aroma & Craft Co.",
    imgSrc:
      "https://github.com/AbdullahSaeed1211/Portfolio/assets/85762594/5f972ff7-fb6b-4265-b8e6-4ba9d286d7ce",
    description:
      "Aroma & Craft Co. is a sophisticated and visually appealing e-commerce website that specializes in offering curated coffee products. Built using the Astro web framework and enhanced with Tailwind CSS for a sleek and modern user interface, the platform is designed to provide users with a seamless and enjoyable shopping experience.",
    projectLink: "https://aromacraftco.vercel.app/",
    projectLinkGithub: "https://github.com/AbdullahSaeed1211/AromaCraftCo",
  },
  {
    title: "Bento Dashboard",
    imgSrc:
      "https://github.com/AbdullahSaeed1211/Portfolio/assets/85762594/9376e261-2c5b-408c-9252-4f28bbc85c90",
    description:
      "Bento Dashboard is a modern, responsive, and visually appealing dashboard that provides users with a comprehensive overview of their graphical data in form of Pie, Line and Calendar Charts along with Tables. Built using React, Next.js, and Tailwind CSS, the platform offers a seamless user experience, showcasing spending, account balances, and financial goals.",
    projectLink: "https://bento-dashboard.vercel.app/",
    projectLinkGithub: "https://github.com/AbdullahSaeed1211/Bento-Dashboard",
  },
  {
    title: "Skate Monkey",
    imgSrc:
      "https://github.com/AbdullahSaeed1211/Portfolio/assets/85762594/40db8982-d06b-4875-afce-252aadc16b19",
    description:
      "Skate Monkey is a modern e-commerce landing page developed, catering to skateboard enthusiasts. Built with React, Next.js, and Tailwind CSS, the platform offers a seamless, responsive landing page that showcases skateboards, accessories, and apparel. Users can explore a dynamic catalog, read reviews.",
    projectLink: "https://skate-monkey.vercel.app/",
    projectLinkGithub: "https://github.com/AbdullahSaeed1211/Skate-Monkey",
  },
  {
    title: "Prompt Verse",
    imgSrc:
      "https://github.com/AbdullahSaeed1211/Portfolio/assets/85762594/d66472ed-1f43-422e-9e8c-d7a3f13bad3b",
    description:
      "PromptVerse is a completely responsive fullstack open-source AI prompting tool complete with next-auth for modern world to discover, create and share creative prompts",
    projectLink:
      "https://prompt-verse-project-g9bookrjm-abdullahsaeed1211.vercel.app/",
    projectLinkGithub: "https://github.com/AbdullahSaeed1211/PromptVerse",
  },
  {
    title: "Crypto Pedia",
    imgSrc:
      "https://github.com/AbdullahSaeed1211/Portfolio/assets/85762594/464cb0fe-4541-4b78-845b-7a0fa3693377",
    description:
      "A responsive website that uses Next js 13’s new SearchParams function to allow the user to view and search among the current top 50 cryptocurrencies  from the coinranking API from rapidAPI ",
    projectLink: "https://crypto-pedia-puce.vercel.app/",
    projectLinkGithub: "https://github.com/AbdullahSaeed1211/CryptoPedia",
  },
  {
    title: "Simon Game",
    imgSrc:
      // <a href="https://storyset.com/music">Music illustrations by Storyset</a>
      "https://github.com/AbdullahSaeed1211/Portfolio/assets/85762594/cec24b02-c056-4792-89c3-befd30ac6517",
    description:
      "Simon game made using jQuery, Bootstrap 5, JavaScript, jQuery,HTML, CSS ",
    projectLink: "https://abdullahsaeed1211.github.io/Simon-Game/",
    projectLinkGithub: "https://github.com/AbdullahSaeed1211/Simon-Game",
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
    href: "https://www.linkedin.com/in/abdullah-saeed1211/",
    icon: <FaLinkedinIn />,
  },
  {
    href: "https://github.com/AbdullahSaeed1211",
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
    href: "https://github.com/AbdullahSaeed1211",
    icon: <FaGithub />,
  },
  {
    href: "https://www.linkedin.com/in/abdullah-saeed1211/",
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
