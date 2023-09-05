import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <Link to={"/"} className="logo">
        MyBlog
      </Link>
      <nav>
        <Link to={"/create"}>Create New User</Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"/register"}>Register</Link>
      </nav>
    </header>
  );
};

export default Header;
