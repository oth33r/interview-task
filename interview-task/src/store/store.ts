import { configureStore } from '@reduxjs/toolkit'
import { authApi } from './apis/authApi'
import { articlesApi } from './apis/articlesApi'
import modalsSlice from './slices/modalSlice'

export const store = configureStore({
  reducer: {
    modals: modalsSlice,
    [articlesApi.reducerPath]: articlesApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware).concat(articlesApi.middleware),
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch