import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./screens/Home";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import NotFound from "./screens/NotFound";
import Error from "./components/Error";
import Update from "./screens/Update";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: "login",
        element: <Login />,
        errorElement: <Error />,
      },
      {
        path: "signup",
        element: <SignUp />,
        errorElement: <Error />,
      },
      {
        path: "update",
        element: <Update />,
        errorElement: <Error />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
