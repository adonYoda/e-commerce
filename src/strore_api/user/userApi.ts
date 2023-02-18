import { ecommerceApi } from "../ecommerceApi";

const userApi = ecommerceApi.injectEndpoints({
    endpoints: (build) => ({
        userLogin: build.mutation({
            query: (token) => {
                console.log(token);
                return {
                    url: "/signin",
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${token}` //<== Check it out!!!
                    }
                }
                
            }
        })
    })
})