import { IProduct } from "src/types";
import { prefixPathProductCode } from "src/utils/constants/product.constants";
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
			providesTags: ["Products"],
		}),
		getProduct: build.query<
			IProduct,
			{
				productCode: string;
			}
		>({
			query: ({ productCode }) => {
				console.log("API request");
				return {
					url: `/products?${prefixPathProductCode + productCode}`,
					method: "GET",
				};
			},
			transformResponse: (response: IProduct[]) => {
				return response[0];
			},
		}),
	}),
	overrideExisting: true,
});

export const { useGetProductsQuery, useGetProductQuery } = productApi;
