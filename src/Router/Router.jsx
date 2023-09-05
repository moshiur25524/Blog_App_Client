import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Layout";
import Login from "../pages/Login/Login";
import Home from "../App";

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
    ],
  },
]);