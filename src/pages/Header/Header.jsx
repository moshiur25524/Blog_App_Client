import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <Link to={"/"} className="logo">
        MyBlog
      </Link>
      <nav>
        <Link to={"/login"}>Login</Link>
        <a href="">Register</a>
      </nav>
    </header>
  );
};

export default Header;
