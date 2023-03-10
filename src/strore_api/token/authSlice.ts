import { createSlice } from "@reduxjs/toolkit";
import React from "react";
import Cookies from "js-cookie";
import { store } from "../configureStore";

const authSlice = createSlice({
	name: "auth",
	initialState: {
		accessToken: Cookies.get("accessToken") || null,
		refreshToken: Cookies.get("refreshToken") || null,
		authUser: Cookies.get("accessToken") ? true : false,
	},
	reducers: {
		authUser(state, action) {
			Cookies.set("accessToken", action.payload.jwtToken);
			Cookies.set("refreshToken", action.payload.jwtRefreshToken);
			state.authUser = true;
		},
		logOut(state, action) {
			store.getState().user = null;
			state.authUser = false;
			Cookies.remove("accessToken");
			Cookies.remove("refreshToken");
		},
	},
});

export const { authUser, logOut } = authSlice.actions;
export default authSlice.reducer;
