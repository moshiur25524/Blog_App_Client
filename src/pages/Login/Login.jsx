import { useState } from "react";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(username, password);
    e.target.reset();
  };
  return (
    <div>
      <form action="" className="login" onSubmit={handleLogin}>
        <h1>Login</h1>
        <input
          type="text"
          placeholder="userName"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Your password"
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
