"use client";
import { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";
import scrollDownArrow from "./assets/scrollDownArrow.svg";
import me from "./assets/me.jpg";
import "./styles/text-animation.css";
import useIdleTimer from "./hooks/useIdleTimer.js";

export default function Home() {
  const idleTimer = useIdleTimer(1000000);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <main className=" h-screen relative w-screen flex flex-col justify-evenly items-center ">
        <div className="mt-0">
          <div
            className="font-bold lg:justify-center lg:items-center lg:text-9xl text-6xl lg:scale-150 flex flex-col items-center gap-5 text-gradient lg:flex-row h-max p-2"
            data-aos="fade-down"
          >
            <Image
              src={me}
              height={400}
              className="me-image rounded-lg"
            ></Image>
            <h1 className=" w-max lg:w-min">Ognjen Rajkovic</h1>
          </div>
        </div>

        <div className="h-36 w-full flex flex-col justify-between p-1 lg:text-2xl">
          <div
            className="bg-neutral-900 rounded-md p-4 w-max delay-300"
            data-aos="fade-right"
          >
            <h1>Almost 2 years in Web Development!</h1>
          </div>

          <div
            className="self-end bg-neutral-900 rounded-md p-4 w-max delay-500"
            data-aos="fade-left"
          >
            <h1>Long time building some gorgeous websites!</h1>
          </div>
        </div>
        <div
          className={`${
            idleTimer ? "translate-y-0" : "translate-y-24"
          } fixed transition-transform bottom-3 flex flex-col items-center`}
        >
          <div>Scroll down!</div>
          <Image src={scrollDownArrow} className="size-12 rotate-90"></Image>
        </div>
      </main>

      <main className=" mt-12 p-4">
        <div
          className="flex flex-col gap-3 text-lg bg-neutral-900 p-2 rounded-md"
          data-aos="zoom-in-up"
        >
          <h1>
            I am specialist in developing entertaining websites with amazing
            look! Along with beautifull designs I'm making backend logic with
            databases and other utilities.
          </h1>

          <h1>
            If you are interested in my other works you can check my {""}
            <Link
              href={"https://github.com/sparkycake0?tab=repositories"}
              className="text-blue-400 hover:text-blue-200 transition-all duration-200"
            >
              github account.
            </Link>
          </h1>
        </div>
      </main>
    </>
  );
}
