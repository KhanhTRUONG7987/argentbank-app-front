import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "./NavBar";
import Footer from "./Footer";
import { loginUser } from "../actions/authActions";
import "../css/main.css";
import "../css/LoginPage.css";

const LoginPage = () => {
  const error = useSelector((state) => state.error);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  // state to hold the username and password from the form
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    // update the formData state when input values change
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSignIn = async () => {
    console.log("Sign In button clicked");

    try {
      // make API call to login endpoint using axios
      dispatch(loginUser(formData.username, formData.password));
      console.log("HELLO");
      navigate("/user-profile");
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="login-page">
      <Navbar />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={formData.username}
                onChange={handleInputChange}
                autoComplete="username"
              />

              {error && <span style={{ color: "red" }}>{error}</span>}
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={handleInputChange}
                autoComplete="current-password"
              />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button
              type="button"
              className="sign-in-button"
              onClick={handleSignIn}
            >
              Sign In
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;
