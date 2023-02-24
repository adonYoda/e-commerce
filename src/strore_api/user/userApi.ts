import { ecommerceApi } from "../ecommerceApi";

const userApi = ecommerceApi.injectEndpoints({
    endpoints: (builder) => ({
        loginUser: builder.mutation({
          query: (args) => {
            return{
              url: "signin",
              method: "POST",
              args
            }
          }
        }),
        registerUser: builder.mutation({
          query: (args) => {
            return{
              url: "users",
              method: "POST",
              args
            }
          }
        })
      })
})

export const {useRegisterUserMutation, useLoginUserMutation} = userApi;