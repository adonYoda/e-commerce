import { IProduct } from "src/types";
import { ecommerceApi } from "../ecommerceApi";

export const productApi = ecommerceApi.injectEndpoints({
	endpoints: (build) => ({
		// addProduct: build.mutation({
		//   query: (product: any) => ({
		//     // TODO: method add product
		//   }),
		// }),
		getProducts: build.query<
			IProduct[],
			{
				category: string;
				subcategory?: string;
				page: number;
				countPerPage: number;
				contained?: boolean;
			}
		>({
			query: ({ category, subcategory, page, countPerPage, contained }) => {
				return {
					url: `/products?${
						!contained
							? `productAttributes.category=${category.toLowerCase()}${
									subcategory ? `&productAttributes.subCategory.name=${subcategory}` : ""
							  }`
							: `&_sort=productReceiptDate&_order=asc`
					}&_page=${page}&_limit=${countPerPage}`,
					method: "GET",
				};
			},
			transformResponse: (response: IProduct[]) => {
				return response;
			},
			providesTags: ["Products"],
		}),
	}),
	overrideExisting: true,
});

export const { useGetProductsQuery } = productApi;
