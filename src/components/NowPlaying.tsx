import { useGetNowPlayingMovieQuery } from "../features/movie-api-slice"

const NowPlaying = () => {
    const {data=[]} = useGetNowPlayingMovieQuery()

  return (
    <div>NowPlaying</div>
  )
}

export default NowPlaying