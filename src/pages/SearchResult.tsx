import { useParams, useNavigate } from "react-router-dom"
import {useFetchSearchedMoviesQuery} from "../features/movie-api-slice"
import React from "react"
import {TailSpin} from 'react-loader-spinner'
import type {Results} from '../features/movie-api-slice'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import dayjs from "dayjs"
import { LazyLoadImage } from "react-lazy-load-image-component"
import 'react-lazy-load-image-component/src/effects/blur.css'

const SearchResult:React.FC = () => {
  const {query} = useParams()
  const navigate = useNavigate()
  const { data, isLoading } = useFetchSearchedMoviesQuery({query: query ?? ''})
//, {refetchOnMountOrArgChange: true}

  const handleClick = (id:number, mediaType:string) => {
    navigate(`/${mediaType}/${id}`) 
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  return (
    <div className="pt-16 px-4">
      {isLoading && 
        <div className="h-screen flex justify-center items-center">
          <TailSpin
            height="80"
            width="80"
            color="#F7BE38"
            ariaLabel="tail-spin-loading"
            radius="1"
            visible={true}
          />
        </div>}
      {data?.results &&
        <>
          {data?.results.length>0 ? 
            <>
              <div className="text-lg font-semibold">{`Search ${data.total_results>1 ? 'results' : 'result'} of '${query}'`}</div>
                <div className="grid grid-cols-2 gap-4 mt-4 mb-8">
                  {data?.results.map((item:Results) => {
                    return (
                    <div key={item.id} 
                      onClick={() => handleClick(item.id, item.media_type)}
                      className="flex text-sm h-72 justify-between flex-col rounded-lg overflow-auto shadow-lg shadow-gray-950">
                      {item.poster_path ? 
                        //<img className="max-h-52 object-cover" src={`https://image.tmdb.org/t/p/w342${item.poster_path}`}/> 
                        <LazyLoadImage style={{objectFit:"cover", height:'100%', width:'100%'}}
                          alt={item.name}
                          effect= "blur"
                          height={'14rem'}
                          src={`https://image.tmdb.org/t/p/w342${item.poster_path}`}
                        />  : 
                        <img className="h-56 object-cover" src='/no-poster.png' />}
                      <div className="overflow-hidden text-ellipsis whitespace-nowrap pt-2 p-1">{item.title ? item.title : item.name}</div>
                      <div className="flex justify-between">
                        <div className="p-1 flex items-center" style={{fontSize: '0.75rem'}}>{dayjs(item.release_date).format("MMM D, YYYY")}</div>
                        <div className="flex items-center p-1"><FontAwesomeIcon icon={faStar} size="xs" style={{color: "#f7be38", fontSize: '0.75rem'}} />{Math.round(item.vote_average * 10)/10}</div>
                      </div>
                    </div>)
                  })}
                </div>
            </> :
            <span>Results not found!</span>}
        </>
      }
    </div>
  )
}

export default SearchResult