import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { productApi } from "./product/productApi";
import productReducer from "./product/productSlice";
import authReducer from "./token/authSlice";

import userReducer from "./user/userSlice";

import tokenReducer from "./token/tokenSlice";
import { TypedUseSelectorHook } from "react-redux";
import { useSelector } from "react-redux";

export const store = configureStore({
	reducer: {
		[productApi.reducerPath]: productApi.reducer,
		product: productReducer,
		auth: authReducer,
		user: userReducer,
		token: tokenReducer,
	},
	middleware: (getDefaultMiddleware: any) => getDefaultMiddleware().concat(productApi.middleware),
});

store.subscribe(() => {
	localStorage.setItem("product", JSON.stringify(store.getState().product));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
