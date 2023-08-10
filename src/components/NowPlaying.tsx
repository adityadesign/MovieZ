import { useState } from "react"
import { useGetNowPlayingMovieQuery, useFetchTVAiringTodayQuery, Movies } from "../features/movie-api-slice"
import OverflowCards from "../utils/OverflowCards"
import SwitchTab from "../utils/SwitchTab"
import { useDispatch, useSelector } from 'react-redux'
import { setNowPlayingMediaType } from "../features/mediaSlice"
import { RootState } from "../app/store"

const NowPlaying: React.FC = () => {
    const movieData = useGetNowPlayingMovieQuery()
    const tvData = useFetchTVAiringTodayQuery()
    const [getData, setGetData] = useState<Movies>()
    const tab:string[] = ["Movies", "TVshow"]
    const [isActive, setIsActive] = useState<boolean>(false)
    const dispatch = useDispatch()
    const mediaType = useSelector((state:RootState) => state.media.nowPlaying)

    const handleClick = (e:any) => {
        if(e.target.value === 'TVshow'){
            setIsActive(true)
            dispatch(setNowPlayingMediaType('tv'))
            setGetData(tvData.data)
        } else if(e.target.value === 'Movie'){
            setIsActive(false)
            dispatch(setNowPlayingMediaType('movie'))
            setGetData(movieData.data)
        }        
    }

    return (
      <div className="pl-2 mt-6 mb-8">
        <div className="flex justify-between items-center py-1">
          <div className="text-lg">Now Playing</div>
          <SwitchTab tab={tab} isActive={isActive} handleClick={handleClick}/>
        </div>
        {!getData ? movieData.data && <OverflowCards data={movieData.data} mediaType={mediaType}/> : <OverflowCards data={getData} mediaType={mediaType}/>}
      </div>
    )
}

export default NowPlaying