import { motion } from "framer-motion";
import aboutImg from "../assets/aboutImg.jpg";

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const imageZoom = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  };

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Content Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.3, duration: 0.8 }}
        variants={fadeIn}
        className="order-1 lg:order-2"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center md:text-left text-amber-400 mb-6">
          About Me
        </h2>
        <p className="text-lg md:text-xl font-light text-gray-300 leading-relaxed">
          Hello! I'm a passionate developer currently pursuing my studies at
          <span className="text-amber-500"> Burdwan University </span> under the{" "}
          <span className="text-amber-500">ICCR Scholarship</span>. I enjoy
          creating innovative projects and diving into cutting-edge
          technologies.
        </p>
        <p className="mt-4 text-lg md:text-xl font-light text-gray-300 leading-relaxed">
          I'm a quick learner and love tackling challenges head-on. Coding keeps
          me busy and helps me stay focused and positive—it’s like therapy with
          syntax! I adapt quickly to new environments and enjoy the thrill of
          learning new technologies. Whether it’s mastering a new framework or
          debugging a tricky issue, I’m always up for the challenge.
        </p>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8 }}
        variants={imageZoom}
        className="order-2 lg:order-1 relative"
      >
        <figure className="w-full overflow-hidden rounded-lg shadow-lg">
          <img
            src={aboutImg}
            alt="About Me"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </figure>
      </motion.div>
    </section>
  );
};

export default About;
