const Register = () => {
  return (
    <>
      <form action="" className="register">
        <h1>Register</h1>
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
        <button>Register</button>
      </form>
    </>
  );
};

export default Register;
