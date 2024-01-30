import * as actionTypes from "../actions/actionTypes";

const initialState = {
  user: null,
  error: null,
  isAuthenticated: false, 
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        error: null,
        isAuthenticated: true, // login success
      };
    case actionTypes.LOGOUT_SUCCESS:
      localStorage.removeItem("jwtToken");
      return {
        ...initialState, // Reset state logout success
        isAuthenticated: false,
      };
    case actionTypes.LOGIN_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case actionTypes.UPDATE_USER_PROFILE:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
