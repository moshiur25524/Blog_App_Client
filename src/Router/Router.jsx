import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Layout";
import Login from "../pages/Login/Login";
import Home from "../App";
import Register from "../pages/Register/Register";
import CreatePost from "../pages/Posts/CreatePost";
import PostPage from "../pages/PostPage/PostPage";
import EditPost from "../pages/EditPost/EditPost";

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
      {
        path: "post/:id",
        element: <PostPage />,
      },
      {
        path: "edit/:id",
        element: <EditPost />,
      },
    ],
  },
]);
