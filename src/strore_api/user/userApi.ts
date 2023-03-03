import { IRegisterForm } from "src/types";
import { ecommerceApi } from "../ecommerceApi";

const userApi = ecommerceApi.injectEndpoints({
    endpoints: (build) => ({
        loginUser: build.mutation({
          query: (args) => {
            return{
              url: "users",
              //method: "POST",
              args
            }
          }
        }),
        registerUser: build.mutation({
          query: (args) => {
            return{
              url: "users",
              method: "POST",
              body: args
            }
          }
        })
      })
})

export const {useRegisterUserMutation, useLoginUserMutation} = userApi;