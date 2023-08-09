import dayjs from "dayjs"
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import type {Results, Movies} from '../features/movie-api-slice'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

interface OverflowCards {
    data: Movies,
    mediaType: string|undefined
}

const OverflowCards: React.FC<OverflowCards> = ({data, mediaType}) => {
    const navigate = useNavigate()
    const handleClick = (id:number) => {
      navigate(`/${mediaType}/${id}`)
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }
    return (
      <div className="flex overflow-x-auto overflow-hidden no-scrollbar">
        {data?.results.map((item:Results) => {
          return (
          <div key={item.id}
            onClick={()=>handleClick(item.id)}
            className="flex text-sm justify-between flex-col relative flex-shrink-0 basis-32 ml-0 m-2 rounded-lg overflow-auto shadow-lg shadow-gray-950">
            {item.poster_path ?
              <LazyLoadImage 
                alt={item.name}
                effect= "blur"
                src={`https://image.tmdb.org/t/p/w154${item.poster_path}`}
              />  : 
              <img className="max-h-44 object-cover" src='/no-poster.png' />}
            <div className="overflow-hidden text-ellipsis whitespace-nowrap mt-3 p-1">{item.title}{item.name}</div>
            <div className="flex justify-between">
              <div className="p-1 flex items-center" style={{fontSize: '0.75rem'}}>{dayjs(item.release_date).format("MMM D, YYYY")}</div>
              <div className="flex items-center p-1"><FontAwesomeIcon icon={faStar} size="xs" style={{color: "#f7be38", fontSize: '0.75rem'}} />{Math.round(item.vote_average * 10)/10}</div>
            </div>
          </div>)
        })}
      </div>
    )
}

export default OverflowCards