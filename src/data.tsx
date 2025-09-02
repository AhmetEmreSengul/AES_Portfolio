import type React from "react";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaLinkedinIn,
  FaPhone,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

interface projectDetails {
  img: string;
  title: string;
  desc: string;
  tech: string[];
  links: string[];
  icons: React.ReactNode[];
}

interface ContactInfoItem {
  title: string;
  value: string;
  icon: React.ReactNode;
}

interface SocialLink {
  url: string;
  icon: React.ReactNode;
  title: string;
}

interface navItems {
  id: number;
  name: string;
  href: string;
}

export const projectDetails: projectDetails[] = [
  {
    img: "../../squirell.png",
    title: "FINTECH TRADING PLATFORM",
    desc: "A full stack web app where users are able to invest in land, art and other valuables taking advantage of fractional shares.",
    tech: ["React", "Tailwind", "MongoDB", "Node"],
    links: [
      "https://github.com/AhmetEmreSengul/squirell",
      "https://squirell.onrender.com",
    ],
    icons: [<FaGithub />, <FaExternalLinkAlt />],
  },
  {
    img: "../../ImagineAI.png",
    title: "IMAGE GENERATION WEB APP",
    desc: "A web application that generates images based on user input using OpenAI's image generaton API.",
    tech: ["HTML", "CSS", "JavaScript"],
    links: [
      "https://github.com/AhmetEmreSengul/ai_image_generation",
      "https://ai-image-generation-eyvm.onrender.com",
    ],
    icons: [<FaGithub />, <FaExternalLinkAlt />],
  },
  {
    img: "../../Portfolio.png",
    title: "PORTFOLIO WEBSITE",
    desc: "A web application about my work experience, projects.",
    tech: ["React", "Tailwind", "Framer-Motion"],
    links: [
      "https://github.com/AhmetEmreSengul/AES_Portfolio",
      "https://ai-image-generation-eyvm.onrender.com",
    ],
    icons: [<FaGithub />, <FaExternalLinkAlt />],
  },
];

export const contactInfo: ContactInfoItem[] = [
  {
    title: "Email",
    value: "ahmetemresengul.34@gmail.com",
    icon: <MdEmail size={24} />,
  },
  { title: "Phone", value: "+905352278586", icon: <FaPhone size={24} /> },
  {
    title: "Location",
    value: "Istanbul, Bahçelievler",
    icon: <FaLocationDot size={24} />,
  },
];

export const socials: SocialLink[] = [
  {
    url: "https://github.com/AhmetEmreSengul",
    icon: <FaGithub size={27} />,
    title: "Github",
  },
  {
    url: "https://www.linkedin.com/in/ahmet-emre-şengül-",
    icon: <FaLinkedinIn size={27} />,
    title: "LinkedIn",
  },
];

export const navItems: navItems[] = [
  {
    id: 1,
    name: "About",
    href: "#about",
  },
  {
    id: 2,
    name: "Experience",
    href: "#experience",
  },
  {
    id: 3,
    name: "Projects",
    href: "#projects",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];
