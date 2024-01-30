import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "./NavBar";
import Footer from "./Footer";
import UserProfileHeader from "./UserProfileHeader";
import AccountSection from "./AccountSection";
import { getUser, updateUser } from "../api/api";
import { updateUserProfile } from "../actions/authActions";
import "../css/main.css";
import "../css/UserProfilePage.css";

const UserProfilePage = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // State to hold the form input values
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
  });

  useEffect(() => {
    console.log("UserProfilePage component mounted");
    fetchUser();
  }, []);

  useEffect(() => {
    if (user) {
      console.log("USER CHANGED !", user);

      setFormValues({
        firstName: user.firstName,
        lastName: user.lastName,
      });
    }
  }, [user]);

  const fetchUser = async () => {
    const user = await getUser();
    console.log(user);
    setFormValues({
      firstName: user.firstName,
      lastName: user.lastName,
    });
    dispatch(updateUserProfile(user));
  };

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditName = async () => {
    try {
      const updatedProfileData = await updateUser(
        formValues.firstName,
        formValues.lastName
      );
      // dispatch update user profile action
      dispatch(updateUserProfile(updatedProfileData.body));
    } catch (error) {
      console.error("Error updating user profile:", error);
    }
  };

  const handleCancelEditName = () => {
    // Reset the form values to their original values from the Redux store
    setFormValues({
      firstName: user.firstName,
      lastName: user.lastName,
    });
  };

  console.log("USER ----->", user);

  return (
    <div className="user-profile-page">
      <main className="main bg-dark">
        <UserProfileHeader username={user ? user.firstName : ""} />

        {/* User Profile Form */}
        <form className="user-profile-form">
          <div className="info-left">
            <label htmlFor="firstName"></label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formValues.firstName}
              onChange={handleInputChange}
            />

            <button
              type="button"
              className="edit-button"
              onClick={handleEditName}
            >
              Save
            </button>
          </div>

          <div className="info-right">
            <label htmlFor="lastName"></label>
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
              onClick={handleCancelEditName}
            >
              Cancel
            </button>
          </div>
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
      </main>
      <Footer />
    </div>
  );
};

export default UserProfilePage;
