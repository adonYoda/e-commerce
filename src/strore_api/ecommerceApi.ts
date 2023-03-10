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
        headers.set("Authorization", `Basic ${token}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({})
})

