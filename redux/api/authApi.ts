import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://intense-headland-29428-c4d6588f6b60.herokuapp.com",
  }),
  endpoints: (builder: any) => ({
    register: builder.mutation({
      query(body: any) {
        return {
          url: "/register",
          method: "POST",
          body,
        };
      },
    }),
    login: builder.mutation({
      query(body: any) {
        return {
          url: "/login",
          method: "POST",
          body,
        };
      },
    }),
    getUser: builder.query({
      query: (token: string) => ({
        url: "/",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useGetUserQuery } =
  authApi;
