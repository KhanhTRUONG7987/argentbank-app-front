import * as actionTypes from "./actionTypes";
import { login, getUser, updateUser } from "../api/App";

export const loginSuccess = () => ({
  type: actionTypes.LOGIN_SUCCESS,
});

export const logoutSuccess = () => ({
  type: actionTypes.LOGOUT_SUCCESS,
});

export const updateUserProfile = (updatedProfileData) => ({
  type: actionTypes.UPDATE_USER_PROFILE,
  payload: updatedProfileData,
});

export const loginUser = (username, password) => async (dispatch) => {
  try {
    const token = await login(username, password);

    if (token && token !== "") {
      localStorage.setItem("jwtToken", token);
      dispatch(loginSuccess());
      dispatch(fetchUserProfile()); // Fetch user profile after successful login
    } else {
      console.log("Password or username mismatch");
    }
  } catch (error) {
    console.error("Error during login:", error);
  }
};

export const fetchUserProfile = () => async (dispatch) => {
  try {
    const user = await getUser();
    dispatch(updateUserProfile(user));
  } catch (error) {
    console.error("Error fetching user profile:", error);
  }
};

export const editUserProfile = (firstName, lastName) => async (dispatch) => {
  try {
    const updatedProfileData = await updateUser(firstName, lastName);
    dispatch(updateUserProfile(updatedProfileData));
  } catch (error) {
    console.error("Error updating user profile:", error);
  }
};

export const logoutUser = () => (dispatch) => {
  try {
    dispatch(logoutSuccess());
    localStorage.removeItem("jwtToken");
  } catch (error) {
    console.error("Error during logout:", error);
  }
};
