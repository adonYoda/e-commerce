import React from "react";
import { ecommerceApi } from "../ecommerceApi";

export const productApi = ecommerceApi.injectEndpoints({
  endpoints: (build) => ({
    // addProduct: build.mutation({
    //   query: (product: any) => ({
    //     // TODO: method add product
    //   }),
    // }),
    getProducts: build.query({
      query: (args) => {
        return {
          url: `/products?_page=${args}&_limit=12`,
          method: "GET",
        };
      },
      providesTags: ["Products"],
    }),
  }),
  overrideExisting: true,
});

export const { useGetProductsQuery } = productApi;
