import HomePage from "./comps/HomePage";
import ServicesPage from "./comps/Services";
import SkillPage from "./comps/Skills";
import EducationPage from "./comps/Education";
import ContactPage from "./comps/Contact";
import ProjectsPage from "./comps/Projects";

export default function Home() {
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
