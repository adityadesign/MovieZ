import { useState } from "react"
import { useGetNowPlayingMovieQuery, useFetchTVDetailsQuery, Movies } from "../features/movie-api-slice"
import OverflowCards from "../utils/OverflowCards"
import SwitchTab from "../utils/SwitchTab"


const NowPlaying: React.FC = () => {
    const movieData = useGetNowPlayingMovieQuery()
    const tvData = useFetchTVDetailsQuery()
    const [getData, setGetData] = useState<Movies>()
    const tab:string[] = ["Movies", "TVshow"]
    const [isActive, setIsActive] = useState<boolean>(false)
    const handleClick = (e:any) => {
        if(e.target.value === 'TVshow'){
            setIsActive(true)
            setGetData(tvData.data)
        } else if(e.target.value === 'Movie'){
            setIsActive(false)
            setGetData(movieData.data)
        }        
    }

    return (
      <div className="pl-2 mt-6">
        <div className="flex justify-between items-center py-1">
          <div>Now Playing</div>
          <SwitchTab tab={tab} isActive={isActive} handleClick={handleClick}/>
        </div>
        {!getData ? movieData.data && <OverflowCards data={movieData.data}/> : <OverflowCards data={getData}/>}
      </div>
    )
}

export default NowPlaying