import { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(username, password);
    e.target.reset();
  };
  return (
    <>
      <form action="" className="register" onSubmit={handleRegister}>
        <h1>Register</h1>
        <input
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Register</button>
      </form>
    </>
  );
};

export default Register;
