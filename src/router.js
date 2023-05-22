import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./screens/Home";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import NotFound from "./screens/NotFound";
import Error from "./components/Error";
import Update from "./screens/Update";
import Board from "./screens/Board/Board";
import BoardDetail from "./screens/Board/BoardDetail";
import Party from "./screens/Party/Party";
import BoardWrite from "./screens/Board/BoardWrite";
import PartyWrite from "./screens/Party/PartyWrite";

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
      {
        path: "board",
        element: <Board />,
        errorElement: <Error />,
      },
      {
        path: "board/:id",
        element: <BoardDetail />,
        errorElement: <Error />,
      },
      {
        path: "board/write",
        element: <BoardWrite />,
        errorElement: <Error />,
      },
      {
        path: "party",
        element: <Party />,
        errorElement: <Error />,
      },
      {
        path: "party/write",
        element: <PartyWrite />,
        errorElement: <Error />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
