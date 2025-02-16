import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const baseAPI = createApi({
  reducerPath: "baseapi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://ecobond-server.vercel.app/api/v1",
    headers: {
      Accept: "application/json",
    },
    // credentials: "include",
  }),
  endpoints: () => ({}),
});

export const { middleware: apiMiddleware } = baseAPI;
