import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASE_URL = "https://api.themoviedb.org/3/"
const MOVIE_API_KEY = import.meta.env.VITE_MOIVE_API

interface Results {
    poster_path: string,
    id: number,
    title: string,
    backdrop_path: string,
    release_date: string,
    vote_average: number
}

interface Movies {
    results: Results[]
}

interface Moviedetails {
    genres: [{
        id: number,
        name: string
    }],
    id: number,
    original_language: string,
    overview: string,
    poster_path: string,
    tagline: string,
    vote_average: number,
    runtime: number,
    release_date: string,
    title: string
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
            getPopularMovie: builder.query<Movies, void>({
                query: () => 'movie/top_rated'
            }),
            getNowPlayingMovie: builder.query<Movies, void>({
                query: () => 'movie/now_playing'
            }),
            fetchMovieDetails: builder.query<Moviedetails, string|void>({
                query: (id) => `movie/${id}`
            })
        }
    }
})

export const { useGetPopularMovieQuery, useGetNowPlayingMovieQuery, useFetchMovieDetailsQuery } = apiSlice