import {createSlice} from "@reduxjs/toolkit";
import {authApi} from "../app/services/auth";

interface AuthState {
  user: string | null;
  token: string | null;
  isAuthentication: boolean;
}

const initialState = {
  user: null,
  token: null,
  role: null,
  isAuthentication: false,
} as AuthState;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, {payload}) => {
        state.user = payload.data.user;
        state.token = payload.data.token;
        JSON.stringify(
          localStorage.setItem("user", JSON.stringify(payload.data))
        );
      }
    );
  },
});

export default authSlice.reducer;
