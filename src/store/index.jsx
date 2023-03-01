import { combineReducers, configureStore } from '@reduxjs/toolkit';
import reducer from './auth';

const store = configureStore({
  reducer: reducer,
});

export default store;
