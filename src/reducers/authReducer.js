import * as actionTypes from "../actions/actionTypes";

const initialState = {
  user: null,
  isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
      };
    case actionTypes.LOGOUT_SUCCESS:
      localStorage.removeItem("jwtToken");
      return initialState;
    case actionTypes.UPDATE_USER_PROFILE:
      return {
        ...state,
        user: {
          ...state.user,
          // Update user profile fields based on the payload
          // eg: name, email,...
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

export default authReducer;
