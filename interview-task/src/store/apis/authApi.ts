import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ChangePasswordType, LoginType, RegisterType } from "@/lib/types";
import { apiInstance } from "../api";


export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_URL }),
  endpoints: (builder) => ({
    registerUser: builder.mutation<void, RegisterType>({
      queryFn: async (data) => {
        return await apiInstance.post("/registration/", {
          "email": data.email,
          "first_name": data.firstName,
          "last_name": data.lastName,
          "username": data.username,
          "password": data.password
        });
      }
    }),
    loginUser: builder.mutation<void, LoginType>({
      queryFn: async (data) => {
        const response = await apiInstance.post(`/token/`, {
            "username": data.username,
            "password": data.password,
          });
        localStorage.setItem("user", JSON.stringify(response.data));
        return response;
      }
    }),
    changePassword: builder.mutation<void, ChangePasswordType>({
      queryFn: async (data) => {
        return await apiInstance.put("/change-password/", {
          old_password: data.oldPassword,
          password: data.password,
          confirmed_password: data.confirmedPassword,
        })
      }
    })
  })
})

export const { useRegisterUserMutation, useLoginUserMutation, useChangePasswordMutation } = authApi;