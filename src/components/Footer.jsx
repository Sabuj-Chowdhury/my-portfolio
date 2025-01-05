import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 py-4">
      <div className="flex justify-center space-x-6 mb-4">
        {/* GitHub Icon */}
        <a
          href="https://github.com/Sabuj-Chowdhury"
          target="_blank"
          className="text-gray-400 hover:text-amber-400 transition duration-300"
        >
          <FaGithub size={24} />
        </a>

        {/* LinkedIn Icon */}
        <a
          href="https://www.linkedin.com/in/sabuj-chowdhury-8524a1b4/"
          target="_blank"
          className="text-gray-400 hover:text-amber-400 transition duration-300"
        >
          <FaLinkedin size={24} />
        </a>

        {/* Facebook Icon */}
        <a
          href="https://www.facebook.com/sc2706r/"
          target="_blank"
          className="text-gray-400 hover:text-amber-400 transition duration-300"
        >
          <FaFacebook size={24} />
        </a>
      </div>

      <p className="text-center text-gray-400 text-sm">
        &copy; {currentYear} Sabuj Chowdhury. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
