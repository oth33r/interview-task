import { api } from "@/lib/utils";
import React, { useLayoutEffect, useState } from "react";

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const tokens = localStorage.getItem("user");
  const [token, setToken] = useState(
    tokens ? JSON.parse(tokens)["access"] : null
  );

  useLayoutEffect(() => {
    const requestInterceptor = api.interceptors.request.use((config) => {
      config.headers.Authorization = token
        ? `Bearer ${token}`
        : config.headers.Authorization;
      return config;
    });

    return () => api.interceptors.request.eject(requestInterceptor);
  }, [token]);

  useLayoutEffect(() => {
    const responseInterceptor = api.interceptors.response.use(
      (response) => response,
      async (err) => {
        const request = err.config;

        if (err.response.status == 401) {
          try {
            const tokens = localStorage.getItem("user");

            const response = (
              await api.post("/token/refresh/", {
                refresh: JSON.parse(tokens!)["refresh"],
              })
            ).data;

            setToken(response.access);
            const data = {
              refresh: JSON.parse(tokens!)["refresh"],
              access: response.access,
            };
            localStorage.setItem("user", JSON.stringify(data));

            request.headers.Authorization = `Bearer ${response.access}`;

            return api(request);
          } catch {
            setToken(null);
          }
        }

        return Promise.reject(err);
      }
    );

    return () => api.interceptors.response.eject(responseInterceptor);
  }, []);

  return children;
};

export default AuthProvider;
