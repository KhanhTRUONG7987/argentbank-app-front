import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import UserProfilePage from "./components/UserProfilePage";
import TransactionPage from "./components/TransactionPage";
import "../src/css/main.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user-profile" element={<UserProfilePage />} />
        <Route path="/user-transaction" element={<TransactionPage />} />
      </Routes>
    </Router>
  );
};

export default App;
