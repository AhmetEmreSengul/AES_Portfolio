import ProjectCard from "./layouts/ProjectCard";
import { motion } from "framer-motion";
import { projectDetails } from "../data";

const Project = () => {
  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center mt-20 h-100vh md:h-[850px]"
    >
      <h1 className="text-4xl">Projects</h1>
      <motion.p
        initial={{ width: 0 }}
        whileInView={{ width: 250 }}
        viewport={{once : true}}
        className="border-b-2 border-purple-500 w-70 mt-1"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {projectDetails.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.1 }}
            viewport={{once : true}}
          >
            <ProjectCard
              img={project.img}
              title={project.title}
              desc={project.desc}
              tech={project.tech}
              links={project.links}
              icons={project.icons}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Project;
