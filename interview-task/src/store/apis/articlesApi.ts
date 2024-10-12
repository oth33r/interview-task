import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Article } from "@/lib/types";
import { apiInstance } from "../api";


export const articlesApi = createApi({
  reducerPath: "articlesApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_URL }),
  endpoints: (builder) => ({
    getArticles: builder.query<Article[], void>({
      queryFn: async () => {
        return await apiInstance.get<Article[]>('/articles/');
      }
    })
  })
})

export const { useGetArticlesQuery } = articlesApi;