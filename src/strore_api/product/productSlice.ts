import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { IProduct } from "../../types";
import { RootState } from "../configureStore";

let initialState: IProduct = {
	productId: 0,
	productCode: 0,
	productName: "",
	productReceiptDate: "",
	productAttributes: {
		category: "",
		subCategory: {
			name: "",
			extendableCategories: [],
		},
		brand: "",
		collection: "",
		season: "",
		style: "",
	},
	currency: "",
	price: 0,
	discount: 0,
	promoCode: "",
	rating: {
		totalRatingScore: 0,
		numberOfRated: 0,
	},
	aboutProduct: {
		colorSizeQuantity: [],
		mainImgUrl: "",
		photos: [],
		description: "",
		details: "",
	},
};

export const productSlice = createSlice({
	name: "product",
	initialState,
	reducers: {
		getProduct: (state, action: PayloadAction<IProduct>) => {
			state.productId = action.payload.productId;
			state.productCode = action.payload.productCode;
			state.productName = action.payload.productName;
			state.productReceiptDate = action.payload.productReceiptDate;
			state.productAttributes = action.payload.productAttributes;
			state.currency = action.payload.currency;
			state.price = action.payload.price;
			state.discount = action.payload.discount;
			state.promoCode = action.payload.promoCode;
			state.rating = action.payload.rating;
			state.aboutProduct = action.payload.aboutProduct;
		},
	},
});

export const { getProduct } = productSlice.actions;
export default productSlice.reducer;

export const selectProduct = (state: RootState) => state.product;
