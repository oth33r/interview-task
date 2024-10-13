import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Article, ArticleInput, Comment, CommentType } from "@/lib/types";
import { apiInstance } from "../api";

export const articlesApi = createApi({
  reducerPath: "articlesApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_URL }),
  tagTypes: ["Articles", "Article", "Comment"],
  endpoints: (builder) => ({
    getArticles: builder.query<Article[], void>({
      queryFn: async () => {
        return await apiInstance.get<Article[]>('/articles/');
      },
      providesTags: ['Articles']
    }),
    addArticle: builder.mutation<void, ArticleInput>({
      queryFn: async (data) => {
        if (data.image.length > 0) {
          const formData = new FormData();
          formData.append("title", data.title);
          formData.append("content", data.content);
          formData.append("image", data.image[0]);

          return await apiInstance.post('/articles/', formData, {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          })
        }
        
        return await apiInstance.post('/articles/', {
          "title": data.title,
          "content": data.content,
          "image": null
        });
      },
      invalidatesTags: ['Articles']
    }),
    getArticleById: builder.query<Article, number>({
      queryFn: async (id) => {
        return await apiInstance.get(`/articles/${id}`)
      },
      providesTags: ['Article']
    }),
    getArticleComments: builder.query<Comment[], number>({
      queryFn: async (id) => {
        return await apiInstance.get(`/articles/${id}/comments`)
      },
      providesTags: ['Comment']
    }),
    addComment: builder.mutation<void, {id: number, data: CommentType}>({
      queryFn: async (comment) => {
        return await apiInstance.post(`/articles/${comment.id}/comments/`, comment.data);
      },
      invalidatesTags: ["Comment"]
    }),
    deleteComment: builder.mutation<void, {articleId: number, commentId: number}>({
      queryFn: async (comment) => {
        return await apiInstance.delete(`/articles/${comment.articleId}/comments/${comment.commentId}`);
      },
      invalidatesTags: ["Comment"]
    }),
    editComment: builder.mutation<void, {articleId: number, commentId: number, data: CommentType}>({
      queryFn: async (comment) => {
        return await apiInstance.put(`/articles/${comment.articleId}/comments/${comment.commentId}/`, comment.data)
      },
      invalidatesTags: ["Comment"]
    }),
    replyOnComment: builder.mutation<void, {articleId: number, data: CommentType}>({
      queryFn: async (comment) => {
        return await apiInstance.post(`/articles/${comment.articleId}/comments/`, comment.data)
      },
      invalidatesTags: ["Comment"]
    }),
    editArticle: builder.mutation<void, {id: number, data: ArticleInput}>({
      queryFn: async (article) => {
        if (article.data.image.length > 0) {
          const formData = new FormData();
          formData.append("title", article.data.title);
          formData.append("content", article.data.content);
          formData.append("image", article.data.image[0] ?? null);
          return await apiInstance.put(`/articles/${article.id}/`, formData, {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          })
        }

        return await apiInstance.put(`/articles/${article.id}/`, {
          "title": article.data.title,
          "content": article.data.content,
          "image": null
        });
      },
      invalidatesTags: ['Article']
    }),
    deleteArticle: builder.mutation<void, number>({
      queryFn: async (id) => {
        return await apiInstance.delete(`/articles/${id}/`);
      },
      invalidatesTags: ['Articles']
    })
  })
})

export const { 
  useGetArticlesQuery, 
  useAddArticleMutation, 
  useGetArticleByIdQuery, 
  useGetArticleCommentsQuery, 
  useAddCommentMutation,
  useDeleteCommentMutation,
  useEditCommentMutation,
  useReplyOnCommentMutation,
  useEditArticleMutation,
  useDeleteArticleMutation
} = articlesApi;