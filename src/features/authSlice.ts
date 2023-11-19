import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  _id: string | null,
  email: string | null;
  token: string | null;
  isAuthentication: boolean;
}

const initialState = {
  _id: null,
  email: null,
  token: null,
  role: null,
  isAuthentication: false,
} as AuthState;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, { payload }) => {
      const data = payload.data.data;
      state.email = data.email
      state.token = data.accessToken
      state.isAuthentication = true
      localStorage.setItem("user", JSON.stringify(data));
    },
  },
});

export const { setCredentials } = authSlice.actions;

export default authSlice.reducer;
