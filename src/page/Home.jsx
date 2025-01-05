import About from "../components/About";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Education from "../components/Education";
import Footer from "../components/Footer";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <section>
      <Banner></Banner>
      <About></About>
      <Skills></Skills>
      <Education></Education>
      <Contact></Contact>
      <Footer></Footer>
    </section>
  );
};

export default Home;
