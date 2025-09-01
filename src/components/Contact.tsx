import { motion } from "framer-motion";
import { contactInfo, socials } from "../data";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-screen mt-20 md:mt-0 md:h-[850px] flex justify-center items-center flex-col"
    >
      <h1 className="text-4xl">Contact</h1>
      <motion.p
        initial={{ width: 0 }}
        whileInView={{ width: 250 }}
        className="border-b-2 border-purple-500 w-70 mt-1"
      />
      <div className="flex flex-col md:flex-row gap-5 items-center md:items-start mt-10">
        <motion.div
          className="md:size-135 container bg-[#2b79c22d] rounded-lg backdrop-blur-sm"
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl p-4 font-bold">Contact Information</h1>
            {contactInfo.map((contact, i) => (
              <motion.span
                className="flex flex-row gap-2 items-center p-2 ml-5"
                key={i}
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <p className="p-2 bg-purple-900 text-purple-300 rounded-full">
                  {contact.icon}
                </p>
                <p>
                  <h1 className="text-lg font-bold"> {contact.title} </h1>
                  {contact.value}
                </p>
              </motion.span>
            ))}
            <h1 className="text-2xl p-4 font-bold">Socials</h1>
            <div className="flex ml-5 gap-2">
              {socials.map((social, i) => (
                <motion.a
                  className="p-3 mb-4 bg-purple-900 text-purple-300 rounded-full"
                  key={i}
                  href={social.url}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col md:items-end"
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <img
            src="../../CV.png"
            alt=""
            className="h-135 rounded-lg container"
          />
          <a
            href="https://drive.google.com/file/d/1x6gEhSKVtMtIfqgd42pWqfai68ZBHg25/view?usp=drive_link"
            download
            className="mt-4 w-fit px-6 py-3 border-2 border-purple-800 text-white rounded-lg hover:border-purple-600 transition "
          >
            View
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
