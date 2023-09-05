import "./Login.css";

const Login = () => {
  return (
    <div>
      <form action="" className="login">
        <h1>Login</h1>
        <input
          type="email"
          name="email"
          placeholder="Your email"
          id=""
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Your password"
          id=""
          required
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
