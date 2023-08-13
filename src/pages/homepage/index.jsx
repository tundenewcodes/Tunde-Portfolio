import Footer from "../../components/footer";

import AboutMe from "../../components/About/AboutMe";
import Services from "../../components/services/Services";
import Skills from "../../components/skills/Skills";
import Contact from "../../components/contact/Contact";
import Projects from "../../components/Projects/Projects";
import Hero from "../../components/Hero/Index";

export default function Homepage() {


  return (
    <>
      <Hero />
      <AboutMe />
      <Services />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
