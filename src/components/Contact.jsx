import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    emailjs
      .sendForm(
        `${import.meta.env.VITE_service_id}`,
        `${import.meta.env.VITE_template_id}`,
        form,
        `${import.meta.env.VITE_user_id}`
      )
      .then(
        (result) => {
          Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "Thank you for reaching out. I'll get back to you shortly.",
            confirmButtonColor: "#3085d6",
          });
          form.reset();
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong. Please try again later.",
            confirmButtonColor: "#d33",
          });
        }
      );
  };

  return (
    <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center my-12 p-6">
      <div className="w-full md:w-1/2 mb-6 md:mb-0">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-6 rounded-lg shadow-lg w-full"
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-amber-400"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="user_name"
              required
              className="w-full p-2 mt-2 bg-gray-700 text-white rounded focus:outline-none focus:ring focus:ring-amber-400"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-amber-400"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-2 mt-2 bg-gray-700 text-white rounded focus:outline-none focus:ring focus:ring-amber-400"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-amber-400"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="w-full p-2 mt-2 bg-gray-700 text-white rounded focus:outline-none focus:ring focus:ring-amber-400"
              placeholder="Your Message"
              rows="4"
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-amber-500 text-black rounded hover:bg-amber-400 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* My Information Section */}
      <div className="w-full md:w-1/2 flex flex-col items-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-thin text-amber-400 mb-6">
          Contact Me
        </h2>
        <div className="flex items-center space-x-2">
          <FaEnvelope className="text-amber-400" />
          <a href="mailto:csabuj73@gmail.com" className="text-white">
            csabuj73@gmail.com
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <FaPhone className="text-amber-400" />
          <a href="tel:+918293616909" className="text-white">
            +91 8293616909
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <FaWhatsapp className="text-amber-400" />
          <a
            href="https://wa.me/+8801308766895"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            +88 01308766895
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
