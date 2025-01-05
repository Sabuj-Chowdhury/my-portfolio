import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../page/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import AddProjects from "../components/AddProjects";
import Projects from "../components/Projects";
import ProjectDetails from "../page/ProjectDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/projects",
        element: <Projects></Projects>,
      },
      {
        path: "/project-details/:id",
        element: <ProjectDetails></ProjectDetails>,
      },
    ],
  },
  {
    path: "/add-projects",
    element: <AddProjects></AddProjects>,
  },
]);
export default router;
