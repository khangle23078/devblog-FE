import {User} from "../../interfaces/user";
import {api} from "./api";

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<any, User>({
      query: (user: User) => ({
        url: "/login",
        method: "post",
        body: user,
      }),
    }),
  }),
});

export const {useLoginMutation} = authApi;
