import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../page/Home";
import AddProjects from "../components/AddProjects";
import ProjectDetails from "../page/ProjectDetails";
import ContactPage from "../page/ContactPage";
import AboutPage from "../page/AboutPage";
import ProjectsPage from "../page/ProjectsPage";
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
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/projects",
        element: <ProjectsPage />,
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
