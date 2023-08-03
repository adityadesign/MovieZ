import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASE_URL = "https://api.themoviedb.org/3/"
const MOVIE_API_KEY = import.meta.env.VITE_MOIVE_API

interface PopularResult {
    poster_path: string,
    id: number,
    title: string,
    adult: boolean,
    backdrop_path: string,
    release_date: string
}

interface PopularMovie {
    results: PopularResult[]
}

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        prepareHeaders: (headers) => {
            headers.set('authorization', `Bearer ${MOVIE_API_KEY}`)
            return headers
        },
    }),
    endpoints: (builder) => {
        return {
            getPopularMovie: builder.query<PopularMovie, void>({
                query: () => 'movie/top_rated'
            }),
            getNowPlayingMovie: builder.query<PopularMovie, void>({
                query: () => 'movie/now_playing'
            })
        }
    }
})

export const { useGetPopularMovieQuery, useGetNowPlayingMovieQuery } = apiSlice