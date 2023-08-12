import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setTopRatedMediaType, setNowPlayingMediaType } from '../features/mediaSlice'

const Navbar = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleClick = () => {
      navigate('/')
      dispatch(setTopRatedMediaType('movie'))
      dispatch(setNowPlayingMediaType('movie'))
    }
    return (
      <div className="flex h-14 items-center text-[#F7BE38] lg:w-[1010px] lg:m-auto">
          <div className="font-black text-xl ml-5" onClick={handleClick}>MovieZ</div>
      </div>
    )
}

export default Navbar