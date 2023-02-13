import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: JSON.parse(localStorage.getItem("product")) || {
    productId: null,
    productName: "",
    productReceiptDate: "",
    productAttributes: {
      category: "",
      subCategory: "",
      brand: "",
      collection: "",
      season: "",
      style: "",
    },
    currency: "",
    price: null,
    discount: null,
    promoCode: "",
    rating: {
      totalRatingScore: null,
      numberOfRated: null,
    },
    aboutProduct: {
      colorSizeQuantity: [
        {
          color: "",
          size: "",
          quantity: null,
        },
      ],
      mainImgUrl: "",
      photos: [],
      description: "",
      details: "",
    },
  },
  reducers: {
    getProduct(state, action) {
      state.productId = action.payload.productId;
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
