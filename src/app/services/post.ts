import {Post} from "../../interfaces/post";
import {API_RESPONSE} from "../../interfaces/response";
import {api} from "./api";

export const postApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPosts: build.query<API_RESPONSE<Post[]>, void>({
      query: () => "/posts",
    }),
  }),
});

export const {useGetPostsQuery} = postApi;
