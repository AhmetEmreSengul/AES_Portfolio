import { useEffect, useState } from "react";
import { TbLayoutNavbarExpandFilled } from "react-icons/tb";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { navItems } from "../data";

const Navbar = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll();
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div>
      <nav className="flex justify-center items-center w-full container relative z-0">
        <div
          className={`${
            width < 450
              ? "w-screen container h-16 bg-[#ffffff21] flex justify-between items-center backdrop-blur-sm relative overflow-hidden"
              : "w-215 container h-16 bg-[#ffffff23] rounded-full flex justify-between items-center mt-5 backdrop-blur-sm relative overflow-hidden"
          }`}
        >
          <motion.div
            className="absolute top-0 left-0 h-full bg-[#8007c59c]"
            style={{ width: lineWidth }}
          />
          <p className="ml-3 font-bold text-lg z-10">Ahmet Emre Şengül</p>

          {width < 450 ? (
            <div className="mr-3">
              <TbLayoutNavbarExpandFilled
                onClick={() => setOpen(!open)}
                size={28}
                className={`${
                  open ? "rotate-180 transition" : "transition rotate-0"
                }`}
              />
            </div>
          ) : (
            <div>
              <ul className="flex gap-5 mr-3 font-semibold text-md">
                {navItems.map((item) => (
                  <motion.li
                    key={item.id}
                    className="flex flex-col items-center justify-center"
                  >
                    <a
                      className="flex flex-col hover:text-purple-500 transition z-10"
                      href={item.href}
                    >
                      {item.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
      <div className="flex items-center justify-center">
        <AnimatePresence>
          {open && (
            <motion.div
              className="bg-transparent w-screen backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.2 }}
            >
              <motion.ul className="flex h-screen flex-col items-center gap-10 items text-lg ml-5 mt-8 ">
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                    className="border-b border-purple-700"
                  >
                    <a
                      onClick={() => setOpen(false)}
                      className="font-light text-2xl"
                      href={item.href}
                    >
                      {item.name}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;
