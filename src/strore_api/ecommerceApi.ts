import React from 'react'
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { fakeBaseUrl } from 'src/utils/constants/temp.constans'
import { RootState } from './configureStore';
import Cookies from "js-cookie";


export const ecommerceApi = createApi({
  tagTypes: ["Products"],
  baseQuery: fetchBaseQuery({
    baseUrl: fakeBaseUrl,
    prepareHeaders: (headers) => {
      const accessToken = Cookies.get("accessToken");
      if(accessToken){
        headers.set("Authorization", `Bearer ${accessToken}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({})
})

export const {} = ecommerceApi

// const baseQueryWithReauth = async (args, api, extraOptions) => {
//   let result = await baseQuery(args, api, extraOptions)
// }

