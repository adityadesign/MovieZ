import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASE_URL = "https://api.themoviedb.org/3/"
const MOVIE_API_KEY = import.meta.env.VITE_MOIVE_API

export interface Results {
    poster_path: string,
    id: number,
    title: string,
    name: string,
    backdrop_path: string,
    release_date: string,
    vote_average: number
}

export interface Movies {
    results: Results[],
    total_results: number,
    total_pages: number,
    page: number
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
    title: string,
    status: string,
}

interface Credits{
    cast: [{
        name: string,
        profile_path: string,
        character: string,
        id: number
    }],
    crew: [{
        name: string,
        job: string,
        id: number
    }]
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
            getTopRated: builder.query<Movies, string>({
                query: (mediaType) => `${mediaType}/top_rated`
            }),
            getNowPlayingMovie: builder.query<Movies, void>({
                query: () => 'movie/now_playing'
            }),
            fetchDetails: builder.query<Moviedetails, {id:string|undefined, mediaType:string|undefined}>({
                query: ({id, mediaType}) => `${mediaType}/${id}`
            }),
            fetchTVAiringToday: builder.query<Movies, void>({
                query: () => `tv/airing_today`
            }),
            fetchMovieCredits: builder.query<Credits, string|void>({
                query: (id) => `movie/${id}/credits`
            }),
            fetchSimilarMovies: builder.query<Movies, string|void>({
                query: (id) => `movie/${id}/similar`
            }),
            fetchSearchedMovies: builder.query<Movies, {query:string}>({
                query: ({query}) => `search/multi?query=${query}`,
            }),
        }
    }
})

export const { 
    useGetTopRatedQuery,
    useGetNowPlayingMovieQuery, 
    useFetchTVAiringTodayQuery,
    useFetchDetailsQuery,
    useFetchMovieCreditsQuery, 
    useFetchSimilarMoviesQuery,
    useFetchSearchedMoviesQuery } = apiSlice