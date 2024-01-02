import * as actionTypes from './actionTypes';

export const loginSuccess = (userData) => ({
  type: actionTypes.LOGIN_SUCCESS,
  payload: userData,
});

export const logoutSuccess = () => ({
  type: actionTypes.LOGOUT_SUCCESS,
});

export const updateUserProfile = (updatedProfileData) => ({
  type: actionTypes.UPDATE_USER_PROFILE,
  payload: updatedProfileData,
});