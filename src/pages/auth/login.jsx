import React, { useState } from "react";
import "../../css/login.css";
import { login } from "@/api/auth.api";
const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login();
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <div className="login-form">
      <h1 className="facebook-logo">Inkstagram</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Email or Phone"
            value={user.email}
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <button
            type="submit"
            className={`btn btn-primary ${isLoading ? "loading" : ""}`}
            disabled={isLoading}>
            {isLoading && (
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"></span>
            )}
            {isLoading ? "Loading ..." : "Log In"}
          </button>
        </div>
        <div className="forgot-password">
          <a href="#">Forgot password?</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
