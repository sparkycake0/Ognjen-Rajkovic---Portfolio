import Image from "next/image";
import Link from "next/link";
import me from "../assets/me.jpg";
import github from "../assets/github-brands-solid.svg";
import instagram from "../assets/instagram-brands-solid.svg";
import phone from "../assets/phone-solid.svg";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main
      id="HomePage"
      className="w-full h-full rounded-md flex flex-col lg:flex-row p-6 mt-12 bg-neutral-950"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          delay: 0.25,
          duration: 0.5,
          type: "spring",
        }}
        className="w-full flex flex-col items-center lg:justify-center py-3"
      >
        <Image
          src={me}
          alt="My Photo"
          className="w-5/12 lg:w-8/12 rounded-full"
        />
      </motion.div>
      <div className="w-full flex flex-col gap-6 lg:justify-center">
        <div className="w-full flex flex-col">
          <motion.h1
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.55, duration: 1.5, ease: "easeInOut" }}
            className="text-5xl py-1 overflow-hidden whitespace-nowrap lg:text-8xl font-bold"
          >
            Hi, It's <span className="text-red-400">Ognjen</span>
          </motion.h1>
          <motion.h1
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 1.6, duration: 1.5, ease: "easeInOut" }}
            className="text-3xl overflow-hidden whitespace-nowrap lg:text-6xl font-bold"
          >
            I'm a <span className="text-red-400">Web Developer</span>
          </motion.h1>
          <motion.h1
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 2.6, duration: 1.5, ease: "easeInOut" }}
            className="text-md mt-6 overflow-hidden whitespace-nowrap lg:text-xl text-justify"
          >
            Make your internet dreams come true!{" "}
          </motion.h1>
        </div>
        <div className="w-full flex gap-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 3.5, duration: 0.25 }}
            className="flex"
          >
            <Link
              href={"https://www.instagram.com/lunarweb.css/"}
              className="border-2 p-2 border-red-400 rounded-full cursor-pointer hover:-translate-y-2 hover:scale-105 transition-transform duration-200"
            >
              <Image src={instagram} alt="" />
            </Link>
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 4, duration: 0.25 }}
            className="group"
          >
            <div className="border-2 p-2 border-red-400 rounded-full cursor-pointer hover:-translate-y-2 hover:scale-105 transition-transform duration-200">
              <Image src={phone} alt="" />
            </div>
            <div className="relative">
              <div class="absolute left-1/2 top-15 -translate-x-1/2 w-max px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                +381 61 192 6474
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 4.5, duration: 0.25 }}
            className="flex"
          >
            <Link
              href={"https://github.com/sparkycake0"}
              className="border-2 p-2 border-red-400 rounded-full cursor-pointer hover:-translate-y-2 hover:scale-105 transition-transform duration-200"
            >
              <Image src={github} alt="" />
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 5, duration: 0.5, type: "spring", bounce: 0.5 }}
          className="w-max"
        >
          <button className="border-2 border-red-400 text-red-400 p-2 rounded-full px-8 hover:bg-red-400 hover:text-black transition-colors duration-500 lg:text-xl">
            Hire me
          </button>
        </motion.div>
      </div>
    </main>
  );
}
