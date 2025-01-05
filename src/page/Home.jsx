import About from "../components/About";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Education from "../components/Education";
import Projects from "../components/Projects";

import Skills from "../components/Skills";

const Home = () => {
  return (
    <section>
      <Banner></Banner>
      <About></About>
      <Skills></Skills>
      <Education></Education>
      <Projects></Projects>
      <Contact></Contact>
    </section>
  );
};

export default Home;
