import axios from "axios";
import { useEffect, useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import { useParams } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null); // Set to `null` initially for better handling
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_url}/details/${id}`)
      .then((res) => {
        setProject(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!project) {
    return (
      <section className="max-w-7xl mx-auto text-center text-red-500">
        <p>Project not found. Please try again later.</p>
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-amber-500 mb-12">
        {project.projectTitle}
      </h2>

      <div className="flex flex-col lg:flex-row items-start gap-12 bg-gray-100 p-8 rounded-lg shadow-lg">
        {/* Project Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={project.imageUrl}
            alt={project.projectTitle}
            className="rounded-lg shadow-md object-cover w-full h-auto"
          />
        </div>

        {/* Project Details */}
        <div className="w-full lg:w-1/2 space-y-8">
          {/* Description */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Description:
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
              {project.description}
            </p>
          </div>

          {/* Challenges */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Challenges:
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
              {project.challenges}
            </p>
          </div>

          {/* Drawbacks */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Drawbacks:
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
              {project.drawback}
            </p>
          </div>

          {/* Technology Used */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Technology Used:
            </h3>
            <ul className="list-disc pl-6 text-gray-700 text-lg">
              {project.technologyUsed.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <a
              href={project.githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg shadow-md transition-transform hover:scale-105 hover:bg-gray-700"
            >
              <FaGithub size={20} />
              <span className="font-semibold">GitHub Repository</span>
            </a>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-amber-500 text-white rounded-lg shadow-md transition-transform hover:scale-105 hover:bg-amber-600"
            >
              <FaExternalLinkAlt size={20} />
              <span className="font-semibold">Live Project</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
