import { motion } from "framer-motion";
const Home = () => {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <motion.section
        className="container mx-auto px-6 text-center py-20"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-4">Hi, I’m Sabuj Chowdhury</h2>
        <p className="text-lg mb-6">
          A passionate web developer specializing in React and TailwindCSS
        </p>
        <a
          href="#projects"
          className="bg-white text-blue-600 py-2 px-4 rounded-lg shadow-md hover:bg-gray-200"
        >
          View My Work
        </a>
      </motion.section>
    </div>
  );
};

export default Home;
