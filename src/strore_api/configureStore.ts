import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { productApi } from "./product/productApi";
import productReducer from "./product/productSlice"
import authReducer from "./token/authSlice"
import userReducer from "./user/userSlice"


export const store = configureStore({
	reducer: {
		[productApi.reducerPath]: productApi.reducer,
		product: productReducer,
		auth: authReducer,
		user: userReducer,
		
	},
	middleware: (getDefaultMiddleware: any) => getDefaultMiddleware().concat(productApi.middleware),
});

store.subscribe(() => {
	localStorage.setItem("product", JSON.stringify(store.getState().product));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

