import About from "../components/About";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Education from "../components/Education";

import Skills from "../components/Skills";

const Home = () => {
  return (
    <section>
      <Banner></Banner>
      <About></About>
      <Skills></Skills>
      <Education></Education>
      <Contact></Contact>
    </section>
  );
};

export default Home;
