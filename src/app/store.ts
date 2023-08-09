import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from '../features/movie-api-slice'
import {mediaSlice} from '../features/mediaSlice'

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    media: mediaSlice.reducer
  },
  middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(apiSlice.middleware)
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch