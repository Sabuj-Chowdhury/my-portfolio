import axios from "axios";
import { toast } from "react-hot-toast";

const AddProjects = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const projectData = {
      projectTitle: formData.get("projectTitle"),
      technologyUsed: formData
        .get("technologyUsed")
        .split(",")
        .map((tech) => tech.trim()),
      liveLink: formData.get("liveLink"),
      githubRepo: formData.get("githubRepo"),
      imageUrl: formData.get("imageUrl"),
      description: formData.get("description"),
      challenges: formData.get("challenges"),
      drawback: formData.get("drawback"),
    };

    axios
      .post(`${import.meta.env.VITE_url}/add`, projectData)
      .then((res) => {
        console.log(res);
        toast.success("Project added successfully!"); // Show success toast
        e.target.reset(); // Reset the form
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to add the project."); // Show error toast
      });
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-5 bg-white shadow-md rounded-md text-black">
      <h2 className="text-2xl font-bold mb-5">Add Project</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-medium mb-2" htmlFor="projectTitle">
            Project Title
          </label>
          <input
            type="text"
            id="projectTitle"
            name="projectTitle"
            className="w-full border rounded p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-2" htmlFor="technologyUsed">
            Technologies Used (comma-separated)
          </label>
          <input
            type="text"
            id="technologyUsed"
            name="technologyUsed"
            className="w-full border rounded p-2"
            placeholder="e.g., React, Node.js, MongoDB"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-2" htmlFor="liveLink">
            Live Link
          </label>
          <input
            type="url"
            id="liveLink"
            name="liveLink"
            className="w-full border rounded p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-2" htmlFor="githubRepo">
            GitHub Repo Link
          </label>
          <input
            type="url"
            id="githubRepo"
            name="githubRepo"
            className="w-full border rounded p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-2" htmlFor="imageUrl">
            Image URL
          </label>
          <input
            type="url"
            id="imageUrl"
            name="imageUrl"
            className="w-full border rounded p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            className="w-full border rounded p-2"
            rows="3"
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-2" htmlFor="challenges">
            Challenges
          </label>
          <textarea
            id="challenges"
            name="challenges"
            className="w-full border rounded p-2"
            rows="3"
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-2" htmlFor="drawback">
            Drawback
          </label>
          <textarea
            id="drawback"
            name="drawback"
            className="w-full border rounded p-2"
            rows="3"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-medium py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProjects;
