import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import UserProfilePage from "./components/UserProfilePage";
import TransactionPage from "./components/TransactionPage";
import HomePage from "./components/HomePage";
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* Wrap ProtectedRoute components in a Route or a React.Fragment */}
        <Route
          path="/protected"
          element={
            <React.Fragment>
              <ProtectedRoute path="/user-profile" element={<UserProfilePage />} />
              <ProtectedRoute path="/user-transaction" element={<TransactionPage />} />
            </React.Fragment>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
