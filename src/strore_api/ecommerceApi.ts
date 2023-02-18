import React from 'react'
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { fakeBaseUrl } from 'src/utils/constants/temp.constans'
import { RootState } from './configureStore';

export const ecommerceApi = createApi({
  tagTypes: ["Products"],
  baseQuery: fetchBaseQuery({
    baseUrl: fakeBaseUrl,
    prepareHeaders: (headers, {getState}) => {
      const token = (getState() as RootState).token;
      if(token){
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
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
          url: "signup",
          method: "POST",
          args
        }
      }
    })
  })
})

// const baseQueryWithReauth = async (args, api, extraOptions) => {
//   let result = await baseQuery(args, api, extraOptions)
// }

