import { useState } from "react"
import { useFetchUpcomingMovieQuery, useFetchUpcomingTVQuery, Movies } from "../features/movie-api-slice"
import OverflowCards from "../utils/OverflowCards"
import SwitchTab from "../utils/SwitchTab"
import { useDispatch, useSelector } from 'react-redux'
import { setUpcomingMediaType } from "../features/mediaSlice"
import { RootState } from "../app/store"

const Upcoming: React.FC = () => {
    const movieData = useFetchUpcomingMovieQuery()
    const tvData = useFetchUpcomingTVQuery()
    const [getData, setGetData] = useState<Movies>()
    const tab:string[] = ["Movies", "TVshow"]
    const [isActive, setIsActive] = useState<boolean>(false)
    const dispatch = useDispatch()
    const mediaType = useSelector((state:RootState) => state.media.upcoming)

    const handleClick = (e:any) => {
        if(e.target.value === 'TVshow'){
            setIsActive(true)
            dispatch(setUpcomingMediaType('tv'))
            setGetData(tvData.data)
        } else if(e.target.value === 'Movie'){
            setIsActive(false)
            dispatch(setUpcomingMediaType('movie'))
            setGetData(movieData.data)
        }        
    }

    return (
      <div className="pl-2 my-8">
        <div className="flex justify-between items-center py-1">
          <div className="text-lg" style={{textShadow: '1px 0px 10px #d6cece'}}>Upcoming</div>
          <SwitchTab tab={tab} isActive={isActive} handleClick={handleClick}/>
        </div>
        {!getData ? movieData.data && <OverflowCards data={movieData.data} mediaType={mediaType}/> : <OverflowCards data={getData} mediaType={mediaType}/>}
      </div>
    )
}

export default Upcoming