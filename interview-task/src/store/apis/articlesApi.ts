import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Article, ArticleInput } from "@/lib/types";
import { apiInstance } from "../api";


export const articlesApi = createApi({
  reducerPath: "articlesApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_URL }),
  tagTypes: ["Articles"],
  endpoints: (builder) => ({
    getArticles: builder.query<Article[], void>({
      queryFn: async () => {
        return await apiInstance.get<Article[]>('/articles/');
      },
      providesTags: ['Articles']
    }),
    addArticle: builder.mutation<void, ArticleInput>({
      queryFn: async (data) => {
        return await apiInstance.post('/articles/', {
          title: data.title,
          content: data.content,
          image: null
        })
      },
      invalidatesTags: ['Articles']
    })
  })
})

export const { useGetArticlesQuery, useAddArticleMutation } = articlesApi;