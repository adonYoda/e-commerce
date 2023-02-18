import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { productApi } from "./product/productApi";
import productReducer from "./product/productSlice";
import tokenReducer from "./token/authSlice"



export const store = configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer,
        product: productReducer,
        token: tokenReducer,
    },
    middleware: (getDefaultMiddleware: any) => 
        getDefaultMiddleware().concat(productApi.middleware)
    
});

store.subscribe(()=>{
    localStorage.setItem("product", JSON.stringify(store.getState().product));
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
