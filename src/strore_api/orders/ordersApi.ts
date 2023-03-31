import { ecommerceApi } from "../ecommerceApi";


export const orderApi = ecommerceApi.injectEndpoints({
    endpoints: (build) => ({
        getOrders: build.query({
            query: () => {
                return{
                    url: 'orders',
                    method: 'GET'
                }
            },
            providesTags: ['Products']
        }),
    }),
    overrideExisting: true,
})


export const {useGetOrdersQuery} = orderApi 