import TextType from "./layouts/TextSnippet";
import { IoChevronDownSharp } from "react-icons/io5";

const Hero = () => {
  return (
    <div
      id="about"
      className="flex flex-col justify-center items-center h-screen gap-7"
    >
      <div className="text-5xl flex gap-3">
        Hello, I'm <p className="text-purple-500">Ahmet</p>
      </div>
      <p className="text-3xl font-light mt-4">
        <TextType text={["Front-end Developer", "Computer Engineer"]} />
      </p>
      <div className="flex flex-col gap-4 md:flex-row mt-4">
        <a
          href="#projects"
          className="w-[350px] md:w-fit p-3 text-center rounded-lg bg-purple-800 hover:bg-purple-700 transition"
        >
          View My Projects
        </a>
        <a
          href="#contact"
          className="p-3 text-center rounded-lg border-2 border-purple-400 hover:border-purple-300 transition backdrop-blur-lg bg-black/20"
        >
          Contact
        </a>
      </div>
      <div className="">
        <div className="flex flex-col items-center text-lg ">
          <p>Scroll Down</p>
          <p className="animate-bounce mt-4">
            <IoChevronDownSharp />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
