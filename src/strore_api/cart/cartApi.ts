import { ecommerceApi } from "../ecommerceApi";

export const cartApi = ecommerceApi.injectEndpoints({
	endpoints: (build) => ({
		getCart: build.query({
			query: (args) => {
				return {
					url: `main/wishlist/card`,
					method: "GET",
				};
			},
			providesTags: ["Products"],
		}),
	}),
	overrideExisting: true,
});

export const { useGetCartQuery } = cartApi;