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
    vote_average: number,
    media_type: string
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
    name: string,
    created_by: [{
        id: number,
        name: string,
    }],
    episode_run_time: number[],
    first_air_date: string
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

interface Videos{
    id: number,
    results: [{
        name: string,
        key: string,
        id: string,
        site: string
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
            fetchTVAiringToday: builder.query<Movies, void>({
                query: () => `tv/airing_today`
            }),
            fetchUpcomingMovie: builder.query<Movies, void>({
                query: () => `movie/upcoming`
            }),
            fetchUpcomingTV: builder.query<Movies, void>({
                query: () => `tv/on_the_air`
            }),
            fetchDetails: builder.query<Moviedetails, {id:string|void, mediaType:string|void}>({
                query: ({id, mediaType}) => `${mediaType}/${id}`
            }),
            fetchCredits: builder.query<Credits, {id:string|void, mediaType:string|void}>({
                query: ({id, mediaType}) => `${mediaType}/${id}/credits`
            }),
            fetchSimilar: builder.query<Movies, {id:string|void, mediaType:string|void}>({
                query: ({id, mediaType}) => `${mediaType}/${id}/similar`
            }),
            fetchSearchedMovies: builder.query<Movies, {query:string}>({
                query: ({query}) => `search/multi?query=${query}`,
            }),
            fetchVideos: builder.query<Videos, {id:string|void, mediaType:string|void}>({
                query: ({id, mediaType}) => `${mediaType}/${id}/videos`,
            }),
        }
    }
})

export const { 
    useGetTopRatedQuery,
    useGetNowPlayingMovieQuery, 
    useFetchTVAiringTodayQuery,
    useFetchUpcomingMovieQuery,
    useFetchUpcomingTVQuery,
    useFetchDetailsQuery,
    useFetchCreditsQuery, 
    useFetchSimilarQuery,
    useFetchSearchedMoviesQuery,
    useFetchVideosQuery } = apiSlice