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
					url: `/products?_page=${args.page}&_limit=${args.countPerPage}`,
					method: "GET",
				};
			},
			providesTags: ["Products"],
		}),
	}),
	overrideExisting: true,
});

export const { useGetProductsQuery } = productApi;
