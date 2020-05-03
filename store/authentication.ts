import { createSlice } from "@reduxjs/toolkit";

const initialAuthenticationState = {
  isAuthenticated: false
};

const authenticationSlice = createSlice({
  name: "authentication",
  initialState: initialAuthenticationState,
  reducers: {
    signIn: state => {
      state.isAuthenticated = true;
      return state;
    }
  }
});

export const authenticationReducer = authenticationSlice.reducer;
export const authenticationActions = authenticationSlice.actions;
