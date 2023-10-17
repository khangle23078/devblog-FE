import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://new-esport-be.onrender.com/api",
    prepareHeaders: (headers) => {
      const token = JSON.parse(
        localStorage.getItem("user") as string
      ).accessToken;

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Category"],
  endpoints: () => ({}),
});
