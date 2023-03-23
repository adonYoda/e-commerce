import { createSlice } from "@reduxjs/toolkit";
import React from "react";
import Cookies from "js-cookie";
import { store } from "../configureStore";
interface IState {
	accessToken: string | null;
	refreshToken: string | null;
	authUser: boolean;
	
}

const initialState: IState = {
	accessToken: Cookies.get("accessToken") || null,
	refreshToken: Cookies.get("refreshToken") || null,
	authUser: Cookies.get("accessToken") ? true : false,
	
};

const authSlice = createSlice({
	name: "auth",
	initialState: initialState,
	reducers: {
		authUser(state, action) {
			Cookies.set("accessToken", action.payload.jwtToken);
			Cookies.set("refreshToken", action.payload.jwtRefreshToken);
			state.authUser = true;
		},
		logOut(state) {
			//store.getState().user = null;
			state.authUser = false;
			Cookies.remove("accessToken");
			Cookies.remove("refreshToken");
		},
	},
});

export const { authUser, logOut } = authSlice.actions;
export default authSlice.reducer;
