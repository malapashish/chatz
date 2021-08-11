import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signin, signInWithGoogle } from "../helpers/auth";

const Login = () => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signin(email, password);
    } catch (error) {
      setError(error.message);
    }
  };

  const googleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="container">
      <form
        className="mt-5 py-5 px-5"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <h1>
          Login to
          <Link className="title ml-2" to="/">
            Chatz
          </Link>
        </h1>
        <p className="lead">Fill the below from to login into your account</p>
        <div className="form-group">
          <input
            className="form-control"
            placeholder="Please enter your email"
            name="email"
            type="email"
            onChange={handleEmailChange}
            value={email}
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            placeholder="Please enter your password"
            name="password"
            type="password"
            onChange={handlePasswordChange}
            value={password}
          />
        </div>
        <div className="form-group">
          {error ? <p className="text-danger">{error}</p> : null}
          <button className="btn btn-primary px-5" type="submit">
            Login
          </button>
        </div>
        <p>You can also log in with any of these services</p>
        <button
          className="btn btn-danger mr-2"
          type="button"
          onClick={googleSignIn}
        >
          Sign in with Google
        </button>
        <hr />
        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </div>
  );
};
export default Login;
