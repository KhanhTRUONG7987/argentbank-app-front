import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import UserProfilePage from "./components/UserProfilePage";
import HomePage from "./components/HomePage";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/NavBar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route
          path="/profile"
          element={
            <ProtectedRoute path="/profile" element={<UserProfilePage />} />
          }
        ></Route>
      </Routes>
    </Router>
  );
};

export default App;
