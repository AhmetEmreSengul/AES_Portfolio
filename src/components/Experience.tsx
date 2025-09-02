import { CiLocationOn } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { motion } from "framer-motion";

const Experience = () => {
  const vestelTech = ["HTML-CSS", "JavaScript", "React"];

  return (
    <div
      id="experience"
      className="w-screen h-[850px] flex flex-col items-center justify-center"
    >
      <h1 className="text-4xl flex items-center justify-center flex-col ">
        Experience
        <motion.p
          initial={{ width: 0 }}
          whileInView={{ width: 250 }}
          className="border-b-2 border-purple-500 w-70 mt-1"
          viewport={{once : true}}
        />
      </h1>
      <div className="mt-10 flex flex-col md:flex-row items-center justify-center">
        <motion.img
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{once : true}}
          src="../vestel.jpg"
          alt=""
          className="size-80 rounded-t-2xl md:rounded-t-none md:rounded-l-2xl"
        />
        <motion.div
          className="flex flex-col items-center bg-red-950/40  h-92 md:h-80 w-80 rounded-b-2xl md:rounded-r-2xl md:rounded-l-none"
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{once : true}}
        >
          <h2 className="text-xl md:text-2xl mt-10 mb-2 font-bold">
            Front-end Developer Intern
          </h2>
          <div className="">
            <div className="flex gap-3 flex-col md:flex-row items-center justify-center font-light">
              <p className="flex  items-center gap-2 ">
                <SlCalender /> 06.2023 - 08.2023
              </p>
              <p className="flex items-center gap-2">
                <CiLocationOn />
                Istanbul, Sarıyer
              </p>
            </div>
            <p className="mt-3 ml-3 p-2">
              Developed responsive and dynamic user interfaces with HTML, CSS,
              JavaScript, and React across two projects, establishing a strong
              foundation in modern front-end development.
            </p>

            <div className="mt-4 ml-2 md: flex gap-2">
              {vestelTech.map((tech, i) => (
                <motion.div
                  key={i}
                  initial={{ y: -20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  viewport={{once : true}}
                >
                  <span className="p-2 rounded-full bg-purple-600/25 backdrop-blur-md">
                    {tech}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
