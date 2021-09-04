import React, { useState, useEffect } from "react";

import { loginUser } from "../utils/API";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loggedIn = () => {
    toast.success("Logged In! Note that you will automatically be logged out in 30 minutes.", {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  };

  const notify = () => {
    toast.error("Login failed! Check your email and password then try again.", {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    loginUser({
      email: email,
      password: password,
    })
      .then(() => {
        loggedIn();
      })
      .catch((err) => {
        console.log(err);
        notify();
      });
  };

  return (
    <div>
      <ToastContainer />
      <h1 className="text-center mt-5">Log In to Your Account</h1>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <h5 className="mb-3">
              Don't have an account yet? <a href="/SignUp">Sign Up Here!</a>
            </h5>
            <form>
              <div className="form-group">
                <label htmlFor="InputEmail">Email address</label>
                <input
                  value={email}
                  name="email"
                  onChange={(event) => setEmail(event.target.value)}
                  type="email"
                  className="form-control"
                  id="InputEmail"
                  aria-describedby="email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="InputPassword">Password</label>
                <input
                  value={password}
                  name="password"
                  onChange={(event) => setPassword(event.target.value)}
                  type="password"
                  className="form-control"
                  id="InputPassword"
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleLogin}
              >
                Log in
              </button>
            </form>{" "}
            <br />
            <a href="/Reset">I forgot my password!</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
