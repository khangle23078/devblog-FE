import { combineReducers } from "@reduxjs/toolkit";
import { api } from "./services/api";
import authSlice from "../features/authSlice";

export const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  auth: authSlice,
})