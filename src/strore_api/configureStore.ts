import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";
import { productApi } from "./product/productApi";
import productReducer from "./product/productSlice";
import tokenReducer from "./token/authSlice";
import userReducer from "./user/userSlice";

export const store = configureStore({
	reducer: {
		[productApi.reducerPath]: productApi.reducer,
		product: productReducer,
		auth: tokenReducer,
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
