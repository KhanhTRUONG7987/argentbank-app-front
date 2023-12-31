import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import Navbar from './NavBar';
import Footer from './Footer';
import { loginSuccess } from '../actions/authActions';
import '../css/main.css';
import '../css/LoginPage.css';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // state to hold the username and password from the form
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    // update the formData state when input values change
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSignIn = async () => {
    console.log('Sign In button clicked');
    
    try {
      // make API call to login endpoint using axios
      const response = await axios.post('http://localhost:3001/api/v1/user/login', {
        email: formData.username,
        password: formData.password,
      });

      // check if login was successful
      if (response.status === 200) {
        const {token, userData} = response.data;

        // Store token in localStorage or Redux store
        localStorage.setItem('jwtToken', token);

        // dispatch login success action
        dispatch(loginSuccess(userData));

        console.log('Before navigate');
        // navigate to user profile page
        navigate('/user-profile');
        console.log('After navigate');
      } else {
        // handle login failure
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
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
            <button type = "button" className= "sign-in-button" onClick={handleSignIn}>
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
