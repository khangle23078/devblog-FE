import { api } from "./api";

export const uploadApi = api.injectEndpoints({
  endpoints: (build) => ({
    deleteFile: build.mutation<void, { public_id: string }>({
      query: (public_id) => ({
        url: "/file/destroy",
        method: "delete",
        body: public_id,
      }),
    }),
  }),
});

export const { useDeleteFileMutation } = uploadApi;
