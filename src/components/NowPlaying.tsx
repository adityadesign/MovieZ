import { useState } from "react"
import { useGetNowPlayingMovieQuery, useFetchTVDetailsQuery } from "../features/movie-api-slice"
import OverflowCards from "../utils/OverflowCards"
import SwitchTab from "../utils/SwitchTab"


const NowPlaying: React.FC = () => {
    let {data} = useGetNowPlayingMovieQuery()
    const tab:string[] = ["Movies", "TVshow"]
    const [isActive, setIsActive] = useState<boolean>(false)
    const handleClick = (e:any) => {
        if(e.target.value === 'TVshow'){
            setIsActive(true)
        } else if(e.target.value === 'Movie'){
            setIsActive(false)
        }        
    }

    return (
      <div className="pl-2 mt-6">
        <div className="flex justify-between items-center py-1">
          <div>Now Playing</div>
          <SwitchTab tab={tab} isActive={isActive} handleClick={handleClick}/>
        </div>
        {data && <OverflowCards data={data}/>}
      </div>
    )
}

export default NowPlaying