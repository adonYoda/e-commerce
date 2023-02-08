import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: JSON.parse(localStorage.getItem("product")) || {
    product_id: null,
    date_created: "",
    name: "",
    sex: "",
    category: "",
    brand: "",
    collection: "",
    color: "",
    size: "",
    style: "",
    season: "",
    price: null,
    rating: null,
    description: "",
    details: "",
    url_default_picture: "",
    url_pictures: [],
    discount: null,
  },
  reducers: {
    getProduct(state, action) {
      state.product_id = action.payload.product_id;
      state.date_created = action.payload.date_created;
      state.name = action.payload.name;
      state.sex = action.payload.sex;
      state.category = action.payload.category;
      state.brand = action.payload.brand;
      state.collection = action.payload.collection;
      state.color = action.payload.color;
      state.size = action.payload.size;
      state.style = action.payload.style;
      state.season = action.payload.season;
      state.price = action.payload.price;
      state.rating = action.payload.rating;
      state.description = action.payload.description;
      state.details = action.payload.details;
      state.url_default_picture = action.payload.url_default_picture;
      state.url_pictures = action.payload.url_pictures;
      state.discount = action.payload.discount;
    },
  },
});

export const { getProduct } = productSlice.actions;
export default productSlice.reducer;
