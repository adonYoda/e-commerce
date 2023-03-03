import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../types";

interface IProductsState {
	products: IProduct[];
	currentProduct: IProduct | null | undefined;
}

const initialState: IProductsState = {
	products: [],
	currentProduct: null,
};

export const productSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		setProducts: (state, action: PayloadAction<IProduct[]>) => {
			state.products = action.payload;
		},
		getProduct(state, action: PayloadAction<number>) {
			state.currentProduct = state.products ? state.products.find((p) => p.productId === action.payload) : null;
		},
		// getProduct(state, action: PayloadAction<number>) {
		// 	state.productId = action.payload.productId;
		// 	state.productName = action.payload.productName;
		// 	state.productReceiptDate = action.payload.productReceiptDate;
		// 	state.productAttributes = action.payload.productAttributes;
		// 	state.currency = action.payload.currency;
		// 	state.price = action.payload.price;
		// 	state.discount = action.payload.discount;
		// 	state.promoCode = action.payload.promoCode;
		// 	state.rating = action.payload.rating;
		// 	state.aboutProduct = action.payload.aboutProduct;
		// },
	},
});

export const { setProducts, getProduct } = productSlice.actions;
export default productSlice.reducer;
