"use client";
import { motion } from "framer-motion";
export default function EducationPage() {
  return (
    <main
      id="CareerPage"
      className="relative mt-20 bg-neutral-950 rounded-md p-6 flex flex-col lg:flex-row "
    >
      <motion.div className="w-full flex flex-col p-4 gap-8 justify-center items-center">
        <motion.h1
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ delay: 0.55, duration: 1.5, ease: "easeInOut" }}
          className="text-4xl lg:text-6xl overflow-hidden whitespace-nowrap text-center text-red-400 font-bold"
        >
          Education
        </motion.h1>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 1.35, duration: 1, type: "spring" }}
          className="flex flex-col p-4 bg-neutral-800 gap-5 rounded-md h-max lg:h-4/6"
        >
          <h1 className="text-2xl text-center text-red-400 font-bold">
            Middle School
          </h1>
          <h1 className="text-xl text-justify lg:text-2xl">
            Finished middle school ETS Mija Stanimirovic in Serbia, Nis. It was
            it sector where I started learning about programming and got into
            industry and the rest was finished using online courses and self
            learning and dedication.
          </h1>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: "100%" }}
        transition={{ duration: 0.5 }}
        className="h-full absolute top-0 right-1/2 translate-x-1/2 bg-red-400 w-1  hidden lg:flex"
      ></motion.div>
      <motion.div className="w-full flex flex-col p-4 gap-8 items-center justify-center">
        <motion.h1
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ delay: 2, duration: 1.5, ease: "easeInOut" }}
          className="text-4xl lg:text-6xl overflow-hidden whitespace-nowrap text-center text-red-400 font-bold"
        >
          Experience
        </motion.h1>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 3, duration: 1, type: "spring" }}
          className="flex flex-col p-4 bg-neutral-800 gap-5 rounded-md h-max lg:h-4/6"
        >
          <h1 className="text-2xl text-center text-red-400 font-bold">
            Building websites for own purpose
          </h1>
          <h1 className="text-xl lg:text-2xl text-justify">
            My first experience was building websites for my own purposes (like
            this portfolio) and for my friends and family.
          </h1>
        </motion.div>
      </motion.div>
    </main>
  );
}
