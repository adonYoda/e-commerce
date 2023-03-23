import { createSlice } from "@reduxjs/toolkit";
import { IResponseUser } from "src/types";

interface IState {
  userId: string;
  email: string;
  firstName: string;
  lastName: string;
  registrationDate: string;
  jwtToken: string;
  jwtRefreshToken: string;
  phone: string;
  address: {
    country: string;
    city: string;
    zipCode: string;
    street: string;
    house: string;
    fullAddress: string;
  };
  cards: string[];
  roles: string[];
}

const storedUser = localStorage.getItem("user");

const initialState: IState | null = storedUser ? JSON.parse(storedUser) : null;

const userSlice = createSlice({
  name: "user",
  initialState: initialState ?? {
    userId: "",
    email: "",
    firstName: "",
    lastName: "",
    registrationDate: "",
    phone: "",
    address: {
      country: "",
      city: "",
      zipCode: 0,
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
    },
    deleteUser(state) {
      state.email = "";
      state.userId = "";
      state.firstName = "";
      state.lastName = "";
      state.registrationDate = "";
      state.phone = "";
      state.address = {
        country: "",
        city: "",
        zipCode: "",
        street: "",
        house: "",
        fullAddress: "",
      };
      state.cards = [];
      state.roles = [];
    },
  },
});

export const { putUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
