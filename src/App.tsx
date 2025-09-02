import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/Experience";
import Project from "./components/Project";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center font-[Lato] text-white overflow-x-hidden scroll-smooth bg-black">
      <div className="fixed z-1">
        <Navbar />
      </div>
      <div className="z-0">
        <Hero />
        <About />
        <Project />
        <Contact />
      </div>
    </div>
  );
};

export default App;
