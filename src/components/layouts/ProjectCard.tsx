import React, { useState } from "react";
import { motion } from "framer-motion";

interface CardProps {
  img: string;
  title: string;
  desc: string;
  tech: string[];
  links: string[];
  icons: React.ReactNode[];
}

const ProjectCard = ({ img, title, desc, tech, links, icons }: CardProps) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="mt-7 w-90 md:w-100 shadow-2xl hover:-translate-y-2 transition z-0"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="flex items-center justify-center relative">
        <img src={img} alt="" className="h-50 rounded-t-2xl " />
        <div
          className={`${
            hover
              ? "absolute inset-0 flex items-center justify-center text-white font-bold bg-[#3333332d] backdrop-blur-sm transition rounded-t-lg"
              : "absolute inset-0 flex items-center justify-center text-white font-bold "
          }`}
        >
          <motion.div
            className="flex flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={hover ? { opacity: 1, y: 0 } : {}}
          >
            {links.map((link, i) => (
              <a key={i} href={link}>
                <span className="text-5xl text-[#adadad]">{icons[i]}</span>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="flex h-55 flex-col bg-[#01011dc4] rounded-b-2xl  overflow-hidden">
        <h1 className="font-bold mt-2 p-3 z-10 "> {title} </h1>
        <p className="font-light mt-3 p-3 h-22 z-10 ">{desc}</p>
        <div className="space-x-3 p-3 z-10 ">
          {tech.map((item, i) => (
            <motion.span
              className="p-2 rounded-full bg-purple-600/15 backdrop-blur-md"
              key={i}
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 + i * 0.1 }}
            >
              {item}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
