import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Navbar from "./NavBar";
import Footer from "./Footer";
import UserProfileHeader from "./UserProfileHeader";
import AccountSection from "./AccountSection";
import { updateUserProfile, logoutSuccess } from "../actions/authActions";
import "../css/main.css";
import "../css/UserProfilePage.css";

const UserProfilePage = () => {
  useEffect(() => {
    console.log('UserProfilePage component mounted');
  }, []);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  // State to hold the form input values
  const [formValues, setFormValues] = useState({
    firstName: user ? user.firstName : "",
    lastName: user ? user.lastName : "",
  });

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditName = async () => {
    const updateProfileEndpoint = "http://localhost:3001/api/v1/user/profile";

    try {
      const response = await axios.put(updateProfileEndpoint, {
        firstName: formValues.firstName,
        lastName: formValues.lastName,
      });

      const updatedProfileData = response.data;

      // dispatch update user profile action
      dispatch(updateUserProfile(updatedProfileData));
    } catch (error) {
      console.error("Error updating user profile:", error);
    }
  };

  const handleLogout = async () => {
    try {
      // dispatch logout success action
      dispatch(logoutSuccess());
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <div className="user-profile-page">
      <Navbar />
      <main className="main bg-dark">
        <UserProfileHeader username={user ? user.username : ""} />

        {/* User Profile Form */}
        <form className="user-profile-form">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formValues.firstName}
            onChange={handleInputChange}
          />

          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formValues.lastName}
            onChange={handleInputChange}
          />

          <button
            type="button"
            className="edit-button"
            onClick={handleEditName}
          >
            Edit Name
          </button>
        </form>
        <h2 className="sr-only">Accounts</h2>
        <AccountSection
          accountTitle="Argent Bank Checking (x8349)"
          accountAmount="$2,082.79"
          amountDescription="Available Balance"
          buttonLabel="View transactions"
        />
        <AccountSection
          accountTitle="Argent Bank Savings (x6712)"
          accountAmount="$10,928.42"
          amountDescription="Available Balance"
          buttonLabel="View transactions"
        />
        <AccountSection
          accountTitle="Argent Bank Credit Card (x8349)"
          accountAmount="$184.30"
          amountDescription="Current Balance"
          buttonLabel="View transactions"
        />
        <button className="edit-button" onClick={handleEditName}>
          Edit Name
        </button>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </main>
      <Footer />
    </div>
  );
};

export default UserProfilePage;
