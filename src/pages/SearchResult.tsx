import { useParams, useNavigate } from "react-router-dom"
import {useFetchSearchedMoviesQuery} from "../features/movie-api-slice"
import React, { useState } from "react"
import {TailSpin} from 'react-loader-spinner'
import type {Results} from '../features/movie-api-slice'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import dayjs from "dayjs"

const SearchResult:React.FC = () => {
  const {query} = useParams()
  const navigate = useNavigate()
  const [pageNumber, setPageNumber] = useState<number>(1)
  const { data, isLoading } = useFetchSearchedMoviesQuery({query: query ?? '', pageNumber})

  return (
    <div className="pt-16 px-2">
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
        <div>
          {data?.results.length>0 ? 
            <div>
              <div className="text-lg font-semibold">{`Search ${data.total_results>1 ? 'results' : 'result'} of '${query}'`}</div>
              <div className="flex flex-wrap">
                {data?.results.map((item:Results) => {
                  return (
                  <div key={item.id} 
                    onClick={()=>[navigate(`/movie/${item.id}`), window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })]}
                    className="flex text-sm justify-between flex-col relative flex-shrink-0 basis-32 ml-0 m-2 rounded-lg overflow-auto shadow-lg shadow-gray-950">
                    {item.poster_path ? 
                      <img className="max-h-44 object-cover" src={`https://image.tmdb.org/t/p/w154${item.poster_path}`}/> : 
                      <img className="max-h-44 object-cover" src='/no-poster.png' />}
                    <div className="overflow-hidden text-ellipsis whitespace-nowrap mt-3 p-1">{item.title}</div>
                    <div className="flex justify-between">
                      <div className="p-1 flex items-center" style={{fontSize: '0.75rem'}}>{dayjs(item.release_date).format("MMM D, YYYY")}</div>
                      <div className="flex items-center p-1"><FontAwesomeIcon icon={faStar} size="xs" style={{color: "#f7be38", fontSize: '0.75rem'}} />{Math.round(item.vote_average * 10)/10}</div>
                    </div>
                  </div>)
                })}
              </div>
            </div> :
            <span>Results not found!</span>}
        </div>
      }
    </div>
  )
}

export default SearchResult