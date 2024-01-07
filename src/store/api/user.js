import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { CONFIGS } from "../../config";

export const userApi = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({
    baseUrl: `${CONFIGS.SERVER_URL}/users`,
  }),
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => ({ url: "" }),
      providesTags: ["users"],
    }),
    addUser: builder.mutation({
      query: (body) => ({ url: "", method: "POST", body }),
      invalidatesTags: ["users"],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({ url: `/${id}`, method: "delete" }),
      invalidatesTags: ["users"],
    }),
  }),
});

export const { useGetUserQuery, useAddUserMutation, useDeleteUserMutation } =
  userApi;
