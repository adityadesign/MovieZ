import { useGetNowPlayingMovieQuery } from "../features/movie-api-slice"
import OverflowCards from "./utils/OverflowCards"

const NowPlaying: React.FC = () => {
    const {data} = useGetNowPlayingMovieQuery()
  
    return (
      <div className="pl-2 mt-6">
        <div>Now Playing</div>
        {data && <OverflowCards data={data}/>}
      </div>
    )
}

export default NowPlaying