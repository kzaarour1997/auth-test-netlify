import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080" }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query(body) {
        return {
          url: "/register",
          method: "POST",
          body,
        };
      },
    }),
    login: builder.mutation({
      query(body) {
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
