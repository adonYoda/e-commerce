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
  endpoints: () => ({})
})

export const {} = ecommerceApi

// const baseQueryWithReauth = async (args, api, extraOptions) => {
//   let result = await baseQuery(args, api, extraOptions)
// }

