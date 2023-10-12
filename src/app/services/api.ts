import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://new-esport-be.onrender.com/api",
    prepareHeaders: (headers) => {
      const user = JSON.parse(localStorage.getItem("user") as string);
      console.log(user.accessToken);

      if (user) {
        headers.set("authorization", `Bearer ${user.accessToken}`);
      }

      return headers;
    },
  }),
  endpoints: () => ({}),
});
