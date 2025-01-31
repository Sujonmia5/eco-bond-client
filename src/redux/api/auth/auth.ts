import { baseAPI } from "../api";

const AuthAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (data) => {
        return {
          url: "/users/create-user",
          method: "POST",
          body: data,
        };
      },
    }),
    loginUser: builder.mutation({
      query: (data) => {
        return {
          url: "/auth/login",
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});

export const { useRegisterUserMutation, useLoginUserMutation } = AuthAPI;
