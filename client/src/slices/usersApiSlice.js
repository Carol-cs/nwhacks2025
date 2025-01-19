import { USERS_URL } from "../utils/constants";
import { apiSlice } from "./apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url: USERS_URL,
      }),
      keepUnusedDataFor: 5,
    }),
    login: builder.mutation({
      query: (userData) => ({
        url: `${USERS_URL}/login`,
        method: "POST",
        body: userData,
      }),
    }),
    register: builder.mutation({
      query: (userData) => ({
        url: USERS_URL,
        method: "POST",
        body: userData,
      }),
    }),
  }),
});

export const { useGetUsersQuery, useLoginMutation, useRegisterMutation } =
  usersApiSlice;
