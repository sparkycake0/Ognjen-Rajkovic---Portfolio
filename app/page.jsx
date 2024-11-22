import HomePage from "./comps/HomePage";
import ServicesPage from "./comps/Services";
import SkillPage from "./comps/Skills";
import EducationPage from "./comps/Education";
import ContactPage from "./comps/Contact";

export default function Home() {
  return (
    <>
      <HomePage />
      <ServicesPage />
      <SkillPage />
      <EducationPage />
      <ContactPage />
    </>
  );
}
