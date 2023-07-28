import { createSlice } from "@reduxjs/toolkit";

const initialValues = {
  Loggedin: false,
  loggedOut: false,
  UserId: "",
  IdToken: "",
};

const AuthSlice = createSlice({
  name: "Authnetication",
  initialState: initialValues,
  reducers: {
    IsLoggedIn(state) {
      state.Loggedin = true;
    },
    isLoggedOut(state) {
      state.Loggedin = false;
      state.loggedOut = true;
    },
    AddUserId(state, action) {
      state.UserId = action.payload;
    },
    UserIdToken(state, action) {
      state.IdToken = action.payload;
    },
  },
});
export default AuthSlice.reducer;
export const AuthActions = AuthSlice.actions;
