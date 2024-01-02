import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../reducers/authReducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  // add middleware, devTools,...
});

export default store;
