"use client";
import React, { useState } from "react";
import bars from "../assets/bars-solid.svg";
import Image from "next/image";
import { Link } from "react-scroll";
export default function Navbar() {
  const [menu, SetMenu] = useState(false);
  const toggleMenu = () => {
    SetMenu(!menu);
  };
  return (
    <nav>
      <div
        data-aos="fade-down"
        className="flex justify-between z-50 fixed backdrop-blur-lg backdrop-brightness-50 top-0 left-0 w-screen px-6 lg:px-16 py-6 text-xl"
      >
        <div>
          <h1 className="text-4xl text-red-400 font-bold z-10 flex items-center justify-center">
            Ognjen
          </h1>
        </div>
        <button className="lg:hidden flex" onClick={toggleMenu}>
          <Image width={25} src={bars} alt="" />
        </button>
        <div className="lg:flex hidden gap-6 items-center justify-center">
          <Link
            to="HomePage"
            smooth={true}
            duration={500}
            offset={-125}
            className="hover:underline hover:text-red-400 transition-all duration-75 cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="ServicesPage"
            smooth={true}
            duration={500}
            offset={-125}
            className="hover:underline hover:text-red-400 transition-all duration-75 cursor-pointer"
          >
            Services
          </Link>
          <Link
            to="SkillPage"
            smooth={true}
            duration={500}
            offset={-125}
            className="hover:underline hover:text-red-400 transition-all duration-75 cursor-pointer"
          >
            Skills
          </Link>
          <Link
            to="EducationPage"
            smooth={true}
            duration={500}
            offset={-125}
            className="hover:underline hover:text-red-400 transition-all duration-75 cursor-pointer"
          >
            Career
          </Link>
          <Link
            to="ProjectsPage"
            smooth={true}
            duration={500}
            offset={-125}
            className="hover:underline hover:text-red-400 transition-all duration-75 cursor-pointer"
          >
            Projects
          </Link>
          <Link
            to="ContactPage"
            smooth={true}
            duration={500}
            offset={-125}
            className="hover:underline hover:text-red-400 transition-all duration-75 cursor-pointer"
          >
            Contact
          </Link>
        </div>
      </div>
      <nav
        className={`lg:hidden ${menu ? "-translate-x-0" : "-translate-x-full"} transition-all duration-500 fixed backdrop-blur-lg backdrop-brightness-50 left-0  flex flex-col items-start justify-center text-5xl w-max h-full bottom-0 gap-6 px-8`}
      >
        <Link
          to="HomePage"
          smooth={true}
          duration={500}
          offset={-125}
          onClick={toggleMenu}
          className="hover:underline hover:text-red-400 transition-all duration-75 cursor-pointer"
        >
          Home
        </Link>
        <Link
          to="ServicesPage"
          smooth={true}
          duration={500}
          offset={-125}
          onClick={toggleMenu}
          className="hover:underline hover:text-red-400 transition-all duration-75 cursor-pointer"
        >
          Services
        </Link>
        <Link
          to="SkillPage"
          smooth={true}
          duration={500}
          offset={-125}
          onClick={toggleMenu}
          className="hover:underline hover:text-red-400 transition-all duration-75 cursor-pointer"
        >
          Skills
        </Link>
        <Link
          to="EducationPage"
          smooth={true}
          duration={500}
          offset={-125}
          onClick={toggleMenu}
          className="hover:underline hover:text-red-400 transition-all duration-75 cursor-pointer"
        >
          Career
        </Link>
        <Link
          to="ProjectsPage"
          smooth={true}
          duration={500}
          offset={-125}
          className="hover:underline hover:text-red-400 transition-all duration-75 cursor-pointer"
        >
          Projects
        </Link>
        <Link
          to="ContactPage"
          smooth={true}
          duration={500}
          offset={-125}
          onClick={toggleMenu}
          className="hover:underline hover:text-red-400 transition-all duration-75 cursor-pointer"
        >
          Contact
        </Link>
      </nav>
    </nav>
  );
}
