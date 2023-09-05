import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Layout";
import Login from "../pages/Login/Login";
import Home from "../App";
import Register from "../pages/Register/Register";
import CreatePost from "../pages/Posts/CreatePost";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "create",
        element: <CreatePost />,
      },
    ],
  },
]);
