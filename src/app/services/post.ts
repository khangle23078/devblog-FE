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
      invalidatesTags: ["Post"]
    }),
    deletePost: build.mutation<void, string>({
      query: (id) => ({
        url: `/posts/${id}`,
        method: 'delete',
      }),
      invalidatesTags: ["Post"]
    })
  }),
});

export const { useGetPostsQuery, useCreatePostMutation, useDeletePostMutation } = postApi;
