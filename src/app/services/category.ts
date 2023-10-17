import {Category} from "../../interfaces/category";
import {API_RESPONSE} from "../../interfaces/response";
import {api} from "./api";

export const categoryApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCategories: build.query<API_RESPONSE<Category[]>, void>({
      query: () => "/categories",
    }),
    createCategory: build.mutation<void, Omit<Category, "id">>({
      query: (category: Omit<Category, "id">) => ({
        url: "/category",
        method: "post",
        body: category,
      }),
      invalidatesTags: ["Category"],
    }),
    deleteCategory: build.mutation<void, string>({
      query: (id: string) => ({
        url: `/category/${id}`,
        method: "delete",
      }),
      invalidatesTags: ["Category"],
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useCreateCategoryMutation,
  useDeleteCategoryMutation,
} = categoryApi;
