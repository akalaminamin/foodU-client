import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const userServices = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
    prepareHeaders: (headers, { getState }) => {
      const reducers = getState();
      const token = reducers?.auth?.token;
      headers.set("authorization", token ? `Bearer ${token}` : "");
      return headers;
    },
  }),
  tagTypes: ["user"],
  endpoints: (builder) => ({
    allUsers: builder.query({
      query: () => ({
        url: "auth/allUsers",
        method: "GET",
      }),
      providesTags: ["user"],
    }),
    updateUserRole: builder.mutation({
      query: (body) => ({
        url: `auth/updateRole/${body.id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["user"],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `auth/deleteUser/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["user"],
    }),
    updateProfile: builder.mutation({
      query: (updateData) => ({
        url: "auth/updateProfile",
        method: "PUT",
        body: updateData,
      }),
    }),
    changePassword: builder.mutation({
      query: (updatePassword) => ({
        url: "auth/changePassword",
        method: "PUT",
        body: updatePassword,
      }),
    }),
    addWishlist: builder.mutation({
      query: (product) => ({
        url: `auth/wishlist/${product.productId}`,
        method: "GET",
      }),
      invalidatesTags: ["user"],
    }),
    addToCart: builder.mutation({
      query: (id) => ({
        url: `product/addToCart/${id}`,
        method: "POST",
      }),
      invalidatesTags: ["user"],
    }),
    getSingleUser: builder.query({
      query: () => ({
        url: `auth/singleUser`,
        method: "GET",
      }),
      providesTags: ["user"],
    }),
  }),
});

export const {
  useUpdateProfileMutation,
  useChangePasswordMutation,
  useAllUsersQuery,
  useDeleteUserMutation,
  useAddToCartMutation,
  useUpdateUserRoleMutation,
  useGetSingleUserQuery,
  useAddWishlistMutation,
} = userServices;
export default userServices;
