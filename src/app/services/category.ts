import {Category} from "../../interfaces/category";
import {API_RESPONSE} from "../../interfaces/response";
import {api} from "./api";

export const categoryApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCategories: build.query<API_RESPONSE<Category[]>, void>({
      query: () => "/categories",
    }),
  }),
});

export const {useGetCategoriesQuery} = categoryApi;
