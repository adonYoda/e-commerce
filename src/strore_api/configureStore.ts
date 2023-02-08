import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./product/productSlice";
import tokenReducer from "./token/tokenSlice"



export const store = configureStore({
    reducer: {
        product: productReducer,
        token: tokenReducer,
    }
});

store.subscribe(()=>{
    localStorage.setItem("product", JSON.stringify(store.getState().product));
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
