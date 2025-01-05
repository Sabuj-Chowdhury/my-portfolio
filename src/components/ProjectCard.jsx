import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const { projectTitle, technologyUsed, imageUrl, _id } = project || {};

  return (
    <div className="bg-black border border-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 max-w-sm mx-auto">
      {/* Image */}
      <figure className="w-full h-56">
        <img
          src={imageUrl}
          alt={projectTitle}
          className="w-full h-full object-cover"
        />
      </figure>

      {/* Content */}
      <div className="p-4">
        {/* Title */}
        <h2 className="text-lg md:text-xl text-amber-400 font-semibold">
          {projectTitle}
        </h2>

        {/* Technology Badges */}
        <div className="mt-4 flex flex-wrap gap-2">
          {technologyUsed.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-800 text-gray-300 text-sm px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* View Details Button */}
        <div className="mt-6">
          <Link to={`/project-details/${_id}`}>
            <button className="w-full bg-amber-500 text-black font-medium py-2 rounded-lg hover:bg-amber-400 transition">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
