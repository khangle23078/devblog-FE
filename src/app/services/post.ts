import { Post } from "../../interfaces/post";
import { API_RESPONSE } from "../../interfaces/response";
import { api } from "./api";

export const postApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPosts: build.query<API_RESPONSE<Post[]>, void>({
      query: () => "/posts",
      providesTags: ["Post"],
    }),
    createPost: build.mutation<void, Partial<Post>>({
      query: (data) => ({
        url: `/posts`,
        method: "post",
        body: data,
      }),
    }),
  }),
});

export const { useGetPostsQuery, useCreatePostMutation } = postApi;
