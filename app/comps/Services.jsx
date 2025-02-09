"use client";
import Image from "next/image";
import backend from "../assets/code-solid.svg";
import frontend from "../assets/computer-solid.svg";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ServicesPage() {
  const [isLG, setIsLG] = useState(false);
  useEffect(() => {
    const updateSize = () => setIsLG(window.innerWidth >= 1024);
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return (
    <main
      id="ServicesPage"
      className="w-full h-max mt-20 flex flex-col lg:flex-row gap-10 lg:text-2xl text-justify bg-neutral-950 p-6 rounded-md"
    >
      <motion.div
        initial={{ filter: "blur(5px)", opacity: 0.75 }}
        whileHover={{ filter: "blur(0px)", opacity: 1 }}
        whileTap={{ filter: "blur(0px)", opacity: 1 }}
        transition={{ duration: 0.1, ease: "easeInOut" }}
        className="lg:w-1/3 p-4 flex flex-col bg-neutral-900 rounded-md gap-6"
      >
        <Image
          src={frontend}
          alt=""
          className="flex self-center w-2/12 lg:w-2/12"
        />
        <h1 className="text-red-400 text-3xl text-center font-bold">
          Portfolio/Showcase Websites
        </h1>
        <h1>
          This websites are used for showcasing your work and previously done
          projects or yourself. They are like CVs but in more beautifull edition
        </h1>
      </motion.div>
      <motion.div
        initial={{ filter: "blur(5px)", opacity: 0.75 }}
        whileHover={{ filter: "blur(0px)", opacity: 1 }}
        whileTap={{ filter: "blur(0px)", opacity: 1 }}
        transition={{ duration: 0.1, ease: "easeInOut" }}
        className="p-4 lg:w-1/3 flex flex-col bg-neutral-900 rounded-md gap-6"
      >
        <Image
          src={backend}
          alt=""
          className="flex self-center w-2/12 lg:w-2/12"
        />
        <h1 className="text-red-400 text-3xl text-center font-bold">
          E-Commerce Websites
        </h1>
        <h1>
          E-Commerce is simply way of selling goods and services through out the
          internet. Website for that is just like every simple shopping website.
        </h1>
      </motion.div>
      <motion.div
        initial={{ filter: "blur(5px)", opacity: 0.75 }}
        whileHover={{ filter: "blur(0px)", opacity: 1 }}
        whileTap={{ filter: "blur(0px)", opacity: 1 }}
        transition={{ duration: 0.1, ease: "easeInOut" }}
        className="p-4 lg:w-1/3 flex flex-col bg-neutral-900 rounded-md gap-6"
      >
        <div className="flex justify-center gap-6">
          <Image
            src={frontend}
            alt=""
            className="flex self-center w-2/12 lg:w-2/12"
          />
        </div>
        <h1 className="text-red-400 text-3xl text-center font-bold">
          Simple Apps
        </h1>
        <h1>
          Apps for various things. It can be a calculator, todo-app, blog or
          anything that comes to your mind. Apps can be very easy and can be
          very hard and complex depends on your wishes.
        </h1>
      </motion.div>
    </main>
  );
}
