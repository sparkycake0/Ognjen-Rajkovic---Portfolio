"use client";
import HomePage from "./comps/HomePage";
import ServicesPage from "./comps/Services";
import SkillPage from "./comps/Skills";
import EducationPage from "./comps/Education";
import ContactPage from "./comps/Contact";
import ProjectsPage from "./comps/Projects";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <HomePage />
      <ServicesPage />
      <SkillPage />
      <EducationPage />
      <ProjectsPage />
      <ContactPage />
    </>
  );
}
