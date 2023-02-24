import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: JSON.parse(localStorage.getItem("user")) || {
    email: "",
    userId: "",
    firstName: "",
    lastName: "",
    jwtToken: "",
    jwtRefreshToken: "",
    registrationDate: "",
    roles: [],
  },
  reducers: {
    putUser(state, action) {
      state.email = action.payload.email;
      state.userId = action.payload.userId;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.registrationDate = action.payload.registrationDate;
      state.roles = action.payload.roles;
    },
  },
});

export const { putUser } = userSlice.actions;
export default userSlice.reducer;
