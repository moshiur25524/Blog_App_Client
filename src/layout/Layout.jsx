import { Outlet } from "react-router-dom";
import Header from "../pages/Header/Header";
import "./Layout.css";

const Main = () => {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
};

export default Main;
