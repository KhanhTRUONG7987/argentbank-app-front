import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../components/LoginPage";
import UserProfilePage from "../components/UserProfilePage";
import HomePage from "../components/HomePage";
import ProtectedRoute from "../components/ProtectedRoute";

export const login = async (username, password) => {
  const response = await fetch('http://localhost:3001/api/v1/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  const data = await response.json();
  return data.token; 
};

export const getUser = async () => {
  const response = await fetch('http://localhost:3001/api/v1/user/profile', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
    },
  });

  const data = await response.json();
  return data; 
};

export const updateUser = async (firstName, lastName) => {
  const response = await fetch('http://localhost:3001/api/v1/user/profile', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
    },
    body: JSON.stringify({ firstName, lastName }),
  });

  const updatedProfileData = await response.json();
  return updatedProfileData; 
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route
          path="/user-profile"
          element={
            <ProtectedRoute
              path="/user-profile"
              element={<UserProfilePage />}
            />
          }
        ></Route>

        {/* Wrap ProtectedRoute components in a Route or a React.Fragment */}
        {/* <ProtectedRoute path="/user-profile" element={<UserProfilePage />} /> */}

        {/* <Route
          path="/protected"
          element={
            <React.Fragment>
              <ProtectedRoute
                path="/user-profile"
                element={<UserProfilePage />}
              />
              <ProtectedRoute
                path="/user-transaction"
                element={<TransactionPage />}
              />
            </React.Fragment>
          }
        /> */}
      </Routes>
    </Router>
  );
};

export default App;
