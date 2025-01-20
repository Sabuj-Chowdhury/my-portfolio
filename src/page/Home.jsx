import About from "../components/About";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Education from "../components/Education";
import Projects from "../components/Projects";
import LazyLoad from "react-lazyload";

import Skills from "../components/Skills";

const Home = () => {
  return (
    <section>
      <LazyLoad height={200} once>
        <Banner></Banner>
      </LazyLoad>
      <LazyLoad height={200} once>
        <About></About>
      </LazyLoad>
      <LazyLoad height={200} once>
        <Skills></Skills>
      </LazyLoad>
      <LazyLoad height={200} once>
        <Education></Education>
      </LazyLoad>
      <LazyLoad height={200} once>
        <Projects></Projects>
      </LazyLoad>
      <LazyLoad height={200} once>
        <Contact></Contact>
      </LazyLoad>
    </section>
  );
};

export default Home;
