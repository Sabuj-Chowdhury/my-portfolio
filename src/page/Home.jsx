import { motion } from "framer-motion";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import heroImg from "../assets/heroBg.jpg";

const Home = () => {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const imageZoom = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  };

  const bounceOnHover = {
    whileHover: { scale: 1.1 },
    whileTap: { scale: 0.9 },
  };

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
      {/* Content Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8 }}
        variants={fadeInRight}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-amber-400 leading-tight mb-4">
          Hi, I’m Sabuj Chowdhury
        </h2>
        <motion.p
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2, duration: 0.8 }}
          variants={fadeInUp}
          className="text-lg md:text-xl font-light mb-6 text-gray-300"
        >
          A passionate web developer specializing in{" "}
          <span className="text-amber-500">React</span>,{" "}
          <span className="text-amber-500">TailwindCSS</span>, basic{" "}
          <span className="text-amber-500">Express</span>, and{" "}
          <span className="text-amber-500">MongoDB CRUD operations</span>.
        </motion.p>
        {/* Button */}
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4, duration: 0.8 }}
          variants={fadeInUp}
        >
          <button className="px-6 py-3 bg-amber-400 text-black font-medium text-lg rounded-lg shadow-md hover:bg-amber-500 transition-all">
            Download CV
          </button>
        </motion.div>
        {/* Social Links */}
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6, duration: 0.8 }}
          variants={fadeInUp}
          className="flex mt-8 gap-4 p-4 bg-gray-800 shadow-lg rounded-lg justify-center"
        >
          <motion.a
            href="https://github.com/Sabuj-Chowdhury"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-400 hover:text-amber-400 transition-all"
            {...bounceOnHover}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.facebook.com/sc2706r/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-400 hover:text-amber-400 transition-all"
            {...bounceOnHover}
          >
            <FaFacebook />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/sabuj-chowdhury-8524a1b4/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-400 hover:text-amber-400 transition-all"
            {...bounceOnHover}
          >
            <FaLinkedin />
          </motion.a>
        </motion.div>
      </motion.div>
      {/* Image Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
        variants={imageZoom}
        className="relative"
      >
        <figure className="w-full overflow-hidden rounded-lg shadow-lg">
          <img
            src={heroImg}
            alt="My Hero Image"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </figure>
      </motion.div>
    </section>
  );
};

export default Home;
