import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../page/Home";
import About from "../components/About";
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
    ],
  },
]);
export default router;
