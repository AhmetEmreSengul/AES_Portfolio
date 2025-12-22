import { Chat } from "./Chat";
import TextType from "./layouts/TextSnippet";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5 py-40 w-screen items-center justify-center">
      <div
        id="about"
        className="flex flex-col justify-center items-center gap-7 w-120 h-80"
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
      </div>
      <Chat />
    </div>
  );
};

export default Hero;
