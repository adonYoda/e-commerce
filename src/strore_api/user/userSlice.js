import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: JSON.parse(localStorage.getItem("user")) || {
    email: "",
    userId: "",
    firstName: "",
    lastName: "",
    registrationDate: "",
    phone: "",
    address: {
      country: "",
      city: "",
      zipCode: "",
      street: "",
      house: "",
      fullAddress: "",
    },
    cards: [],
    roles: [],
  },
  reducers: {
    putUser(state, action) {
      state.email = action.payload.email;
      state.userId = action.payload.userId;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.registrationDate = action.payload.registrationDate;
      state.phone = action.payload.phone;
      state.address = action.payload.address;
      state.cards = action.payload.cards;
      state.roles = action.payload.roles;
      state.authUser = true;
    },
  },
});

export const { putUser } = userSlice.actions;
export default userSlice.reducer;
