import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/Experience";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Beams from "./components/layouts/BGBeams";

const App = () => {
  return (
    <div className="min-h-screen w-screen flex flex-col items-center font-[Lato] text-white overflow-x-hidden bg-black">
      <div className="fixed z-10">
        <Navbar />
      </div>
      <div className="z-0 relative">
        <div className="fixed inset-0 -z-10 ">
          <Beams
            beamWidth={100}
            beamHeight={20}
            beamNumber={3}
            speed={10}
            noiseIntensity={0.35}
            scale={0.1}
            rotation={23}
            lightColor="#a200ff"
          />
        </div>
        <Hero />
        <About />
        <Project />
        <Contact />
      </div>
    </div>
  );
};

export default App;
