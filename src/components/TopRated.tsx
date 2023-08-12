import {useGetTopRatedQuery} from '../features/movie-api-slice'
import OverflowCards from "../utils/OverflowCards"
import SwitchTab from '../utils/SwitchTab'
import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from "../app/store"
import { setTopRatedMediaType } from '../features/mediaSlice'

const Popular = () => {
    const mediaType = useSelector((state:RootState) => state.media.topRated)
    const dispatch = useDispatch()
    const mediaData = useGetTopRatedQuery(mediaType)
    const tab:string[] = ["Movies", "TVshow"]
    const [isActive, setIsActive] = useState<boolean>(false)

    const handleClick = (e:any) => {
        if(e.target.value === 'TVshow'){
            setIsActive(true)
            dispatch(setTopRatedMediaType('tv'))
        } else if(e.target.value === 'Movie'){
            setIsActive(false)
            dispatch(setTopRatedMediaType('movie'))
        }        
    }

    return (
        <div className="pl-2 my-8">
            <div className="flex justify-between items-center py-1">
            <div className="text-lg md:text-xl lg:text-2xl">Top Rated</div>
            <SwitchTab tab={tab} isActive={isActive} handleClick={handleClick}/>
            </div>
            {mediaData.data && <OverflowCards data={mediaData.data} mediaType={mediaType}/>}
        </div>
    )
}

export default Popular