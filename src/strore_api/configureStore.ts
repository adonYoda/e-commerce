import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./product/productSlice";



export const store = configureStore({
    reducer: {
        product: productReducer,
    }
});

store.subscribe(()=>{
    localStorage.setItem("product", JSON.stringify(store.getState().product));
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
