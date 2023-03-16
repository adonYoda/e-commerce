import { ecommerceApi } from "../ecommerceApi";

const userApi = ecommerceApi.injectEndpoints({
  endpoints: (build) => ({
    loginUser: build.mutation({
      query: (args) => {
        return {
          url: "users",
          //method: "POST",
          args,
        };
      },
    }),
    registerUser: build.mutation({
      query: (args) => {
        return {
          url: "users",
          method: "POST",
          body: args,
        };
      },
    }),
    // refreshAuthUser: build.query({
    //   query: ({userId, email}) => {
    //     return{
    //       url: "refresh",
    //       method: "POST",
    //       body: userId, email
    //     }
    //   }
    // })
    getUserInfo: build.query({
      query: ({ id }) => {
        return {
          url: `users/${id}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useGetUserInfoQuery,
} = userApi;
